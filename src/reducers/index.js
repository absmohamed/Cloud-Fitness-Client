import { combineReducers } from 'redux';
// For the size of our application we want multiple reducers

import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer,
    profile: profileReducer
});