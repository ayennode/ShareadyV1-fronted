import React from 'react';

const Form = ({type, class_name, place, action}) => {
    return(
        <input type={type} className={class_name} placeholder={place} onChange={action}/>
    )
}

export default Form;