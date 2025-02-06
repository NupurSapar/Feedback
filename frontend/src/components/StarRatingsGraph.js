import React, { useState } from 'react';
import { Card, CardContent, Typography, Button, Box } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const StarRatingsGraph = () => {
  const [timePeriod, setTimePeriod] = useState('month');

  // Sample data for the different time periods
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

  // Handle toggle between time periods
  const handleToggle = (period) => {
    setTimePeriod(period);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Star Ratings</Typography>

        {/* Toggle Buttons */}
        <Box my={1}>
          <Button
            variant={timePeriod === 'month' ? 'contained' : 'outlined'}
            onClick={() => handleToggle('month')}
            sx={{ marginRight: 2 }}
          >
            Last Month
          </Button>
          <Button
            variant={timePeriod === 'sixMonths' ? 'contained' : 'outlined'}
            onClick={() => handleToggle('sixMonths')}
            sx={{ marginRight: 2 }}
          >
            Last 6 Months
          </Button>
          <Button
            variant={timePeriod === 'year' ? 'contained' : 'outlined'}
            onClick={() => handleToggle('year')}
          >
            Last Year
          </Button>
        </Box>

        {/* Bar Graph */}
        <BarChart width={450} height={150} data={data[timePeriod]}>
          <XAxis dataKey="rating" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="count" fill="#0088FE" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default StarRatingsGraph;
