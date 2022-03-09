import {ScrollView, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from '../../styles/Payment';

const SecondPayment = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.title}>
        <Image source={require('../../assets/back.png')} />
        <Text>Payment</Text>
      </View>
      <Image
        source={require('../../assets/SecondStepper.png')}
        style={styles.stepper}
      />
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/defaultVehicle.png')}
          style={styles.imageVehicle}
        />
      </View>
      <Text>2 Vespa</Text>
      <Text>Prepayment (no tax)</Text>
      <Text>4 days</Text>
      <Text>Jan 18 2021 to Jan 22 2021</Text>
      <View style={styles.pricing}>
        <Text>Rp 245.000</Text>
        <Image source={require('../../assets/Pricing.png')} />
      </View>
      <TouchableOpacity
        style={styles.buttonSee}
        onPress={() => {
          navigation.navigate('LastPayment');
        }}>
        <Text style={styles.textSee}>Get Payment Code</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default SecondPayment;
