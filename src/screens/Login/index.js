import {
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
  ToastAndroid,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {loginAction} from '../../redux/actions/auth';

import styles from '../../styles/login.js';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  // const submitLogin = () => {
  //   const body = {
  //     email: email,
  //     password: password,
  //   };
  //   dispatch(loginAction(body));
  //   console.log(body);
  // };

  // useEffect(() => {
  //   if (auth.isFulfilled === true) {
  //     navigation.navigate('BotTab');
  //     ToastAndroid.show('Login Success', ToastAndroid.SHORT);
  //     console.log('success');
  //   }
  //   if (auth.isRejected === true) {
  //     console.log('fail');
  //     ToastAndroid.show('Login Fail', ToastAndroid.SHORT);
  //   }
  // }, [auth, navigation]);

  const submitLogin = () => {
    const body = {
      email: email.trim(),
      password: password.trim(),
    };
    console.log('body', body);
    dispatch(loginAction(body));
  };

  useEffect(() => {
    if (auth.isFulfilled === true) {
      navigation.navigate('BotTab');
      ToastAndroid.show('Login Success', ToastAndroid.SHORT);
      console.log('success');
    }
    if (auth.isRejected === true) {
      console.log('fail');
      ToastAndroid.show('Login Fail', ToastAndroid.SHORT);
    }
  }, [auth, navigation]);

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
            onChangeText={text => setPassword(text)}
            secureTextEntry={true}
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
