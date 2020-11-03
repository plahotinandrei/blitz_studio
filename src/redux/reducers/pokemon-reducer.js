import {pokemonsAPI} from '../../api/api.js';

const SET_POKEMON = 'SET-POKEMON';
const TOGGLE_FETCHING ='TOGGLE-FETCHING';

const initialState = {
    isFetching: false,
    name: null,
    img: null,
    abilities: [],
    height: null,
    weight: null,
    stats: [],
    types: []
}

const pokemonReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMON:
            return {
                ...state,
                ...action.attributes 
            }
        case TOGGLE_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        default:
            return state;
    }
}

const pokemonAttributes = (attributes) => {
    return {
        type: SET_POKEMON,
        attributes
    }
}

const toggleFetching = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching
    }
}

const getPokemon = (id) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        pokemonsAPI.getPokemon(id).then((response) => {
            const attributes = {
                name: response.name,
                img: response.sprites.other.dream_world.front_default,
                srcset: response.sprites.other['official-artwork']['front_default'],
                abilities: response.abilities,
                height: response.height,
                weight: response.weight,
                stats: response.stats,
                types: response.types
            }
            dispatch(pokemonAttributes(attributes));
            dispatch(toggleFetching(false));
        })
    }
}

export default pokemonReducer;
export {getPokemon}