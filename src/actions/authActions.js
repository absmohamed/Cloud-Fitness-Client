import axios from 'axios';
import setAuthToken from '../utilities/setAuthToken';
import jwt_decode from 'jwt-decode';
import { GET_ERRORS, SET_CURRENT_USER } from './types'


// Register User
// Now if we want to dispatch something to our reducer, we return an object that must have a type
export const registerUser = (userData, history) => dispatch => {
    axios
        .post('/api/users/register', userData)
        // Redirecting
        .then(res => history.push('/login'))
        .catch(err => 
            dispatch({
                type: GET_ERRORS,
                payload: err.response
            })
        );
};

// If login passes with user data, it'll save the token to local storage, set the auth token and set the current user.
// Login - Get User Token
export const loginUser = (userData) => dispatch => {
    axios.post('/api/users/login', userData)
        .then(res => {
            // Save to localStorage
            const { token } = res.data;
            // Set token to local storage. Local storage only stores strings. Our token is a string
            localStorage.setItem('jwtToken', token);
            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data using jwt_decode
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));
        })
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        );
};

// Set logged in user
export const setCurrentUser = decoded => {
    return {
        type: SET_CURRENT_USER,
        payload: decoded
    }
}

// Logging user out
export const logoutUser = () => dispatch => {
    // Remove token from localStorage
    localStorage.removeItem('jwtToken');
    // Remove auth header for future requests. That setAuthToken created in the utilities folder is made so that once we're logged in if we have token in local storage then it'll attach the token to the authorization header for every request.
    setAuthToken(false);
    // Set current user to an empty object which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
}
