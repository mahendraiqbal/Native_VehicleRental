import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native';
import React from 'react';

import styles from '../../styles/Payment';

const LastPayment = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Payment</Text>
      </View>
      <Image
        source={require('../../assets/LastStepper.png')}
        style={styles.stepper}
      />
      <Text>Payment Code</Text>
      <Text>67865758</Text>
      <Text>
        Insert your payment code while you transfer booking order Pay before :{' '}
      </Text>
      <Text>1:59:34</Text>
      <Text>Bank account information</Text>
      <Text>0200-12312-223-4</Text>
      <Text>Name Vehicle</Text>
      <Text>Boooking Code : V234234K</Text>
      <Text>Use booking code to pick up your vehicle</Text>
      <TouchableOpacity style={styles.copy}>
        <Text style={styles.textCopy}>Copy Payment * Booking Code</Text>
      </TouchableOpacity>
      <Text>Order details</Text>
      <Text>2 Vespa</Text>
      <Text>Prepayment (no tax)</Text>
      <Text>4 days</Text>
      <Text>Jan 18 2021 to Jan 22 2021</Text>
      <View style={styles.pricing}>
        <Text>Rp. 245.000</Text>
        <Image source={require('../../assets/Pricing.png')} />
      </View>
      <TouchableOpacity
        style={styles.buttonFinish}
        onPress={() => {
          navigation.navigate('FinishPayment');
        }}>
        <Text style={styles.textFinish}>Finish Payment</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default LastPayment;
