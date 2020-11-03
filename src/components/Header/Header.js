import React from 'react';
import {NavLink} from 'react-router-dom';
import styles from './Header.module.css';
import Logo from '../../img/logo.png';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={`container ${styles.content}`}>
                <img src={'/' + Logo} className={styles.logo}/>
                <nav className={styles.nav}>
                    <NavLink to='/' activeClassName={styles.active} exact>Main page</NavLink>
                    <NavLink to='/pokemons' activeClassName={styles.active} exact>Pokemons</NavLink>
                </nav>
            </div>
        </header>
    )
}

export default Header;