import React, { Component } from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import classnames from 'classnames';
import { loginUser } from '../../actions/authActions';
import './login.scss'
class Login extends Component {
        // Component state. Adding constructor to our class.
        constructor() {
            super();
            // this.state is an object with some values
            this.state = {
                email: '',
                password: '',
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
        // Creating our life-cycle method componentWillReceiveProps
        componentWillReceiveProps(nextProps) {
            if(nextProps.auth.isAuthenticated) {
                // Redirect to dashboard
                this.props.history.push('/dashboard');
            }
            if(nextProps.errors) {
                this.setState({errors: nextProps.errors});
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
    
            const userData = {
                email: this.state.email,
                password: this.state.password,
            }
            this.props.loginUser(userData);
        }
    render() {
        const { errors } = this.state;
        return (
            <div className="login">
                {/* <div className="container"> */}
                    <div className="row">
                        {/* <h1 className="text-center">Log In</h1> */}
                        <p className="lead-text-center">LOG IN TO ACCESS YOUR ACCOUNT</p>
                        <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <input
                                type="email"
                                className={classnames('form-control', {
                                    'is-invalid': errors.email
                                })}
                                placeholder="Email Address"
                                name="email"
                                value={this.state.email}
                                // onChange allows us to type in to the inputs
                                onChange={this.onChange}
                            />
                            {errors.email && (<div className="invalid-feedback">{errors.email}</div>)}
                    </div>
                    <div className="form-group">
                        <input
                            type="password"
                            className={classnames('form-control', {
                                'is-invalid': errors.password
                            })} 
                            placeholder="Password"
                            name="password"
                            value={this.state.password}
                            // onChange allows us to type in to the inputs
                            onChange={this.onChange}
                        />
                        {errors.password && (<div className="invalid-feedback">{errors.password}</div>)}
                    </div>
                        <input type="submit" className="submit-btn" />
                </form>
                </div>
            {/* </div> */}
        </div>
        )
    }
}
Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    auth: state.auth,
    errors: state.errors
})
export default connect(mapStateToProps, { loginUser })(Login);


