import axios from 'axios'

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

axios.defaults.headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
};
