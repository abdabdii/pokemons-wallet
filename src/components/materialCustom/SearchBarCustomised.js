import * as React from 'react';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { pokemonsContext } from '../providers/PokemonsProvider'
import styles from './SearchBarCustomised.module.css'
export default function CustomizedInputBase({handleSubmit,value}) {
  const { setQuery,query} = React.useContext(pokemonsContext)
  return (
    <Paper
      component="form"
      className={styles.search}
      
      onSubmit={(e)=>handleSubmit(e)}
    >
      <InputBase
        onChange={(e)=>{setQuery((prev)=>{return{...prev,search:e.target.value}})}}
        value={query.search}
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search Pokemons"
        inputProps={{ 'aria-label': 'search pokemons' }}
        name="search"
      />
      <IconButton type="submit" sx={{ p: '10px 0px' ,minWidth:'50px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}