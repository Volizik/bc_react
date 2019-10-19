import axios from 'axios';

export const signIn = async ({login, password}) => {
    return await axios.post('/auth/signin', {login, password});
};

export const signUp = async ({login, password}) => {
    return await axios.post('/auth/signup', {login, password});
};
