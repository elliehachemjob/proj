import React from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';

function RadioButtonList(props) {
  return (
    <FormControl component='fieldset'>
      <RadioGroup defaultValue={props.defaultValue} name='radio-buttons-group'>
        {props.list.map((item) => {
          return (
            <div className={props.containerClass}>
              <FormControlLabel
                key={item.id}
                value={item.value}
                label={item.label}
                control={<Radio />}
                style={props.style}
              />
            </div>
          );
        })}
      </RadioGroup>
    </FormControl>
  );
}

export default RadioButtonList;
