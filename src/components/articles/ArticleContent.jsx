import React from 'react';

import CreateArticle from '../articles/items/CreateArticle'
import CategoryChoose from '../articles/items/CategoryChoose'
import Article from '../articles/items/Article'

const ArticleContent = () => {
    return(<>
        <CategoryChoose />

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
        
        <div className="create-box">
            <CreateArticle />
        </div>
    </>)
}

export default ArticleContent;