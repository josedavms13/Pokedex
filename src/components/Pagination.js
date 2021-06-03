import {useState} from "react";
import './ComponentsCss/pagination.css'

const Pagination = ({resultsPerPage, totalResults, pagination})=>{

    const pageNumber = [];


    for(let i = 1; i<Math.ceil(totalResults / resultsPerPage); i++){


        pageNumber.push(i);

    }



    return(
        <nav className={'pagination'}>

                {pageNumber.map((number =>(<button onClick={(e)=> pagination(e.target.value)} value={number} key={number}>{number}</button>
                )))}

        </nav>
    )
}
export default Pagination