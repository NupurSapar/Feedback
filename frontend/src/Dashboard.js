import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="sticky" sx={{ bgcolor: '#4C585B' }}>
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Teacher Feedback Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer - Controlled from here */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Sidebar closeSidebar={toggleDrawer(false)} />
      </Drawer>

      {/* Main Content */}
      <MainContent />
    </Box>
  );
};

export default Dashboard;
