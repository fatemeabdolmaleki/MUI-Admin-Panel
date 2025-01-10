import React from "react";
import { Box, Grid, Paper, Typography, Avatar, List, ListItem, ListItemAvatar, ListItemText, CircularProgress } from "@mui/material";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import PieAnimation from "./PieAnimation";
import TopChat from "./TopChat";

// Data for Pie Chart
const data = [
  { name: "Desktop", value: 65, color: "#4285F4" },
  { name: "Tablet", value: 34, color: "#34A853" },
  { name: "Mobile", value: 45, color: "#FBBC05" },
  { name: "Unknown", value: 12, color: "#EA4335" },
];

const ProfileMain = () => {
  return (
    <Box sx={{ padding: 2 }}>
      <Grid container spacing={2}>
        {/* Visitors Analytics */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 2 }}>
            <PieAnimation/>

          </Paper>
        </Grid>

        {/* Map Section */}
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ padding: 3, height: "450px" }}>
            <Typography variant="h6" gutterBottom>
              Karaj
            </Typography>
            <iframe
              title="Karaj Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3330.5084690350927!2d50.8777!3d35.8325!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcbe02b6a91d875%3A0x404c8e582f69db1!2sKaraj%2C%20Alborz%20Province%2C%20Iran!5e0!3m2!1sen!2s!4v1615359871286!5m2!1sen!2s"
              width="100%"
              height="85%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            />

          </Paper>
        </Grid>

        {/* Top Channels */}
       <TopChat/>
      </Grid>
    </Box>
  );
};

export default ProfileMain;
