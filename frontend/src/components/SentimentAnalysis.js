import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';

const mockPieData = [
  { name: 'Positive', value: 70 },
  { name: 'Neutral', value: 20 },
  { name: 'Negative', value: 10 },
];

const COLORS = ['#FFDB5C', '#A0C878', '#B7E0FF'];

const SentimentAnalysis = () => {
  return (
    <Card sx={{ height: 250, overflow: 'visible' }}> {/* Prevents clipping */}
      <CardContent sx={{ textAlign: 'center', p: 1 }}> {/* Reduces padding */}
        <Typography variant="h6">Sentiment Analysis</Typography>
        <ResponsiveContainer width="100%" height={180}> {/* Increased height for full visibility */}
          <PieChart>
            <Pie
              data={mockPieData}
              cx="50%"
              cy="50%"
              outerRadius={70} /* Increased radius for better fit */
              dataKey="value"
              label
            >
              {mockPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
