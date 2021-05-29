import {useEffect} from "react";


const NameSearch = ({pokemonList})=>{


    useEffect(()=>{
        console.log(pokemonList)
    },[pokemonList])


    return(
        <div className={'name-search'}>
            <label htmlFor="{'search-name'}">Type name</label>
            <input type="text" name={'search-name'}/>

            <div className="poke-list">





            </div>


        </div>
    )
}
export default NameSearch