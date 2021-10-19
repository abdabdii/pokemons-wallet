import React from 'react'
import styles from './NotFound.module.css'
import notFound from '../../../assets/search-error.png'
import { Typography } from '@mui/material'

function NotFound() {
    return (
        <div className={styles['container']}>
            <div className={styles['content-container']}>
                <img 
                src={notFound}
                alt='pokemon not found'
                width='300px'    
                loading='lazy'
                />
                <Typography gutterBottom variant="h5" component="div" align='center'  >
                    No Pokemon Found
                </Typography>
            </div>
            
        </div>
    )
}

export default NotFound
