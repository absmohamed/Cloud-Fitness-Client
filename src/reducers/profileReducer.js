import { GET_PROFILE, PROFILE_LOADING, CLEAR_CURRENT_PROFILE } from '../actions/types';

const initialState = {
    profile: null,
    profiles: null,
    loading: false
}

//Going to have a switch statement depending on the action called. Default will return state.
export default function (state = initialState, action) {
    switch(action.type) {
        case PROFILE_LOADING:
            return {
                // Our current state
                ...state,
                loading: true
            }
        // On success of getting the profile, we return current state, profile will be filled with payload and loading will be set back to false.
        case GET_PROFILE:
            return {
                ...state,
                profile: action.payload,
                loading: false
            }
        // When clearing current profile once logged out, we return current state and set profile to null
        case CLEAR_CURRENT_PROFILE:
            return {
                ...state,
                profile: null
            }
        default:
        return state;
    }
}