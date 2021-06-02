import './App.css';
import SearchView from "./Views/SearchView"
import BigPokedex from "./Views/BigPokedex";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import fetchByType from "./services/fetchByType";
import PokedexTypes from "./Views/PokedexTypes";
import PokedexAbilities from "./Views/PokedexAbilities";
import LogIn from "./Views/LogIn";
import AuthProvider from "./provider/AuthProvider";
import SignUp from "./Views/SignUp";
import {useState} from "react";

export default App;

function App() {



    function logIn(data){

        AuthProvider.login(data);


    }


const [registerToggle, SetRegisterToggle] = useState(false)

    function register(data){

        SetRegisterToggle(false);

        AuthProvider.signUp(data)
    }



    return (
        <Router>
            <Switch>

                <Route path={`/pokedex/abilities/:ability`}>
                    <PokedexAbilities />
                </Route>

                <Route path={`/pokedex/pokemon/:name`} >
                    <BigPokedex />
                </Route>

                <Route path={`/pokedex/types/:type`}>
                    <PokedexTypes  />
                </Route>

                <Route path={'/pokedex'}>
                    <SearchView />
                </Route>




                <Route  path="/" > <LogIn askRegister={()=>SetRegisterToggle(true)} onSubmit={(data)=>{logIn(data)}}/> </Route>





            </Switch>

            {registerToggle&&
            <div className={'sign-up'}>
            <SignUp signUpSubmit={(data) => {
                register(data)
            }}/>
                <button onClick={()=>{SetRegisterToggle(false)}}>Cancel</button>
            </div>}

        </Router>


)
}
