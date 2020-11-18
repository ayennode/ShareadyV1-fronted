import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const TagBox = ({content, deleteAction}) => {
    return(
        <div className="tag-box">
            <div className="content-tag">{content}</div>
            <FontAwesomeIcon icon={faTimes} onClick={deleteAction}/>
        </div>
    )
}

export default TagBox;