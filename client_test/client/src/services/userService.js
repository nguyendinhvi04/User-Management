import axios from "axios";

const API_URL = "http://localhost:8000/users";

export const fetchUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const deleteUser = async (id) => {
  await axios.delete(`${API_URL}/${id}`);
};

export const updateUser = async (id, user) => {
  await axios.put(`${API_URL}/${id}`, user);
}

export const createUser = async(user) =>{
    await axios.post(API_URL, user);
}

export const toggleUserActive = async (id) => {
  await axios.put(`${API_URL}/${id}/toggle-active`);
};