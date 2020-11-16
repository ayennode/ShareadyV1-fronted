import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faThumbsUp, faThumbsDown, faComment } from '@fortawesome/free-solid-svg-icons'

const Likes = () => {
    return(
        <div className="wrap-likes">
            <div className="like-item">
                <a href=""><FontAwesomeIcon icon={faHeart} className="heart" /></a>
                <span className="nbs-item">1</span>
            </div>

            <div className="like-item">
                <a href=""><FontAwesomeIcon icon={faThumbsUp} /></a>
                <span className="nbs-item">5</span>
            </div>

            <div className="like-item">
                <a href=""><FontAwesomeIcon icon={faThumbsDown} /></a>
                <span className="nbs-item">2</span>
            </div>

            <div className="like-item">
                <a href=""><FontAwesomeIcon icon={faComment} /></a>
                <span className="nbs-item">10</span>
            </div>
        </div>
    )
}

export default Likes;