import axios from 'axios';

export const payment = body => {
  const url = `${process.env.API_REACT_NATIVE}transactions`;
  return axios.post(url, body);
};

export const getTransactionById = token => {
  const url = process.env.API_REACT_NATIVE + 'transactions/byId';
  return axios.get(url, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const deleteTransactions = id => {
  const url = process.env.API_REACT_NATIVE + 'transactions';
  return axios.delete(url + id);
};
