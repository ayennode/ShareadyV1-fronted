import React from 'react';

import Image from '../../Image'
import Tags from '../items/Tags'
import Likes from '../items/Likes'

import imageuser from '../../../assets/img/user-default.svg.png'

const Article = ({other_class}) => {
    return(
        <div className={"box-article " + other_class}>
            <div className="container">
                <div className="high-article">
                    <Image src={imageuser} alt_name="image user"/>
                    
                    <div className="content-head">
                        <h1>Title</h1>
                        
                        <div className="tags">
                            <Tags content="Science" />
                            <Tags content="Political" />
                        </div>

                    </div>
                </div>

                <div className="content-article">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam minus iste totam rerum repellendus tempore? Eius libero hic quibusdam. Dolor commodi id quam similique quas recusandae nobis necessitatibus illo fuga.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur soluta molestiae minima sapiente error aperiam? Sapiente quis repudiandae, animi quibusdam quam ipsam, eum earum reiciendis nulla, voluptates tempora praesentium deserunt.
                </div>
            </div>

            <Likes />
        </div>
    )
}

export default Article;