import React from 'react';
import Checkbox from '@mui/material/Checkbox';

function CheckBox(props) {
  const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

  return (
    <Checkbox
      className={props.className}
      {...label}
      className={props.className}
      color='success'
    />
  );
}

export default CheckBox;
