import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Detail';

import {getVehicleById} from '../../modules/vehicles';

const defaultCar = require('../../assets/defaultVehicle.jpg');

const DetailVehicle = ({navigation, route}) => {
  const [counter, setCounter] = useState(1);
  const [vehicle, setVehicle] = useState([]);
  const [images, setImages] = useState(
    require('../../assets/defaultVehicle.jpg'),
  );

  const addCounter = () => {
    const newCounter = counter + 1;
    setCounter(newCounter);
  };
  const subCounter = () => {
    const newCounter = counter - 1 < 0 ? 0 : counter - 1;
    setCounter(newCounter);
  };
  // console.log('route', route.params.id);
  const getDetail = () => {
    const id = route.params.id;

    getVehicleById(id)
      .then(res => {
        console.log('result vehicle', res.data.result);
        const image = JSON.parse(res.data.result[0].images);
        setImages(image);
        setVehicle(res.data.result[0]);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <View>
      <ImageBackground source={defaultCar} style={styles.jumbotron}>
        <Image source={require('../../assets/back.png')} style={styles.arrow} />
        <Text>4.5</Text>
        <Image />
      </ImageBackground>
      <View style={styles.title}>
        <Text style={styles.name}>{vehicle.name}</Text>
        <Image source={require('../../assets/chat.png')} style={styles.chat} />
      </View>
      <Text style={styles.price}>{vehicle.price}</Text>
      <Text style={styles.max}>Max for {vehicle.capacity} Person</Text>
      <Text style={styles.pay}>No Prepayment</Text>
      <Text style={styles.stat}>Available</Text>
      <View style={styles.title}>
        <Image source={require('../../assets/run.png')} />
        <Text style={styles.map}>{vehicle.city}</Text>
      </View>
      <View style={styles.title}>
        <Image source={require('../../assets/map.png')} />
        <Text style={styles.map}>3.2 miles from your location</Text>
      </View>
      <View style={styles.counterWrapper}>
        <View>
          <Text style={styles.selectBike}>Select Bikes :</Text>
        </View>
        <View style={styles.btnCounterWrapper}>
          <Text style={styles.counter}>{subCounter}</Text>
          <Text style={styles.textCounter}>{counter}</Text>
          <Text style={styles.counter}>{addCounter}</Text>
        </View>
      </View>
      <View style={styles.titleDate}>
        <Text style={styles.date}>Select Date</Text>
      </View>
      <TouchableOpacity style={styles.login}>
        <Text
          style={styles.textLogin}
          onPress={() => {
            navigation.navigate('Payment');
          }}>
          Reservation
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default DetailVehicle;
