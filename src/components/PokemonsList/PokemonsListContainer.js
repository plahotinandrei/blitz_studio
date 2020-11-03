import React from 'react';
import {connect} from 'react-redux';
import {getPokemonsList} from '../../redux/reducers/pokemons-list-reducer.js';
import PokemonsList from './PokemonsList.js';

class PokemonsListContainer extends React.Component {
    componentDidMount() {
        this.props.getPokemonsList();
    }

    render() {
        return (
            <PokemonsList
                pokemonsList={this.props.pokemonsList}
            />
        )
    }
}

let mapStateToProps = (state) => {
    return {
        pokemonsList: state.pokemonsPage.pokemons,
    }
}

export default connect(mapStateToProps, {getPokemonsList})(PokemonsListContainer);


