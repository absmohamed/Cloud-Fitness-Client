import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
// Whenever we use redux in a component, we import connect
import { connect } from 'react-redux';
import { registerUser } from '../../actions/authActions';
import TextFieldGroup from '../common/TextFieldGroup';

import './register.scss'


class Register extends Component {
    // Component state. Adding constructor to our class.
    constructor() {
        super();
        // this.state is an object with some values
        this.state = {
            name: '',
            lastname: '',
            email: '',
            password: '',
            password2: '',
            errors: {}
        };
        // This allows setState to work in the onChange function
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }

    // If the user is logged in, this will take it to the dashboard instead of the login page
    componentDidMount() {
        // Check to see if we're logged in
        if(this.props.auth.isAuthenticated) {
            this.props.history.push('/dashboard');
        }
    }
    // THis runs when component receives new properties. We test for the errors property
    componentWillReceiveProps(nextProps) {
        // If there is an errors props, we set the errors to nextProps.errors
        if(nextProps.errors) {
            this.setState({errors: nextProps.errors})
        }
    }

    // This will take in an event parameter. Whenever the user types, it will fire off this function and we set whatever is put in that input to these state variables. 
    onChange(e) {
        // For instance if it's name, it'll be name, if it's email it'll be email etc.
        this.setState({[e.target.name]: e.target.value});
    }

    // We pass in an event parameter and since it's a form we don't want it to have it's default behaviour so we do preventDefault.
    onSubmit(e) {
        e.preventDefault();

        const newUser = {
            name: this.state.name,
            lastname: this.state.lastname,
            email: this.state.email,
            password: this.state.password,
            password2: this.state.password2,
        };
        // withRouter allows us to redirect from within this action
        this.props.registerUser(newUser, this.props.history);
    }
    render() {
        // If we have errors it will be in this.state.errors
        const errors = this.state.errors;
        return (
            <div className="register">
                <div className="row">
                    <p className="text-center">CREATE YOUR GYM MEMBERSHIP</p>
                    <form noValidate onSubmit={this.onSubmit}>
                        <TextFieldGroup 
                                placeholder="Name"
                                name="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                error={errors.name}

                        />
                        <TextFieldGroup 
                            placeholder="Last Name"
                            name="lastname"
                            value={this.state.lastname}
                            onChange={this.onChange}
                            error={errors.lastname}

                        />
                        <TextFieldGroup 
                            placeholder="Email Address"
                            name="email"
                            type="email"
                            value={this.state.email}
                            onChange={this.onChange}
                            error={errors.email}

                        />
                        <TextFieldGroup 
                            placeholder="Password"
                            name="password"
                            type="password"
                            value={this.state.password}
                            onChange={this.onChange}
                            error={errors.password}

                        />
                        <TextFieldGroup 
                            placeholder="Confirm Password"
                            name="password2"
                            type="password"
                            value={this.state.password2}
                            onChange={this.onChange}
                            error={errors.password2}

                        />

                        {errors.password2 && (<div className="invalid-feedback">{errors.password2}</div>)}
                    </div>
                        <input type="submit" className="reg-btn" />
                    </form>
                    </div>
            </div>
        )
    }
}

Register.propTypes = {
    // Register user is an action but also a property
    registerUser: PropTypes.func.isRequired,
    // Auth is also a property of this component
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

// If we wanted to get the authState into our component, we create the function
// This puts the auth state in a property called auth so we can access it with this.props.auth
const mapStateToProps = (state) => ({
    // state.auth is from the root reducer
    auth: state.auth,
    errors: state.errors
});


export default connect(mapStateToProps, { registerUser })(withRouter(Register));
