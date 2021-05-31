import {useParams} from "react-router-dom";
import {useEffect} from "react";

const PokedexTypes = ()=>{



    // useEffect(()=>{
    //     console.log(type);
    // },[type])

    const {type}= useParams()

    console.log(type);
    return(
        <div>
            <h1>Poketypes</h1>
        </div>
    )
}
export default PokedexTypes