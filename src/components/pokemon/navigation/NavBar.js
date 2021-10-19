import HomeIcon from '@mui/icons-material/Home';
import FavoriteIcon from '@mui/icons-material/Favorite';

import React from 'react'
import NavBtn from './NavBtn'
import { useLocation } from 'react-router';
import styles from './NavBar.module.css'

function NavBar() {
    let location = useLocation()
  
    return (
        <div className={styles['nav-bar']}>
            <NavBtn className={styles['link']}  link="/">
                <HomeIcon className={location.pathname==="/"?styles['active']:''} />
            </NavBtn>
            <NavBtn className={styles['link']} link="/local">
                <FavoriteIcon className={location.pathname==="/local"?styles['active']:''} />
            </NavBtn>
        </div>
    )
}

export default NavBar
