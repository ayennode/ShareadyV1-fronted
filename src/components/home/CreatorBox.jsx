import React from 'react';
import Fade from 'react-reveal/Fade';

import Image from '../Image'

import styles from '../../assets/css/home/creatorbox.css'
import creator from '../../assets/img/home/creator.svg'

const CreatorBox = () => {
    return(
        <div className="creator-box">
            <div className="container">
                <div className="row">
                    <Fade top>
                        <div className="col-md-6 wrapper-image-crea item-crea"><Image src={creator} alt_name="creator" /></div>
                        <div className="col-md-6 item-crea">
                            <h1>Creator's shaready</h1>
                            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis molestiae odio quod illo architecto beatae labore quam, atque vel iure reiciendis voluptates totam dolores eius ullam autem commodi voluptatibus dignissimos.</p>
                        </div>
                    </Fade>
                </div>
            </div>
        </div>
    )
}

export default CreatorBox;