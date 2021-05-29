import {useEffect, useState} from "react";

const PokeCard = ({url}) => {

    const [pokeName, SetPokeName] = useState(null);
    const [pokeTypeA, SetPokeTypeA] = useState(null)
    const [pokeTypeB, SetPokeTypeB] = useState(null)
    const [pokeImage, SetPokeImage] = useState(null);



    useEffect(()=>{

        fetch(url)
            .then(res=> res.json())
            .then(data=> {
                console.log(data);

                SetPokeName(data.name);
                SetPokeTypeA(data.types[0].type.name);
                SetPokeTypeB(data.types[1].type.name);
                SetPokeImage(data.sprites.front_default);
            });


        console.log(url);

    },[url])


    return (
        <div>
            <h1>Name</h1>
            <h2>{pokeName}</h2>
            <h1>Type 1</h1>
            <h2>{pokeTypeA}</h2>
            {
                pokeTypeB && <div>
                    <h2>Type 2</h2>
                    <h2>{pokeTypeB}</h2>
                </div>

            }
            <img src={pokeImage} alt={pokeName}/>

        </div>)
}
export default PokeCard