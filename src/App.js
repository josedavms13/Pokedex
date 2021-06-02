import './App.css';
import SearchView from "./Views/SearchView"
import BigPokedex from "./Views/BigPokedex";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import PokedexTypes from "./Views/PokedexTypes";
import PokedexAbilities from "./Views/PokedexAbilities";
import LogIn from "./Views/LogIn";
import AuthProvider from "./provider/AuthProvider";
import SignUp from "./Views/SignUp";
import {useEffect, useState} from "react";
import useUser from "./hooks/useUser";
import UserContext from "./context/UserContext";
import ProtectedRoute from "./provider/ProtectedRoute";


export default App;

function App() {

const [authData, SetAuthData] = useState(false);


    function logIn(data) {

        SetAuthData(AuthProvider.login(data));


    }

    useEffect(()=>{
        console.log(authData);
    },[authData])

    const [registerToggle, SetRegisterToggle] = useState(false)

    function register(data) {

        SetRegisterToggle(false);

        AuthProvider.signUp(data)
    }


    return (
        <UserContext.Provider value={authData}>
            <Router>
                <Switch>

                    <Route path={`/pokedex/abilities/:ability`}>
                        <PokedexAbilities/>
                    </Route>

                    <Route path={`/pokedex/pokemon/:name`}>
                        <BigPokedex/>
                    </Route>

                    <Route path={`/pokedex/types/:type`}>
                        <PokedexTypes/>
                    </Route>

                    <Route path={'/pokedex'}>
                        <ProtectedRoute path={'/pokedex'} component={SearchView} isAuth={authData.isAuth}/>

                    </Route>

                    <Route path={'/login'}>
                        <LogIn askRegister={() => SetRegisterToggle(true)} onSubmit={(data) => {
                            logIn(data)}}/>
                    </Route>

                    <Route path="/">
                        <Redirect to={'/login'} />
                    </Route>


                </Switch>

                {registerToggle &&
                <div className={'sign-up'}>
                    <SignUp signUpSubmit={(data) => {
                        register(data)
                    }}/>
                    <button onClick={() => {
                        SetRegisterToggle(false)
                    }}>Cancel
                    </button>
                </div>}

            </Router>
        </UserContext.Provider>


    )
}
