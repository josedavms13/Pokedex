import {Link, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import fetchByName from "../services/fetchByName";
import fetchByType from "../services/fetchByType";
import extractNameParamFromApi from "../utilities/extractNameParamFromApi";


const BigPokedex = () => {

    //region CARD INFO

    const [image, SetImage] = useState(null);

    const [pokeName, SetPokeName] = useState(null);

    const [baseHp, SetBaseHp]= useState(null);

    const [baseAttack, SetBaseAttak] = useState(null);

    const [baseDefense, SetBaseDefense] = useState(null);

    const [baseSpeed, SetBaseSpeed] = useState(null);

    const [weight, SetWeight] = useState(null);
    const [height, SetHeight] = useState(null);


    const [type1, SetType1] = useState(null);
    const [type2, SetType2] = useState(null);

    const [abilities, SetAbilities]=useState(null);

    const [textToSpeech, SetTextToSpeech] = useState('')

    const [veryStrongAgainst, SetVeryStrongAgainst ] = useState(null)
    const [notRecommendedAgainst, SetNotRecommendedAgainst ] = useState(null)


    //endregion card info

    //region FETCH BY RECEIVED PARAMS
    const {name} = useParams();

    useEffect(()=>{

        if(name){

            fetchByName(name)
                .then((data)=> {
                    console.log(data)

                    SetImage(setImageFunct(data.sprites))
                    SetPokeName(data.name.toUpperCase());
                    SetBaseHp(data.stats[0].base_stat);
                    SetBaseAttak(data.stats[1].base_stat);
                    SetBaseDefense(data.stats[2].base_stat);
                    SetBaseSpeed(data.stats[5].base_stat);
                    SetType1(toFirstUpper(data.types[0].type.name));
                    if(data.types[1])SetType2(toFirstUpper(data.types[1].type.name));
                    SetWeight((data.weight)/10);
                    SetHeight((data.height)/10);
                    SetAbilities(()=>{
                        const objectArray = data.abilities;
                        const result = [];

                        objectArray.forEach(element=>result.push(element.ability.name))

                        return result;
                    })


                })

        }

    },[name]);

    //endregion fetch by received params


    function setImageFunct(sprites){

        if(sprites.other.dream_world.front_default){
            return sprites.other.dream_world.front_default
        }else{
            return sprites.front_default
        }

    }

    useEffect(()=>{
        console.log(abilities);
    },[abilities])


    //region get types details

    useEffect(()=>{

        if(type1){
            fetchByType(type1.toLowerCase())
                .then(data => {
                    console.log(data);

                    SetVeryStrongAgainst(extractNameParamFromApi(data.damage_relations.double_damage_to))
                    SetNotRecommendedAgainst(extractNameParamFromApi(data.damage_relations.half_damage_to))
                });
        }

    },[type1])




    useEffect(()=>{

        const speech =`${pokeName}, is a ${type1} type pokemon.
        They are usually around ${height} tall, and have an average weight of ${weight}. 
        
        `


    },[pokeName, type1, height, weight])






    //endregion get types details

    function toFirstUpper(string){

        return (string.replace(string[0], string[0].toUpperCase()))

    }



    return (
        <div>
            <Link to={'/'} >
                <button>Home</button>
            </Link>

            <h1>{pokeName}</h1>


            <img src={image} alt=""/>

            <div className="characteristics">
                <h2>Weight : {weight}Kg </h2>
                <h2>Height : {height}m </h2>

            </div>

            <div className="stats">

                <h2>HP: {baseHp}</h2>
                <h2>Attack: {baseAttack}</h2>
                <h2>Defense: {baseDefense}</h2>
                <h2>Speed: {baseSpeed}</h2>
            </div>

            <div className="types">
                <h2>Type 1 : {type1} </h2>
                {type2&&<h2>Type 2 : {type2} </h2>}
            </div>


            <div className="strenght">

                {
                    veryStrongAgainst &&
                        <div>
                            <h2>Very strong against</h2>

                            <ul>
                                {veryStrongAgainst.map((type, key)=>{
                                    return(
                                        <li key={key}>{toFirstUpper(type)}</li>
                                    )
                                })}
                            </ul>
                        </div>

                }

                {
                    notRecommendedAgainst &&
                    <div>
                        <h2>Not recommended against</h2>

                        <ul>
                            {notRecommendedAgainst.map((type, key)=>{
                                return(
                                    <li key={key}>{toFirstUpper(type)}</li>
                                )
                            })}
                        </ul>
                    </div>

                }

            </div>


            <div className="abilities">

                <h2>Abilities</h2>
                <ul>
                {abilities&&abilities.map((element,key)=>{
                    return(
                        <li key={key}>{(element)}</li>
                    )
                })}

                </ul>
            </div>



        </div>
    )
}
export default BigPokedex