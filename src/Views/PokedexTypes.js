import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate'

import fetchByType from "../services/fetchByType";
import PokeCard from "../components/PokeCard";

import './ViewsCss/pokedexTypes.css'
import firstUpperCase from "../utilities/firstUpperCase";


const PokedexTypes = () => {


    //region Get param from URL and fetch

    const {type} = useParams()

    const [pokes, SetPokes] = useState(null);


    useEffect(() => {
        if (type) {

            fetchByType(type)
                .then(data => SetPokes(data.pokemon))

        }
    }, [type])


    // endregion get params from url and fetch

    //region Paginate


    const [pageNumber, SetPageNumber] = useState(0);

    const [cardsPerPage] = useState(4);

    const pagesViewed = pageNumber * cardsPerPage;

    const [cardsToShow, SetCardsToShow] = useState(null)

    const [pageCount, SetPageCount] = useState(null)


    const [pagesToShow] = useState(10)

    useEffect(() => {
        if (pokes) {
            SetCardsToShow(pokes.slice(pagesViewed, pagesViewed + cardsPerPage))
            SetPageCount(Math.ceil((pokes.length / cardsPerPage)))
        }

    }, [pokes, pageNumber, cardsPerPage, pagesViewed])


    function changePage({selected}) {
        SetPageNumber(selected);


    }


    //endregion paginate

    return (
        <div className={'pokedex-types'}>
            <div className="pokedex-header">
                <h1>Pokedex type {firstUpperCase(type)}</h1>
                <div className="home-button">
                    <Link to={'/pokedex'}>
                        <button>HOME</button>
                    </Link>
                </div>

            </div>

            <div className="poke-card-container">


                {cardsToShow && cardsToShow.map((element, key) => {
                    return (<PokeCard url={element.pokemon.url} key={key}/>)
                })}
            </div>
            <div className="pagination-container">
                <ReactPaginate
                    previousLabel={'Previous'}
                    nextLabel={'next'}
                    pageCount={pageCount}
                    pageRangeDisplayed={(pagesToShow - 2)}
                    marginPagesDisplayed={0}
                    onPageChange={changePage}
                    containerClassName={'pagination'}
                    previousLinkClassName={'previous-button'}
                    pageClassName={'page-button'}
                    nextLinkClassName={'nextButton'}
                    activeClassName={'active-Button'}

                />
            </div>
        </div>
    )
}
export default PokedexTypes