import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate'

import fetchByType from "../services/fetchByType";
import PokeCard from "../components/PokeCard";



const PokeAbilities = ()=>{


    //region Get param from URL and fetch

    const {ability}= useParams()

    const [pokes, SetPokes] = useState(null);



    useEffect(()=>{
        if(ability){

            fetchByType(ability)
                .then(data=> SetPokes(data.pokemon))

        }
    },[ability])



    // endregion get params from url and fetch

    //region Paginate


    const [pageNumber, SetPageNumber] = useState(0);

    const [cardsPerPage] = useState(4);

    const pagesViewed = pageNumber * cardsPerPage;

    const [cardsToShow, SetCardsToShow] = useState(null)

    const [pageCount, SetPageCount] = useState(null)


    const [pagesToShow, SetPagesToShow]= useState(10)

    useEffect(()=>{
        if(pokes){
            SetCardsToShow(pokes.slice(pagesViewed, pagesViewed + cardsPerPage))
            SetPageCount( Math.ceil((pokes.length/cardsPerPage)))
        }

    },[pokes, pageNumber, cardsPerPage, pagesViewed])


    function changePage({selected}){
        SetPageNumber(selected);


    }




    //endregion paginate

    return(
        <div>

            {cardsToShow && cardsToShow.map((element, key)=>{
                return ( <PokeCard url={element.pokemon.url} key={key}/>)
            })}
            <ReactPaginate
                previousLabel={'Previous'}
                nextLabel={'next'}
                pageCount={pageCount}
                pageRangeDisplayed={(pagesToShow-2)}
                marginPagesDisplayed={0}
                onPageChange={changePage}
                containerClassName={'pagination'}
                previousLinkClassName={'previous-button'}
                nextLinkClassName={'nextButton'}
                activeClassName={'active-Button'}

            />
        </div>
    )
}
export default PokeAbilities