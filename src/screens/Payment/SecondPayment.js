import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import styles from '../../styles/Payment';

import {getVehicleById} from '../../modules/vehicles';
import {userProfile} from '../../modules/users';

const SecondPayment = ({navigation, route}) => {
  console.log('route second', route);
  // console.log('cekcek', ...route.params);
  const token = useSelector(state => state.auth.userData.token);
  // const idUser = useSelector(state => state.auth.userData.id);
  // console.log(token);
  // console.log(idUser);
  const [vehicles, setVehicles] = useState([]);
  const [userData, setUserData] = useState([]);

  const day = route.params.selectedDay;

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
        console.log(res.data.result[0].images);
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
        source={require('../../assets/SecondStepper.png')}
        style={styles.stepper}
      />
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/defaultVehicle.png')}
          style={styles.imageVehicle}
        />
      </View>
      <Text>
        {route.params.counter} {vehicles.brand}
      </Text>
      <Text>{route.params.payment}</Text>
      <Text>{day} days</Text>
      <Text>Jan 18 2021 to Jan 22 2021</Text>
      <View style={styles.pricing}>
        <Text>Rp. {vehicles.price}</Text>
        <Image source={require('../../assets/Pricing.png')} />
      </View>
      <TouchableOpacity
        style={styles.buttonSee}
        onPress={() => {
          const param = {
            ...route.params,
          };
          navigation.navigate('LastPayment', param);
        }}>
        <Text style={styles.textSee}>Get Payment Code</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SecondPayment;
