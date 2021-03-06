import React, {useState} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
} from 'react-native';

import {forgotPass} from '../../modules/auth';

const ForgotPass = ({navigation}) => {
  const [email, setEmail] = useState('');

  const forgotPassword = async () => {
    try {
      const body = {
        email: email,
      };
      const result = await forgotPass(body);
      console.log('resultnya', result.data);
      if (result.data.result) {
        navigation.navigate('CheckOtp');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/bg-forgot.jpeg')}
        resizeMode="cover"
        style={styles.image}>
        <Text style={styles.text}>THAT'S OKAY, WE GOT YOUR BACK</Text>
        <SafeAreaView>
          <TextInput
            style={styles.input}
            placeholder="email"
            onChangeText={text => setEmail(text)}
          />
        </SafeAreaView>
        <View style={styles.containerFp}>
          <TouchableOpacity style={styles.btnLgn} onPress={forgotPassword}>
            <Text style={styles.login}> Send Code </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 32,
    width: 370,
    textAlign: 'left',
    lineHeight: 34,
    fontWeight: 'bold',
    padding: 60,
    flex: 1,
  },
  input: {
    height: 60,
    margin: 12,
    borderWidth: 0,
    padding: 10,
    borderRadius: 15,
    backgroundColor: '#DFDEDE',
  },
  containerFp: {
    justifyContent: 'center',
    paddingHorizontal: 10,
    flex: 2,
  },
  button: {
    alignItems: 'center',
    padding: 10,
    color: '#000000',
  },
  forgotPassword: {
    color: 'white',
    fontSize: 18,
    textAlign: 'left',
  },
  btnLgn: {
    alignItems: 'center',
    backgroundColor: '#FFCD61',
    padding: 10,
    borderRadius: 15,
    height: 50,
    textAlign: 'center',
  },
  login: {
    color: '#000000',
    fontWeight: 'bold',
    fontSize: 18,
    marginBottom: 'auto',
    marginTop: 'auto',
    // lineHeight: 35,
  },
});

export default ForgotPass;
