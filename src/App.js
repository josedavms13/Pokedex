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
import UserContext from "./context/UserContext";
import ProtectedRoute from "./provider/ProtectedRoute";
import ThemeContext from "./context/ThemeContext";


export default App;

function App() {

    //theme change pending on futures updates
    const [theme] = useState('red')
    const [authData, SetAuthData] = useState(false);

    const [userDontExist, SetUserDontExist] = useState(false);
    const [wrongPasswordToggle, SetWrongPasswordToggle]  = useState(false);
    function logIn(data) {

        SetAuthData(AuthProvider.login(data));


    }



    function errorShow(stateToChange){

        stateToChange(true);

        setTimeout(()=>{
            stateToChange(false);
        },2000)

    }

    useEffect(() => {
        if(authData){
            if(authData.name=== null){
                errorShow(SetUserDontExist);
            }
        else{
            if(!authData.isAuth){
                errorShow(SetWrongPasswordToggle);

            }
            }

        }
    }, [authData])

    const [registerToggle, SetRegisterToggle] = useState(false);

    function register(data) {

        SetRegisterToggle(false);

        AuthProvider.signUp(data)
    }


    return (
        <UserContext.Provider value={authData}>
            <ThemeContext.Provider value={theme}>
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
                            <LogIn incorrectPassword={wrongPasswordToggle} userDontExist={userDontExist} askRegister={() => SetRegisterToggle(true)} onSubmit={(data) => {
                                logIn(data)
                            }}/>
                        </Route>

                        <Route path="/">
                            <Redirect to={'/login'}/>
                        </Route>


                    </Switch>

                    {registerToggle &&
                    <div>
                        <SignUp cancel={()=>{SetRegisterToggle(false)}} signUpSubmit={(data) => {
                            register(data)
                        }}/>
                    </div>}

                </Router>
            </ThemeContext.Provider>
        </UserContext.Provider>


    )
}
