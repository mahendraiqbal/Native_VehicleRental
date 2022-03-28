import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  Image,
  Touchable,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {getVehicleById} from '../../modules/vehicles';
import {
  sendLocalNotification,
  sendScheduleNotificationSchedule,
  cancelNotification,
} from '../../modules/notification';

import styles from '../../styles/Payment';

const FinishPayment = ({navigation, route}) => {
  console.log('route last', route);
  const [vehicles, setVehicles] = useState([]);
  const [images, setImages] = useState(
    require('../../assets/defaultVehicles.png'),
  );

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

  const price = vehicles.price * route.params.counter;
  console.log(price);

  useEffect(() => {
    getDetail();
  }, []);
  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('LastPayment');
        }}>
        <View style={styles.title}>
          <Image
            source={require('../../assets/back.png')}
            style={styles.iconBack}
          />
          <Text style={styles.titlePayment}>See history</Text>
        </View>
      </TouchableOpacity>
      <Text style={styles.successPayment}>Payment Success!</Text>
      <View style={styles.imageVehicles}>
        <Image
          source={{
            uri: `${process.env.API_REACT_NATIVE}images/vehicle/${images[0]}`,
          }}
          style={styles.imgVehicle}
        />
      </View>
      <Text style={styles.info}>
        {route.params.counter} {vehicles.brand}
      </Text>
      <Text style={styles.info}>{route.params.payment}</Text>
      <Text style={styles.info}>{route.params.selectedDay} days</Text>
      <Text style={styles.info}>Jan 18 2021 to Jan 22 2021</Text>
      <Text style={styles.info}>ID : 01</Text>
      <Text style={styles.info}>
        {route.params.name}({route.params.email})
      </Text>
      <Text style={styles.info}>081231098723(active)</Text>
      <Text style={styles.info}>Jakarta, Indonesia</Text>
      <TouchableOpacity
        style={styles.buttonTotal}
        onPress={() => {
          navigation.navigate('BotTab');
          sendLocalNotification({
            title: 'Vehicle Rental',
            message: 'Payment Success',
          });
        }}>
        <Text style={styles.textPrice}>
          Total: {vehicles.price * route.params.counter}
        </Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FinishPayment;
