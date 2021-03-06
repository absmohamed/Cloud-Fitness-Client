import React, { Component } from 'react'
import { connect } from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import {createProfile} from '../../actions/profileActions'

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
        };
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

    }
    componentWillReceiveProps(nextProps){
        if(nextProps.err) {
            this.setState({errors: nextProps.errors});
        }
    }
    onSubmit(e) {
        e.preventDefault();

        // We need to get all of our form fields
        const profileData = {
            handle: this.state.handle,
            level: this.state.level,
            height: this.state.height,
            weight: this.state.weight,
            gender: this.state.gender,
            location: this.state.location,
            contact: this.state.contact,
            bio: this.state.bio,
            facebook: this.state.facebook,
            twitter: this.state.twitter,
            instagram: this.state.instagram,
            youtube: this.state.youtube

        }
        // We pass in history to redirect. History used withRouter from react-router-dom
        this.props.createProfile(profileData, this.props.history)
    }

    onChange(e) {
        this.setState({[e.target.name]: e.target.value });
    }
    render() {
        const { errors, displaySocialInputs } = this.state;

        let socialInputs;
        if(displaySocialInputs) {
            socialInputs = (
                <div>
                    <InputGroup 
                        placeholder= "Facebook profile URL"
                        name="facebook"
                        icon=""
                        value={this.state.facebook}
                        onChange={this.onChange}
                        error={errors.facebook}
                    />
                    <InputGroup 
                        placeholder= "Twitter profile URL"
                        name="twitter"
                        icon=""
                        value={this.state.twitter}
                        onChange={this.onChange}
                        error={errors.twitter}
                    />
                    <InputGroup 
                        placeholder= "Instagram profile URL"
                        name="instagram"
                        icon=""
                        value={this.state.instagram}
                        onChange={this.onChange}
                        error={errors.instagram}
                    />
                    <InputGroup 
                        placeholder= "YouTube profile URL"
                        name="youtube"
                        icon=""
                        value={this.state.youtube}
                        onChange={this.onChange}
                        error={errors.youtube}
                    />
                </div>
            )
        }
        // Select options for Level
        const options = [
            {label: '* Select your level', value: 0},
            { label: 'Easy', value:'Easy' },
            { label: 'Intermediate', value:'Intermediate' },
            { label: 'Advanced', value:'Advanced' }

        ]
        const options1 = [
            {label: '* Select your gender', value: 0},
            { label: 'Male', value:'Male' },
            { label: 'Female', value:'Female' },
            { label: 'Other', value:'Other' }

        ]


        return (
            <div className="create-profile">
                <div className="container">
                    <div className="row">
                        <h1>Create Your Profile</h1>
                        <p>Let's get some information to make your profile stand out</p>
                        <small>* = required fields</small>
                        <form onSubmit={this.onSubmit}>
                            <TextFieldGroup 
                                placeholder="* Profile Handle"
                                name="handle"
                                value={this.state.handle}
                                onChange={this.onChange}
                                error={errors.handle}
                                info="A unique handle for your profile URL. Your full name, company name, nickname etc."
                                
                            />
                            <SelectListGroup 
                                placeholder="Level"
                                name="level"
                                value={this.state.level}
                                onChange={this.onChange}
                                options={options}
                                error={errors.level}
                                info="Give us an idea of what level you want to train at"
                                
                            />
                            <TextFieldGroup 
                                placeholder="* Height"
                                name="height"
                                value={this.state.heigh}
                                onChange={this.onChange}
                                error={errors.heigh}
                                info="Please add Your height"
                                
                            />
                            <TextFieldGroup 
                                placeholder="* Weight"
                                name="weight"
                                value={this.state.weight}
                                onChange={this.onChange}
                                error={errors.weight}
                                info="Please add Your weight"
                                
                            />
                            <SelectListGroup 
                                placeholder="* Gender"
                                name="gender"
                                value={this.state.gender}
                                onChange={this.onChange}
                                options={options1}
                                error={errors.gender}
                                info="Please add your gender"
                                
                            />
                            <TextFieldGroup 
                                placeholder="Location"
                                name="location"
                                value={this.state.location}
                                onChange={this.onChange}
                                error={errors.location}
                                info="Please add Your City"
                                
                            />
                            <TextFieldGroup 
                                placeholder="* Contact"
                                name="contact"
                                value={this.state.contact}
                                onChange={this.onChange}
                                error={errors.contact}
                                info="Please add Your Contact Number"
                                
                            />
                            <TextAreaFieldGroup 
                                placeholder="Short Bio"
                                name="bio"
                                value={this.state.bio}
                                onChange={this.onChange}
                                error={errors.bio}
                                info="Tell Us a Little About Yourself"
                                
                            />
                            <div className="margin-bottom">
                                <buttton type="button" onClick={() => {
                                    this.setState(prevState => ({
                                        displaySocialInputs: !prevState.displaySocialInputs
                                    }))
                                }} className="button">
                                    Add Social Network Links
                                </buttton>
                                <span>Optional</span>
                            </div>
                            {socialInputs}
                            <input type="submit" value="Submit" className="button" />
                        </form>
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

export default connect(mapStateToProps, {createProfile})(withRouter(CreateProfile));