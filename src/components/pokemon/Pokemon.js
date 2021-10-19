import React , {useState, useEffect,useContext } from 'react'
import { getPokemon } from '../../services/pokemon'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { Stats } from './Stats'
import { Types } from './type/Types';
import notFound from '../../assets/not-found.png'
import {pokemonsContext} from '../providers/PokemonsProvider'


export const Pokemon = React.memo(({link ,name}) => {
    const {favorites,setFavorites} = useContext(pokemonsContext)

    //Set pokemon object
    const [pokemon, setPokemon] = useState('')

    //Set loader
    const [wait, setWait] = useState(true)

    //Get pokemon stats
    const [statsArr,setStatsArr] = useState([])

    //Track Favorite pokemons

     //Function to remove dashes
     const removeDashes = (text) => {
        return text.replace('-',' ')
    }


    //Function to convert - seperated text to pascal
    const pascal = (text) => {
        return removeDashes(text).replace(/(\w)(\w*)/g,
        function(g0,g1,g2){return g1.toUpperCase() + g2.toLowerCase();})
    }

    //Function to save pokemon as favorite in localstorage
    const handleFavorite = () =>{ 
        setFavorites((prev)=>{
                        if(prev.includes(name)){
                            
                           return prev.filter((item)=>item!==name)
                        }else{
                            return prev.concat(name)
                        }})
 
    }

   

    //Set colors for different stat types
    const colors = {
         'hp': '#43A047',
         'attack': '#E53935',
         'defense': '#8E24AA',
         'special-attack': '#FF3D00',
         'special-defense': '#D500F9',
         'speed': '#00897B'
    }
    

    //Fetch pokemon info
    useEffect( ()=> {
        async function fetchData(){
        const waitPokemon = await getPokemon(link)
        setPokemon(waitPokemon.data)
        
        setWait(false)
        
        }
        fetchData()
   // eslint-disable-next-line
    },[])

    //Get Stat for pokemon after data is fetched
    useEffect(()=>{
        if(pokemon!==''){
            //Make json for stats to loop and make componenets for each object(6 stats total )
            
            setStatsArr(pokemon.stats.map((stat)=> {return {
                'value':stat['base_stat'],
                'stat':pascal(stat.stat.name),
                'color':colors[stat.stat.name]
                    }
                })
            )
        }
        // eslint-disable-next-line
    },[pokemon])

    return (
    <>
        {!wait?
        <Card sx={{ maxWidth: 300 }} style={{margin:'2rem 1rem'}}>
        
        <Typography  component="div" align='center' >
            <img 
            src={pokemon.sprites.other['official-artwork']['front_default']||notFound}
            alt={pokemon.name}
            width='300px'
            height='300px'
            
                loading='lazy'
            />
        </Typography>
        
        <CardContent>
            <Typography gutterBottom variant="h5" component="div" align='center' fontSize="1rem" >
            {pokemon.name.toUpperCase()}
            </Typography>
            <div style={{display:'flex',justifyContent:'center'}}>
                <Types types={pokemon.types} />
            </div>
            {statsArr.length>0?statsArr.map((stat) => <Stats key={stat.stat} color={stat.color} value={stat.value} stat={stat.stat} />):''}
        </CardContent>
        <CardActions disableSpacing onClick={()=>{handleFavorite()}}>
            <IconButton aria-label="add to favorites">
                <FavoriteIcon style={favorites.includes(pokemon.name)?{color:'#EC407A'}:{}} />
            </IconButton>
        </CardActions>
        </Card>:""}
    </>
    )
})
