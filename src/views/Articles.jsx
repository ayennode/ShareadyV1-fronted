import React from 'react';

import '../assets/css/articles/articles.css'

import NavbarConnected from '../components/navbar/NavbarConnected'
import ArticleContent from '../components/articles/ArticleContent'
import AdsUser from '../components/articles/AdsUser'

const Articles = () => {
    return(<>
        <NavbarConnected />
        <div className="row">
            <div className="col-3">
                <AdsUser />
            </div>
            <div className="col-9">
                <ArticleContent />
            </div>
        </div>
    </>)
}

export default Articles;