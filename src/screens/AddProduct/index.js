import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  ToastAndroid,
} from 'react-native';
import React, {useState} from 'react';
import {Picker} from '@react-native-picker/picker';
import {launchImageLibrary} from 'react-native-image-picker';
import {postVehicle} from '../../modules/vehicles';
import {useSelector} from 'react-redux';
import RNFetchBlob from 'rn-fetch-blob';

import styles from '../../styles/AddProduct';

const AddProduct = ({navigation}) => {
  const [qty, setQty] = useState(1);
  const [images, setImages] = useState('');
  const [name, setName] = useState();
  const [price, setPrice] = useState();
  const [description, setDescription] = useState();
  const [city, setCity] = useState();
  const [type, setType] = useState();

  const token = useSelector(state => state.auth.userData.token);

  const addCounter = () => {
    const newCounter = qty + 1;
    setQty(newCounter);
  };
  const subCounter = () => {
    const newCounter = qty - 1 < 0 ? 0 : qty - 1;
    setQty(newCounter);
  };

  const openGallery = () => {
    launchImageLibrary({noData: true}, response => {
      console.log(response);
      if (response.didCancel) {
        return;
      }
      if (response) {
        setImages(response.assets[0]);
      }
    });
  };

  const handleUpload = () => {
    console.log('mana token', token);
    RNFetchBlob.fetch(
      'POST',
      // 'https://vehicle-rental-aws.herokuapp.com/vehicles',
      `${process.env.API_REACT_NATIVE}vehicles`,
      {
        'x-access-token': token,
        'Content-Type': 'multipart/form-data',
      },
      [
        {
          name: 'images',
          type: images.type,
          filename: images.fileName,
          data: RNFetchBlob.wrap(images.uri),
        },
        {name: 'name', data: name},
        {name: 'type', data: type},
        {name: 'description', data: description},
        {name: 'city', data: city},
        {name: 'price', data: price},
        {name: 'qty', data: JSON.stringify(qty)},
      ],
    )
      .then(res => {
        console.log(res);
        navigation.navigate('Home');
        ToastAndroid.show('Success Add Vehicle', ToastAndroid.SHORT);
      })
      .catch(err => {
        console.log(err);
        ToastAndroid.show('Fail Add Vehicle', ToastAndroid.SHORT);
      });
  };

  return (
    <ScrollView>
      <View style={styles.titleWrapper}>
        <Image source={require('../../assets/back.png')} style={styles.icon} />
        <Text style={styles.title}>Add new item</Text>
        <TouchableOpacity style={styles.cancel}>
          <Text>Cancel</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.imageUpdate}>
        {images != null && (
          <Image source={{uri: images.uri}} style={styles.imageProfile} />
        )}
        <View>
          <TouchableOpacity style={styles.buttonBrowse} onPress={openGallery}>
            <Text style={styles.textBrowse}>Browse from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TextInput
        style={styles.inputProduct}
        placeholder="Type product name min. 30 characters"
        onChangeText={text => setName(text)}
      />
      <TextInput
        style={styles.inputPrice}
        placeholder="Type product price"
        onChangeText={text => setPrice(text)}
      />
      <Text style={styles.inputText}>Description</Text>
      <TextInput
        style={styles.inputDescribe}
        placeholder="Describe your product min. 150 characters"
        onChangeText={text => setDescription(text)}
      />
      <View>
        <Text style={styles.inputText}>Location</Text>
        <View style={styles.selectWrapper}>
          <Picker
            selectedValue={city}
            onValueChange={(itemValue, itemIndex) => {
              setCity(itemValue);
            }}>
            <Picker.Item label="Choose Location" value={'Choose Location'} />
            <Picker.Item label="Temanggung" value={'Temanggung'} />
            <Picker.Item label="Magelang" value={'Magelang'} />
            <Picker.Item label="Parakan" value={'Parakan'} />
            <Picker.Item label="Klaten" value={'Klaten'} />
            <Picker.Item label="Yogyakarta" value={'Yogyakarta'} />
            <Picker.Item label="Wonosobo" value={'Wonosobo'} />
            <Picker.Item label="+ Add Category" value={'AddCity'} />
          </Picker>
        </View>
      </View>

      <View>
        <Text style={styles.inputText}>Add to</Text>
        <View style={styles.selectWrapper}>
          <Picker
            selectedValue={type}
            onValueChange={(itemValue, itemIndex) => {
              setType(itemValue);
            }}>
            <Picker.Item label="Select Category" value={'Select Category'} />
            <Picker.Item label="Car" value={'Car'} />
            <Picker.Item label="Bike" value={'Bicycle'} />
            <Picker.Item label="Motorbike" value={'Motorbike'} />
            <Picker.Item label="HomePage (Popular)" value={'Popular'} />
            <Picker.Item label="+ Add Category" value={'AddVehicle'} />
          </Picker>
        </View>
      </View>

      <View style={styles.counterWrapper}>
        <View>
          <Text style={styles.inputStock}>Stock :</Text>
        </View>
        <View style={styles.btnCounterWrapper}>
          <TouchableOpacity onPress={subCounter}>
            <Text style={styles.counter}>-</Text>
          </TouchableOpacity>
          <Text style={styles.textCounter}>{qty}</Text>
          <TouchableOpacity onPress={addCounter}>
            <Text style={styles.counter}>+</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.textLogin} onPress={handleUpload}>
          Save Product
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default AddProduct;
