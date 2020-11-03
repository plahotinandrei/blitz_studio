import React from 'react';
import {Link} from 'react-router-dom';
import styles from './PokemonsList.module.css';

const PokemonsList = (props) => {
    const pokemons = props.pokemonsList.map((pokemonItem) => {
        const id = pokemonItem.url.match(/pokemon\/(.*?)\//g)[0].split('/')[1];
        return (
            <li key={pokemonItem.name} className={styles.item}>
                <Link to={`/pokemons/${id}`}>
                    {pokemonItem.name}
                </Link>
            </li>
        )
    });

    return (
        <div className={`container ${styles.content}`}>
            <ul className={styles.list}>
                {pokemons}
            </ul>
        </div>  
    )
}

export default PokemonsList;