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
  const [images, setImages] = useState(
    require('../../assets/defaultVehicles.png'),
  );

  const day = route.params.selectedDay;
  const [withoutTime] = route.params.date.toISOString().split('T');

  useEffect(() => {
    userProfile(token)
      .then(res => {
        // console.log('result cek cek', res.data.result[0]);
        // console.log(res.data.result[0].images);

        setUserData({...res.data.result[0]});
        // console.log('image', image[0]);
      })
      .catch(err => console.log(err));
  }, [token]);

  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        // console.log('result vehicle', res.data.result);
        // console.log(res.data.result[0].images);
        const image = JSON.parse(res.data.result[0].images);
        setVehicles(res.data.result[0]);
        setImages(image);
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
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Payment');
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
        source={require('../../assets/SecondStepper.png')}
        style={styles.stepper}
      />
      <View style={styles.imageWrapper}>
        <Image
          source={{
            uri: `${process.env.API_REACT_NATIVE}images/vehicle/${images[0]}`,
          }}
          style={styles.imageVehicle}
        />
      </View>
      <Text style={styles.info}>
        {route.params.counter} {vehicles.brand}
      </Text>
      <Text style={styles.info}>{route.params.payment}</Text>
      <Text style={styles.info}>{day} days</Text>
      <Text style={styles.info}>{withoutTime} to Jan 22 2021</Text>
      <View style={styles.pricing}>
        <Text style={styles.priceVehicle}>Rp. {vehicles.price}</Text>
        <Image
          source={require('../../assets/Pricing.png')}
          style={styles.iconInfo}
        />
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
