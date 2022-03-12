import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getVehicleById} from '../../modules/vehicles';

import styles from '../../styles/Payment';

const FinishPayment = ({navigation, route}) => {
  console.log('route last', route);
  const [vehicles, setVehicles] = useState([]);

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
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>See history</Text>
      </View>
      <Text>Payment Success!</Text>
      <View style={styles.imageVehicles}>
        <Image
          source={require('../../assets/defaultVehicle.jpg')}
          style={styles.imgVehicle}
        />
      </View>
      <Text>
        {route.params.counter} {vehicles.brand}
      </Text>
      <Text>{route.params.payment}</Text>
      <Text>{route.params.selectedDay} days</Text>
      <Text>Jan 18 2021 to Jan 22 2021</Text>
      <Text>ID : 01</Text>
      <Text>
        {route.params.name}({route.params.email})
      </Text>
      <Text>081231098723(active)</Text>
      <Text>Jakarta, Indonesia</Text>
      <TouchableOpacity
        style={styles.buttonTotal}
        onPress={() => {
          navigation.navigate('BotTab');
        }}>
        <Text style={styles.textPrice}>
          Total: {vehicles.price * route.params.counter}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FinishPayment;
