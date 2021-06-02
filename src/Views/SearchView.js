import {useEffect, useState} from "react";
import AbilitySearch from "../components/AbilitySearch";
import getAbilities from "../services/getAbilities";
import sortByName from "../utilities/sortByName";
import NameSearch from "../components/NameSearch";
import getPokemons from "../services/getPokemons";
import sortObjectFunction from "../utilities/sortObjectFunction";
import getTypes from "../services/getTypes";
import useUser from "../hooks/useUser";
import {Link, withRouter} from "react-router-dom";
import LogOut from "../components/LogOut";

const SearchView = ({handleSubmit})=>{



    let AbilityFETCHDONE = false;
    let PokeFETCHDONE = false;
    let TypeFETCHDONE = false;

    const {name} = useUser();

    const [inputValue, SetInputValue] = useState(null)

    const [textInputToggle, SetTextInputToggle] = useState(false);
    const [selectTypesToggle, SetSelectTypesToggle] = useState(false);
    const [abilityToggle, SetAbilityToggle]= useState(false);


    const [abilitySearchData, SetAbilitySearchData] = useState(null);
    const [pokeTypes, SetPokeTypes] = useState(null)
    const [pokemonsSearchData, SetPokemonsSearchData] = useState(null);


    const changeMethod = (e)=>{
        // if user choose name has to type in the text field.
        // if user choose search by type has to select it.

        switch (e) {
            case 'none-selected':
                SetTextInputToggle(false);
                SetSelectTypesToggle(false);
                SetAbilityToggle(false);

                break
            case 'name':
                setSearchByName();
                SetTextInputToggle(true);
                SetSelectTypesToggle(false);
                SetAbilityToggle(false);

                break
            case 'type':
                setSearchByType();
                SetTextInputToggle(false);
                SetSelectTypesToggle(true);
                SetAbilityToggle(false);

                break
            case 'ability':
                setSearchByAbilities()

                SetAbilityToggle(true);
                SetTextInputToggle(false);
                SetSelectTypesToggle(false);

                break
            default:
                break

        }
    }

    const setSearchByName = ()=>{


        if(!PokeFETCHDONE){
            getPokemons()
                .then((data)=>{SetPokemonsSearchData(sortObjectFunction(data.results))
                })
            PokeFETCHDONE = true;
        }

    }


    const setSearchByType =()=>{

        if(!TypeFETCHDONE) {
            getTypes()
                .then(data => SetPokeTypes(data.results));

            TypeFETCHDONE = true;
        }
    }

    const setSearchByAbilities = ()=>{


        if(!AbilityFETCHDONE){
            getAbilities()
                .then(data => {
                    SetAbilitySearchData(sortByName(data.results));
                    AbilityFETCHDONE = true;
                })
        }
    }



    const searchByName =(data)=>{

        SetInputValue(data);



    }

    const searchByType =()=>{



    }


    const searchByAbility = (data)=>{
        SetInputValue(data);

    }


    return(
        <div>
            <LogOut />
            <h1>Hello {name}</h1>
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

                {(textInputToggle&&pokemonsSearchData)&&
                <div className="search-by-name">
                    <NameSearch pokemonList={pokemonsSearchData} searchResult={(data)=> searchByName(data)} />
                </div>}

                {(selectTypesToggle&&pokeTypes)&&
                <div className="search-by-type">
                    <select name="type-selection" id="type-selection" onChange={(e)=> SetInputValue(e.target.value)}>
                        {pokeTypes.map((element) => {
                            return <option value={element.name} key={element.name}>{element.name}</option>
                        })}
                    </select>

                    <Link to={`/pokedex/types/${inputValue}`} > <button onClick={()=>{searchByType()}}>Submit</button></Link>
                </div>}


                {(abilityToggle && abilitySearchData) && <AbilitySearch abilitiesList={abilitySearchData} abilitySelected={(data)=>searchByAbility(data)} />}

            </div>





        </div>



    )
}
export default withRouter(SearchView);