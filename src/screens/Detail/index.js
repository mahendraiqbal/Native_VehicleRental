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
const defaultCar = require('../../assets/defaultVehicle.jpg');

const DetailVehicle = ({navigation, route}) => {
  return (
    <ScrollView>
      <ImageBackground source={defaultCar} style={styles.jumbotron}>
        <Image source={require('../../assets/back.png')} style={styles.arrow} />
        <Text>4.5</Text>
        <Image />
      </ImageBackground>
      <View style={styles.title}>
        <Text style={styles.name}>Vehicle Name</Text>
        <Image source={require('../../assets/chat.png')} style={styles.chat} />
      </View>
      <Text style={styles.price}>Price</Text>
      <Text style={styles.max}>Max</Text>
      <Text style={styles.pay}>No Prepayment</Text>
      <Text style={styles.stat}>Available</Text>
      <View style={styles.title}>
        <Image source={require('../../assets/run.png')} />
        <Text style={styles.map}>Jalan Malioboro, No. 21, Yogyakarta</Text>
      </View>
      <View style={styles.title}>
        <Image source={require('../../assets/map.png')} />
        <Text style={styles.map}>3.2 miles from your location</Text>
      </View>
      <View>
        <Text style={styles.selectBike}>Select Bikes</Text>
      </View>
      <View style={styles.titleDate}>
        <Text style={styles.date}>Select Date</Text>
      </View>
      <TouchableOpacity style={styles.login}>
        <Text style={styles.textLogin}>Reservation</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default DetailVehicle;
