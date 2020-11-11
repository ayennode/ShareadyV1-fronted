import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from '../../assets/css/home/signupbox.css'

import iconsignup from '../../assets/img/icon-signup.svg'

import Form from '../Form'
import Button from '../Button'
import Image from '../Image'


const SignUpBox = () => {
    return(
        <div className="box_sign_up">
            <div className="container">
                <div className="row">
                <Fade top>
                    <div className="col-md-6 text-signup">
                        <h1>Shaready</h1>
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum iure et eius eos ab facere, aliquam esse, magnam voluptatem ut tenetur dolores eligendi? Neque voluptas deleniti, similique quidem illo quisquam.</p>
                    </div>
                    
                    
                    <form className="col-md-6 form-signup">
                        <div className="container-icon-signup">
                            <Image src={iconsignup} alt_name="icon signup"/>
                            <h1>Sign up</h1>
                        </div>
                        <Form type="text" place="Username" class_name="input-signup form-control"/>
                        <Form type="text" place="E-mail" class_name="input-signup form-control"/>
                        <Form type="text" place="Password" class_name="input-signup form-control"/>
                        <Form type="text" place="Confirm password" class_name="input-signup form-control"/>
                        <Button class_name="btn-sign-up" content="Sign up"/>
                    </form>
                </Fade>
                    
                </div>
            </div>
            <div className="background_signup"></div>
        </div>
    )
}

export default SignUpBox;