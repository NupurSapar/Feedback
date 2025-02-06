import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Avatar, Card, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import Sidebar from './Sidebar'; // ✅ Using YOUR Sidebar Component

const TeacherProfile = () => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

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

      {/* Sidebar Drawer (Using Your Sidebar Component) */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Sidebar closeSidebar={toggleDrawer(false)} /> 
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f0f0f0', p: 3 }}>
        {/* Welcome Message */}
        <Typography variant="h4" gutterBottom align="center">
          Welcome, Teacher [Name]!
        </Typography>

        {/* Profile Card */}
        <Card sx={{ p: 4, boxShadow: 3, textAlign: 'center' }}>
          <Avatar 
            src="https://via.placeholder.com/150" // Replace with actual image URL
            sx={{ width: 120, height: 120, margin: 'auto', mb: 2 }}
          />
          <Typography variant="h4">Prof. John Doe</Typography>
          <Typography variant="subtitle1" color="textSecondary">
            Senior Lecturer, Computer Science
          </Typography>
          <Typography variant="body1" sx={{ mt: 2 }}>
            Passionate educator with 10+ years of experience in software engineering and machine learning.
            Committed to helping students excel through interactive learning and hands-on projects.
          </Typography>
        </Card>

        {/* Action Buttons */}
        <Grid container spacing={2} sx={{ mt: 4 }}>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="primary" onClick={() => navigate('/dashboard')}>
              Go to Dashboard
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="secondary" onClick={() => navigate('/past-forms')}>
              View Past Forms
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="success" onClick={() => navigate('/post-form')}>
              Post New Form
            </Button>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Button fullWidth variant="contained" color="warning" onClick={() => navigate('/reports')}>
              View All Reports
            </Button>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default TeacherProfile;
