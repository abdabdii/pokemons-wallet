import React , {useContext} from 'react'
import Filter from './Filter'
import {types} from './types'
import { pokemonsContext } from '../../providers/PokemonsProvider'
import Accordion from '@mui/material/Accordion'
import AccordionSummary from '@mui/material/AccordionSummary'
import AccordionDetails from '@mui/material/AccordionDetails'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import Typography from '@mui/material/Typography'
function Filters() {

    const {query} = useContext(pokemonsContext)

    return (
        
    <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Filter By Type</Typography>
        </AccordionSummary>
        <AccordionDetails>
        {types().map((type)=><Filter key={`${type.name}-filter`} checked={query.typesFilter.includes(type.name)} item={type} />)}
        </AccordionDetails>
      </Accordion>
           
      
    )
}

export default Filters
