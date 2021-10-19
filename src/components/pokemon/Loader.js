import React from 'react'
import styles from './Loader.module.css'

export const Loader = () => {
    return (
        <div className={`${styles.container}`}>
            <div className={`${styles.loading}`}>
                    <div className={`${styles.pokeball} ${styles.normal}`}></div>
                    <div className={`${styles.pokeball} ${styles.great}`}></div>
                    <div className={`${styles.pokeball} ${styles.ultra}`}></div>
                    <div className={`${styles.pokeball} ${styles.master}`}></div>
                    <div className={`${styles.pokeball} ${styles.safari}`}></div>
            </div>
      </div>
    )
}
