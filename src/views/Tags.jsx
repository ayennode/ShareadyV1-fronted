import React from 'react';
import { useParams } from "react-router-dom";

import NavBarconnected from '../components/navbar/NavbarConnected'
import AdsUser from '../components/articles/AdsUser'
import TagContent from '../components/articles/TagContent'

const Tags = () => {
    let { name_tag } = useParams();
    
    return(<>
        <NavBarconnected />
        <div className="row">
            <div className="col-3">
                <AdsUser />
            </div>
            <div className="col-9">
                <TagContent param={name_tag}/>
            </div>
        </div>
    </>)
}

export default Tags;