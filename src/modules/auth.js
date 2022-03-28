import axios from 'axios';

// const urlLogin = `${process.env.NATIVE}auth`;

export const login = body => {
  // console.log(body);
  console.log('cek api', process.env.API_REACT_NATIVE);
  const urlLogin = `${process.env.API_REACT_NATIVE}auth`;
  // console.log('hallo oi', process.env.API_REACT_NATIVE);
  console.log('urlLogin', urlLogin);
  return axios.post(urlLogin, body);
};

export const register = body => {
  const urlRegister = `${process.env.API_REACT_NATIVE}auth/new`;
  // console.log(process.env.API_NATIVE);
  return axios.post(urlRegister, body);
};

export const logout = token => {
  const urlLogout = `${process.env.API_REACT_NATIVE}auth/logout`;
  // console.log(urlLogout);
  return axios.delete(urlLogout, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const forgotPass = body => {
  const urlForgot = `${process.env.API_REACT_NATIVE}auth/forgot-password`;
  return axios.post(urlForgot, body);
};

export const checkOtp = body => {
  const urlOtp = `${process.env.API_REACT_NATIVE}auth/checkOtp`;
  console.log('cek url', urlOtp);
  return axios.post(urlOtp, body);
};

export const resetPass = body => {
  const urlReset = `${process.env.API_REACT_NATIVE}auth/resetPassword`;
  return axios.post(urlReset, body);
};
