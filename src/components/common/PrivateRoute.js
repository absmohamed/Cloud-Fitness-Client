import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom';
// Using redux to find out if the user is authenticated or not. This is done using connect
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

// We pass in Component, auth, and the rest of the properties
const PrivateRoute = ({component: Component, auth, ...rest}) => (
    <Route 
        {...rest} 
        render = {props =>
            // Conditional Statement
            // Checking if Authenticated, if it is Authenticated, it'll load the components and if it's not authenticated it'll redirect to login
            auth.isAuthenticated === true ? (
                <Component {...props} />
            )   : (
                <Redirect to="/login" />
            )
        }
    />
)

PrivateRoute.propTypes = {
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(PrivateRoute);