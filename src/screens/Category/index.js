import {ScrollView, View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Category';

import {getVehicleType} from '../../modules/vehicles';

const Category = ({navigation, route}) => {
  const [vehicle, setVehicle] = useState([]);

  const getVehicle = () => {
    const type = route.params.type;
    getVehicleType(type)
      .then(res => {
        console.log('cek vehicle', res.data.result.data);
        setVehicle([...vehicle, ...res.data.result.data]);
      })
      .catch(err => console.log(err));
  };

  useEffect(() => {
    getVehicle();
  }, []);
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Image source={require('../../assets/back.png')} style={styles.back} />
        <Text style={styles.title}>Vehicle Type</Text>
      </View>
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Detail');
        }}>
        <View style={styles.infoVehicle}>
          <Image
            source={require('../../assets/defaultVehicle.jpg')}
            style={styles.image}
          />
          <View style={styles.detailVehicle}>
            <Text style={styles.name}>Name Vehicle</Text>
            <Text style={styles.max}>Max for 2 person</Text>
            <Text style={styles.map}>2.1 km from your location</Text>
            <Text style={styles.stat}>Available</Text>
            <Text style={styles.price}>Rp. 120.000/day</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Category;
