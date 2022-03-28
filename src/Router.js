/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import SplashScreen from 'react-native-splash-screen';

// import Home from './screens/Home';
// import Profile from './screens/Profile';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPass from './screens/Forgot';
import Home from './screens/Home';
import Category from './screens/Category';
import Detail from './screens/Detail';
import Search from './screens/Search';
import Profile from './screens/Profile';
import Chat from './screens/Chat';
// import UpdateProf from './screens/UpdateProfile';
import AddProduct from './screens/AddProduct';
import Payment from './screens/Payment/Payment';
import SecondPayment from './screens/Payment/SecondPayment';
import LastPayment from './screens/Payment/LastPayment';
import FinishPayment from './screens/Payment/FinishPayment';
import UpdateProfile from './screens/Profile/UpdateProfile';
import History from './screens/History';
import Filter from './screens/Filter';
import CheckOtp from './screens/Forgot/checkOtp';
import ResetPassword from './screens/Forgot/resetPassword';
// import styles from './styles/SignUp';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// 1. Tab Nav (parent)
// 2. Stack Nav (child)

/**
 * 1. Home (Tab 1)
 * 2. Profile (Tab 2)
 * 3. Pokemon (Tab 3)
 *    3.1 List Pokemon (Stack 1)
 *    3.2 Detail Pokemon (Stack 2)
 */

const BottomTab = () => (
  <Tab.Navigator
    initialRouteName="Home"
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 60,
      },
    }}>
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/home.png')}
              resizeMode="cover"
              style={{
                width: 50,
                height: 50,
                tintColor: focused && '#ffcd61',
              }}
            />
          </View>
        ),
        tabBarActiveBackgroundColor: '#f5f5f5',
      }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/search.png')}
              resizeMode="cover"
              style={{
                width: 60,
                height: 60,
                tintColor: focused && '#ffcd61',
              }}
            />
          </View>
        ),
        tabBarActiveBackgroundColor: '#f5f5f5',
      }}
      name="Search"
      component={Search}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/chat.png')}
              resizeMode="cover"
              style={{
                width: 30,
                height: 30,
                tintColor: focused && '#ffcd61',
              }}
            />
          </View>
        ),
        tabBarActiveBackgroundColor: '#f5f5f5',
      }}
      name="Chat"
      component={Chat}
    />
    <Tab.Screen
      options={{
        tabBarIcon: ({focused}) => (
          <View>
            <Image
              source={require('./assets/user.png')}
              resizeMode="cover"
              style={{
                width: 30,
                height: 30,
                tintColor: focused && '#ffcd61',
              }}
            />
          </View>
        ),
        tabBarActiveBackgroundColor: '#f5f5f5',
      }}
      name="Profile"
      component={Profile}
    />
  </Tab.Navigator>
);

const Router = () => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Forgot" component={ForgotPass} />
      <Stack.Screen name="BotTab" component={BottomTab} />
      <Stack.Screen name="Category" component={Category} />
      <Stack.Screen name="Detail" component={Detail} />
      <Stack.Screen name="AddProduct" component={AddProduct} />
      <Stack.Screen name="Payment" component={Payment} />
      <Stack.Screen name="SecondPayment" component={SecondPayment} />
      <Stack.Screen name="LastPayment" component={LastPayment} />
      <Stack.Screen name="FinishPayment" component={FinishPayment} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfile} />
      <Stack.Screen name="History" component={History} />
      <Stack.Screen name="Filter" component={Filter} />
      <Stack.Screen name="CheckOtp" component={CheckOtp} />
      <Stack.Screen name="ResetPassword" component={ResetPassword} />
    </Stack.Navigator>
  );
};

export default Router;
