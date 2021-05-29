import {useEffect} from "react";
import PokeCard from "../components/PokeCard";


const NameSearch = ({pokemonList})=>{


    useEffect(()=>{
        console.log(pokemonList)
    },[pokemonList])


    return(
        <div className={'name-search'}>
            <label htmlFor="{'search-name'}">Type name</label>
            <input type="text" name={'search-name'}/>

            <div className="poke-list">

                <PokeCard url={'https://pokeapi.co/api/v2/pokemon/460/'}/>


            </div>


        </div>
    )
}
export default NameSearch