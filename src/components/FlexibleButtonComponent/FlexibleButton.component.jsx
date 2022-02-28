import React from 'react';
import Button from '@mui/material/Button';
import './flexibleButton.css';

function FlexibleButton(props) {
  return (
    <div>
      <Button
        onClick={props.onClick}
        className={props.className}
        sx={props.sx}
        variant={props.variant ? props.variant : 'outlined'}
      >
        {props.name}
      </Button>
    </div>
  );
}

export default FlexibleButton;
