import { Box } from '@mui/material'
import React from 'react'
import { ResultCard } from './ResultCard'

export const ResultsShowcase = ({data}) => {
  return (
    <Box sx={{padding: "10px", display: "flex", flexWrap: "wrap", flexDirection: "row", justifyContent: "center"}}>
        {data.map((entry) => <ResultCard key={entry.id} data={entry}/>)}
    </Box>
  )
}
