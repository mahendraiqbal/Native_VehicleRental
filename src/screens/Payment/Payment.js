/* eslint-disable react-native/no-inline-styles */
import {
  ScrollView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Picker} from '@react-native-picker/picker';

import styles from '../../styles/Payment';

const Payment = ({navigation, route}) => {
  console.log(route);
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Payment</Text>
      </View>
      <Image
        source={require('../../assets/Stepper.png')}
        style={styles.stepper}
      />
      <View style={styles.wrapInfo}>
        <TextInput placeholder="ID card number" style={styles.cardNumber} />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput placeholder="Name" style={styles.cardNumber} />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput placeholder="Last Name" style={styles.cardNumber} />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput
          placeholder="Mobile phone (must be active)"
          style={styles.cardNumber}
        />
      </View>
      <View style={styles.wrapInfo}>
        <TextInput placeholder="Email address" style={styles.cardNumber} />
      </View>
      {/* <TouchableOpacity style={styles.buttonOrder}>
        <Text style={styles.textOrder}>Order Vehicle</Text>
      </TouchableOpacity> */}
      <View style={styles.selectWrapper}>
        <Picker style={{color: '#999999'}}>
          <Picker.Item
            label="Prepayment (No Tax)"
            value={'Prepayment (No Tax)'}
          />
          <Picker.Item
            label="Pay At The End (Include Tax)"
            value={'Pay At The End (Include Tax)'}
          />
          <Picker.Item
            label="Partial Payment (Include Tax)"
            value={'Partial Payment (Include Tax)'}
          />
        </Picker>
      </View>
      <TouchableOpacity
        style={styles.buttonSee}
        onPress={() => {
          navigation.navigate('SecondPayment');
        }}>
        <Text style={styles.textSee}>See Order Details</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default Payment;
