import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {userProfile} from '../../modules/users';
import {logoutAction} from '../../redux/actions/auth';
import {logout} from '../../modules/auth';

import styles from '../../styles/Profile';

const Profile = ({navigation}) => {
  // console.log(state)
  const [userData, setUserData] = useState([]);
  const token = useSelector(state => state.auth.userData.token);
  const dispatch = useDispatch();
  // console.log('cek user lagi', token);

  useEffect(() => {
    userProfile(token)
      .then(res => {
        // console.log('result', res.data.result[0]);
        setUserData({...res.data.result[0]});
      })
      .catch(err => console.log(err));
  }, [token]);

  const onLogout = () => {
    console.log('cek token', token);
    logout(token)
      .then(res => {
        dispatch(logoutAction());
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <ScrollView>
        <View style={styles.imageWrapper}>
          <Image
            source={require('../../assets/man.png')}
            style={styles.imageProfile}
          />
          <Text style={styles.nameUser}>{userData.name}</Text>
        </View>
        <TouchableOpacity style={styles.btnEdit}>
          <Text style={styles.menu}>Your favourites</Text>
          <Image
            source={require('../../assets/arrow-left.png')}
            style={styles.arrowIcon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btnEdit}
          onPress={() => {
            navigation.navigate('History');
          }}>
          <Text style={styles.menu}>History</Text>
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
            <Text style={styles.logout} onPress={onLogout}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

export default Profile;
