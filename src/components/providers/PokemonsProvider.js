
import { createContext, useState } from 'react';
import React , { useEffect } from 'react'

import{ArrayParam,NumberParam,StringParam,withDefault ,useQueryParams} from 'use-query-params'
import { arrayToPages } from '../../services/pokemon'
import { searchAndFilter } from '../../helpers/search'
import { useLocalStorage } from '../../helpers/useLocalStorage';


export const pokemonsContext = createContext();

const PokemonsProvider = (props) => {
    const [rawData, setRawData] = useState([])
    const [pokemons, setPokemons] = useState([])
    const [current, setCurrent] = useState(0)
    const [preRenderPokemons, setPreRenderPokemons] = useState()
    


    /* Query params states */
    const [query,setQuery] = useQueryParams({
      search:withDefault(StringParam,''),
      typesFilter:withDefault(ArrayParam, []),
      page:withDefault(NumberParam,1)

    } )
   
    /* Localstorage state */
    const [favorites , setFavorites] = useLocalStorage('favorites',[])

  
    useEffect(()=>{
       if(rawData.pokemons){
        setPokemons([])
        setPreRenderPokemons(arrayToPages(searchAndFilter(rawData.pokemons,query.typesFilter,query.search),18))
       
       }
       // eslint-disable-next-line
    },[query.typesFilter,query.search])

  
    useEffect(() => {
        if(preRenderPokemons){
          if(preRenderPokemons[query.page]){
              if(!pokemons.includes(...preRenderPokemons[query.page])){
                  setPokemons((prev)=>prev.concat(...preRenderPokemons[query.page]))
              }
          }
  
        }
      // eslint-disable-next-line
    },[query.page,preRenderPokemons])
    
 

    return (
        <pokemonsContext.Provider 
        value={{pokemons, setPokemons, current ,setCurrent ,rawData ,setRawData , preRenderPokemons , setPreRenderPokemons 
         ,query ,setQuery,favorites,setFavorites }}>
            {props.children}
        </pokemonsContext.Provider>
    );
};

export default PokemonsProvider;