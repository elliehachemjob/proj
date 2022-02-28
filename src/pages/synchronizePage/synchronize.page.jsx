import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import './synchronize.styles.css';

function Synchronize() {
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');

  const [label1, setLabel1] = useState([{ id: 1, label: 'Auto Sync' }]);

  const menu = [
    { value: 'Per Hour' },
    { value: 'Per 6 hours' },
    { value: 'Per 12 hours' },
    { value: 'Per Day' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };
  const menu3 = [{ value: 'Groups' }, { value: 'Securities' }];

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const menu4 = [{ value: 'Irina Test' }];

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  return (
    <>
      {/* 1st */}

      <div className='container1-synchronize'>
        <div className='grid'>
          <div>
            <ToggleList
              key={label1.id}
              list={label1}
              parent='toggle-list-parent-synchronize'
              div1='div1-toggle-list-parent-synchronize'
              div2='div2-toggle-list-parent-synchronize'
            />
            <Label
              label='Synchronization Time Frame'
              className='label-synchronize'
            />
            <Dropdown
              items={menu}
              label={value}
              handleChange={handleChange}
              value={value}
              inputLabel={value ? value : 'Per Day'}
            />
            <div className='button-wrapper-synchronize'>
              <Button className='button-synchronize' name='Save Changes' />
            </div>
          </div>
          <div>
            <Label label='Server' className='label-synchronize' />
            <Dropdown
              items={menu2}
              label={value2}
              handleChange={handleChange2}
              value={value2}
              inputLabel={value2 ? value2 : 'Server - MT4'}
            />
            <Label label='Synchronize' className='label-synchronize' />
            <Dropdown
              items={menu3}
              label={value3}
              handleChange={handleChange3}
              value={value3}
              inputLabel={value3 ? value3 : 'Groups'}
            />
            <div className='button-wrapper-synchronize'>
              <Button className='button-synchronize' name='Save Changes' />
            </div>
          </div>
          <div>
            {' '}
            <Label label='Synchronize ' className='label-synchronize' />
            <Dropdown
              items={menu4}
              label={value4}
              handleChange={handleChange4}
              value={value4}
              inputLabel={value4 ? value4 : 'Irina Test'}
            />
            <div className='button-wrapper-synchronize'>
              <Button className='button-synchronize' name='Synchronize' />
            </div>
          </div>
        </div>

        {/* <div className='parent-synchronize'></div> */}
      </div>
    </>
  );
}

export default Synchronize;
