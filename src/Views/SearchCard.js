import {useEffect, useState} from "react";
import AbilitySearch from "./AbilitySearch";
import getAbilities from "../services/getAbilities";
import sortByName from "../utilities/sortByName";
import NameSearch from "./NameSearch";
import getPokemons from "../services/getPokemons";
import sortObjectFunction from "../utilities/sortObjectFunction";

const SearchCard = ({pokeTypes, handleSubmit})=>{

    let AbilityFETCHDONE = false;
    let PokeFETCHDONE = false;

    console.log({pokeTypes});

    const [searchMethod, SetSearchMethod] = useState(0);
    const [inputValue, SetInputValue] = useState(null)

    const [textInputToggle, SetTextInputToggle] = useState(false);
    const [selectToggle, SetSelectToggle] = useState(false);
    const [abilityToggle, SetAbilityToggle]= useState(false);

    const [abilitySearchData, SetAbilitySearchData] = useState(null);
    const [pokemonsSearchData, SetPokemonsSearchData] = useState(null);


    const changeMethod = (e)=>{
        // if user choose name has to type in the text field.
        // if user choose search by type has to select it.

        switch (e) {
            case 'none-selected':
                SetSearchMethod(e);
                SetTextInputToggle(false);
                SetSelectToggle(false);
                SetAbilityToggle(false);

                break
            case 'name':
                searchByName();
                SetSearchMethod(e);
                SetTextInputToggle(true);
                SetSelectToggle(false);
                SetAbilityToggle(false);

                break
            case 'type':
                SetSearchMethod(e);
                SetTextInputToggle(false);
                SetSelectToggle(true);
                SetAbilityToggle(false);

                break
            case 'ability':
                searchByAbilities()
                SetSearchMethod(e);

                SetTextInputToggle(false);
                SetSelectToggle(false);

                break
            default:
                break

        }
    }


    const searchByAbilities = ()=>{

        SetSelectToggle(false);
        SetTextInputToggle(false);

        if(!AbilityFETCHDONE){
            getAbilities()
                .then(data => {
                    SetAbilitySearchData(sortByName(data.results));
                    AbilityFETCHDONE = true;
                })
        }
    }

    const searchByName = ()=>{

        SetSelectToggle(false);
        SetAbilityToggle(false);

        if(!PokeFETCHDONE){
            getPokemons()
                .then((data)=>{SetPokemonsSearchData(sortObjectFunction(data.results))
        })
        }

    }


    useEffect(()=>{

        if(pokemonsSearchData){
            SetTextInputToggle(true);
        }

    },[pokemonsSearchData])


    useEffect(()=>{

        if(abilitySearchData){
            SetAbilityToggle(true);
        }
    },[abilitySearchData])




    return(
        <div>

            <div>
                <label htmlFor="search-type">Search by...</label>

                <select name="search-type" id="search-type" onChange={(e) => {
                    changeMethod(e.target.value)
                }}>
                    <option value="none-selected">Select one</option>
                    <option value="name">Name</option>
                    <option value="type">Type</option>
                    <option value="ability">Ability</option>
                </select>

                {textInputToggle&&
                <div className="search-by-name">
                    <NameSearch pokemonList={pokemonsSearchData}  />
                </div>}

                {selectToggle&&
                <div className="search-by-type">
                    <select name="type-selection" id="type-selection" onChange={(e)=> SetInputValue(e.target.value)}>
                        {pokeTypes.map((element) => {
                            return <option value={element.name} key={element.name}>{element.name}</option>
                        })}
                    </select>

                    <button>Submit</button>
                </div>}


                {abilityToggle && <AbilitySearch abilitiesList={abilitySearchData}  />}

            </div>





        </div>



    )
}
export default SearchCard