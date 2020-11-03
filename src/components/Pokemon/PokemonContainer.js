import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {getPokemon} from '../../redux/reducers/pokemon-reducer.js';
import Pokemon from './Pokemon.js';

class PokemonContainer extends React.Component {
    componentDidMount() {
        //ajax query
        let id = this.props.match.params.id;
        
        this.props.getPokemon(id);
    }

    render() {
        return (
            <Pokemon
                isFetching={this.props.isFetching}
                name={this.props.name}
                img={this.props.img}
                srcset={this.props.srcset}
                abilities={this.props.abilities}
                height={this.props.height}
                weight={this.props.weight}
                stats={this.props.stats}
                types={this.props.types}
            />
        )
    }
}

const mapStateToProps = (state) => {
    return {
        isFetching: state.pokemon.isFetching,
        name: state.pokemon.name,
        img: state.pokemon.img,
        srcset: state.pokemon.srcset,
        abilities: state.pokemon.abilities,
        height: state.pokemon.height,
        weight: state.pokemon.weight,
        stats: state.pokemon.stats,
        types: state.pokemon.types
    }
}

const PokemonUrlContainer = withRouter(PokemonContainer);
export default connect(mapStateToProps, {getPokemon})(PokemonUrlContainer);

