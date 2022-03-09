import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import styles from '../../styles/Profile';

const UpdateProfile = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Update Profile</Text>
      </View>
      <View style={styles.imageUpdate}>
        <Image
          source={require('../../assets/man.png')}
          style={styles.imageProfile}
        />
        <View>
          <TouchableOpacity style={styles.buttonTake}>
            <Text style={styles.textTake}>Take a picture</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.buttonBrowse}>
            <Text style={styles.textBrowse}>Browse from gallery</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text>Name :</Text>
      <TextInput defaultValue="Name" />
      <Text>Email Address :</Text>
      <TextInput defaultValue="email@mail" />
      <Text>Phone Number :</Text>
      <TextInput defaultValue="0811231312" />
      <Text>Delivery Address :</Text>
      <TextInput defaultValue="Kyai Subkhi" />
      <TouchableOpacity style={styles.btnLgt}>
        <Text style={styles.logout}>Save Change</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default UpdateProfile;
