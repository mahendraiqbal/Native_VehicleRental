import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

// import Home from './screens/Home';
// import Profile from './screens/Profile';
import Login from './screens/Login';
import SignUp from './screens/SignUp';
import ForgotPass from './screens/Forgot';
import Home from './screens/Home';

const Stack = createStackNavigator();
// const Tab = createBottomTabNavigator();

// 1. Tab Nav (parent)
// 2. Stack Nav (child)

/**
 * 1. Home (Tab 1)
 * 2. Profile (Tab 2)
 * 3. Pokemon (Tab 3)
 *    3.1 List Pokemon (Stack 1)
 *    3.2 Detail Pokemon (Stack 2)
 */

const Router = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Forgot" component={ForgotPass} />
    <Stack.Screen name="Home" component={Home} />
  </Stack.Navigator>
);

export default Router;
