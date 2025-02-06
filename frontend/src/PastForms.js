import React, { useState } from 'react';
import { Box, AppBar, Toolbar, Typography, IconButton, Drawer, Card, CardContent, Grid, Button } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Sidebar from './components/Sidebar';

const mockPostedForms = [
  { id: 1, title: 'Course Feedback', postedOn: '2023-12-01' },
  { id: 2, title: 'Event Feedback', postedOn: '2023-12-05' },
  { id: 3, title: 'Semester Feedback', postedOn: '2023-12-10' },
  { id: 4, title: 'Workshop Feedback', postedOn: '2023-12-15' },
  { id: 5, title: 'Club Feedback', postedOn: '2023-12-20' },
  { id: 6, title: 'Library Feedback', postedOn: '2023-12-25' },
];

const PastForms = () => {
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

      {/* Sidebar Drawer */}
      <Drawer anchor="left" open={open} onClose={toggleDrawer(false)}>
        <Sidebar closeSidebar={toggleDrawer(false)} />
      </Drawer>

      {/* Main Content */}
      <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f0f0f0', p: 3 }}>
        <Typography variant="h4" gutterBottom align="center">
          My Posted Forms
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Card sx={{ height: '500px' }}>
              <CardContent sx={{ maxHeight: '430px', overflowY: 'auto' }}>
                <Typography variant="h6" gutterBottom>
                  Forms Posted by Me
                </Typography>
                {mockPostedForms.map((form) => (
                  <Box
                    key={form.id}
                    sx={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      mb: 2,
                      p: 2,
                      bgcolor: '#e3f2fd',
                      border: '1px solid #e0e0e0',
                      borderRadius: '4px',
                    }}
                  >
                    <Box>
                      <Typography variant="body1">{form.title}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        Posted On: {form.postedOn}
                      </Typography>
                    </Box>
                    <Button variant="outlined" size="small" color="primary">
                      View Responses
                    </Button>
                  </Box>
                ))}
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default PastForms;
