import axios from 'axios';

import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from './types';

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