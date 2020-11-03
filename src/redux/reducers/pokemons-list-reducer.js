import {pokemonsAPI} from '../../api/api.js';

const SET_POKEMONS_LIST = 'SET-POKEMONS-LIST';

const initialState = {
    pokemons: [],
    limit: -1,
    offset: 0
}

const pokemonsListReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS_LIST:
            return {
                ...state,
                pokemons: action.pokemonsList
            }
        default:
            return state;
    }
}

const pokemonsList = (pokemonsList) => {
    return {
        type: SET_POKEMONS_LIST,
        pokemonsList
    }
}

const getPokemonsList = () => {
    return (dispatch) => {
        pokemonsAPI.getPokemons(-1, 0).then((response) => {
            dispatch(pokemonsList(response.results));
        })
    }
}

export default pokemonsListReducer;
export {getPokemonsList}