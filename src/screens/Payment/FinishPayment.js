import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import styles from '../../styles/Payment';

const FinishPayment = ({navigation}) => {
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
      <Text>2 Vespa</Text>
      <Text>Prepayment (no taax)</Text>
      <Text>4 days</Text>
      <Text>Jan 18 2021 to Jan 22 2021</Text>
      <Text>ID : 01</Text>
      <Text>Jessica(email)</Text>
      <Text>081231098723(active)</Text>
      <Text>Jakarta, Indonesia</Text>
      <TouchableOpacity
        style={styles.buttonTotal}
        onPress={() => {
          navigation.navigate('BotTab');
        }}>
        <Text style={styles.textPrice}>Total: 245.000</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default FinishPayment;
