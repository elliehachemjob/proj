import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import './searchInput.styles.css';
function SearchInput(props) {
  return (
    <Autocomplete
      disablePortal
      id='combo-box-demo'
      options={props.options}
      classes={props.classes ? props.classes : ''}
      sx={
        props.sx
          ? props.sx
          : {
              border: '',
              backgroundColor: '',
              borderRadius: '5px',
              width: 190,
              marginLeft: 1,
              background: '""',
              opacity: 1,
              '&:hover,&:focus': {
                border: ' ',
                backgroundColor: '',
                opacity: 1,
              },
            }
      }
      // size={props.size ? props.size : ''}
      className={props.className}
      renderInput={(params) => {
        const {
          InputLabelProps,
          disabled,
          fullWidth,
          id,
          inputProps,
          InputProps,
        } = params;

        const newObject = { ...InputProps, className: props.textFieldStyles };

        return (
          <TextField
            InputLabelProps={InputLabelProps}
            disabled={disabled}
            fullWidth={fullWidth}
            id={id}
            inputProps={inputProps}
            InputProps={newObject}
            // InputProps={{ className: props.textFieldStyles }}
            label={props.label}
          />
        );
      }}
    />
  );
}

export default SearchInput;
