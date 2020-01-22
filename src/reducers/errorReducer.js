import { GET_ERRORS } from '../actions/types';

const initialState = {};
// THis function takes in an initial state and an action. Because we dispatch actions to this reducer and then this is were we do the testing so we use switch 
export default function(state = initialState, action) {
    // Action is an object that uses tyoe
    switch(action.type) {
        case GET_ERRORS:
            return action.payload;
        default:
            return state;
    }
}