
import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

const InfoDisplay = ({ flexiBalance, todayHours, weekHours }) => {
  return (
    <div>
      <Card>
        <CardContent>
          <Typography variant="h6">Flexi Balance: {flexiBalance} hrs</Typography>
          <Typography variant="h6">Today: {todayHours} hrs</Typography>
          <Typography variant="h6">This Week: {weekHours} hrs</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default InfoDisplay;
