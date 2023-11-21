import React, { useState } from 'react';
import { Container, Grid, Button, TextField } from '@mui/material';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import MobileTimePicker from '@mui/lab/MobileTimePicker';
import DesktopDatePicker from '@mui/lab/DesktopDatePicker';
import '@mui/lab/date-fns';
import '../CSS_components/scheduler.css'; // Import your custom stylesheet for styling

export const Scheduler = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(new Date());

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleScheduleAppointment = () => {
    // Handle the logic to save the selected date and time for consultation
    console.log('Scheduled appointment:', selectedDate, selectedTime);
    // Add your logic to save the selected date and time
  };

  return (
    <Container className="scheduler">
      <h2>Select Date and Time for Consultation</h2>

      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <DesktopDatePicker
              label="Select Date"
              value={selectedDate}
              onChange={handleDateChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <MobileTimePicker
              label="Select Time"
              value={selectedTime}
              onChange={handleTimeChange}
              renderInput={(params) => <TextField {...params} fullWidth />}
            />
          </Grid>
        </Grid>
      </LocalizationProvider>

      <Button
        variant="contained"
        color="primary"
        onClick={handleScheduleAppointment}
        disabled={!selectedDate || !selectedTime}
      >
        Schedule Appointment
      </Button>
    </Container>
  );
};
