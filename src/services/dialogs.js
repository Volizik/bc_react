import axios from 'axios';

export const getAllUsers = async () => {
    const response = await axios.get('/user/all');
    return response.data;
};

export const getUserChats = async () => {
    const response = await axios.get('/chat');
    return response.data;
};
