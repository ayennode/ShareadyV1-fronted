import React from 'react';
import dotenv from 'dotenv'

import styles from '../../assets/css/login/login.css'
import loginimg from '../../assets/img/login/login.svg'

import Image from '../Image'
import Form from '../Form'
import Buttom from '../Button'
import Button from '../Button';

dotenv.config()
const LoginBox = () => {
    return(
        <div className="login-box">
            <div className="bar-left-log"></div>         
            <div className="row broke-row">
                <form className="col-md-6 form-login-wrap">
                    <h1 className="title-login">Welcome to Shaready</h1>
                    <p>Please sign In</p>
                    <div className="g-signin2" data-onsuccess="onSignIn"></div>
                    <Form type="text" class_name="form-control form-login login-in" place="Username" />
                    <Form type="password" class_name="form-control form-login" place="Password" />

                    <div className="wrap-pass-for">
                        <Button path="" class_name="pass-forgot" content="Forgot password ?" />
                    </div>

                    <div className="wrap-btn-login">
                        <button className="btn-login signin">Sign in</button>
                        <Button path="/home" class_name="btn-login signup" content="Sign up"/>
                    </div>

                    <p className="prevention-text">By logging in, you accept the terms and conditions of use.</p>
                </form>
            </div>

            <div className="img-login">
                <Image src={loginimg} alt_name="pic login"/>
            </div>
        </div>
    )
}

export default LoginBox;