import {useEffect, useState} from "react";

const PokeCard = ({url}) => {

    const [pokeName, SetPokeName] = useState(null);
    const [pokeType, SetPokeType] = useState(null)
    const [pokeImage, SetPokeImage] = useState(null);


    useEffect(()=>{

        fetch(url)
            .then(res=> res.json())
            .then(data=>console.log(data));


    },[url])


    return (
        <div>


        </div>)
}
export default PokeCard