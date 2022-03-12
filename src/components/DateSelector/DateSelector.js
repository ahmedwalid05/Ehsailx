import React from 'react';
import PropTypes from 'prop-types';
import { FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const DateSelector = ({ selectedDate, setSelectedDate, dateOptions }) => {
  return (
    <FormControl sx={{ minWidth: 150 }}>
      <InputLabel id="select-time-period-label">
        Selected time periods
      </InputLabel>
      <Select
        autoWidth
        value={selectedDate}
        label="select-time-period-label"
        onChange={(event) => {
          const value = event.target.value;
          setSelectedDate(value);
        }}
      >
        {Object.keys(dateOptions).map((dateOptionKey) => (
          <MenuItem key={dateOptionKey} value={dateOptionKey}>
            {dateOptionKey}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

DateSelector.propTypes = {
  selectedDate: PropTypes.string,
  setSelectedDate: PropTypes.func,
  dateOptions: PropTypes.object,
};

export default DateSelector;
