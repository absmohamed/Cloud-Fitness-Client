import { combineReducers } from 'redux';
// For the size of our application we want multiple reducers

import authReducer from './authReducer';
import errorReducer from './errorReducer';

export default combineReducers({
    auth: authReducer,
    errors: errorReducer
});