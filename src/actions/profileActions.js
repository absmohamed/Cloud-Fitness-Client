import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE, GET_ERRORS, SET_CURRENT_USER } from './types';

// Get current profile
export const getCurrentProfile = () => dispatch => {
    // We want to dispatch another action called set profile loading, which will set the loading set before it does the request
    dispatch(setProfileLoading());
    // Now we make our request
    axios
        .get('./api/profile')
        .then(res => 
            dispatch({
            type: GET_PROFILE,
            payload: res.data
            })
        // We can register as a user, and not have a profile, if we don't have a profile, we want it to have a button that says create profile.
        )
        .catch(err => 
            dispatch({
                type: GET_PROFILE,
                payload: {}
            })
        );
};

// Create Profile
export const createProfile = (profileData, history) => dispatch => {
    // If it creates the profile, it'll redirect to dashboard, if it doesn't create profile, it'll give us errors through the error reducers.
    axios
        .post('/api/profile', profileData)
        .then(res => history.push('/dashboard'))
        .catch(err => dispatch({
            type: GET_ERRORS,
            payload: err.response.data
        })
        )
}

// Delete Account & profile
// In the backend, we made it so that it deletes the user from the user's collection and their profile.
export const deleteAccount = () => dispatch => {
    if(window.confirm('Are you sure? This will delete your account permanently!')) {
        axios
            .delete('/api/profile')
            .then(res => 
                // We get a promise, we dispatch the type and we call SET_CURRENT_USER and the payload we send is an empty object. It sets the Auth User to nothing
                dispatch({
                    type: SET_CURRENT_USER,
                    payload: {}
                })
            )
            .catch(err => 
                dispatch({
                    type: GET_ERRORS,
                    payload: err.response.data
                })
            );
    }
};


// Profile Loading
export const setProfileLoading = () => {
    return {
        // With this profile loading, it just lets the reducer know it's loading
        type: PROFILE_LOADING
    }
}

// Clear Profile once logged out
export const clearCurrentProfile = () => {
    return {
        type: CLEAR_CURRENT_PROFILE
    }
}