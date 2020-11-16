import React , {useState} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'

import Button from '../Button'
import NavBarMobile from './NavBarMobile'

import '../../assets/css/navbar/navbar.css'

const Navbar = () => {
    const [classNav, setStateClassNav] = useState("navbar-mobile none")

    const action_bars = (e) => {
        setStateClassNav("navbar-mobile slide_to_left")
    }

    const action_cross = (e) => {
        setStateClassNav("navbar-mobile slide_to_right")
    }
    
    return(
        <div className="navbar">
            <div className="container">
                <div className="navbar-brand">
                    <a href="/home"><h1>SHAREADY</h1></a>
                </div>
                
                <div className="nav-item">
                    <Button path="" content="What ?" class_name="btn-middle"/>
                    <Button path="" content="Why ?" class_name="btn-middle"/>
                    <Button path="" content="Creator ?" class_name="btn-middle"/>
                </div>

                <div className="container-btn-sign nav-item">
                    <Button path="/login" content="Sign in" class_name="btn-sign sign-in"/>
                    <Button path="/u" content="Sign up" class_name="btn-sign sign-up"/>
                </div>

                <Button content={<FontAwesomeIcon icon={faBars}/>} class_name="btn-bars" action={action_bars}></Button>
            </div>

            <NavBarMobile class_name={classNav} action_cross={action_cross}/>
        </div>
    )
}

export default Navbar;