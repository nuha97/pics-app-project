import axios from 'axios';

//const url = "http://localhost:5000";
const API = axios.create({baseURL : 'http://localhost:5000'})
API.interceptors.request.use((req) => {
    if (localStorage.getItem('profile')) {
      req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
  
    return req;
  });

//memory side
export const fetchMemory = () => API.get(`/memories`);
export const createMemory = (newMemory) => API.post(`/memories`, newMemory);
export const deleteMemory = (id) => API.delete(`/memories/${id}`);
//export const likePost = (id) => axios.patch(`/${id}/likePost`);
export const updateMemory = (id, updatedMemory) => API.put(`/memories/${id}`, updatedMemory);

//user side
export const signIn = (formData) => API.post(`/user/signin`, formData);
export const signUp = (formData) => API.post(`/user/signup`, formData);