import React from 'react';

import NavbarConnected from '../components/navbar/NavbarConnected'
import NotificationBox from '../components/notification/NotificationBox'

import '../assets/css/notification/notification.css'

const Notification = () => {
    return(<>
        <NavbarConnected />
        <div className="wrap-notif">
            <div className="container">
                <NotificationBox />
                <NotificationBox />
                <NotificationBox />
                <NotificationBox />
            </div>
        </div>
    </>)
}

export default Notification;