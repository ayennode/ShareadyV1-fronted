import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useHistory } from "react-router-dom";

const ButtonBack = () => {
    let history = useHistory()

    const handlerBack = () => {
        history.goBack()
    }

    return(
        <div className="btn-goback">
            <div className="icon-back" onClick={handlerBack}>
                <FontAwesomeIcon icon={faArrowLeft} />
            </div>
            <div className="text-back">Back</div>
        </div>
    )
}

export default ButtonBack;