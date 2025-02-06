import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const mockBarData = [
  { category: 'Engagement', score: 65 },
  { category: 'Clarity', score: 55 },
  { category: 'Support', score: 80 },
];

const OverallScores = () => {
  return (
    <Card sx={{ height: 250, overflow: 'visible' }}> {/* Prevents clipping */}
      <CardContent sx={{ textAlign: 'center', p: 1 }}> {/* Reduces padding */}
        <Typography variant="h6" gutterBottom>
          Overall Feedback Scores
        </Typography>
        <ResponsiveContainer width="100%" height={180}> {/* Increased height for better fit */}
          <BarChart data={mockBarData}>
            <XAxis dataKey="category" />
            <YAxis padding={{ top: 10 }} /> {/* Adds spacing at the top */}
            <Tooltip />
            <Legend />
            <Bar dataKey="score" fill="#6A9AB0" />
          </BarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default OverallScores;
