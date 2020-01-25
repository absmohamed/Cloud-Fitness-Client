import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getCurrentProfile, deleteAccount } from '../../actions/profileActions';
import Spinner from '../common/Spinner';
import ProfileActions from './ProfileActions';
class Dashboard extends Component {

    componentDidMount() {
        this.props.getCurrentProfile();
    }

    onDeleteClick(e) {
        this.props.deleteAccount()
    }
    render() {
        // Getting user from auth state first
        const { user } = this.props.auth;
        const { profile, loading } = this.props.profile;
        // Initializing variable called dashboardContent
        let dashboardContent;
        // If profile is equal to null or loading is true
        if(profile === null || loading) {
            dashboardContent = <Spinner />
        } else {
            // Checking if logged in user has profile data
            // There are several ways to check for an empty object. An easier way would be if Object.keys length is greater than 0, that means there's something in there 
            if(Object.keys(profile).length > 0) {
                dashboardContent = (
                    <div> 
                        <p>Welcome <Link to={`/profile/${profile.handle}`}>
                        {user.name}</Link></p>
                        {/* ProfileActions is a list of buttons */}
                        <ProfileActions />
                        {/*  */}
                        <div style={{marginBottom: '60px' }} />
                        <button onClick={this.onDeleteClick.bind(this)} >Delete My Account</button>
                    </div>
                )
            } else {
                // User is logged in but has no profile
                dashboardContent = 
                (
                    <div>
                        <p>Welcome { user.name } </p>
                        <p> You have not set a profile yet. Please add some information</p>
                        <Link to="/create-profile">Create Profile</Link>
                    </div>
                )
            }
        }
        return (
            <div className="dashboard">
                <div className="container">
                    <div className="row">
                        <h1>Dashboard</h1>
                        {dashboardContent}
                    </div>
                </div>
            </div>
        )
    }
}

Dashboard.propTypes = {
    getCurrentProfile: PropTypes.func.isRequired,
    deleteAccount: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    profile: PropTypes.object.isRequired
}
const mapStateToProps = state => ({
    profile: state.profile,
    auth: state.auth
});
export default connect(mapStateToProps, { getCurrentProfile, deleteAccount })(Dashboard);
