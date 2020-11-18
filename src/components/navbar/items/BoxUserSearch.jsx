import React from 'react';

import userDefault from '../../../assets/img/user-default.svg.png'

import Image from '../../Image'

const BoxUserSearch = () => {
    return(
        <a href="" className="link-box-user">
            <div className="box-search-user">
                <Image src={userDefault} alt_name="picture user"/>
                <div className="text-user-search">User</div>
            </div>
        </a>
    )
}

export default BoxUserSearch;