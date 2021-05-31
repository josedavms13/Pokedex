import './App.css';
import {useEffect, useState} from "react";
import SearchView from "./Views/SearchView"
import BigPokedex from "./Views/BigPokedex";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import fetchByType from "./services/fetchByType";
import PokedexTypes from "./Views/PokedexTypes";


function App() {





    return (
        <Router>
            <Switch>

                <Route path={'/pokedex/abilities/:ability'}>
                    <PokedexTypes />
                </Route>

                <Route path={`/pokedex/pokemon/:name`} >
                    <BigPokedex />
                </Route>

                <Route path={`/pokedex/types/:type`}>
                    <PokedexTypes  />
                </Route>

                <Route path={'/pokedex'}>
                    <Redirect to={'/'}/>
                </Route>

                <Route  path="/" > <SearchView /> </Route>




            </Switch>


        </Router>
    )
}

export default App;
