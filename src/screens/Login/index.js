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

import {loginAction} from '../../redux/actions/auth';

import styles from '../../styles/login.js';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  // const submitLogin = async () => {
  //   try {
  //     const body = {
  //       email: email,
  //       password: password,
  //     };
  //     const result = await login(body);
  //     console.log(body);
  //     console.log('token', result.data.result.token);
  //     dispatch(loginAction(body));
  //     navigation.navigate('BotTab');
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const emailHandler = e => {
    setEmail(e);
  };

  const passHandler = e => {
    setPassword(e);
  };

  const submitLogin = () => {
    const body = {
      email,
      password,
    };
    // console.log(body);
    dispatch(loginAction(body))
      .then(res => {
        // console.log('login', res);
        navigation.navigate('BotTab');
      })
      .catch(err => console.log(err));
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
            onChangeText={emailHandler}
          />
          <TextInput
            style={styles.inputPassword}
            placeholder="Password"
            onChangeText={passHandler}
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
        {/* <TouchableOpacity
          style={styles.login}
          onPress={() => {
            navigation.navigate('BotTab');
          }}>
          <Text style={styles.textLogin}>Home</Text>
        </TouchableOpacity> */}
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
