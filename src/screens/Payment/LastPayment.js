import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getVehicleById} from '../../modules/vehicles';
import {payment} from '../../modules/transcations';

import styles from '../../styles/Payment';
import {useSelector} from 'react-redux';

const LastPayment = ({navigation, route}) => {
  console.log('route 3', route);
  // console.log('date', route.params.date);
  const token = useSelector(state => state.auth.userData.token);
  // console.log('masuk token', token);
  const nameUser = route.params.name;
  const emailUser = route.params.email;
  const idUser = useSelector(state => state.auth.userData.id);
  // console.log(idUser);

  // const a = route.params.date.toDateString();

  const [withoutTime] = route.params.date.toISOString().split('T');
  // console.log(withoutTime);
  const [vehicles, setVehicles] = useState([]);
  const [code, setCode] = useState(null);

  const price = route.params.counter * vehicles.price;

  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        // console.log('result vehicle', res.data.result);
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

  useEffect(() => {
    const length = 10;
    var randomCode =
      'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    var result = '';
    for (let i = 0; i < length; i++) {
      result += randomCode.charAt(
        Math.floor(Math.random() * randomCode.length),
      );
    }
    setCode(result);
  }, []);

  const submitPayment = () => {
    const body = {
      quantity: route.params.counter,
      code: code,
      payment_methods: route.params.payment,
      // start_date: route.params.date,
      user_id: idUser,
      vehicle_id: route.params.id,
    };
    console.log('isi body', body);

    payment(body)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  };
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('SecondPayment');
        }}>
        <View style={styles.title}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.iconBack}
          />
          <Text style={styles.titlePayment}>Payment</Text>
        </View>
      </TouchableOpacity>
      <Image
        source={require('../../assets/LastStepper.png')}
        style={styles.stepper}
      />
      <Text style={styles.codePayment}>Payment Code</Text>
      <Text style={styles.codeText}>67865758</Text>
      <Text style={styles.infoCode}>
        Insert your payment code while you transfer booking order Pay before :{' '}
      </Text>
      <Text style={styles.timer}>1:59:34</Text>
      <Text style={styles.infoBank}>Bank account information :</Text>
      <Text style={styles.bankCode}>0200-12312-223-4</Text>
      <Text style={styles.brand}>{vehicles.brand}</Text>
      <Text style={styles.brand}>Booking Code : {code}</Text>
      <Text style={styles.useBooking}>
        Use booking code to pick up your vehicle
      </Text>
      <TouchableOpacity style={styles.copy}>
        <Text style={styles.textCopy}>Copy Payment * Booking Code</Text>
      </TouchableOpacity>
      <Text style={styles.info}>Order details</Text>
      <Text style={styles.info}>
        {route.params.counter} {vehicles.brand}
      </Text>
      <Text style={styles.info}>{route.params.payment}</Text>
      <Text style={styles.info}>{route.params.selectedDay} days</Text>
      <Text style={styles.info}>{withoutTime} to Jan 22 2021</Text>
      <View style={styles.pricing}>
        <Text style={styles.info}>Rp. {price}</Text>
        <Image
          source={require('../../assets/Pricing.png')}
          style={styles.iconInfoo}
        />
      </View>
      <TouchableOpacity
        style={styles.buttonFinish}
        onPress={() => {
          const param = {
            ...route.params,
          };
          console.log('cek param', param);
          navigation.navigate('FinishPayment', param);
          submitPayment();
        }}>
        <Text style={styles.textFinish}>Finish Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LastPayment;
