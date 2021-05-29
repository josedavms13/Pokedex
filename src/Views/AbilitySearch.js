import './ViewsCss/AbilitySearch.css'

import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";


const AbilitySearch = ({abilitiesList})=>{

    //region Searching filter

    const [searchInput, SetSearchInput] = useState('')





    //endregion searching filter


    //region Pagination

    const [currentPage, SetCurrentPage] = useState(1);
    const [resultsPerPage, SetResultsPerPage] = useState(30)



    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage
    const currentResult = abilitiesList.slice(indexOfFirstResult, indexOfLastResult);


    useEffect(()=>{

        if(searchInput === ''){
            SetResultsPerPage(30)
        }
        else{
            pagination(0)
        }

    },[searchInput])


    // Change page

    const pagination =(numb)=>{
        console.log(numb);
        if(numb !== 0) {
            SetCurrentPage(numb);
            SetResultsPerPage(30);
        }else{
            SetCurrentPage(1);
            SetResultsPerPage(abilitiesList.length);
        }
    }

    //endregion Pagination

    return(
        <div>
            <div className="search-options">
                <h4>Display Options</h4>
                <p>You can either type the ability you are looking for, or see available abilities.</p>

                <div className="search-by-type">
                    <label htmlFor="ability-name">Filter name</label>
                    <input type="text" name={'ability-name'} onChange={(e)=>{SetSearchInput(e.target.value)}}/>
                    <button>Submit</button>
                </div>

                <div className="ability-block">

                    {abilitiesList && currentResult.filter((value)=> {
                        if(searchInput === ''){
                            return value
                        }
                        else if(value.toLowerCase().includes(searchInput.toLowerCase())){
                            return value
                        }
                    }) .map((ability, key)=> <button key={key} value={ability}>{ability}</button>
                    )



                    }

                    {abilitiesList&&

                        <Pagination  resultsPerPage={resultsPerPage} totalResults={abilitiesList.length} pagination={(numb)=>pagination(numb)}/>

                    }



                </div>



            </div>


        </div>
    )
}
export default AbilitySearch