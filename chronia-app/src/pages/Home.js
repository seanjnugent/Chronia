
import React, { useState } from 'react';
import Header from '../components/Header';
import ClockButton from '../components/ClockButton';
import InfoDisplay from '../components/InfoDisplay';
import WorkWeekTable from '../components/WorkWeekTable';

const Home = () => {
  const [flexiBalance, setFlexiBalance] = useState(0);
  const [todayHours, setTodayHours] = useState(0);
  const [weekHours, setWeekHours] = useState(0);
  const [workWeek, setWorkWeek] = useState({});

  const handleClock = (isClockedIn) => {
    // Logic to start or stop a timer, calculate hours, update the balance, etc.
  };

  return (
    <div>
      <Header />
      <ClockButton onClock={handleClock} />
      <InfoDisplay flexiBalance={flexiBalance} todayHours={todayHours} weekHours={weekHours} />
      <WorkWeekTable workWeek={workWeek} />
    </div>
  );
};

export default Home;
