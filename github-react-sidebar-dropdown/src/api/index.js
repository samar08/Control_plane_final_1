import axios from 'axios';

const nodes_url = 'http://localhost:8000/nodes';
const pods_url='http://localhost:8000/getpods/';
export const getnodes = () => axios.get(nodes_url);
export const getpods=()=>axios.get(pods_url);
//export const createPost = (newPost) => axios.post(url, newPost);
//export const likePost = (id) => axios.patch(`${url}/${id}/likePost`);
//export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost);
//export const deletePost = (id) => axios.delete(`${url}/${id}`);
