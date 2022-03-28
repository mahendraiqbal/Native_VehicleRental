import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {checkOtp} from '../../modules/auth';

function CheckOtp({navigation}) {
  const [otp, setOtp] = useState(null);
  const [email, setEmail] = useState('');

  const otpCheck = async () => {
    try {
      const body = {
        email: email,
        otp: otp,
      };
      console.log('body', body);
      const result = await checkOtp(body);
      console.log('resultnya', result.data);
      if (result.data.result) {
        navigation.navigate('ResetPassword');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <ScrollView>
      <View>
        {/* <TextInput placeholder="input Email" onChangeText={text => setEmail} />
        <TextInput placeholder="input otp" onChangeText={text => setOtp} /> */}
        <SafeAreaView>
          <TextInput
            placeholder="email"
            onChangeText={text => setEmail(text)}
          />
        </SafeAreaView>
        <SafeAreaView>
          <TextInput placeholder="otp" onChangeText={text => setOtp(text)} />
        </SafeAreaView>
      </View>
      <View>
        <TouchableOpacity onPress={otpCheck}>
          <Text>Send Code</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default CheckOtp;
