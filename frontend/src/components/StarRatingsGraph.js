import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const StarRatingsGraph = () => {
  const [timePeriod, setTimePeriod] = useState('month');

  const data = {
    month: [
      { rating: '5 stars', count: 20 },
      { rating: '4 stars', count: 35 },
      { rating: '3 stars', count: 50 },
      { rating: '2 stars', count: 30 },
      { rating: '1 star', count: 10 },
    ],
    sixMonths: [
      { rating: '5 stars', count: 120 },
      { rating: '4 stars', count: 150 },
      { rating: '3 stars', count: 180 },
      { rating: '2 stars', count: 90 },
      { rating: '1 star', count: 50 },
    ],
    year: [
      { rating: '5 stars', count: 240 },
      { rating: '4 stars', count: 300 },
      { rating: '3 stars', count: 350 },
      { rating: '2 stars', count: 150 },
      { rating: '1 star', count: 100 },
    ],
  };

  return (
    <Card sx={{ height: 250, overflow: 'visible' }}> {/* Prevents clipping */}
      <CardContent sx={{ textAlign: 'center', p: 1 }}> {/* Reduces padding */}
        <Typography variant="h6">Star Ratings</Typography>
        <Box my={1} display="flex" justifyContent="center">
          <Button 
            size="small" 
            variant={timePeriod === 'month' ? 'contained' : 'outlined'} 
            onClick={() => setTimePeriod('month')} 
            sx={{ mx: 0.3, minWidth: 40 }} 
          >
            1M
          </Button>
          <Button 
            size="small" 
            variant={timePeriod === 'sixMonths' ? 'contained' : 'outlined'} 
            onClick={() => setTimePeriod('sixMonths')} 
            sx={{ mx: 0.3, minWidth: 40 }} 
          >
            6M
          </Button>
          <Button 
            size="small" 
            variant={timePeriod === 'year' ? 'contained' : 'outlined'} 
            onClick={() => setTimePeriod('year')} 
            sx={{ mx: 0.3, minWidth: 40 }} 
          >
            1Y
          </Button>
        </Box>
        <ResponsiveContainer width="100%" height={140}> {/* Increased height slightly */}
          <BarChart data={data[timePeriod]}>
            <XAxis dataKey="rating" />
            <YAxis padding={{ top: 10 }} /> {/* Adds spacing at the top */}
            <Tooltip />
            <Legend />
            <Bar dataKey="count" fill="#A0C878" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default StarRatingsGraph;
