import { Box, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CategoriesCarousel } from './CategoriesCarousel'
import { WorkData } from '../../assets/data/work'
import { ResultsShowcase } from './ResultsShowcase'

export const ProjectsPage = () => {
    const [fullData] = useState(WorkData);
    const [filter, setFilter] = useState(null);
    const [samples, setSamples] = useState(WorkData);

    useEffect(() => {
        if(! filter){
            setSamples(fullData);
            return;
        }

        setSamples(fullData.filter(entry => entry.categories.indexOf(filter) !== -1))
    }, [filter, fullData]);

  return (
    <Box>
        <CategoriesCarousel setFilter={setFilter}/>

        <Box sx={{padding: "10px"}}>
            <Typography sx={{color: "#272727"}} variant="h5">Results:</Typography>
        </Box>

        <ResultsShowcase data={samples}/>
    </Box>
  )
}
