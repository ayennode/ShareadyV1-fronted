import React from 'react';

const Image = ({src, alt_name}) => {
    return(
        <img src={src} alt={alt_name} />
    )
}

export default Image;