import React from 'react';

import Image from '../Image'

import userdefault from '../../assets/img/user-default.svg.png'

const NotificationBox = () => {
    return(
        <div className="box-notif">
            <a href=""><Image src={userdefault}/></a>
            
            <div className="content-notif">
                <div className="wrap-infos-notif">
                    <div className="infos-notif">
                        <h1>User</h1>
                        <h4 className="date-notif">17/11/2020</h4>
                    </div>
                    <a href="" className="btn-see-notif">See</a>
                </div>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laboriosam omnis dolore molestias, ratione iste suscipit cupiditate sapiente animi quis. Beatae, assumenda voluptatum labore illo quos eum numquam magnam laboriosam nulla.</p>
            </div>
        </div>
    )
}

export default NotificationBox;