import React , { useEffect , useContext  } from 'react'
import styles from './Home.module.css'
import { arrayToPages , getAllPokemonsAndTypes } from '../services/pokemon'
import {Pokemons} from './pokemon/Pokemons'
import { LoadButton } from './pokemon/LoadButton'
import {SearchBar} from './pokemon/SearchBar'
import {pokemonsContext} from './providers/PokemonsProvider'
import { Loader } from './pokemon/Loader'
import { searchAndFilter } from '../helpers/search'
import Filters from './pokemon/filters/Filters'
import { Toolbar } from '@mui/material'
import ScrollTop from './materialCustom/ScrollTop'
import NavBar from './pokemon/navigation/NavBar'
import NotFound from './pokemon/notfound/NotFound'




export const Home = () => {

  const {pokemons, setPokemons , preRenderPokemons, setPreRenderPokemons ,query , setRawData} = useContext(pokemonsContext)
  
  let preRenderPokemonsCount
    if(preRenderPokemons){
         preRenderPokemonsCount =Object.keys(preRenderPokemons).reduce((total,arr)=>{ return total+Object.keys(preRenderPokemons[arr]).length},0)  
         console.log(pokemons.length ===preRenderPokemonsCount);
    }else{
        preRenderPokemonsCount = 0
    }

  useEffect( ()=> {
    const fetchData = async  () => {
    const waitPokemons = await getAllPokemonsAndTypes()
    setRawData(waitPokemons)
    const pokemonsFiltered = searchAndFilter(waitPokemons.pokemons)
    setPreRenderPokemons(arrayToPages(pokemonsFiltered,18))

    }
    fetchData()
    // eslint-disable-next-line
    },[])
    
    return (
        <>
        
        
            {preRenderPokemons===undefined ? 
            <Loader />
            
            :
            <div className={styles.container}>
                <Toolbar id="back-to-top-anchor" />
                <div className={styles.column1} >
                    <NavBar />
                    <SearchBar />
                </div>
                <div className={styles.column2}>
                    <div className={styles['filter-container']} >
                        <Filters />
                    </div>
                    
                    <div className={styles['cards-container']}>
                        {pokemons.length > 0 ?<Pokemons pokemons={pokemons} /> :<NotFound />}
                        {query.page < Object.keys(preRenderPokemons).length && pokemons.length !==preRenderPokemonsCount ? <LoadButton pokemons={pokemons}  setPokemons={setPokemons} />:""}
                    </div>
                </div>
                <ScrollTop >
        
                </ScrollTop>
                </div>
            
            }
           
        
        </>
    )
}
