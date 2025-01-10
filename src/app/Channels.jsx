"use client";
import { Avatar, Box, Typography } from "@mui/material";
import React from "react";


const Channels = ({ logo, source, visitors, revenues, sales, conversion }) => {
  

  return (
    <Box
      sx={{
        width:"700px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingY: "20px",
        borderBottom: source != "Facebook" && "1px solid rgb(226,232,240)",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", position: "relative" }}>
        <Avatar src={logo} sx={{ marginRight: "10px" }} />
        <Typography
          sx={{
            fontSize: "16px",
            position: "absolute",
            left: "50px",
          }}
        >
          {source}
        </Typography>
      </Box>
      <Typography
        sx={{ fontSize: "16px" }}
      >
        {visitors}K
      </Typography>
      <Typography sx={{ fontSize: "16px", color: "#10b981" }}>
        ${revenues}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          transform: "translateX(-15px)",
        }}
      >
        {sales}
      </Typography>
      <Typography
        sx={{
          fontSize: "16px",
          color: "#259ae6",
          transform: "translateX(-25px)",
        }}
      >
        {conversion}%
      </Typography>
    </Box>
  );
};

export default Channels;
