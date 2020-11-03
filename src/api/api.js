import * as axios from 'axios';

const instance = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
});


const pokemonsAPI = {
    getPokemons(limit = 10, offset = 0) {
        return instance.get(`/pokemon/?limit=${limit}&offset=${offset}`).then((response) => {
            return response.data;
        })
    },

    getPokemon(id) {
        return instance.get(`/pokemon/${id}`).then((response) => {
            return response.data;
        })
    }
}

export {pokemonsAPI}