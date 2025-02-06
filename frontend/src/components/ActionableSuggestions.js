import React from 'react';
import { Card, CardContent, Typography, Button, Grid2, Box } from '@mui/material';

const ActionableSuggestions = () => {
  return (
    <Card sx={{ borderRadius: 2, boxShadow: 3, width: '100%' }}> {/* Full width */}
      <CardContent>
        {/* Title */}
        <Typography variant="h6" sx={{ mb: 2, fontWeight: 'bold' }}>
          Actionable Suggestions
        </Typography>

        {/* Suggestions List in Two Columns */}
        <Grid2 container spacing={2} sx={{ mb: 3 }}>
          <Grid2 item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              <strong>1.</strong> Focus more on engagement by introducing interactive sessions.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>2.</strong> Provide clearer instructions for assignments.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>3.</strong> Continue offering one-on-one support to students.
            </Typography>
          </Grid2>
          <Grid2 item xs={12} sm={6}>
            <Typography variant="body1" gutterBottom>
              <strong>4.</strong> Incorporate peer feedback into assignments.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>5.</strong> Create group discussions for complex topics.
            </Typography>
            <Typography variant="body1" gutterBottom>
              <strong>6.</strong> Add more multimedia resources to lessons.
            </Typography>
          </Grid2>
        </Grid2>

        {/* Button */}
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
          <Button 
            variant="contained" 
            color="primary" 
            size="large" 
            sx={{ width: '100%', padding: '10px 20px' }} // Full width
          >
            View Detailed Report
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ActionableSuggestions;
