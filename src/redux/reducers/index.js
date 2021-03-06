import {combineReducers} from 'redux';
import authReducer from './auth';
import {ACTION_STRING} from '../actions/actionString';
import AsyncStorage from '@react-native-async-storage/async-storage';

const reducers = combineReducers({
  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action.type === ACTION_STRING.logoutAuth) {
    AsyncStorage.removeItem('persist:root');

    state = undefined;
  }
  return reducers(state, action);
};

export default rootReducer;
