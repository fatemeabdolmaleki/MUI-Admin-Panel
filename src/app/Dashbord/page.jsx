'use client';

import React, { useState } from 'react';
import { Box, useMediaQuery } from '@mui/material';
import Chart from '../Chart';
import Navbar from '../Navbar';
import Sidebar from '../Sidebar';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const Dashboard = () => {
  const [mode, setMode] = useState('light');
  const isMobile = useMediaQuery('(max-width:600px)'); 

  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <Box
        display="flex"
        flexDirection="column"
        bgcolor={'background.default'}
        color={'text.primary'}
        minHeight="100vh"
      >
        <Navbar />
        <Box display="flex" flexGrow={1}>
         
          {!isMobile && (
            <Sidebar setMode={setMode} mode={mode} />
          )}
          <Box
            flexGrow={1}
            p={isMobile ? 2 : 4} 
            ml={isMobile ? 0 : 20} 
          >
            <Chart />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
