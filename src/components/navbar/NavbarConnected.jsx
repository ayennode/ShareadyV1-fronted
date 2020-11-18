import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faNewspaper } from '@fortawesome/free-solid-svg-icons'

import Form from '../Form'
import NavbarConnectedMobile from './NavBarConnectedMobile'
import BoxUserSearch from './items/BoxUserSearch'

import '../../assets/css/navbar/navbarconnected.css'

const NavbarConnected = () => {
    const [stateSearch, setStateSearch] = useState("box-search-users none")

    const searchHandler = (e) => {
        if (e.target.value.length > 1) {
            setStateSearch("box-search-users")
        }else{
            setStateSearch("box-search-users none")
        }
    }
    return(<>
        <nav className="navbar">
            <div className="container">
                <a href="/home" className="title-nav-mob"><h1>SHAREADY</h1></a>

                <div className="nav-item">
                    <div className="wrap-search-content">
                        <Form type="text" class_name="form-control form-search" place="Search,..." action={searchHandler}/>
                        <div className={stateSearch}>
                            <BoxUserSearch />
                            <BoxUserSearch />
                            <BoxUserSearch />
                            <BoxUserSearch />
                            <BoxUserSearch />
                        </div>
                    </div>
                </div>

                <div className="nav-item wrap-icons">
                    <a href="/articles"><FontAwesomeIcon icon={faNewspaper} /></a>
                    <a href="/myprofile"><FontAwesomeIcon icon={faUser} /></a>
                    <a href="/notifications"><FontAwesomeIcon icon={faBell} /></a>
                </div>
            </div>
        </nav>

        <NavbarConnectedMobile />
    
    </>
    )
}

export default NavbarConnected;