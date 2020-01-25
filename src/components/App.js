import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import jwt_decode from 'jwt-decode';
import setAuthToken from '../utilities/setAuthToken';
import { setCurrentUser, logoutUser } from '../actions/authActions';
import { clearCurrentProfile } from '../actions/profileActions';
import { Provider } from 'react-redux';
import store from '../store'

import PrivateRoute from './common/PrivateRoute';

import Toolbar from "./Toolbar/Toolbar";
import Homepage from "./homepage/homepage";
import Services from "./services/services";
import About from "./about/about";
import Pricing from "./pricing/pricing";
import Contact from "./contact/contact";
// import AddBookingForm from "./Bookings/addBookingForm";
// import Bookings from "./bookings/bookings";
import Footer from "./footer/Footer";
import Register from './auth/Register';
import Login from './auth/Login';
import Dashboard from './dashboard/Dashboard';
import CreateProfile from './create-profile/CreateProfile';
import EditProfile from './edit-profile/EditProfile';

// Checking for token. If local storage.jwt token exists, we set the Auth token header auth that'll take in the token stored in local storage. Then we decode token and get the user info and expiration.
if(localStorage.jwtToken) {
  // Set Auth Token Header auth
  setAuthToken(localStorage.jwtToken);
  // Decode token and get user info and exp.
  const decoded = jwt_decode(localStorage.jwtToken);
  // Calling setCurrentUser action. Set user and isAuthenticated.
  store.dispatch(setCurrentUser(decoded));

  // Check for expired token
  const currentTime = Date.now() / 1000;
  if(decoded.exp < currentTime) {
    // Logout the user
    store.dispatch(logoutUser());
    // Clear the current profile
    store.dispatch(clearCurrentProfile());
    // Redirect to login
    window.location.href = '/login';
  }
}
function App() {
  return (
    <Provider store={ store }>
    <div className="body">
      <Router>
      <div className="App">
        <Toolbar/>
          <Switch>
            <Route exact path="/" component={Homepage} />
            <Route path="/about" component={About} /> 
            <Route path="/services" component={Services} /> 
            {/* <Route path="/bookings" component={Bookings} />  */}
            <Route path="/pricing" component={Pricing} /> 
            <Route path="/contact" component={Contact} /> 
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <PrivateRoute exact path="/dashboard" component={Dashboard} />
            <PrivateRoute exact path="/create-profile" component={CreateProfile} />
            {/* <Route path="/booking" component={AddBookingForm} /> */}

          </Switch>
          <Switch>
          <PrivateRoute 
            exact path="/edit-profile"
            component={CreateProfile}
          />
          </Switch>
          <Footer />
      </div>
      </Router>
    </div>
    </Provider>
  );
}


export default App;
