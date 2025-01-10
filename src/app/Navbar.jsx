"use client"
import { AppBar, Avatar, Badge, Box, InputBase, Menu, MenuItem, styled, Toolbar, Typography } from '@mui/material';
import React, { useState } from 'react';
import { Pets, Mail, NotificationAddRounded } from '@mui/icons-material';
import { useRouter } from 'next/navigation';

function Navbar() {
  const [open, setOpen] = useState(false);
  const router = useRouter(); 

  const StyledToolBar = styled(Toolbar)({
    display: 'flex',
    justifyContent: 'space-between',
  });
  const Search = styled('div')(({ theme }) => ({
    backgroundColor: 'white',
    padding: '0 10px',
    borderRadius: theme.shape.borderRadius,
    width: '40%',
  }));
  const Icons = styled(Box)(({ theme }) => ({
    display: 'none',
    gap: '20px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'flex',
    },
  }));
  const UserBox = styled(Box)(({ theme }) => ({
    display: 'flex',
    gap: '10px',
    alignItems: 'center',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  }));

  const handleLogout = () => {
    router.push('/'); 
  };

  return (
    <AppBar position='sticky'>
      <StyledToolBar>
        <Typography sx={{ display: { xs: 'none', sm: 'block' } }} variant='h6'>
          ADMIN PANEL
        </Typography>
        <Pets sx={{ display: { xs: 'block', sm: 'none' } }} />
        <Search>
          <InputBase placeholder='Search...' />
        </Search>
        <Icons>
          <Badge badgeContent={4} color='error'>
            <Mail />
          </Badge>
          <Badge badgeContent={2} color='error'>
            <NotificationAddRounded />
          </Badge>
          <Avatar src='/me.jpg' onClick={(e) => setOpen(true)} />
        </Icons>
        <UserBox onClick={(e) => setOpen(true)}>
          <Avatar src='/me.jpg' />
          <Typography variant='span'>Fateme</Typography>
        </UserBox>
      </StyledToolBar>
      <Menu
        id='demo-positioned-menu'
        aria-labelledby='demo-positioned-button'
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem>Profile</MenuItem>
        <MenuItem>My account</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;
