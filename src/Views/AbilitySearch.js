import './ViewsCss/AbilitySearch.css'

import {useEffect, useState} from "react";
import Pagination from "../components/Pagination";


const AbilitySearch = ({abilitiesList})=>{




    // Pagination

    const [currentPage, SetCurrentPage] = useState(1);
    const [resultsPerPage, SetResultsPerPage] = useState(30)



    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage
    const currentResult = abilitiesList.slice(indexOfFirstResult, indexOfLastResult);


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

    return(
        <div>
            <div className="search-options">
                <h4>Display Options</h4>
                <p>You can either type the ability you are looking for, or see available abilities.</p>

                <div className="search-by-type">
                    <label htmlFor="ability-name">Filter name</label>
                    <input type="text" name={'ability-name'}/>
                    <button>Submit</button>
                </div>

                <div className="ability-block">

                    {abilitiesList &&
                    currentResult.map((ability)=> <button key={ability.key} value={ability}>{ability}</button>
                    )



                    }

                    {abilitiesList&&

                        <Pagination  resultsPerPage={resultsPerPage} totalResults={abilitiesList.length} pagination={(numb)=>pagination(numb)}/>

                    }



                </div>



            </div>


            {abilitiesList&&
            <div className="abilities-block">

            </div>}


        </div>
    )
}
export default AbilitySearch