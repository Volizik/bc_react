import axios from 'axios';

export const getMyInfo = async () => {
    return await axios.get('/user/me');
};
