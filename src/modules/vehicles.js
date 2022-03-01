import axios from 'axios';

// const popularVehicle = axios.get(
//   `${process.env.API_REACT_NATIVE}transactions`,
//   console.log('API', process.env.API_REACT_NATIVE),
// );

const getCar = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=4&type=car`,
);

const getMotorbike = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=4&type=motorbike`,
);

const getBike = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=4&type=bicycle`,
);

export const allVehicle = () => {
  return axios.all([getCar, getMotorbike, getBike]);
};
