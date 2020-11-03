import {applyMiddleware, combineReducers, createStore} from 'redux';
import thankMiddleware from 'redux-thunk';
import pokemonsReducer from './reducers/pokemons-reducer.js';
import pokemonReducer from './reducers/pokemon-reducer.js';
import pokemonsListReducer from './reducers/pokemons-list-reducer.js';

const reducers = combineReducers({
    mainPage: pokemonsReducer,
    pokemon: pokemonReducer,
    pokemonsPage: pokemonsListReducer
});

const store = createStore(reducers, applyMiddleware(thankMiddleware));

export default store;