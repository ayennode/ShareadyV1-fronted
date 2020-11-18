import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'

const NavbarConnectedMobile = () => {
    const [searchMobileClass, SetSearchMobileClass] = useState({0: "search-mobile", 1:"form-search-mobile none"})

    const searchHandler = () => {
        if (searchMobileClass[0] === "search-mobile big-width") {
            SetSearchMobileClass({...searchMobileClass, 0: "search-mobile", 1: "form-search-mobile none"})
        }else{
            SetSearchMobileClass({...searchMobileClass, 0: "search-mobile big-width", 1: "form-search-mobile"})
        }
    }

    return(<>
        <div className="navbar-co-mobile">
            <div className="row nav-icon-mobile broke-row">
                <div className="col-4">
                    <a href="/articles">
                        <FontAwesomeIcon icon={faNewspaper}/>
                    </a>
                </div>
                <div className="col-4">
                    <a href="/myprofile">
                        <FontAwesomeIcon icon={faUser}/>
                    </a>
                </div>
                <div className="col-4">
                    <a href="/notifications">
                        <FontAwesomeIcon icon={faBell}/>
                    </a>
                </div>
            </div>
        </div>

        <div className={searchMobileClass[0]}>
            <form className={searchMobileClass[1]}>
                <input type="text" className="form-control" placeholder="Search,..."/>
            </form>
            <FontAwesomeIcon icon={faSearch} onClick={searchHandler}/>
        </div>
    </>)
}

export default NavbarConnectedMobile;