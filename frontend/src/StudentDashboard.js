import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';
import MainContent2 from './components/MainContent2';

const StudentDashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="sticky">
        <Toolbar>
          <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h5">Student Feedback Dashboard</Typography>
        </Toolbar>
      </AppBar>

      {/* Sidebar Drawer - Controlled from here */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Sidebar closeSidebar={toggleDrawer(false)} />
      </Drawer>

      {/* Main Content */}
      <MainContent2 />
    </Box>
  );
};

export default StudentDashboard;
