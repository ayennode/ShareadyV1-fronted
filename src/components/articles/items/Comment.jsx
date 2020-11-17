import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp, faThumbsDown } from '@fortawesome/free-solid-svg-icons'

import Image from '../../Image'

import userdefault from '../../../assets/img/user-default.svg.png'

const Comment = () => {
    return(
        <div className="box-comment">
            <div className="wrap-head-comment">
                <Image src={userdefault} alt_name="user pictures" />

                <div className="infos-comment">
                    <h1>User</h1>
                    <h4 className="date-comment">17-11-2020</h4>
                </div>
            </div>

            <div className="content-comment">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae incidunt earum unde enim voluptate in vel cupiditate quam porro ratione non officia sunt fuga libero amet ipsum, corrupti dolorem. Delectus!
            </div>

            <div className="wrap-btn-pertinent">
                <div className="btn-pertinent">
                    <div className="btn-like-comment">
                        <FontAwesomeIcon icon={faThumbsUp} size="2x" fixedWidth/>
                    </div>
                    <div className="nbs-pertinent">2</div>
                </div>
                <div className="btn-pertinent">
                    <div className="btn-like-comment">
                        <FontAwesomeIcon icon={faThumbsDown} size="2x" fixedWidth/>
                    </div>
                    <div className="nbs-pertinent">2</div>
                </div>
            </div>
        </div>
    )
}

export default Comment;