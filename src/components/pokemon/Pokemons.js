import React  from 'react'
import { Pokemon } from './Pokemon'



export const Pokemons = ({pokemons}) => {
    /*State to save favorites*/
//     const [favorites, setFavorites] = useState(['first'])
    
    
//     console.log(favorites);
//     if(!favorites.includes('first')){
//         localStorage.setItem('favorites',JSON.stringify(favorites))
//     }
    
//     const myFavorites = (pokemonName) =>{
        
//         setFavorites((prev)=>{
//             if(prev.includes(pokemonName)){
                
//                return prev.filter((item)=>item!==pokemonName)
//             }else{
//                 return prev.concat(pokemonName)
//             }
            
//         })
       
        
//     }
//    useEffect(()=>{
//     const favoritesLocal = JSON.parse(localStorage.getItem('favorites'))
//     if(favoritesLocal){
//         setFavorites(favoritesLocal)
//     }else{
//         setFavorites([])
//     }
//    },[])
   
    
    
   

//     const addFavorite = useCallback((pokemon) => {
        
//         return myFavorites(pokemon.name)
        
//     },[])

    
    return (
        <>
            {pokemons.map((item) =>
            
                <Pokemon key={item.name} link={item.url} name={item.name}  />
            
            )}
        </>
    )
}
