import {
  ScrollView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from '../../styles/Category';

import {getVehicleType} from '../../modules/vehicles';

const Category = ({navigation, route}) => {
  console.log(route.params.type);
  const [vehicle, setVehicle] = useState([]);
  console.log('vehicle', vehicle);

  const getVehicle = () => {
    const type = route.params.type;
    getVehicleType(type)
      .then(res => {
        // console.log('cek vehicle', res.data.result.data);
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
      <FlatList
        data={vehicle}
        showsVerticalScrollIndicator={false}
        renderItem={({item: vehicles}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                const param = {
                  id: vehicles.id,
                };
                navigation.navigate('Detail', param);
              }}>
              <View style={styles.infoVehicle}>
                <Image
                  source={require('../../assets/defaultVehicle.jpg')}
                  style={styles.image}
                />
                <View style={styles.detailVehicle}>
                  <Text style={styles.name}>{vehicles.name}</Text>
                  <Text style={styles.max}>
                    Max for {vehicles.capacity} person
                  </Text>
                  <Text style={styles.map}>2.1 km from your location</Text>
                  <Text style={styles.stat}>Available</Text>
                  <Text style={styles.price}>Rp. {vehicles.price}/day</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={vehicles => vehicle.id}
      />
    </ScrollView>
  );
};

export default Category;
