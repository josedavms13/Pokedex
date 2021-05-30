import './App.css';
import {useEffect, useState} from "react";
import SearchView from "./Views/SearchView"
import Pokedex from "./Views/Pokedex";
import {HashRouter as Router, Switch, Route} from "react-router-dom";

function App() {

  function handleSearch(data){


console.log(data);



  }


    return (
        <Router>
            <Switch>
              <Route path="/pokedex"> <Pokedex  /> </Route>
              <Route path="/"> <SearchView handleSubmit={(data)=>{handleSearch(data)}} /> </Route>

            </Switch>


        </Router>
    )
}

export default App;
