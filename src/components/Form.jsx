import React from 'react';

const Form = ({type, class_name, place}) => {
    return(
        <input type={type} className={class_name} placeholder={place}/>
    )
}

export default Form;