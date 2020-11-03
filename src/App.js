import React from 'react';
import {Route, BrowserRouter, Switch} from 'react-router-dom';
import 'reset-css';
import './main.css';
import Header from './components/Header/Header.js';
import PokemonsContainer from './components/Pokemons/PokemonsContainer.js';
import PokemonContainer from './components/Pokemon/PokemonContainer.js';
import PokemonsListContainer from './components/PokemonsList/PokemonsListContainer.js';

const App = (props) => {
    return (
        <BrowserRouter>
            <Header/>
            <Switch>
                <Route 
                    path="/" 
                    exact
                    render={() => {
                        return (
                            <PokemonsContainer/>
                        )
                    }}
                />
                <Route 
                    path="/pokemons/:id" 
                    render={() => {
                        return (
                            <PokemonContainer/>
                        )
                    }}
                /> 
                <Route 
                    path="/pokemons" 
                    exact
                    render={() => {
                        return (
                            <PokemonsListContainer/>
                        )
                    }}
                />  
            </Switch>
        </BrowserRouter>
    )
}

export default App;