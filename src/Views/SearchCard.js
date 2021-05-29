import {useEffect, useState} from "react";
import AbilitySearch from "./AbilitySearch";
import getAbilities from "../services/getAbilities";
import sortByName from "../utilities/sortByName";

const SearchCard = ({pokeTypes, handleSubmit})=>{

    let FETCHDONE = false;

    console.log({pokeTypes});

    const [searchMethod, SetSearchMethod] = useState(0);
    const [inputValue, SetInputValue] = useState(null)

    const [textInputToggle, SetTextInputToggle] = useState(false);
    const [selectToggle, SetSelectToggle] = useState(false);
    const [abilityToggle, SetAbilityToggle]= useState(false);


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

        if(!FETCHDONE){
            getAbilities()
                .then(data => {
                    SetAbilitySearchData(sortByName(data.results));
                    FETCHDONE = true
                })
        }


    }

    const [abilitySearchData, SetAbilitySearchData] = useState(null);

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
                    <label htmlFor="search-by-name">Search by {searchMethod}</label>
                    <input type="text" onChange={(e)=> SetInputValue(e.target.value)}/>
                    <button>Submit</button>

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