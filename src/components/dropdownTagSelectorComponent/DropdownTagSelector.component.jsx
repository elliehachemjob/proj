import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import { DownArrowIcon } from '../iconsComponent/Icons.component';

function DropdownTagSelector(props) {
  const theme = useTheme();
  const [personName, setPersonName] = useState([]);
  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: props.widthTagSelectorOpened
          ? props.widthTagSelectorOpened
          : 250,
      },
    },
  };
  const names = ['Passport', 'ID Card', 'Drivers License', 'Residence Permit'];

  function getStyles(name, personName, theme) {
    return {
      fontWeight:
        personName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    );
  };

  return (
    <FormControl
      sx={props.sx ? props.sx : { margin: 0, width: 300, height: 20 }}
    >
      <InputLabel
        id='demo-multiple-chip-label'
        style={{ fontWeight: 700, marginTop: -2 }}
      >
        Chip
      </InputLabel>
      <Select
        style={{ paddingTop: 25, paddingBottom: 25 }}
        IconComponent={props.icon ? props.icon : DownArrowIcon}
        labelId='demo-multiple-chip-label'
        id='demo-multiple-chip'
        multiple
        value={personName}
        onChange={handleChange}
        input={
          <OutlinedInput
            sx={{
              maxRows: 1,
              gap: 0,
              multiline: false,
              borderRadius: 2,
              width: 275,
              borderRadius: 1,
              background: '',
              minHeight: 5,
              padding: 0,
              margin: 0,
              minWidth: props.minWidth ? props.minWidth : 165,
              opacity: 1,
              '&:hover,&:focus': {},
            }}
            id='select-multiple-chip'
            label='Chip'
          />
        }
        renderValue={(selected) => (
          <Box
            sx={{
              display: 'flex',
              gap: 0.5,
            }}
          >
            {selected.map((value) => (
              <Chip
                sx={{
                  backgroundColor: 'hsl(168, 75%, 42%)',
                  borderRadius: '10px',
                  fontWeight: 1000,
                  color: 'white',
                  '&:hover': {
                    backgroundColor: 'hsl(168, 75%, 32%)',
                    borderRadius: '10px',
                  },
                }}
                key={value}
                label={value}
              />
            ))}
          </Box>
        )}
        MenuProps={MenuProps}
      >
        {names.map((name) => (
          <MenuItem
            key={name}
            value={name}
            // style={getStyles(name, personName, theme)}
          >
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}

export default DropdownTagSelector;
