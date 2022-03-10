import axios from 'axios';

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

export const getVehicleById = id => {
  const url = `${process.env.API_REACT_NATIVE}vehicles/${id}`;
  return axios.get(url);
};

export const getVehicleType = type => {
  const url = `${process.env.API_REACT_NATIVE}vehicles?type=${type}&page=1&limit=5`;
  console.log('cek url', url);
  return axios.get(url);
};
