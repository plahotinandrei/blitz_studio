import React from 'react';
import styles from './Pokemons.module.css';
import PokemonsItem from './PokemonsItem/PokemonsItem.js';
import Loader from '../common/Loader/Loader.js';

const Pokemons = (props) => {
    const pokemons = props.pokemons.map((pokemon) => {
        return (
            <PokemonsItem
                key={pokemon.id}
                id={pokemon.id}
                name={pokemon.name}
                img={pokemon.img}
                srcset={pokemon.srcset}
            /> 
        )
    })

    let pageButtons = [];
    let pageCount = props.offset/props.limit + 1;
    let pages = Math.ceil(props.count/props.limit);
    let maxPages = pageCount >= pages - 2 ? pages : pageCount + 2;

    for(let i = pageCount <= 2 ? 1 : pageCount - 2; i <= maxPages; i++) {
        pageButtons.push(
            <button
                key={i}
                onClick={() => {props.onChangedPage((i - 1) * props.limit)}}
                className={`${styles.btn} ${(i - 1) * props.limit == props.offset ? styles.active : ''}`} 
            >
                {i}
            </button>
        );  
    }

    return (
        <div className='container'>
            <div className={styles.content}>
                <div className={styles.buttons}>
                    <button
                        onClick={() => {props.onChangedPage(0)}}
                        className={styles.btn} 
                    >
                        &laquo;
                    </button>
                    {pageButtons}
                    <button
                        onClick={() => {props.onChangedPage((pages - 1) * props.limit)}}
                        className={styles.btn} 
                    >
                        &raquo;
                    </button>
                </div>
                <div className={styles.pokemons}>
                    {props.isFetching ? <Loader/> : ''}  
                    {pokemons}
                </div>
                <div className={styles.buttons}>
                    <button
                        onClick={() => {props.onChangedPage(0)}}
                        className={styles.btn} 
                    >
                        &laquo;
                    </button>
                    {pageButtons}
                    <button
                        onClick={() => {props.onChangedPage((pages - 1) * props.limit)}}
                        className={styles.btn} 
                    >
                        &raquo;
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Pokemons;