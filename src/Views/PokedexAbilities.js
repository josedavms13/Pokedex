import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import ReactPaginate from 'react-paginate'

import fetchByType from "../services/fetchByType";
import PokeCard from "../components/PokeCard";
import fetchByAbility from "../services/fetchByAbility";

import './ViewsCss/pokedexAbility.css'
import './ViewsCss/paginationTools.css'

import firstUpperCase from "../utilities/firstUpperCase";


const PokeAbilities = () => {


    //region Get param from URL and fetch

    const {ability} = useParams()

    const [pokes, SetPokes] = useState(null);


    useEffect(() => {
        if (ability) {

            fetchByAbility(ability)
                .then(data => {


                    SetPokes(data.pokemon)
                });
        }
    }, [ability])


    // endregion get params from url and fetch

    //region Paginate


    const [pageNumber, SetPageNumber] = useState(0);

    const [cardsPerPage] = useState(4);

    const pagesViewed = pageNumber * cardsPerPage;

    const [cardsToShow, SetCardsToShow] = useState(null)

    const [pageCount, SetPageCount] = useState(null)


    const [pagesToShow] = useState(10)


    const [noPokeMessageToggle, SetNoPokeMessageToggle] = useState(false)

    useEffect(() => {


        if (pokes) {
            SetCardsToShow(pokes.slice(pagesViewed, pagesViewed + cardsPerPage))
            SetPageCount(Math.ceil((pokes.length / cardsPerPage)))

            if (pokes.length === 0) {
                SetNoPokeMessageToggle(true);
            } else {
                SetNoPokeMessageToggle(false);

            }
        }

    }, [pokes, pageNumber, cardsPerPage, pagesViewed])


    function changePage({selected}) {
        SetPageNumber(selected);


    }


    //endregion paginate

    return (
        <div className={'pokedex-abilities'}>
            <div className="header">
                <h1>Pokedex habilities {firstUpperCase(ability)}</h1>
                <div className="home-button">
                    <Link to={'/pokedex'}>
                        <button>HOME</button>
                    </Link>
                </div>

            </div>

            {noPokeMessageToggle && <div className="no-pokes-available">
                <h1>There is no pokemons registered with that ability in database</h1>
            </div>}

            <div className="poke-cards-container">

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
export default PokeAbilities