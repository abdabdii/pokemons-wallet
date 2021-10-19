import { Link } from '@mui/material'
import React from 'react'
import IconButton from '@mui/material/IconButton';




function NavBtn({link,children}) {
    return (
            <Link href={link} underline="none">
                <IconButton aria-label={`go to ${link}`}>
                    {children}
                </IconButton>
            </Link>
        
    )
}

export default NavBtn
