import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const CreateArticle = () => {
    const [classModal, setClassModal] = useState("modal-create-article none")

    const modal_click = (e) => {
        setClassModal("modal-create-article show_modal")
    }

    const hidden_modal = (e) => {
        setClassModal("modal-create-article none")
    }

    return(<>
        <div onClick={modal_click} className="btn-create-article">
            <FontAwesomeIcon icon={faPlus} />
        </div>

        <div className={classModal}>
            <FontAwesomeIcon icon={faTimes} className="stop-modal-create" onClick={hidden_modal}/>
            <div className="card-create">
                <h1>Create your article</h1>
                <form className="create-article-form">
                    <input type="text" className="form-control item-form-create" placeholder="Title"/>
                    <textarea cols="30" rows="10" className="form-control item-form-create" placeholder="Content"></textarea>
                    <input type="text" className="form-control item-form-create" placeholder="Tags,.."/>
                    <button>Send</button>
                </form>
            </div>
        </div>
    </>)
}

export default CreateArticle;