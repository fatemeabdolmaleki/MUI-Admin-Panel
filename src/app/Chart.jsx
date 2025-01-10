import React, { useEffect, useState } from 'react';
import { Box, Grid, Typography, Card, CardContent, Button } from '@mui/material';
import { LineChart, Line, BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

// Sample data for charts
const sessionData = [
  { name: 'Day 1', sessions: 5000 },
  { name: 'Day 2', sessions: 7000 },
  { name: 'Day 3', sessions: 8000 },
  { name: 'Day 4', sessions: 11000 },
  { name: 'Day 5', sessions: 15000 },
];

const pageViewsData = [
  { name: 'Apr', pageViews: 2789, downloads: 3593, conversions: 2038 },
  { name: 'May', pageViews: 3000, downloads: 4000, conversions: 2500 },
  { name: 'Jun', pageViews: 2789, downloads: 3593, conversions: 2038 },
];

const Chart = () => {
  const [isClient, setIsClient] = useState(false);

  // Check if it's the client-side render (componentDidMount)
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Prevent rendering charts server-side
  }

  return (
    <Box sx={{ p: 3 }}>

      <Grid container spacing={3}>
        {/* Overview Cards */}
        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Users</Typography>
              <Typography variant="h4" color="primary">14k</Typography>
              <Typography color="green">+25%</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Conversions</Typography>
              <Typography variant="h4" color="error">325</Typography>
              <Typography color="red">-25%</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Event Count</Typography>
              <Typography variant="h4">200k</Typography>
              <Typography color="green">+5%</Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12} md={3}>
          <Card>
            <CardContent>
              <Typography variant="h6">Explore your data</Typography>
              <Button variant="contained" color="primary">Get Insights</Button>
            </CardContent>
          </Card>
        </Grid>

        {/* Sessions Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Sessions</Typography>
              <Typography color="green">+35%</Typography>
              <LineChart width={300} height={200} data={sessionData}>
                <Line type="monotone" dataKey="sessions" stroke="#8884d8" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
              </LineChart>
            </CardContent>
          </Card>
        </Grid>

        {/* Page Views Chart */}
        <Grid item xs={12} md={6}>
          <Card>
            <CardContent>
              <Typography variant="h6">Page Views and Downloads</Typography>
              <Typography color="red">-8%</Typography>
              <BarChart width={300} height={200} data={pageViewsData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="pageViews" fill="#8884d8" />
                <Bar dataKey="downloads" fill="#82ca9d" />
              </BarChart>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Chart;
