import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBell, faUser, faNewspaper, faSearch } from '@fortawesome/free-solid-svg-icons'
import BoxUserSearch from './items/BoxUserSearch'

const NavbarConnectedMobile = () => {
    const [searchMobileClass, SetSearchMobileClass] = useState({0: "search-mobile", 1:"form-search-mobile none"})
    const [searchBoxClass, SetSearchBoxClass] = useState("absolute big-width none")

    const searchHandler = () => {
        if (searchMobileClass[0] === "search-mobile big-width") {
            SetSearchMobileClass({0: "search-mobile", 1: "form-search-mobile none"})
        }else{
            SetSearchMobileClass({0: "search-mobile big-width", 1: "form-search-mobile"})
        }
    }

    const searchBoxHandler = (e) => {
        if (e.target.value.length > 1) {
            SetSearchBoxClass("absolute big-width")
        }else{
            SetSearchBoxClass("absolute big-width none")
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
                <div className="wrap-search-content">
                    <input type="text" className="form-control" placeholder="Search,..." onChange={searchBoxHandler}/>
                    
                    <div className={searchBoxClass}>
                        <div className="container-box-user">
                            <BoxUserSearch />
                            <BoxUserSearch />
                            <BoxUserSearch />
                            <BoxUserSearch />
                        </div>
                    </div>
                    
                </div>
            </form>
            <FontAwesomeIcon icon={faSearch} onClick={searchHandler}/>
        </div>
    </>)
}

export default NavbarConnectedMobile;