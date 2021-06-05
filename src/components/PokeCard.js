import {useEffect, useState} from "react";
import './ComponentsCss/PokeCard.css'
import {Link} from 'react-router-dom'
import firstUpperCase from "../utilities/firstUpperCase";

const PokeCard = ({url}) => {


    const [pokeName, SetPokeName] = useState(null);
    const [pokeTypeA, SetPokeTypeA] = useState(null)
    const [pokeTypeB, SetPokeTypeB] = useState(null)
    const [pokeImage, SetPokeImage] = useState(null);


    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {

                SetPokeName(data.name);
                SetPokeTypeA(data.types[0].type.name);
                if (data.types.length > 1) {
                    SetPokeTypeB(data.types[1].type.name);
                }
                SetPokeImage(data.sprites.front_default);
            });



    }, [url])


    return (
        <Link to={`/pokedex/pokemon/${pokeName}`}>

            <div className={'poke-card'}>
                <div className="image-container">

                    <img src={pokeImage} alt={pokeName}/>
                </div>

                <div className="poke-info">
                    <div className="poke-name">
                        <h1>{firstUpperCase(pokeName)}</h1>
                    </div>
                    <div className="poke-types">
                        <h2>Types</h2>
                        <h3>{firstUpperCase(pokeTypeA)} / {pokeTypeB && firstUpperCase(pokeTypeB)} </h3>

                    </div>
                </div>

            </div>
        </Link>
    )
}
export default PokeCard