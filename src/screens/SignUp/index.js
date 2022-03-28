import {
  ScrollView,
  Text,
  ImageBackground,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import styles from '../../styles/SignUp';
import {validateSignup} from '../../helpers/validation';

import {register} from '../../modules/auth';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');

  const registerUser = async () => {
    try {
      const body = {
        email: email,
        name: name,
        password: password,
      };
      // console.log(body);
      // console.log(register);
      const result = await register(body);
      // console.log(result.data);
      if (result.data.result) {
        navigation.navigate('Login');
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/bg-register.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>LET’S HAVE SOME RIDE</Text>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.inputPhone}
            placeholder="Name"
            onChangeText={text => setName(text)}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity onPress={registerUser} style={styles.login}>
          <Text style={styles.textSignUp}>Sign Up</Text>
        </TouchableOpacity>
        <Text
          style={styles.textLogin}
          onPress={() => {
            navigation.navigate('Login');
          }}>
          Already have an account? Login now
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Register;
