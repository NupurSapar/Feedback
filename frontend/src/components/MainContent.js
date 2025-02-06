import React from 'react';
import { Grid2, Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import OverallScores from './OverallScores';
import SentimentAnalysis from './SentimentAnalysis';
import ActionableSuggestions from './ActionableSuggestions';
import StarRatingsGraph from './StarRatingsGraph';
import WordCloudComponent from './WordCloudComponent';
import Leaderboard from './Leaderboard';

const MainContent = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const handleViewMyForms = () => {
    navigate('/pastforms'); // Navigate to PastForms component
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: '#f0f0f0', p: 3 }}>
      {/* Welcome Message */}
      <Typography variant="h4" gutterBottom align="center">
        Welcome, Teacher [Name]!
      </Typography>

      {/* Two large buttons below the charts */}
      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button
          variant="contained"
          color="primary"
          size="large"
          sx={{ marginRight: 2, width: '200px' }}
          onClick={handleViewMyForms} // Link to PastForms
        >
          View My Forms
        </Button>
        <Button
          variant="contained"
          color="secondary"
          size="large"
          sx={{ width: '200px' }}
        >
          Post New Form
        </Button>
      </Box>

      <Grid2 container spacing={4} sx={{ marginTop: 2 }}>
        {/* Graph Components */}
        <Grid2 item xs={12} md={4}>
          <OverallScores />
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <SentimentAnalysis />
        </Grid2>
        <Grid2 item xs={12} md={4}>
          <StarRatingsGraph />
        </Grid2>

        {/* Scrollable Leaderboard with Responsive Height */}
        <Grid2 item xs={12} md={4} width='20%' >
          <Box
            sx={{
              height: {
                xs: 300,  // For extra small screens (phones)
                sm: 350,  // For small screens (tablets)
                md: 400,  // For medium screens (desktops)
              },
              overflowY: 'auto',
            }}
          >
            <Leaderboard />
          </Box>
        </Grid2>

        <Grid2 item xs={12} md={4} width='75%'>
          <WordCloudComponent />
        </Grid2>
        
        {/* Make Actionable Suggestions Full Width on Small Screens */}
        <Grid2 item xs={12} md={4} width='100%'>
          <ActionableSuggestions />
        </Grid2>
      </Grid2>
    </Box>
  );
};

export default MainContent;
