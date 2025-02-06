import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './Sidebar';
import MainContent from './components/MainContent';
import './Dashboard.css';

const Dashboard = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (isOpen) => () => {
    setOpen(isOpen);
  };

  return (
    <Box>
      {/* Top Navigation Bar */}
      <AppBar position="sticky" sx={{ bgcolor: '#A0C878' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <IconButton color="inherit" edge="start" onClick={toggleDrawer(true)} sx={{ mr: 2 }}>
              <MenuIcon />
            </IconButton>
            <Typography variant="h5">Teacher Feedback Dashboard</Typography>
          </div>

          {/* User Profile Section - Moved inside Toolbar */}
          <div className="user-profile">
            <div className="avatar" />
            <div className="user-info">
              <span className="username">Name</span>
              <span className="email">Name@gmail.com</span>
            </div>
          </div>
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
