import { Card, CardContent, CardMedia, Link, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const ResultCard = ({data}) => {
  return (
    <Box>
        <Link href={data.link} sx={{textDecoration: "none"}}>
            <Card sx={{mr: "10px", mb: "10px", width: {md: "300px", xs: "100%"}, cursor: "pointer", border: "3px solid #ffffff", "&:hover": {border: "3px solid #5e17eb"}, "&:active": {border: "3px solid #00ff00"}}}>
                <CardMedia component="img" image={data.image} alt={data.name} height="150px"/>
                
                <CardContent>
                    <Typography variant="h5" sx={{color: "#272727"}}>{data.name}</Typography>

                    <Box sx={{mb: "5px"}}>
                        {data.categoryNames.map(entry => {
                            return(
                                <Typography sx={{backgroundColor: "#5e17eb", color: "#ffffff", opacity: "0.8", display: "inline", padding: "5px", mr: "5px", borderRadius: "10px"}}>{entry}</Typography>
                            )
                        })}
                    </Box>

                    <Link href={data.source}>View Source</Link>
                </CardContent>
            </Card>
        </Link>
    </Box>
  )
}