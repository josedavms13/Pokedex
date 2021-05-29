import './App.css';
import {useEffect, useState} from "react";
import getTypes from "./services/getTypes";
import SearchCard from "./Views/SearchCard"

function App() {

const [pokeTypes, SetPokeTypes] = useState(null);

useEffect(()=>{

    getTypes()
        .then(data => SetPokeTypes(data.results));


},[])

    useEffect(()=>{
        if(pokeTypes){

            console.log(pokeTypes);
        }
    },[pokeTypes])

  return (
    <div>
        {pokeTypes&& <SearchCard pokeTypes={pokeTypes}/>}

    </div>
  )
}

export default App;
