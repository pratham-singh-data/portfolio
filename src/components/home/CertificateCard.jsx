import { Card, CardContent, CardMedia, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

export const CertificateCard = ({data, setOpen, setModalData}) => {
  return (
    <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center"}} onClick={() => {
        setModalData(data);
        setOpen(true)
      }}>
      <Card sx={{width: "200px", height: "280px", padding: "10px", mr: "20px", cursor: "pointer", border: "3px solid #ffffff", "&:hover": {border: "3px solid #5e17eb"}, "&:active": {border: "3px solid #00ff00"}}}>
        <CardMedia component="img" image={data.image}/>
        <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center"}}>
          <Typography variant="h6" sx={{color: "#272727"}}>{data.name}</Typography>
          <Typography sx={{color: "#272727"}}>{data.company}</Typography>
        </CardContent>
      </Card>
    </Box>
  )
}
