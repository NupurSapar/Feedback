import React, { useState } from 'react';
import { Grid, Box, Button, Typography, Card, CardContent } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Description, PostAdd, School } from '@mui/icons-material';
import OverallScores from './OverallScores';
import SentimentAnalysis from './SentimentAnalysis';
import ActionableSuggestions from './ActionableSuggestions';
import StarRatingsGraph from './StarRatingsGraph';
import WordCloudComponent from './WordCloudComponent';
import Leaderboard from './Leaderboard';
import './MainContent.css';

const mockPostedForms = [
  { id: 1, title: 'Course Feedback', postedOn: '2023-12-01' },
  { id: 2, title: 'Event Feedback', postedOn: '2023-12-05' },
  { id: 3, title: 'Semester Feedback', postedOn: '2023-12-10' },
  { id: 4, title: 'Workshop Feedback', postedOn: '2023-12-15' },
  { id: 5, title: 'Club Feedback', postedOn: '2023-12-20' },
  { id: 6, title: 'Library Feedback', postedOn: '2023-12-25' },
];

const MainContent = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('score');

  const handleViewMyForms = () => {
    navigate('/pastforms');
  };

  return (
    <Box component="main" sx={{ flexGrow: 1, bgcolor: '#ffffff', p: 3 }}>
      <Typography variant="h4" sx={{ textAlign: 'center', width: '100%' }}>
        Welcome, Nupur!
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button variant="contained" color="primary" size="large" sx={{ mr: 2, width: '220px', bgcolor: '#6A9AB0' }} onClick={handleViewMyForms} startIcon={<Description />}>
          View My Forms
        </Button>
        <Button variant="contained" color="secondary" size="large" sx={{ mr: 2, width: '220px', bgcolor: '#6A9AB0'  }} startIcon={<PostAdd />}>
          Post New Form
        </Button>
        <Button variant="contained" color="secondary" size="large" sx={{ mr: 2, width: '220px', bgcolor: '#6A9AB0'  }} startIcon={<School />}>
          Join Institution
        </Button>
      </Box>
    

      {/* Layout with Graphs (Left) and Past Forms (Right) */}
      <Grid container spacing={3} sx={{ mt: 4 }}>
        {/* Left Section (Graphs) */}
        <Grid item xs={12} md={8}>
          <Card sx={{ height: 600, display: 'flex', flexDirection: 'column' }}>
            {/* Fixed Tab Buttons */}
            <Box className="tab-buttons" sx={{ display: 'flex', borderBottom: '1px solid #ddd', p: 1 }}>
              <Button className={`tab-button ${activeTab === 'score' ? 'active' : ''}`} onClick={() => setActiveTab('score')}>
                Score
              </Button>
              <Button className={`tab-button ${activeTab === 'comments' ? 'active' : ''}`} onClick={() => setActiveTab('comments')}>
                Comments
              </Button>
              <Button className={`tab-button ${activeTab === 'badges' ? 'active' : ''}`} onClick={() => setActiveTab('badges')}>
                Badges
              </Button>
            </Box>

            {/* Scrollable Content */}
            <CardContent sx={{ flexGrow: 1, overflowY: 'auto' }}>
              <Grid container spacing={2}>
                {activeTab === 'score' && (
                  <>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '25%', marginBottom: 4}}>
                        <OverallScores />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '100%',marginBottom: 4 }}>
                        <SentimentAnalysis />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '100%',marginBottom: 4 }}>
                        <StarRatingsGraph />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '25%',marginBottom: 4 }}>
                        <OverallScores />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '100%',marginBottom: 4 }}>
                        <SentimentAnalysis />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 250, minWidth: '100%',marginBottom: 4 }}>
                        <StarRatingsGraph />
                      </Box>
                    </Grid>
                  </>
                )}

                {activeTab === 'comments' && (
                  <>
                     <Grid item xs={12}>
                      <Box sx={{ height: 250, minWidth: '100%', marginTop: 2, marginBottom: 4 }}>
                        <ActionableSuggestions />
                      </Box>
                    </Grid>
                    <Grid item xs={12} md={8}>
                      <Box sx={{ height: 300, minWidth: '100%',marginBottom: 4 }}>
                        <WordCloudComponent />
                      </Box>
                    </Grid>
                  </>
                )}

                {activeTab === 'badges' && (
                  <>
                    <Grid item xs={12} md={4}>
                      <Box sx={{ height: 400, minWidth: 500 }}>
                        <Leaderboard />
                      </Box>
                    </Grid>
                  </>
                )}
              </Grid>
            </CardContent>
          </Card>
        </Grid>

        {/* Right Section (Past Forms) */}
        <Grid item xs={12} md={4}>
          <Card sx={{ height: 600 }}>
            <CardContent sx={{ maxHeight: '570px', overflowY: 'auto' }}>
              <Typography variant="h6" gutterBottom align="center">
                My Posted Forms
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
  );
};

export default MainContent;
