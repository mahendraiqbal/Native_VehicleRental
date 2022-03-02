import {ScrollView, View, Text, Image} from 'react-native';
import React from 'react';
import styles from '../../styles/Category';

// import {allVehicle} from '../../modules/vehicles';

const Category = () => {
  return (
    <ScrollView>
      <View style={styles.wrapper}>
        <Image source={require('../../assets/back.png')} style={styles.back} />
        <Text style={styles.title}>Vehicle Type</Text>
      </View>
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
    </ScrollView>
  );
};

export default Category;
