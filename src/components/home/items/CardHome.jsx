import React from 'react';

import Image from '../../Image'

const CardHome = ({src, alt_name, content}) => {
    return(
        <div className="col-md-4">
            <div className="box-card-why">
                <Image src={src} alt_name={alt_name} />
                <h1>{content}</h1>
            </div>
        </div>
    )
}

export default CardHome;