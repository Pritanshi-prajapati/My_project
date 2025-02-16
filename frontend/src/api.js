import axios from "axios";

const API_URL = "http://localhost:5000/api";

export const getBalance = async () => {
  const res = await axios.get(`${API_URL}/balance`);
  return res.data;
};

export const getTasks = async () => {
  const res = await axios.get(`${API_URL}/tasks`);
  return res.data;
};