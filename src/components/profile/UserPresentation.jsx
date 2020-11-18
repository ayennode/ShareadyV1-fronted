import React from 'react';

import Image from '../Image'

import userdefault from '../../assets/img/user-default.svg.png'

const UserPresentation = () => {
    return(
        <div className="presentation">
            <Image src={userdefault} />
            <div className="content-pres">
                <div className="wrap-edit-title">
                    <h1>User</h1>
                    <div className="btn-edit-pro">
                    <a href="/myprofile/edit/"><span>Edit</span></a>
                    </div>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusantium provident illum architecto quia adipisci fuga veritatis rerum vero?</p>

                <div className="wrap-stat-user">
                    <div className="nbs-followers">17 
                        <div>Followers</div>
                    </div>
                    <div className="btn-follow">
                        <span>Follow</span>
                    </div>
                    <div className="nbs-gold-likes">58 
                        <div>Gold likes</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserPresentation;