import axios from 'axios';

export const payment = body => {
  const url = `${process.env.API_REACT_NATIVE}transactions`;
  return axios.post(url, body);
};
