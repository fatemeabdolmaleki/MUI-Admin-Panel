'use client';

import React, { useState } from 'react';
import ProfileMain from '../ProfileMain';
import { Box, useMediaQuery } from '@mui/material';
import dynamic from 'next/dynamic';
import Navbar from '../Navbar';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Sidebar from '../Sidebar';

const PieChart = dynamic(() => import('recharts').then(mod => mod.PieChart), { ssr: false });

const Profile = () => {
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
        sx={{
          minHeight: '100vh',
          backgroundColor: mode === 'dark' ? '#121212' : '#ffffff', 
          color: mode === 'dark' ? '#ffffff' : '#000000', 
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <Navbar />
        <Box
          display="flex"
          flexDirection={isMobile ? 'column' : 'row'} 
          flex="1"
        >
          <Box
            sx={{
              width: isMobile ? '100%' : '250px', 
              flexShrink: 0, 
              borderBottom: isMobile ? '1px solid #ccc' : 'none', 
            }}
          >
            <Sidebar setMode={setMode} mode={mode} />
          </Box>
          <Box
            sx={{
              flex: 1, 
              padding: '16px', 
              overflow: 'auto', 
            }}
          >
            <ProfileMain />
          </Box>
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Profile;
