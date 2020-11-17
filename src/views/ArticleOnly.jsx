import React from 'react';
import { useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons'


import Article from '../components/articles/items/Article'
import NavbarConnected from '../components/navbar/NavbarConnected'
import Comment from '../components/articles/items/Comment'
import ButtonBack from '../components/ButtonBack'
import FilterComment from '../components/articles/items/FilterComment'

import '../assets/css/articles/articleonly.css'

const ArticleOnly = () => {
    let { id_article } = useParams();

    return(<>
        <NavbarConnected />
        <div className="container">
            <ButtonBack />
            <div className="article-only">
                <Article other_class="box-article-only" />
            </div>
            <form className="form-article-only">
                <input type="text" className="form-control" placeholder="Comment,..."/>
                <button><FontAwesomeIcon icon={faPaperPlane} /></button>
            </form>
            <FilterComment />
            <Comment />
            <Comment />
            <Comment />
        </div>
    </>)
}

export default ArticleOnly;