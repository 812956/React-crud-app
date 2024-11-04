import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8080/api/test/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};

const getAllUsers = () => {
  return axios.get(API_URL + "users", { headers: authHeader() });
};

const createUser = (user) => {
  return axios.post(API_URL + "users", user, { headers: authHeader() });
};

const updateUser = (id, user) => {
  return axios.put(API_URL + `users/${id}`, user, { headers: authHeader() });
};

const deleteUser = (id) => {
  return axios.delete(API_URL + `users/${id}`, { headers: authHeader() });
};

const toggleBlockUser = (id) => {
  return axios.patch(API_URL + `users/block/${id}`,{ headers: authHeader() })
}

const userService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  getAllUsers,
  deleteUser,
  createUser,
  updateUser,
  toggleBlockUser
};

export default userService