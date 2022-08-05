import { Box, Card, CardContent, CardMedia, Typography } from '@mui/material'
import React from 'react'

export const CategoryCard = ({data}) => {
  return (
    <Box>
        <Card sx={{width: "150px", height: "200px", padding: "10px", mr: "20px", cursor: "pointer", border: "3px solid #ffffff", "&:hover": {border: "3px solid #5e17eb"}, "&:active": {border: "3px solid #00ff00"}}}>
            <CardMedia component="img" image={data.logo} height="120px" alt={data.name} />
            <CardContent sx={{display: "flex", flexDirection: "row", justifyContent: "center", mt: "10px", color: "#272727"}}>
                <Typography>{data.name}</Typography>
            </CardContent>
        </Card>
    </Box>
  )
}
