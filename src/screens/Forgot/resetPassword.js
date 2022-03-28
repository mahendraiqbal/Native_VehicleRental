// import React, {useState} from 'react';
// import {
//   ScrollView,
//   Text,
//   View,
//   TextInput,
//   SafeAreaView,
//   TouchableOpacity,
// } from 'react-native-gesture-handler';

// import {resetPass} from '../../modules/auth';

// function ResetPassword({navigation}) {
//   const [otp, setOtp] = useState(null);
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const passwordReset = async () => {
//     try {
//       const body = {
//         email: email,
//         otp: otp,
//         password: password,
//       };
//       console.log('body', body);
//       const result = await resetPass(body);
//       console.log('resultnya', result.data);
//       if (result.data.result) {
//         navigation.navigate('Login');
//       }
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   return (
//     <ScrollView>
//       <View>
//         {/* <TextInput placeholder="input Email" onChangeText={text => setEmail} />
//         <TextInput placeholder="input otp" onChangeText={text => setOtp} /> */}
//         <SafeAreaView>
//           <TextInput
//             placeholder="email"
//             onChangeText={text => setEmail(text)}
//           />
//         </SafeAreaView>
//         <SafeAreaView>
//           <TextInput placeholder="otp" onChangeText={text => setOtp(text)} />
//         </SafeAreaView>
//         <SafeAreaView>
//           <TextInput
//             placeholder="password"
//             onChangeText={text => setPassword(text)}
//           />
//         </SafeAreaView>
//       </View>
//       <View>
//         <TouchableOpacity onPress={passwordReset}>
//           <Text>Reset Password</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//   );
// }

// export default ResetPassword;

import React, {useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
  SafeAreaView,
} from 'react-native';

import {resetPass} from '../../modules/auth';

function ResetPassword({navigation}) {
  const [otp, setOtp] = useState(null);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const passwordReset = async () => {
    try {
      const body = {
        email: email,
        otp: otp,
        password: password,
      };
      console.log('body', body);
      const result = await resetPass(body);
      console.log('resultnya', result.data);
      if (result.data.result) {
        navigation.navigate('Login');
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
        <SafeAreaView>
          <TextInput
            placeholder="password"
            onChangeText={text => setPassword(text)}
          />
        </SafeAreaView>
      </View>
      <View>
        <TouchableOpacity onPress={passwordReset}>
          <Text>Reset Password</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default ResetPassword;
