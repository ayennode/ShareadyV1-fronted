import React from 'react';
import Fade from 'react-reveal/Fade';

import styles from '../../assets/css/home/whybox.css'
import wave from '../../assets/img/home/wave1.svg'
import goodcontent from '../../assets/img/home/good-content.svg'
import collaboration from '../../assets/img/home/collaboration.svg'
import follow from '../../assets/img/home/follow.svg'

import Image from '../Image'
import CardHome from './items/CardHome'

const WhyBox = () => {
    return(<div>
        <div className="img-wave2"><Image src={wave} alt_name="wave" /></div>
        <Fade bottom>
            <div>
                <div className="whybox">
                    <div className="container">
                        <div className="row">
                            <CardHome src={goodcontent} alt_name="good content" content="Best content"/>
                            <CardHome src={collaboration} alt_name="collaboration" content="Enjoy the posts"/>
                            <CardHome src={follow} alt_name="follow" content="Follow your friends"/>
                        </div>
                    </div>
                </div>
            </div>
        </Fade>
    </div>
    )
}

export default WhyBox;