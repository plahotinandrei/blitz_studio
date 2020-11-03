import React from 'react';
import styles from './PokemonsItem.module.css';
import {Link} from 'react-router-dom';
import {Img} from 'react-image'
import Pokeball from '../../../img/pokeball.png';

const PokemonsItem = (props) => {
    return (
        <div className={styles.card}>
            <Link to={`/pokemons/${props.id}`} className={styles.pokemon}>
                <p>{props.name}</p>
                <Img
                    src={[props.img, ...props.srcset, Pokeball]}
                    loader = { <img src={Pokeball}/> }
                /> 
            </Link>
        </div>
    )
}

export default PokemonsItem;