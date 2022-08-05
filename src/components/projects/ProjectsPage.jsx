import { Box, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CategoriesCarousel } from './CategoriesCarousel'
import { WorkData } from '../../assets/data/work'
import { ResultsShowcase } from './ResultsShowcase'

export const ProjectsPage = () => {
    const [samples, setSamples] = useState(WorkData);

  return (
    <Box>
        <CategoriesCarousel/>
        <Box sx={{padding: "10px"}}>
            <Typography sx={{color: "#272727"}} variant="h5">Results:</Typography>
        </Box>

        <ResultsShowcase data={samples}/>
    </Box>
  )
}
