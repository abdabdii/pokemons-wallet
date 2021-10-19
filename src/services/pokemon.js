import axios from 'axios'

export const getPokemon = async (link) => {
    return await axios.get(link)
}

export const getFirstPokemons = async () => {
    return await axios.get('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20')
}

export const getPokemonsPages = async (next) => {
    if(next){
        return await axios.get(next)
    }
    return 'finished'
}



export const getPokemons = async () => {
    let pokemonsData = await axios.get('https://pokeapi.co/api/v2/pokemon?offset=0&limit=1200')
     
    pokemonsData = pokemonsData.data.results.map((item)=>{
        return {...item,type:[]}
        
    })
    return pokemonsData
}


export const getTypes = async (link)=> {
  let typesData = await axios.get(link)

   typesData =  {'damage_relations':typesData.data['damage_relations'],name:typesData.data['name'],pokemons:typesData.data['pokemon']}
   
 return typesData
}

export const getTypesArray = async () =>{
    let allTypes = []
    for (let i = 1 ; i <=18 ; i++){
        let typesData = await getTypes(`https://pokeapi.co/api/v2/type/${i}`)
        allTypes.push(typesData)
    }

    return allTypes
}



export const getAllPokemonsAndTypes = async () => {
    let effects = {}
    let types = await getTypesArray()
    let pokemons = await getPokemons()
    
    types.forEach((type)=>{
        effects[type.name] = type['damage_relations']
        type.pokemons.forEach((typePokemon)=>{
            for(const pokemon of pokemons){
                
                 if(pokemon.name===typePokemon.pokemon.name){
                     pokemon.type.push(type.name)
                     break
                 }
            }
            
        })
    })
    return {pokemons,effects}
}


export const arrayToPages = (arr , PageSize) => {
    
    let pagesObject = {}
    let counter = PageSize
    let page = 1

    arr.forEach((pokemon) => {
        
        if(counter > 0){
            if(!pagesObject[page])pagesObject[page]=[];
            pagesObject[page].push(pokemon)
            counter--
            return
        }else{
        counter=PageSize
        page++
        pagesObject[page]=[]
        pagesObject[page].push(pokemon)
        counter--
        return
        }

        
    })

    return pagesObject
}
