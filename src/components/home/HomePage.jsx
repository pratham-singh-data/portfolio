import { Avatar, Box, Button, Modal, Typography } from '@mui/material'
import React, { useState } from 'react'
import { CertificateCarousel } from './CertificateCarousel'

export const HomePage = () => {
  const [open, setOpen] = useState(false);
  const [modalData, setModalData] = useState(null);

  return (
    <Box>
        <Box sx={{width: "100%", height: {md: "50vh", xs: "100vh"}, backgroundColor: "#272727", justifyContent: "center", padding: "10px", alignItems: "center", display: "flex"}}>
              <Box sx={{width: "50%"}}>
                <Typography variant="p" sx={{color: "#ffffff"}}>Highly skilled and professional software developer adept at data analysis and web development with an eye for detail and a track record of delivering high-quality products ahead of schedule.</Typography>
              </Box>
        </Box>

        <CertificateCarousel setModalData={setModalData} setOpen={setOpen} />
        {modalData && <Modal
            open={open}
            onClose={() => {setOpen(false)}}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
            sx={{display:"flex", flexDirection:"row", alignItems: "center", justifyContent: "center", width: "100%"}}
        >
            <Box sx={{backgroundColor: "#ffffff", padding: "10px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                <Typography sx={{color: "#272727"}} variant="h6" component="h2">
                    {modalData.name}
                </Typography>
                
                <Avatar sx={{width: {md: "50vw", xs: "100%"}, height: {md: "70vh", xs: "100%"}}} src={modalData.image} />

                <Box sx={{display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", width: "100%"}}>
                    <Button sx={{backgroundColor: "#ff0000", color: "#ffffff", width: "100%", "&:hover": {backgroundColor: "#00afb9"}}} onClick={() => {setOpen(false)}}>Close</Button>
                </Box>
            </Box>
        </Modal>}
    </Box>
  )
}
