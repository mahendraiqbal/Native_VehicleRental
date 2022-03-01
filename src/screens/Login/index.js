import {
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

import {login} from '../../modules/auth';
import {loginAction} from '../../redux/actions/auth';

import styles from '../../styles/login.js';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassowrd] = useState('');

  const dispatch = useDispatch();

  const submitLogin = async () => {
    try {
      const body = {
        email: email,
        password: password,
      };
      const result = await login(body);
      console.log(body);
      dispatch(loginAction(result.data.result.token));
      navigation.navigate('Home');
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ImageBackground
      source={require('../../assets/bg-profile.png')}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>LET'S EXPLORE THE WORLD</Text>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.inputEmail}
            placeholder="Email"
            onChangeText={text => setEmail(text)}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={text => setPassowrd(text)}
          />
        </KeyboardAvoidingView>
        <Text
          style={styles.forgot}
          onPress={() => {
            navigation.navigate('Forgot');
          }}>
          Forgot password?
        </Text>
        <TouchableOpacity onPress={submitLogin} style={styles.login}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <Text
          style={styles.textSignUp}
          onPress={() => {
            navigation.navigate('SignUp');
          }}>
          Don’t have account? Sign up now
        </Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Login;
