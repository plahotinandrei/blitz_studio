import {pokemonsAPI} from '../../api/api.js';

const SET_POKEMONS = 'SET-POKEMONS';
const SET_PAGE = 'SET-PAGE';
const TOGGLE_FETCHING ='TOGGLE-FETCHING';

const initialState = {
    pokemons: [],
    isFetching: false,
    count: 0,
    limit: 20,
    offset: 0
}

const pokemonsReducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_POKEMONS:
            return {
                ...state,
                count: action.count,
                pokemons: action.pokemons.map((pokemon) => {
                    let id = pokemon.url.match(/pokemon\/(.*?)\//g)[0].split('/')[1]
                    return {
                        ...pokemon,
                        id,
                        img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`,
                        srcset: [
                            `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${id}.png`
                        ]
                    }
                })
            }
        case SET_PAGE: 
            return {
                ...state,
                offset: action.offset
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

const pokemonsList = (pokemons, count) => {
    return {
        type: SET_POKEMONS,
        pokemons,
        count
    }
}

const setPage = (offset) => {
    return {
        type: SET_PAGE,
        offset
    }
}

const toggleFetching = (isFetching) => {
    return {
        type: TOGGLE_FETCHING,
        isFetching
    }
}

const getPokemons = (limit, offset) => {
    return (dispatch) => {
        dispatch(toggleFetching(true));
        dispatch(setPage(offset));
        pokemonsAPI.getPokemons(limit, offset).then((response) => {
            dispatch(pokemonsList(response.results, response.count));
            dispatch(toggleFetching(false));
        })
    }
}

export default pokemonsReducer;
export {getPokemons}