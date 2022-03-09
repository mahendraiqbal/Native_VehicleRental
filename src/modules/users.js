import axios from 'axios';

export const userProfile = token => {
  const url = process.env.API_REACT_NATIVE + 'users';
  return axios.get(url, {
    headers: {
      'x-access-token': token,
    },
  });
};
