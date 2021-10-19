import React from 'react'
import styles from './Type.module.css'

function Type({typeName}) {
    return (
        <span key={typeName} className={`${styles.type} ${styles[typeName]}`}>{typeName.toUpperCase()}</span>
    )
}

export default Type
