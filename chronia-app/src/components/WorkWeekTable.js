
import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';

const WorkWeekTable = ({ workWeek }) => {
  const days = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Day</TableCell>
            <TableCell align="right">Hours Worked</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {days.map((day, index) => (
            <TableRow key={day}>
              <TableCell>{day}</TableCell>
              <TableCell align="right">{workWeek[day] || 0} hrs</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default WorkWeekTable;
