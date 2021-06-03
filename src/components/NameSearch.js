import '../Views/ViewsCss/SearchView.css'
import {useEffect, useState} from "react";
import PokeNameSuggest from "./PokeNameSuggest";
import {Link} from 'react-router-dom'

import filterNames from "../utilities/filterNamesOfObjectArray";


const NameSearch = ({pokemonList, searchResult})=>{

    const [suggestToggle, SetSuggestToggle] = useState(false);

    const [searchValues, SetSearchValues] = useState('');

    const [arrayOfNames, SetArrayOfNames] = useState([]);
    useEffect(()=>{

        if(searchValues){
            SetSuggestToggle(true);
        }
        else {
            SetSuggestToggle(false);
        }
    },[searchValues])


    useEffect(()=>{
        if(pokemonList) {
            SetArrayOfNames(filterNames(pokemonList))
        }
    },[pokemonList])






    return(
        <div className={'name-search'}>
            <label htmlFor="{'search-name'}">Type name</label>
            <input type="text" value={searchValues} name={'search-name'} onChange={(e)=>{SetSearchValues(e.target.value)}}/>
            {suggestToggle && <div className={'poke-suggest'}>

                <PokeNameSuggest pokeList={arrayOfNames} searchFilter={searchValues} handleSubmit={(data)=>{SetSearchValues(data)}} />
            </div>}
            <Link to={`/pokedex/pokemon/${searchValues.toLowerCase()}`}>

                <button>Submit</button>
            </Link>


        </div>
    )
}
export default NameSearch