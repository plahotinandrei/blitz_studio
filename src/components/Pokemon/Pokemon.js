import React from 'react';
import styles from './Pokemon.module.css';
import Loader from '../common/Loader/Loader.js';
import Pokeball from '../../img/pokeball.png';

const Pokemon = (props) => {
    const abilities = props.abilities.map((ability) => {
        return (
            <tr key={ability.ability.name}>
                <td>{ability.slot}</td>
                <td>{ability.ability.name}</td>
                <td>{ability.is_hidden ? '+' : '-'}</td>
            </tr>
        )
    });

    const stats = props.stats.map((stat) => {
        return (
            <tr key={stat.stat.name}>
                <td>{stat.stat.name}</td>
                <td>{stat.base_stat}</td>
                <td>{stat.effort}</td>
            </tr>
        )
    });

    const types = props.types.map((type) => {
        return (
            <tr key={type.type.name}>
                <td>{type.slot}</td>
                <td colSpan={2}>{type.type.name}</td>
            </tr>
        )
    });

    return (
        <div className='container'>
            <div className={styles.content}>
                {props.isFetching ? <Loader/> : ''}  
                <h1>{props.name}</h1>
                <div className={styles.card}>
                    <img 
                        srcSet={props.img || props.srcset}
                        src={'/' + Pokeball}
                    />
                    <table>
                        <tbody>
                            <tr>
                                <td className={styles.title}>Height</td>
                                <td colSpan={2}>{props.height} decimetres</td>
                            </tr>
                            <tr>
                                <td className={styles.title}>Weight</td>
                                <td colSpan={2}>{props.weight} hectograms</td>
                            </tr>
                            <tr>
                                <td colSpan={3} className={styles.title}>Abilities</td> 
                            </tr>
                            <tr>
                                <td className={styles.title}>Slot</td> 
                                <td className={styles.title}>Name</td> 
                                <td className={styles.title}>Is hidden</td> 
                            </tr>
                            {abilities}
                            <tr>
                                <td colSpan={3} className={styles.title}>Stats</td> 
                            </tr>
                            <tr>
                                <td className={styles.title}>Name</td> 
                                <td className={styles.title}>Base stat</td> 
                                <td className={styles.title}>Effort</td> 
                            </tr>
                            {stats}
                            <tr>
                                <td colSpan={3} className={styles.title}>Types</td> 
                            </tr>
                            <tr>
                                <td className={styles.title}>Slot</td> 
                                <td colSpan={2} className={styles.title}>Name</td> 
                            </tr>
                            {types}
                        </tbody> 
                    </table>
                </div>
            </div>
            
            
        </div>
    )
}

export default Pokemon;