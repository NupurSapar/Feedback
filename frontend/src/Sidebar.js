import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon, Divider, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AssessmentIcon from '@mui/icons-material/Assessment';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import SchoolIcon from '@mui/icons-material/School';
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 250, bgcolor: '#f5f5f5', height: '100vh' }}>
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={closeSidebar}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Sidebar Items */}
      <List onClick={closeSidebar}>
        <ListItem 
          button 
          onClick={() => navigate('/')}
          sx={{ '&:hover': { bgcolor: '#A0C878' } }}
        >
          <ListItemIcon><DashboardIcon /></ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>

        <ListItem 
          button 
          sx={{ '&:hover': { bgcolor: '#e0e0e0' } }}
        >
          <ListItemIcon><AssessmentIcon /></ListItemIcon>
          <ListItemText primary="Reports" />
        </ListItem>

        <ListItem 
          button 
          onClick={() => navigate('/teacherprofile')}
          sx={{ '&:hover': { bgcolor: '#B7E0FF' } }}
        >
          <ListItemIcon><AccountCircleIcon /></ListItemIcon>
          <ListItemText primary="Profile" />
        </ListItem>

        <ListItem 
          button 
          sx={{ '&:hover': { bgcolor: '#e0e0e0' } }}
        >
          <ListItemIcon><SettingsIcon /></ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>

        <ListItem 
          button 
          onClick={() => navigate('/student')}
          sx={{ '&:hover': { bgcolor: '#FFDB5C' } }}
        >
          <ListItemIcon><SchoolIcon /></ListItemIcon>
          <ListItemText primary="Student" />
        </ListItem>

        <ListItem 
          button 
          onClick={() => navigate('/teacher')}
          sx={{ '&:hover': { bgcolor: '#A0C878' } }}
        >
          <ListItemIcon><PersonIcon /></ListItemIcon>
          <ListItemText primary="Teacher" />
        </ListItem>

        <Divider />
      </List>
    </Box>
  );
};

export default Sidebar;
