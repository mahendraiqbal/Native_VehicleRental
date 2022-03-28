import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
  ToastAndroid,
  PermissionsAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {RadioButton} from 'react-native-paper';
import styles from '../../styles/Profile';
import {userProfile, updateProfile} from '../../modules/users';
import {useSelector, useDispatch} from 'react-redux';
import ava from '../../assets/man.png';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';
import RNFetchBlob from 'rn-fetch-blob';
// import {Radio, Stack} from 'native-base';

const UpdateProfile = ({navigation}) => {
  const [userData, setUserData] = useState([]);
  const [image, setImage] = useState(null);
  const [name, setName] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [contact, setContact] = useState(userData.contact);
  const [dob, setDob] = useState(userData.DoB);
  const [address, setAddress] = useState(userData.address);
  const [gender, setGender] = useState('female');
  const [male, setMale] = useState(false);
  const [Female, setFemale] = useState(false);

  // console.log('image', image);

  const token = useSelector(state => state.auth.userData.token);
  const user = useSelector(state => state.auth.userData);
  const dispatch = useDispatch();
  // console.log('cek user lagi', user);

  const openPhoto = () => {
    const options = {
      // maxHeight: 200,
      // maxWidth: 200,
      // selectionLimit: 1,
      quality: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchCamera(options, res => {
      if (res.didCancel) {
        console.log('User Cancel');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImage(data);
        console.log('data', data);
      }
    });
  };

  const openGallery = () => {
    const options = {
      // maxHeight: 200,
      // maxWidth: 200,
      // selectionLimit: 1,
      quality: 1,
      mediaType: 'photo',
      includeBase64: false,
    };
    launchImageLibrary(options, res => {
      if (res.didCancel) {
        console.log('User Cancel');
      } else if (res.errorCode) {
        console.log(res.errorMessage);
      } else {
        const data = res.assets[0];
        setImage(data);
        console.log('data', data);
      }
    });
  };

  useEffect(() => {
    userProfile(token)
      .then(res => {
        // console.log('result', res.data.result[0].DoB);
        setDob(res.data.result[0].DoB);
        setUserData({...res.data.result[0]});
      })
      .catch(err => console.log(err));
  }, [token]);

  const handleUpload = () => {
    console.log('mana token', token);
    RNFetchBlob.fetch(
      'PATCH',
      // 'https://vehicle-rental-aws.herokuapp.com/vehicles',
      `${process.env.API_REACT_NATIVE}users`,
      {
        'x-access-token': token,
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'image',
          type: image.type,
          filename: image.fileName,
          data: RNFetchBlob.wrap(image.uri),
        },
        {name: 'name', data: name},
        {name: 'email', data: email},
        {name: 'contact', data: contact},
        {name: 'DoB', data: dob},
        {name: 'address', data: address},
        {name: 'gender', data: gender},
      ],
    )
      .then(res => {
        console.log(res);
        navigation.navigate('Profile');
        ToastAndroid.show('Update Success', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('Update Failed', ToastAndroid.SHORT);
      });
  };
  const genderMale = () => {
    setGender('male');
    setMale(true);
    setFemale(false);
  };

  const genderFemale = () => {
    setGender('female');
    setFemale(true);
    setMale(false);
  };

  // console.log('ini apa', dob);
  // const [dateBirth] = dob.toISOString().split('T');
  // console.log(dateBirth);
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image
          source={require('../../assets/back.png')}
          style={styles.iconButton}
        />
        <Text style={styles.titleUpdate}>Update Profile</Text>
      </View>
      <View style={styles.imageUpdate}>
        {image != null && (
          <Image source={{uri: image.uri}} style={styles.imageProfile} />
        )}
        <View>
          <TouchableOpacity style={styles.buttonTake} onPress={openPhoto}>
            <Text style={styles.textTake}>Take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBrowse} onPress={openGallery}>
            <Text style={styles.textBrowse}>Browse from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Name :</Text>
      <TextInput
        defaultValue={userData.name}
        placeholder="Name"
        onChangeText={text => setName(text)}
      />
      <RadioButton.Group
        onValueChange={newValue => setGender(newValue)}
        value={gender}>
        <View style={styles.buttonRadio}>
          <View style={styles.radioCheck}>
            <RadioButton value="female" onValueChange={() => genderFemale} />
            <Text>Female</Text>
          </View>
          <View style={styles.radioCheck}>
            <RadioButton value="male" onValueChange={() => genderMale} />
            <Text>Male</Text>
          </View>
        </View>
      </RadioButton.Group>
      <Text>Email Address :</Text>
      <TextInput
        defaultValue={userData.email}
        placeholder="Email Address"
        onChangeText={text => setEmail(text)}
      />
      <Text>Phone Number :</Text>
      <TextInput
        defaultValue={userData.contact}
        placeholder="Phone Number"
        onChangeText={text => setContact(text)}
      />
      <Text>Date of Birth :</Text>
      <TextInput
        defaultValue={userData.DoB}
        onChangeText={text => setDob(text)}
      />
      <Text>Delivery Address :</Text>
      <TextInput
        defaultValue={userData.address}
        placeholder="Address"
        onChangeText={text => setAddress(text)}
      />
      <TouchableOpacity style={styles.btnLgt}>
        <Text style={styles.logout} onPress={handleUpload}>
          Save Change
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpdateProfile;
