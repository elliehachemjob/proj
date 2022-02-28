import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Input from '../../components/inputComponent/Input.component';
import './dynamicMargin.styles.css';
function DynamicMargin() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [activationLogins, setActivationLogins] = useState('');

  const handleActivationLoginsChange = (event) => {
    setActivationLogins(event.target.value);
  };

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const menu2 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  return (
    <>
      {/* 1st */}

      <div className='container1-dynamicMargin'>
        <div className='grid'>
          <div>
            <Label
              label='Profiles'
              size={18.72}
              className='header-dynamicMargin'
            />
            <Label label='Server' className='label-dynamicMargin' />
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Server - MT4'}
            />

            <div className='button-wrapper-dynamicMargin'>
              <Button className='button-dynamicMargin' name='Sync Profiles' />
            </div>
          </div>
          {/* 2nd */}
          <div>
            <Label
              label='Activation'
              size={18.72}
              className='header-dynamicMargin'
            />
            <Label label='Server' className='label-dynamicMargin' />
            <Dropdown
              items={menu2}
              label={value2}
              handleChange={handleChange2}
              value={value2}
              inputLabel={value2 ? value2 : 'Server - MT4'}
            />
            <Label label='Activation Logins' className='label-dynamicMargin' />
            <Input
              value={activationLogins}
              onChange={handleActivationLoginsChange}
              label='Activation Logins'
              style={{ margin: 2 }}
            />
            <div className='button-wrapper-dynamicMargin'>
              <Button className='button-dynamicMargin' name='Activate' />
            </div>
          </div>
        </div>
      </div>

      {/* 2nd */}
    </>
  );
}

export default DynamicMargin;
