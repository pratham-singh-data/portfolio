import { AppBar, Avatar, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/images/Logo.png";

export const Header = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#272727", color: "#ffffff" }}
    >
      <Toolbar>
        <Avatar
          src={Logo}
          alt="Pratham Singh"
          sx={{
            width: "80px",
            height: "80px",
            display: { xs: "none", md: "inline" },
          }}
        />

        <Box sx={{ display: "flex", flexDirection: "row" }}>
          <NavLink
            to="/portfolio/"
            style={{
              display: "inline",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography sx={{ mr: "10px" }}>Home</Typography>
          </NavLink>

          <NavLink
            to="/portfolio/projects"
            style={{
              display: "inline",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography sx={{ mr: "10px" }}>Projects</Typography>
          </NavLink>

          <NavLink
            to="/portfolio/contact"
            style={{
              display: "inline",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Typography sx={{ mr: "10px" }}>Contact</Typography>
          </NavLink>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
