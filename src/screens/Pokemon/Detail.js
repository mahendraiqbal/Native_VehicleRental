import {
  ScrollView,
  Text,
  ImageBackground,
  TextInput,
  KeyboardAvoidingView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';

import styles from '../../styles/SignUp';

const Detail = ({navigation}) => {
  return (
    <ImageBackground
      source={{
        uri: 'https://s3-alpha-sig.figma.com/img/952f/4e88/a5bf5a97ec4bc53a359ab7fabc92a263?Expires=1646611200&Signature=JBMFgdMMpwmO1HPpNfnI3GNAL96zCbcMHGa8COiA56bkR0hX1nyyrccOlJQubaoSh0zk57EUa6KRN366rYY2bCCqi5PyeOB0EevUkIObKQsXFokpbPlqjEKqMv9OSzaIIlrsFVJ2LPLT6rbInFxlm5PRMOCn6PXmshi0PClo5LBDCQVSlprY6iE46P8nIHYIY6pNs2fCdm3JuHhr5tzndROPl92IpJdD2Wa4NZiWtRRA3ZOOiuiRmP58Gh5diPGMAUMO13N7P8QnbxlWrNlM6TdYzUEFeMFjdwU8m5MnqtzNG4m7XgnIGMRKwO4QBd8ah~DGr8WoP-7C2gcR3WrysA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
      }}
      // eslint-disable-next-line react-native/no-inline-styles
      style={{flex: 1}}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>LET’S HAVE SOME RIDE</Text>
        <KeyboardAvoidingView>
          <TextInput style={styles.inputEmail} placeholder="Email" />
          <TextInput style={styles.inputPassword} placeholder="Password" />
        </KeyboardAvoidingView>
        <Text style={styles.forgot}>Forgot password?</Text>
        <TouchableOpacity
          onPress={() => navigation.navigate('Home')}
          style={styles.login}>
          <Text style={styles.textLogin}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.textSignUp}>Don’t have account? Sign up now</Text>
      </ScrollView>
    </ImageBackground>
  );
};

export default Detail;
