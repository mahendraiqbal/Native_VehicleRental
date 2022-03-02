import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';

import styles from '../../styles/Profile';

const Profile = ({navigation}) => {
  // console.log(state)
  return (
    <>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/man.png')}
            style={styles.imageProfile}
          />
          <Text style={styles.nameUser}>NAME</Text>
        </View>
        <TouchableOpacity style={styles.btnEdit}>
          <Text style={styles.menu}>Your favourites</Text>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Text style={styles.menu}>FAQ</Text>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.btnEdit}>
          <Text style={styles.menu}>Help</Text>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => {
            navigation.navigate('UpdateProfile');
          }}>
          <Text style={styles.menu}>Update Profile</Text>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <View>
          <TouchableOpacity style={styles.btnLgt}>
            <Text style={styles.logout}>Log out</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
