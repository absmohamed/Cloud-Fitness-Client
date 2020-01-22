import axios from 'axios';

const setAuthToken = token => {
    if(token) {
        // If token exists, apply to every request
        axios.defaults.headers.common['Authorization'] = token;

    } else {
        // If token isn't there, Delete Auth header
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken