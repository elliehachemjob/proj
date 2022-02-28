import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Input from '../../components/inputComponent/Input.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import { BellIcon } from '../../components/iconsComponent/Icons.component';
import './mamSettings.Styles.css';

function MamSettings() {
  const [label, setLabel] = useState([{ id: 1, label: 'Is User Comment' }]);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');
  const [value3, setValue3] = useState('');
  const [value4, setValue4] = useState('');
  const [mam, setMam] = useState('');
  const [signalComment, setSignalComment] = useState('');

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'Equity' }, { value: 'Balance' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  const menu3 = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange3 = (event) => {
    setValue3(event.target.value);
  };

  const menu4 = [{ value: 'Profiles' }, { value: 'Link Trades' }];

  const handleChange4 = (event) => {
    setValue4(event.target.value);
  };

  const handleMamChange = (event) => {
    setMam(event.target.value);
  };

  const handleSignalCommentChange = (event) => {
    setSignalComment(event.target.value);
  };

  return (
    <>
      {/* 1st */}
      <Label label='server' className='label-mamSettings' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Server - MT4'}
        className='dropdown-mamSettings'
      />
      <ToggleList
        key={label.id}
        list={label}
        parent='toggle-list-parent-mamSettings'
        div1='div1-toggle-list-parent-mamSettings'
        div2='div2-toggle-list-parent-mamSettings'
      />
      <Label label='MAM Comment' className='label-mamSettings' />

      <Input
        value={mam}
        onChange={handleMamChange}
        label='MAM'
        style={{ margin: 2 }}
      />
      <Label
        label='Max of 10 Characters'
        className='label-mamSettings'
        icon={<BellIcon className='bellIcon-mamSettings' />}
      />
      <Label label='Signal Comment' className='label-mamSettings' />
      <Input
        value={signalComment}
        onChange={handleSignalCommentChange}
        label='Signal'
        style={{ margin: 2 }}
        className='input-mamSettings'
      />
      <Label
        label='Max of 10 Characters'
        className='label-mamSettings'
        icon={<BellIcon className='bellIcon-mamSettings' />}
      />

      <div className='button-wrapper-mamSettings'>
        <Button className='button-mamSettings' name='Save Changes' />
      </div>

      {/* 3rd */}
      <Label label='PF Settings' size={18.72} className='header-mamSettings' />
      <Label label='PF Calculation Methods' className='label-mamSettings' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'Equity'}
      />
      <div className='button-wrapper-mamSettings'>
        <Button className='button-mamSettings' name='Save Changes' />
      </div>

      {/* 4th */}
      <Label
        label='Synchronization'
        size={18.72}
        className='header-mamSettings'
      />
      <Label label='Server' className='label-mamSettings' />
      <Dropdown
        items={menu3}
        label={value3}
        handleChange={handleChange3}
        value={value3}
        inputLabel={value3 ? value3 : 'Server - MT4'}
      />
      <Label label='Synchronize' className='label-mamSettings' />
      <Dropdown
        items={menu4}
        label={value4}
        handleChange={handleChange4}
        value={value4}
        inputLabel={value4 ? value4 : 'Profiles'}
      />
      <div className='button-wrapper-mamSettings'>
        <Button className='button-mamSettings' name='Synchronize' />
      </div>
    </>
  );
}

export default MamSettings;
