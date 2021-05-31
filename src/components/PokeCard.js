import {useEffect, useState} from "react";
import './ComponentsCss/PokeCard.css'
import {Link} from 'react-router-dom'
const PokeCard = ({url}) => {


    const [pokeName, SetPokeName] = useState(null);
    const [pokeTypeA, SetPokeTypeA] = useState(null)
    const [pokeTypeB, SetPokeTypeB] = useState(null)
    const [pokeImage, SetPokeImage] = useState(null);


    useEffect(() => {

        fetch(url)
            .then(res => res.json())
            .then(data => {
                console.log(data);

                SetPokeName(data.name);
                SetPokeTypeA(data.types[0].type.name);
                if (data.types.length > 1) {
                    SetPokeTypeB(data.types[1].type.name);
                }
                SetPokeImage(data.sprites.front_default);
            });


        console.log(url);

    }, [url])


    return (
        <Link to={`/pokedex/pokemon/${pokeName}`}>

            <div className={'poke-card'}>
                <div className="image-container">

                    <img src={pokeImage} alt={pokeName}/>
                </div>

                <div className="poke-info">

                    <h1>{pokeName}</h1>
                    <h2>Type 1</h2>
                    <h3>{pokeTypeA}</h3>
                    {
                        pokeTypeB && <div>
                            <h2>Type 2</h2>
                            <h3>{pokeTypeB}</h3>
                        </div>

                    }
                </div>

            </div>
        </Link>
    )
}
export default PokeCard