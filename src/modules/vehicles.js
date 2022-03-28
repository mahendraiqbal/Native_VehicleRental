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

export const getVehicleType = (type, currentPage) => {
  const url = `${process.env.API_REACT_NATIVE}vehicles?type=${type}&page=${currentPage}&limit=5`;
  console.log('cek url', url);
  return axios.get(url);
};

export const postVehicle = (body, token) => {
  const url = `${process.env.API_REACT_NATIVE}vehicles`;
  return axios.post(url, body, {
    headers: {
      'x-access-token': token,
    },
  });
};

export const searchVehicle = type => {
  const url = `${process.env.API_REACT_NATIVE}vehicles?type=${type}&page=1&limit=100`;
  return axios.get(url);
};

const getAllCar = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=20&type=car`,
);

const getAllMotorbike = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=20&type=motorbike`,
);

const getAllBike = axios.get(
  `${process.env.API_REACT_NATIVE}vehicles?page=1&limit=20&type=bicycle`,
);

export const allFullVehicle = () => {
  return axios.all([getAllCar, getAllMotorbike, getAllBike]);
};

export const editVehicle = (id, body, token) => {
  const url = `${process.env.API_REACT_NATIVE}vehicles/${id}`;
  return axios.patch(url, body, {
    headers: {
      'x-access-token': token,
    },
  });
};
