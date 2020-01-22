import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers'

const initialState = {};

const middleware = [thunk];

// We pass in an empty function, empty array and our initial state which will be an empty object, and apply middleware
// First parameter is our root reducer
// Implement redux dev tool chrome extension by adding it to third parameter using compose
const store = createStore(rootReducer, initialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()));


export default store;