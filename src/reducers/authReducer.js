import { SET_CURRENT_USER } from "../actions/types";
import { isEmpty } from "../validation/is-empty";


const initialState = {
    isAuthenticated: false,
    user: {}
}

// THis function takes in an initial state and an action. Because we dispatch actions to this reducer and then this is were we do the testing so we use switch 
export default function(state = initialState, action) {
    // Action is an object that uses tyoe
    switch(action.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                // It'll set the isAuthenticated to true. If it passes the action.payloda will be filled with the decoded user object.
                isAuthenticated: !isEmpty(action.payload),
                // Then the user will be in user
                user: action.payload
            }
        default:
            return state;
    }
}