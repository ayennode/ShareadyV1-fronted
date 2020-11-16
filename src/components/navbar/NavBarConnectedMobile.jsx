import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarConnectedMobile = () => {
    return(
        <div className="navbar-co-mobile">
            <div className="row nav-icon-mobile broke-row">
                <div className="col-3"><FontAwesomeIcon icon={faSearch}/></div>
                <div className="col-3">
                    <a href="/articles">
                        <FontAwesomeIcon icon={faNewspaper}/>
                    </a>
                </div>
                <div className="col-3">
                    <a href="">
                        <FontAwesomeIcon icon={faUser}/>
                    </a>
                </div>
                <div className="col-3"><FontAwesomeIcon icon={faBell}/></div>
            </div>
        </div>
    )
}

export default NavbarConnectedMobile;