import React from 'react';
import NavbarConnected from '../components/navbar/NavbarConnected'
import ButtonBack from '../components/ButtonBack'
import Image from '../components/Image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

import '../assets/css/profile/profile.css'
import userdefault from '../assets/img/user-default.svg.png'

const EditProfile = () => {
    return(<>
        <NavbarConnected />
        <div className="container">
            <ButtonBack />

            <div className="edit-box">
            <form>
                <div className="head-form-edit">
                    <div className="edit-pictures-user">
                        <Image src={userdefault} alt_name="user pictures" />
                        <input type="file" id="edit-pictures" className="none"/>
                        <label htmlFor="edit-pictures" className="edit-pictures">
                            <FontAwesomeIcon icon={faCamera} size="2x" className="icon-edit-pic"/>
                        </label>
                    </div>
                    
                    <button className="btn-edit-profile item-edit-form">
                        <span>Edit</span>
                    </button>

                </div>

                <input type="text" className="form-control item-edit-form" value="User"/>
                <textarea className="form-control item-edit-form" cols="20" rows="10" value="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Totam accusantium provident illum architecto quia adipisci fuga veritatis rerum vero?"></textarea>
                </form>
            </div>
        </div>
    </>)
}

export default EditProfile;