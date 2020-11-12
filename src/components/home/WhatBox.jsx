import React from 'react';
import Fade from 'react-reveal/Fade';

import Image from '../Image'

import styles from '../../assets/css/home/whatbox.css'
import wave from '../../assets/img/wave.svg'
import logo from '../../assets/img/logo.svg'

const WhatBox = () => {

    return(
        <div className="what-box">
            
                <div className="row">
                    <Fade bottom>
                        <div className="col-md-6 item-whatbox">
                            <Image src={logo} />
                            <h1 className="title-what">Shaready</h1>
                        </div>
                    </Fade>

                    <Fade bottom>
                        <div className="col-md-6 item-whatbox text">
                            <h1>What ?</h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi quidem labore quae ad repellendus ut beatae earum. Nihil odit sed enim. Repudiandae numquam eum assumenda velit officia! Eaque, odio distinctio?</p>
                        </div>
                    </Fade>
                </div>

            <div className="border-right"></div>
        </div>
    )
}

export default WhatBox;