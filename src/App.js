import './App.css';
import {useEffect, useState} from "react";
import SearchView from "./Views/SearchView"
import BigPokedex from "./Views/BigPokedex";
import {HashRouter as Router, Switch, Route, Redirect} from "react-router-dom";
import fetchByType from "./services/fetchByType";
import PokedexTypes from "./Views/PokedexTypes";


function App() {


    const [infoToFetch, SetInfoToFetch] = useState(null);

    function handleSearch(search) {

        console.log(search)

        switch (search.mode){
            case 1:
                console.log('search by name');
                break
            case 2:
                console.log('search by type')
                SetInfoToFetch(search.data);
                break
            case 3:
                console.log('search by abilities');
                break
            default:
                break
        }


    }


    return (
        <Router>
            <Switch>

                <Route path={`/pokedex/pokemon/:name`} >
                    <BigPokedex />
                </Route>

                <Route path={`/pokedex/types/:type`}>
                    <PokedexTypes  />
                </Route>

                <Route path={'/pokedex'}>
                    <Redirect to={'/'}/>
                </Route>

                <Route  path="/" > <SearchView handleSubmit={(data) => {
                    handleSearch(data)
                }}/> </Route>




            </Switch>


        </Router>
    )
}

export default App;
