import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'

import styles from '../../assets/css/navbar/navbarmobile.css'

const NavBarMobile = ({class_name, action_cross}) => {

    return(
        <div className={class_name}>
            <div className="container-nav-mobile">
                <div><a href="">What ?</a></div>
                <div><a href="">Why ?</a></div>
                <div><a href="">Creator ?</a></div>
                <div className="btn-sign-mobile"><Button path="/home" content="Sign up" class_name="link-btn-sign"/></div>
                <div className="btn-sign-mobile"><Button path="/home" content="Sign in" class_name="link-btn-sign"/></div>
            </div>

            <FontAwesomeIcon icon={faTimes} className="cross-icon" onClick={action_cross}/>
        </div>
    )
}

export default NavBarMobile;