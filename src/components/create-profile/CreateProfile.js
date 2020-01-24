import React, { Component } from 'react'
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';


class CreateProfile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            displaySocialInputs: false,
            handle: '',
            contact: '',
            location: '',
            level: '',
            height: '',
            weight: '',
            gender: '',
            bio: '',
            facebook: '',
            twitter: '',
            instagram: '',
            youtube: '',
            errors: {}
        }
    }
    render() {
        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <h1>Create Your Profile</h1>
                        <p>Let's get some information to make your profile stand out</p>
                        <small>* = required fields</small>
                    </div>
                </div>
                
            </div>
        )
    }
}

CreateProfile.propTypes = {
    profile: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
}
// Mapping our state to props
const mapStateToProps = state => ({
    profile: state.profile,
    errors: state.errors
});

export default connect(null)(CreateProfile);