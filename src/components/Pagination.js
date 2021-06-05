import {useEffect, useState} from "react";
import './ComponentsCss/pagination.css'

const Pagination = ({resultsPerPage, totalResults, pagination, currentPage})=>{

    const pageNumber = [];

    const [selected] = useState('')

    useEffect(()=>{

    },[currentPage])

    for(let i = 1; i<Math.ceil(totalResults / resultsPerPage); i++){


        pageNumber.push(i);

    }



    return(
        <nav className={'pagination'}>

                {pageNumber.map((number =>(<button className={selected} onClick={(e)=> pagination(e.target.value)} value={number} key={number}>{number}</button>
                )))}

        </nav>
    )
}
export default Pagination