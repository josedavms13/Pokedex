
const PokeNameSuggest = ({pokeList, searchFilter, handleSubmit})=>{



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