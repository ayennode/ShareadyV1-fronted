import React from 'react';

import '../assets/css/profile/profile.css'

import UserPresentation from '../components/profile/UserPresentation'
import NavbarConnected from '../components/navbar/NavbarConnected'
import Article from '../components/articles/items/Article'

const MyProfile = () => {
    return(<>
        <NavbarConnected />
        <div className="profile">
            <div className="container">
                <UserPresentation />
                <Article />
                <Article />
                <Article />
            </div>
        </div>
    </>)
}

export default MyProfile;