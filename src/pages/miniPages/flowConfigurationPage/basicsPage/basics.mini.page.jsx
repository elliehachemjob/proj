import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';
import Input from '../../../../components/inputComponent/Input.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import { makeStyles } from '@material-ui/core/styles';

import './basics.mini.styles.css';
function Basics() {
  const [value, setValue] = useState('');
  const menu = [{ value: 'IB' }, { value: 'Trader' }, { value: 'Signal' }];
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: <Label label='Is Enabled' className='toggle-label-basics' />,
    },
    {
      id: 2,
      label: <Label label='Is Default' className='toggle-label-basics' />,
    },
  ]);
  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const useStyles = makeStyles((theme) => ({
    textField: {
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: 5,
    },
  }));

  const classes = useStyles();

  return (
    <div className=''>
      {/* 1st */}
      <div className=''>
        <Label
          label='Configuration'
          className='header-basics'
          marginLeft={-10}
        />
        <ToggleList
          key={label1.id}
          list={label1}
          parent='toggle-list-parent-basics'
          div1='div1-toggle-list-parent-basics'
          div2='div2-toggle-list-parent-basics'
        />
      </div>
      <div className=''>
        <Label label='Title' className='header-basics' marginLeft={-10} />
        <Input
          label='AMConfig-IB'
          style={{
            width: 210,
          }}
          textFieldStyles={classes.textField}
        />
      </div>

      <div className=''>
        <Label
          label='Select Permission'
          className='header-basics'
          marginLeft={-10}
        />
        <Dropdown
          items={menu}
          label={value}
          handleChange={handleChange}
          value={value}
          inputLabel={value ? value : 'Select'}
          sx={{
            fontSize: 'inherit',
            width: 210,
            borderRadius: 2,
          }}
          menuSx={{
            width: 210,
          }}
        />
      </div>
    </div>
  );
}

export default Basics;
