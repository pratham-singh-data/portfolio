import { Box, Typography } from '@mui/material'
import React from 'react'
import { CategoriesData } from "../../assets/data/categories"
import { CategoryCard } from './CategoryCard'

export const CategoriesCarousel = ({setFilter}) => {
  return (
    <Box sx={{backgroundColor: "#272727", padding: "10px", color: "#ffffff"}}>
        <Typography variant="h5" sx={{mb: "10px"}}>Categories:</Typography>
        <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", scrollBehavior: "smooth", overflow: "scroll" }}>
            {CategoriesData.map(data => <CategoryCard key={data.id} data={data} setFilter={setFilter}/>)}
        </Box>
    </Box>
  )
}
