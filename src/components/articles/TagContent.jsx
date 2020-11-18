import React from 'react';

import CreateArticle from '../articles/items/CreateArticle'
import CategoryChoose from '../articles/items/CategoryChoose'
import Article from '../articles/items/Article'

import ButtonBack from '../ButtonBack'

const TagContent = ({param}) => {
    return(<>
        <ButtonBack />

        <div className="box-articles">
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        <Article />
        </div>
    </>)
}

export default TagContent;