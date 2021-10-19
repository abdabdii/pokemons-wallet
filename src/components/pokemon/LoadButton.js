import React , { useContext} from 'react'
import { pokemonsContext } from '../providers/PokemonsProvider'
import styles from './LoadButton.module.css'


export const LoadButton = () => {
    const {setQuery} = useContext(pokemonsContext)
    
    //Handle click load more button
    const handleClick =  (e) => {
       setQuery((prev)=>{return{...prev,page:prev.page+1}})
    }

    return (
        <button className={styles.btn} style={{width:'100%',display:'flex',justifyContent:'center',alignItems:'center'}} onClick={()=>handleClick()}  >
            load more pokemons
        </button>
    )
}
