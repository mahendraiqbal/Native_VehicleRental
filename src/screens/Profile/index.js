/* eslint-disable react-native/no-inline-styles */
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  Modal,
} from 'react-native';
import React, {useState, useEffect} from 'react';
// import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector, useDispatch} from 'react-redux';
import {userProfile} from '../../modules/users';
import {logoutAction} from '../../redux/actions/auth';
import {logout} from '../../modules/auth';
import {useFocusEffect} from '@react-navigation/native';

import ava from '../../assets/man.png';
import styles from '../../styles/Profile';

const Profile = ({navigation}) => {
  const hayo = useSelector(state => state);
  console.log('userData', hayo);
  // console.log(state);
  const [userData, setUserData] = useState([]);
  const [photo, setPhoto] = useState(ava);
  const [isShow, setShow] = useState(false);
  const token = useSelector(state => state.auth.userData.token);
  // console.log('cek token', token);
  const dispatch = useDispatch();
  // console.log('cek user lagi', token);
  const image = userData.image;
  console.log('image', image);

  // useEffect(() => {
  //   userProfile(token)
  //     .then(res => {
  //       console.log('resultnya dong', res.data.result[0]);
  //       setUserData({...res.data.result[0]});
  //     })
  //     .catch(err => console.log(err));
  // }, [token]);

  useFocusEffect(
    React.useCallback(() => {
      userProfile(token)
        .then(res => {
          console.log('ini apa', res);
          setUserData({...res.data.result[0]});
        })
        .catch(err => console.log(err));
    }, [token]),
  );

  const onLogout = () => {
    console.log('cek token', token);
    logout(token)
      .then(res => {
        dispatch(logoutAction());
        setShow(!isShow);
        navigation.navigate('Login');
      })
      .catch(err => {
        console.log(err);
      });
  };

  const showModal = () => {
    setShow(!isShow);
  };

  return (
    <>
      <ScrollView>
        <View style={styles.imageWrapper}>
          {image !== null ? (
            <Image
              style={styles.imageProfile}
              source={{
                uri: `${process.env.API_REACT_NATIVE}images/profile/${image}`,
              }}
            />
          ) : (
            <Image source={ava} style={styles.imageProfile} />
          )}
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
            <Text style={styles.logout} onPress={() => showModal()}>
              Log out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Modal
        transparent
        visible={isShow}
        onRequestClose={() => setShow(!isShow)}>
        <View style={styles.modal}>
          <View style={styles.content}>
            <Text style={styles.modalTxt}>Are you sure want to logout?</Text>
            <View
              // eslint-disable-next-line react-native/no-inline-styles
              style={{
                display: 'flex',
                flexDirection: 'row',
                position: 'absolute',
                bottom: '0%',
                width: '100%',
                height: '40%',
                justifyContent: 'space-around',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  ...styles.modalBtn,
                  backgroundColor: '#393939',
                }}
                onPress={() => onLogout()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#FFCD61',
                  }}>
                  Yes
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  ...styles.modalBtn,
                  backgroundColor: '#FFCD61',
                }}
                onPress={() => showModal()}>
                <Text
                  style={{
                    fontSize: 18,
                    fontWeight: '700',
                    color: '#393939',
                  }}>
                  No
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </>
  );
};

export default Profile;
