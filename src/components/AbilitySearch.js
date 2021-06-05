import '../Views/ViewsCss/SearchView.css'
import {useEffect, useState} from "react";
import Pagination from "./Pagination";
import {Link} from "react-router-dom"

const AbilitySearch = ({abilitiesList, abilitySelected}) => {

    //region Searching filter

    const [searchInput, SetSearchInput] = useState('')


    //endregion searching filter


    //region Pagination

    const [currentPage, SetCurrentPage] = useState(1);
    const [resultsPerPage, SetResultsPerPage] = useState(30)


    const indexOfLastResult = currentPage * resultsPerPage;
    const indexOfFirstResult = indexOfLastResult - resultsPerPage
    const currentResult = abilitiesList.slice(indexOfFirstResult, indexOfLastResult);


    useEffect(() => {

        if (searchInput === '') {
            SetResultsPerPage(30)
        } else {
            SetCurrentPage(1);
            SetResultsPerPage(abilitiesList.length);
        }

    }, [searchInput, abilitiesList])


    // Change page

    const pagination = (numb) => {
        if (numb !== 0) {
            SetCurrentPage(numb);
            SetResultsPerPage(30);
        } else {
            SetCurrentPage(1);
            SetResultsPerPage(abilitiesList.length);
        }
    }

    //endregion Pagination

    return (
        <div className={'search-by-ability'}>
            <div className="search-options">
                <div className="header">
                    <h4>Search by Ability</h4>

                    <div className={'filter-input'}>
                        <label htmlFor="ability-name">Filter by Ability Name</label>
                        <input type="text" placeholder={'ex: analytic... '} name={'ability-name'} onChange={(e) => {
                            SetSearchInput(e.target.value)
                        }}/>
                    </div>
                </div>
                <div className="ability-block">

                    {/* eslint-disable-next-line array-callback-return */}
                    {abilitiesList && currentResult.filter((element) => {
                        if (searchInput === '') {
                            return element
                        } else if (element.toLowerCase().includes(searchInput.toLowerCase())) {
                            return element
                        }
                    }).map((ability, key) => <Link key={key} to={`/pokedex/abilities/${ability}`}>
                            <button onClick={(e) => {
                                abilitySelected(e.target.value)
                            }} value={ability}>{ability}</button>
                        </Link>
                    )


                    }
                </div>
                    {abilitiesList &&

                    <Pagination currentPage={currentPage} resultsPerPage={resultsPerPage} totalResults={abilitiesList.length}
                                pagination={(numb) => pagination(numb)}/>

                    }





            </div>


        </div>
    )
}
export default AbilitySearch