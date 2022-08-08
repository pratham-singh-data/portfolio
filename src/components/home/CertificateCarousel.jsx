import { Box, Typography } from "@mui/material";
import React from "react";
import { CertificateData } from "../../assets/data/certificates";
import { CertificateCard } from "./CertificateCard";

export const CertificateCarousel = ({ setOpen, setModalData }) => {
  return (
    <Box sx={{ width: "100%", padding: "10px", backgroundColor: "#00afc9" }}>
      <Typography variant="h6" sx={{ color: "#272727" }}>
        Certificates:
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          scrollBehavior: "smooth",
          overflow: "scroll",
        }}
      >
        {CertificateData.map((certificate) => (
          <CertificateCard
            setOpen={setOpen}
            key={certificate.id}
            data={certificate}
            setModalData={setModalData}
          />
        ))}
      </Box>
    </Box>
  );
};
