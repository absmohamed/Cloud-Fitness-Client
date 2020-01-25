import React from 'react'
import { Link } from 'react-router-dom';


const ProfileActions = () => {
    return (
        <div className="button" role="group">
            <Link to="/edit-profile" className="button">
                <i /> Edit Profile
            </Link>
            
        </div>
    )
}

export default ProfileActions;