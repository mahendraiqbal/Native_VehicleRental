/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';
import {userProfile} from '../../modules/users';
import {getVehicleById} from '../../modules/vehicles';

import styles from '../../styles/Payment';
import {useState, useEffect} from 'react';
import {useSelector} from 'react-redux';

const Payment = ({navigation, route}) => {
  console.log(route);
  const token = useSelector(state => state.auth.userData.token);
  // const idUser = useSelector(state => state.auth.userData.id);
  // console.log(token);
  // console.log(idUser);
  const [vehicles, setVehicles] = useState([]);
  const [userData, setUserData] = useState([]);
  const [idCard, setIdCard] = useState(0);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [payment, setPayment] = useState('Prepayment (No Tax)');
  // const [withoutTime] = route.params.date.toISOString().split('T');
  // console.log(withoutTime);

  useEffect(() => {
    userProfile(token)
      .then(res => {
        // console.log('result', res.data.result[0]);
        setUserData({...res.data.result[0]});
      })
      .catch(err => console.log(err));
  }, [token]);

  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        console.log('result vehicle', res.data.result);
        // console.log(res.data.result[0].images);
        setVehicles(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Payment</Text>
      </View>
      <Image
        source={require('../../assets/Stepper.png')}
        style={styles.stepper}
      />
      <View style={styles.wrapInfo}>
        <TextInput
          placeholder="ID card number"
          style={styles.cardNumber}
          onChangeText={text => setIdCard(text)}
        />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput
          // placeholder="Name"
          defaultValue={userData.name}
          style={styles.cardNumber}
          onChangeText={text => setName(text)}
        />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput
          placeholder="Mobile phone (must be active)"
          defaultValue={userData.contact !== null ? userData.contact : '---'}
          style={styles.cardNumber}
          onChangeText={text => setContact(text)}
        />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput
          // placeholder="Email address"
          defaultValue={userData.email !== null ? userData.email : '---'}
          style={styles.cardNumber}
          onChangeText={text => setEmail(text)}
        />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput
          // placeholder="Email address"
          defaultValue={vehicles.city !== null ? vehicles.city : '---'}
          style={styles.cardNumber}
          onChangeText={text => setLocation(text)}
        />
      </View>
      {/* <TouchableOpacity style={styles.buttonOrder}>
        <Text style={styles.textOrder}>Order Vehicle</Text>
      </TouchableOpacity> */}
      <View style={styles.selectWrapper}>
        <Picker
          style={{color: '#999999'}}
          selectedValue={payment}
          onValueChange={val => setPayment(val)}>
          <Picker.Item
            label="Prepayment (No Tax)"
            value={'Prepayment (No Tax)'}
          />
          <Picker.Item
            label="Pay At The End (Include Tax)"
            value={'Pay At The End (Include Tax)'}
          />
          <Picker.Item
            label="Partial Payment (Include Tax)"
            value={'Partial Payment (Include Tax)'}
          />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.buttonSee}
        onPress={() => {
          const param = {
            ...route.params,
            id: vehicles.id,
            name: userData.name,
            contact: contact,
            email: userData.email,
            location: vehicles.city,
            payment: payment,
          };
          navigation.navigate('SecondPayment', param);
        }}>
        <Text style={styles.textSee}>See Order Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Payment;
