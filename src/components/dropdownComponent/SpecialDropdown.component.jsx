import React, { useState } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { DownArrowIcon } from '../iconsComponent/Icons.component';

function Dropdown(props) {
  return (
    <>
      <FormControl
        sx={
          props.formControl
            ? props.formControl
            : {
                m: 0,
                minWidth: 165,
              }
        }
      >
        <InputLabel id='demo-simple-select-autowidth-label'>
          {props.inputLabel}
        </InputLabel>
        <Select
          IconComponent={props.icon ? props.icon : DownArrowIcon}
          labelId='demo-simple-select-autowidth-label'
          id='demo-simple-select-autowidth'
          value={props.value}
          onChange={props.handleChange}
          autoWidth
          label={props.label}
          sx={
            props.sx
              ? props.sx
              : {
                  border: '',
                  backgroundColor: '',
                  minWidth: 189.3,
                  borderRadius: '10px',
                  opacity: 1,
                  '&:hover,&:focus': {
                    border: '1',
                    backgroundColor: '',
                    opacity: 1,
                  },
                }
          }
        >
          {props.items.map((item) => {
            return (
              <MenuItem sx={props.menuSx} value={item.value}>
                {item.value}
              </MenuItem>
            );
          })}
        </Select>
      </FormControl>
    </>
  );
}

export default Dropdown;
