import React, {useState} from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'

const FilterComment = () => {
    const [stateClassFilter, setClassFilter] = useState("wrap-choose-filter none")

    const handlerFilter = () => {
        if (stateClassFilter === "wrap-choose-filter none") {
            setClassFilter("wrap-choose-filter")
        }else{
            setClassFilter("wrap-choose-filter none")
        }
    }

    return(<>
        <div className="filter-comment">
            <div className="wrap-filter-co" onClick={handlerFilter}>
                <div className="text-filter-co">Most relevant</div>
                <div className="sort-icon"><FontAwesomeIcon icon={faSortDown} size="1x" fixedWidth /></div>
            </div>
        </div>

        <div className={stateClassFilter}>
            <div className="box-choose-filter">
                <div className="most-relevant btn-choose-f">
                    <h3>The most relevant</h3>
                    <p>All the most relevant comments.</p>
                </div>
                <div className="most-recent btn-choose-f">
                    <h3>The most recent</h3>
                    <p>All the most recent comments.</p>
                </div>
                <div className="oldest btn-choose-f">
                    <h3>The oldest</h3>
                    <p>All older comments.</p>
                </div>
            </div>
        </div>
    </>)
}

export default FilterComment