import { Box, TextField, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { CategoriesCarousel } from './CategoriesCarousel'
import { WorkData } from '../../assets/data/work'
import { ResultsShowcase } from './ResultsShowcase'

export const ProjectsPage = () => {
    const [fullData] = useState(WorkData);
    const [filter, setFilter] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [samples, setSamples] = useState(WorkData);

    useEffect(() => {
        if(! filter){
            setSamples(fullData);
            return;
        }

        setSamples(fullData.filter(entry => entry.categories.indexOf(filter) !== -1))
    }, [filter, fullData]);

    useEffect(() => {
        setSamples(fullData.filter(entry => entry.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1))
    }, [searchTerm, fullData]);

    const onSearchEnterred = (ev) => {
        setSearchTerm(ev.target.value);
    }

    console.log(searchTerm);

  return (
    <Box>
        <CategoriesCarousel setFilter={setFilter}/>

        <Box sx={{padding: "10px", display: "flex", flexDirection: {md: "row", xs: "column"}, justifyContent: {md: "space-between", xs: "left"}}}>
            <Typography sx={{color: "#272727", display: "inline"}} variant="h5">Results:</Typography>
            <TextField sx={{width: {md: "full", xs: "100%"}, mx: {md: "50px", xs: "0px"}}} placeholder="Search here..." value={searchTerm} onChange={onSearchEnterred} type="search" />
        </Box>

        <ResultsShowcase data={samples}/>
    </Box>
  )
}
