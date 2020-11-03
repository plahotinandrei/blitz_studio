import React from 'react';
import styles from './Loader.module.css';
import LoaderImg from '../../../img/loader.svg';

const Loader = (props) => {
    return (
        <div className={styles.loader}>
            <img className={styles.loaderImg} src={'/' + LoaderImg}/>
        </div>
    )
}

export default Loader;