import {useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchByType from "../services/fetchByType";

const PokedexTypes = ()=>{



    const {type}= useParams()

    const [pokes, SetPokes] = useState(null);



    useEffect(()=>{
        if(type){

            fetchByType(type)
                .then(data=> SetPokes(data))

        }
        console.log(type);
    },[type])


    useEffect(()=>{
        console.log(pokes
        )
    },[pokes])


    return(
        <div>
            <h1>Poketypes</h1>
        </div>
    )
}
export default PokedexTypes