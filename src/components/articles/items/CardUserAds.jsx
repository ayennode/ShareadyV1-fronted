import React from 'react';

import userdefault from '../../../assets/img/user-default.svg.png'

import Image from '../../Image'

const CardUserAds = () => {
    return(
        <a href="" className="link-user-ads">
            <div className="box-card-user-ads">
                
                <div className="img-card-user-ads">
                    <Image src={userdefault} alt_name="user" />
                </div>
                
                <div className="content-card-user">
                    <h1>User</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
                </div>

            </div>
        </a>
    )
}

export default CardUserAds;