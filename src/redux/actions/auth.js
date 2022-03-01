import {login} from '../../modules/auth';
import {ACTION_STRING} from './actionString';

export const loginAction = body => {
  return {
    type: ACTION_STRING.loginAuth,
    payload: login(body),
  };
};
