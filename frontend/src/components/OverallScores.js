import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from 'recharts';

const mockBarData = [
  { category: 'Engagement', score: 65 },
  { category: 'Clarity', score: 55 },
  { category: 'Support', score: 80 },
];

const OverallScores = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6" gutterBottom>
          Overall Feedback Scores
        </Typography>
        <BarChart width={400} height={200} data={mockBarData}> {/* Reduced chart size */}
          <XAxis dataKey="category" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="score" fill="#8884d8" />
        </BarChart>
      </CardContent>
    </Card>
  );
};

export default OverallScores;
