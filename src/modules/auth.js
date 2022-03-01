import axios from 'axios';

export const login = body => {
  console.log(body);
  const urlLogin = `${process.env.API_REACT_NATIVE}auth`;
  // console.log(process.env.API_NATIVE);
  return axios.post(urlLogin, body);
};

export const register = body => {
  const urlRegister = `${process.env.API_REACT_NATIVE}auth/new`;
  // console.log(process.env.API_NATIVE);
  return axios.post(urlRegister, body);
};
