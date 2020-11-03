import React from 'react';
import {connect} from 'react-redux';
import {getPokemons} from '../../redux/reducers/pokemons-reducer.js';
import Pokemons from './Pokemons.js';

class PokemonsContainer extends React.Component {
    componentDidMount() {
        this.props.getPokemons(this.props.limit, this.props.offset);
    }

    onChangedPage = (offset) => {
        this.props.getPokemons(this.props.limit, offset);
    }

    render() {
        return (
            <Pokemons 
                pokemons={this.props.pokemons}
                onChangedPage={this.onChangedPage}
                count={this.props.count}
                limit={this.props.limit}
                offset={this.props.offset}
                isFetching={this.props.isFetching}
            />
        )
    }
}


let mapStateToProps = (state) => {
    return {
        pokemons: state.mainPage.pokemons,
        limit: state.mainPage.limit,
        offset: state.mainPage.offset,
        count: state.mainPage.count,
        isFetching: state.mainPage.isFetching
    }
}

export default connect(mapStateToProps, {getPokemons})(PokemonsContainer);