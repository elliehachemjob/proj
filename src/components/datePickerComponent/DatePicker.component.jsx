import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import DateRangePicker from '@mui/lab/DateRangePicker';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import Box from '@mui/material/Box';

//remember usage in "production" the date picker component

function DatePicker(props) {
  const [value, setValue] = useState([null, null]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DateRangePicker
        startText='Start-date'
        endText='End-Date'
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(startProps, endProps) => (
          <React.Fragment>
            <TextField className={props.TextField1Styles} {...startProps} />
            <Box className={props.middleTextStyles} sx={{ mx: 2 }}>
              {props.middleText}
            </Box>
            <TextField className={props.TextField12Styles} {...endProps} />
          </React.Fragment>
        )}
      />
    </LocalizationProvider>
  );
}

export default DatePicker;
