"use client"

import React, { useState } from 'react';
import { Box, createTheme, Stack } from "@mui/material";
import Add from '../Add';
import Sidebar from '../Sidebar';
import Rightbar from '../Rightbar';
import Navbar from '../Navbar';
import Feed from '../Feed';
import { ThemeProvider } from '@mui/material/styles';

export default function AdminPanel() {
    const [mode,setMode]=useState('light')
    const darkTheme=createTheme({
      palette:{
        mode:mode
      }
    })
    return (
      <ThemeProvider theme={darkTheme}>
      <Box bgcolor={'background.default'} color={'text.primary'}>
        <Navbar/>
       <Stack direction={'row'} spacing={2} justifyContent={'space-between'}>
       <Sidebar setMode={setMode} mode={mode}/>
        <Feed/>
        <Rightbar/>
       </Stack>
       <Add/>
      </Box>
      </ThemeProvider>
    )
}
