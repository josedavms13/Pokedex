
const PokeNameSuggest = ({pokeList, searchFilter, handleSubmit})=>{



return(
    <div className={'poke-suggestion'}>
        {/* eslint-disable-next-line array-callback-return */}
        {pokeList.filter((element)=>{
            if(element.toLowerCase().includes(searchFilter.toLowerCase())){
                return element
            }
        }).map((element, key)=>{
            return (<button value={element} key={key} onClick={(e)=>{return  handleSubmit(e.target.value)}}>{element}</button>)
        })}
    </div>
)
}
export default PokeNameSuggest