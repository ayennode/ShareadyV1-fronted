import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFeatherAlt, faTimes } from '@fortawesome/free-solid-svg-icons'
import TagBox from './TagBox'

const CreateArticle = () => {
    const [classModal, SetClassModal] = useState("modal-create-article none")
    const [stateValueTag, SetValueTag] = useState("")
    const [tags, SetTags] = useState([])

    const modal_click = (e) => {
        SetClassModal("modal-create-article show_modal")
    }

    const hidden_modal = (e) => {
        SetClassModal("modal-create-article none")
    }

    const tagsValueHandler = (e) => {
        SetValueTag(e.target.value)
    }

    const tagsHandler = (e) => {
        if (e.code === "Space") {
            if (tags.length >= 3) {
                SetValueTag("")
            } else{
                SetTags([...tags, e.target.value])
                SetValueTag("")
            }
        }
    }

    const deleteTag = (i) => {
        SetTags([...tags.filter((_, index) => index !== i)])
    }

    return(<>
        <div onClick={modal_click} className="btn-create-article">
            <FontAwesomeIcon icon={faFeatherAlt} size="2x"/>
        </div>

        <div className={classModal}>
            <FontAwesomeIcon icon={faTimes} className="stop-modal-create" onClick={hidden_modal}/>
            <div className="card-create">
                <h1>Create your article</h1>
                <form className="create-article-form">
                    <input type="text" className="form-control item-form-create" placeholder="Title"/>
                    <textarea cols="30" rows="10" className="form-control item-form-create" placeholder="Content"></textarea>
                    <input type="text" className="form-control item-form-create" placeholder="Tags,.." value={stateValueTag} onChange={tagsValueHandler} onKeyDown={tagsHandler}/>
                    <span className="wrap-tag-box">
                        {tags.map((tag, i) => <TagBox key={i} content={tag} deleteAction={() => deleteTag(i)}/>)}
                    </span>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </>)
}

export default CreateArticle;