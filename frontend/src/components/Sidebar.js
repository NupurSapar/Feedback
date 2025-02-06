import React from 'react';
import { List, ListItem, ListItemText, Divider, IconButton, Box } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useNavigate } from 'react-router-dom';

const Sidebar = ({ closeSidebar }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{ width: 250 }}>
      {/* Close Button */}
      <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
        <IconButton onClick={closeSidebar}>
          <CloseIcon />
        </IconButton>
      </Box>

      {/* Sidebar Items */}
      <List onClick={closeSidebar}>
        <ListItem button onClick={() => navigate('/')}>
          <ListItemText primary="Dashboard" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Reports" />
        </ListItem>
        <ListItem button onClick={() => navigate('/teacherprofile')}>
          <ListItemText primary="Profile" />
        </ListItem>
        <ListItem button>
          <ListItemText primary="Settings" />
        </ListItem>
        <ListItem button onClick={() => navigate('/student')}>
          <ListItemText primary="Student" />
        </ListItem>
        <ListItem button onClick={() => navigate('/teacher')}>
          <ListItemText primary="Teacher" />
        </ListItem>
        <Divider />
      </List>
    </Box>
  );
};

export default Sidebar;
