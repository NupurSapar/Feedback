import React from 'react';
import { Box, Card, CardContent, Typography, Grid, Button } from '@mui/material';
import Leaderboard from './Leaderboard';

const mockAvailableForms = [
  { id: 1, title: 'Course Feedback', deadline: '2024-01-10' },
  { id: 2, title: 'Event Feedback', deadline: '2024-01-15' },
  { id: 3, title: 'Semester Feedback', deadline: '2024-01-20' },
  { id: 4, title: 'Workshop Feedback', deadline: '2024-01-25' },
  { id: 5, title: 'Club Feedback', deadline: '2024-01-30' },
  { id: 6, title: 'Library Feedback', deadline: '2024-02-05' },
];

const mockFilledForms = [
  { id: 1, title: 'Semester Feedback', filledOn: '2023-12-25' },
  { id: 2, title: 'Workshop Feedback', filledOn: '2023-12-20' },
];

const MainContent2 = () => {
  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f0f0f0', p: 3 }}>
      {/* Welcome Message */}
      <Typography variant="h4" gutterBottom align="center">
        Welcome, Student [Name]!
      </Typography>

      <Grid container spacing={3}>
        {/* Leaderboard */}
        <Grid item xs={12} md={6}>
          <Card
            sx={{
              height: '500px', // Larger height for the leaderboard
              overflowY: 'auto', // Make the leaderboard scrollable
            }}
          >
            <CardContent>
              <Typography variant="h6" gutterBottom>
                
              </Typography>
              <Box sx={{ maxHeight: '450px', overflowY: 'auto' }}>
                <Leaderboard />
              </Box>
            </CardContent>
          </Card>
        </Grid>

        {/* Available Forms */}
        <Grid item xs={12} md={6}>
          <Card sx={{ height: '500px' /* Light pink background */ }}>
            <CardContent sx={{ maxHeight: '430px', overflowY: 'auto' }}>
              <Typography variant="h6" gutterBottom>
                Available Forms
              </Typography>
              {mockAvailableForms.map((form) => (
                <Box
                  key={form.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    p: 2,
                    bgcolor:'#fce4ec',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                  }}
                >
                  <Box>
                    <Typography variant="body1">{form.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Deadline: {form.deadline}
                    </Typography>
                  </Box>
                  <Button variant="outlined" size="small" color="primary">
                    Fill
                  </Button>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>

        {/* Filled Forms */}
        <Grid item xs={12}>
          <Card>
            <CardContent>
              <Typography variant="h6" gutterBottom>
                Filled Forms History
              </Typography>
              {mockFilledForms.map((form) => (
                <Box
                  key={form.id}
                  sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    mb: 2,
                    p: 2,
                    bgcolor: '#e8f5e9',
                    border: '1px solid #e0e0e0',
                    borderRadius: '4px',
                  }}
                >
                  <Box>
                    <Typography variant="body1">{form.title}</Typography>
                    <Typography variant="body2" color="text.secondary">
                      Filled On: {form.filledOn}
                    </Typography>
                  </Box>
                  <Button variant="outlined" size="small" color="secondary">
                    View
                  </Button>
                </Box>
              ))}
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default MainContent2;
