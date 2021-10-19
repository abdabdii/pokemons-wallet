import React ,{useContext} from 'react'
import CustomizedInputBase from '../materialCustom/SearchBarCustomised'
import { pokemonsContext } from '../providers/PokemonsProvider'

export const SearchBar = () => {
    
    const { setQuery} = useContext(pokemonsContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const search = e.target.search.value
        setQuery((prev)=>{return{...prev,search:search,page:1}})


     }

    
    return (
        <>
            <CustomizedInputBase handleSubmit={handleSubmit} />
        </>
    )
}
