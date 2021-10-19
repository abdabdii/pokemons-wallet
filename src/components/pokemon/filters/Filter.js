import React , { useContext} from 'react'
import Type from '../type/Type'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import styles from './Filters.module.css'


import { pokemonsContext } from '../../providers/PokemonsProvider'




function Filter({item,typesArr,checked,history,setUpdated}) {
    const {setQuery} = useContext(pokemonsContext)
    const handleClick = (e) => {
        const type = e.target.value
        setQuery((prev)=>
        {return{...prev , page:1 , typesFilter:e.target.checked?prev.typesFilter.concat(type):prev.typesFilter.filter((item)=>item!==type)}}
        )
        
        
    }
 
    return (
       
           <FormControlLabel className={styles['filter']} onClick={(e)=>handleClick(e)} value={item.name}  control={<Checkbox checked={checked}  />} label={<Type typeName={item.name} />} />

    )
}

export default Filter
