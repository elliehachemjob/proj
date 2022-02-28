import React from 'react';
import Radio from '@mui/material/Radio';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

import './radioButton.styles.css';

function RadioButton(props) {
  return (
    <FormControl>
      <FormControlLabel
        value={props.value}
        control={<Radio />}
        label={props.label}
      />
    </FormControl>
  );
}

export default RadioButton;
