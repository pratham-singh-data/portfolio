import { Box, Card, CardContent, Typography } from '@mui/material'
import React from 'react'
import BackgroundIMG from "../assets/images/background.jpg"
import ContactData from "../assets/data/contacts.json"
import PermPhoneMsgIcon from '@mui/icons-material/PermPhoneMsg';
import MailIcon from '@mui/icons-material/Mail';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

export const Contact = () => {
  return (
    <Box sx={{width: "100vw", height: "100vh", backgroundImage: `url(${BackgroundIMG})`, backgroundSize: "cover", backgroundPosition: "center", display: "flex", alignItems: "center", justifyContent: "center"}}>
        <Card sx={{width: {md: "30%", xs: "100%"}, height: {md: "60%", xs: "100%"}, backgroundColor: "#000000", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "space-around", alignItems: "center", opacity: "0.85"}}>
            <CardContent>
                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", color: "white", mb: "10px"}}>
                    <PermPhoneMsgIcon sx={{mr: "15px"}} />
                    <Typography>{ContactData.phno}</Typography>
                </Box>

                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", color: "white", mb: "10px"}}>
                    <MailIcon sx={{mr: "15px"}} />
                    <Typography>{ContactData.email}</Typography>
                </Box>

                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", color: "white", mb: "10px"}}>
                    <LinkedInIcon sx={{mr: "15px"}} />
                    <Typography component="a" href={ContactData.linkedin} sx={{color: "inherit", textDecoration: "none"}}>{ContactData.linkedin}</Typography>
                </Box>

                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "left", color: "white", mb: "10px"}}>
                    <GitHubIcon sx={{mr: "15px"}} />
                    <Typography component="a" href={ContactData.github} sx={{color: "inherit", textDecoration: "none"}}>{ContactData.github}</Typography>
                </Box>
            </CardContent>
        </Card>
    </Box>
  )
}
