import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import Form from '../Form'
import Button from '../Button'
import NavbarConnectedMobile from './NavBarConnectedMobile'

import '../../assets/css/navbar/navbarconnected.css'

const NavbarConnected = () => {
    return(<>
        <nav className="navbar">
            <div className="container">
                <a href="/home" className="title-nav-mob"><h1>SHAREADY</h1></a>

                <div className="nav-item">
                    <Form type="text" class_name="form-control form-search" place="Search,..." />
                </div>

                <div className="nav-item wrap-icons">
                    <a href="/articles"><FontAwesomeIcon icon={faNewspaper} /></a>
                    <a href="/myprofile"><FontAwesomeIcon icon={faUser} /></a>
                    <Button content={<FontAwesomeIcon icon={faBell} path="" />}/>
                </div>
            </div>
        </nav>

        <NavbarConnectedMobile />
    
    </>
    )
}

export default NavbarConnected;