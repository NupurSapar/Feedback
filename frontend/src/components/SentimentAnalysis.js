import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';
import { PieChart, Pie, Cell } from 'recharts';

const mockPieData = [
  { name: 'Positive', value: 70 },
  { name: 'Neutral', value: 20 },
  { name: 'Negative', value: 10 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28'];

const SentimentAnalysis = () => {
  return (
    <Card>
      <CardContent>
        <Typography variant="h6">Sentiment Analysis</Typography>
        <PieChart width={450} height={200}>
          <Pie
            data={mockPieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={(entry) => `${entry.name}: ${entry.value}%`}
          >
            {mockPieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </CardContent>
    </Card>
  );
};

export default SentimentAnalysis;
