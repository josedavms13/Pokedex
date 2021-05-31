import {useParams} from "react-router-dom";
import {useEffect} from "react";


const BigPokedex = () => {

    const {name} = useParams();

    useEffect(()=>{

        console.log(name);
    },[name]);
    return (
        <div>
            <h1>PokeDex</h1>
        </div>
    )
}
export default BigPokedex