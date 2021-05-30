import '../Views/ViewsCss/AbilitySearch.css'

import {useEffect, useState} from "react";
import Pagination from "./Pagination";


const AbilitySearch = ({abilitiesList, abilitySelected})=>{

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
            SetCurrentPage(1);
            SetResultsPerPage(abilitiesList.length);
        }

    },[searchInput, abilitiesList])


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
                </div>

                <div className="ability-block">

                    {/* eslint-disable-next-line array-callback-return */}
                    {abilitiesList &&currentResult.filter((element) =>{
                        if(searchInput === ''){
                            return element
                        }
                        else if(element.toLowerCase().includes(searchInput.toLowerCase())){
                            return element
                        }
                    }).map((ability, key)=> <button onClick={(e)=>{abilitySelected(e.target.value)}} key={key} value={ability}>{ability}</button>
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