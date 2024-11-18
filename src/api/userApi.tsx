import axios from 'axios';

const BASE_URL = 'https://fakestoreapi.com';

export const registerUser = async (userData: { username: string; email: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/users`, userData);
  return response.data;
};

export const loginUser = async (loginData: { username: string; password: string }) => {
  const response = await axios.post(`${BASE_URL}/auth/login`, loginData);
  return response.data; 
};

export const updateUser = async (userId: number, updatedData: string) => {
  const response = await axios.put(`${BASE_URL}/users/${userId}`, updatedData);
  return response.data;
};

export const deleteUser = async (userId: number) => {
  const response = await axios.delete(`${BASE_URL}/users/${userId}`);
  return response.data;
};
