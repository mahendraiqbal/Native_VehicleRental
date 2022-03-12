import axios from 'axios';

// const urlLogin = `${process.env.NATIVE}auth`;

export const login = body => {
  // console.log(body);
  // console.log(process.env.NATIVE);
  const urlLogin = `${process.env.API_REACT_NATIVE}auth`;
  // console.log('hallo oi', process.env.API_REACT_NATIVE);
  return axios.post(urlLogin, body);
};

export const register = body => {
  const urlRegister = `${process.env.API_REACT_NATIVE}auth/new`;
  // console.log(process.env.API_NATIVE);
  return axios.post(urlRegister, body);
};

export const logout = token => {
  const urlLogout = `${process.env.API_REACT_NATIVE}auth/logout`;
  return axios.delete(urlLogout, {
    headers: {
      'x-access-token': token,
    },
  });
};
