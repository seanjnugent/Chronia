
import React, { useState } from 'react';
import { Button } from '@mui/material';
import { format } from 'date-fns';

const ClockButton = ({ onClock }) => {
  const [clockedIn, setClockedIn] = useState(false);

  const handleClick = () => {
    setClockedIn(!clockedIn);
    onClock(c => !c);
  };

  return (
    <Button
      variant="contained"
      color={clockedIn ? "secondary" : "primary"}
      onClick={handleClick}
      style={{ width: '100%', margin: '20px 0' }}
    >
      {clockedIn ? "Clock Out" : "Clock In"}
    </Button>
  );
};

export default ClockButton;
