import React from 'react';
import './toggle.styles.css';
import Switch from '@mui/material/Switch';
import './toggle.styles.css';

function Toggle(props) {
  return (
    <Switch
      checked={props.checked}
      className={props.className}
      disabled={props.disabled}
      onClick={props.onClick}
    />
  );
}

export default Toggle;
