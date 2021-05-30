import {useEffect, useState} from "react";
import PokeNameSuggest from "../components/PokeNameSuggest";
import filterNames from "../utilities/filterNamesOfObjectArray";


const NameSearch = ({pokemonList})=>{

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




    function handleSubmit(){


        console.log('search ' + searchValues);

    }


    return(
        <div className={'name-search'}>
            <label htmlFor="{'search-name'}">Type name</label>
            <input type="text" value={searchValues} name={'search-name'} onChange={(e)=>{SetSearchValues(e.target.value)}}/>
            {suggestToggle && <PokeNameSuggest pokeList={arrayOfNames} searchFilter={searchValues} handleSubmit={(data)=>{SetSearchValues(data)}} />}
            <button onClick={()=>{handleSubmit([(searchValues.toLowerCase()), 1])}}>Submit</button>


        </div>
    )
}
export default NameSearch