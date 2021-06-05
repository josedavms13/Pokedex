import {useEffect, useState} from "react";

const PokeNameSuggest = ({pokeList, searchFilter, handleSubmit})=>{

    const [pokeListOptionsToggle, SetPokeListOptionsToggle] = useState(null);
    useEffect(()=>{

        if(pokeList && searchFilter){
            console.log(pokeList);
            SetPokeListOptionsToggle(true);
        }

    },[pokeList, searchFilter])



return(
    <div className={'poke-suggestion'}>
        {pokeList.filter((element)=>{
            if(element.toLowerCase().includes(searchFilter.toLowerCase())){
                return element
            }
        }).map((element, key)=>{
            return (<button value={element} key={key} onClick={(e)=>{handleSubmit(e.target.value)}}>{element}</button>)
        })}
    </div>
)
}
export default PokeNameSuggest