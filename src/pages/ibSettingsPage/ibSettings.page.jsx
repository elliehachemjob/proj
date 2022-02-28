import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import DatePicker from '../../components/datePickerComponent/DatePicker.component';
import { useMediaQuerySize } from '../../hooks/hooks';
import './ibSettings.Styles.css';

function IbSettings() {
  const [accLinkType, setAccLinkType] = useState([{ label: 'IDNumber' }]);
  const [ibList, setIbList] = useState([
    { label: 'IB - 1000' },
    { label: 'IB - 1001' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      accLinkType: 'IDNumber',
      autoLink: true,
      sererName: 'Server - MT4',
    },
    {
      id: 2,
      accLinkType: 'IDNumber',
      autoLink: true,
      sererName: 'Demo - MT5',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'accLinkType', headerName: 'Acc Link Type', width: 90 },
    {
      field: 'autoLink',
      headerName: 'Auto Link',
      width: 150,
      editable: true,
    },
    {
      field: 'sererName',
      headerName: 'Server Name',
      width: 150,
      editable: true,
    },
  ]);
  const [value, setValue] = useState('');
  const [value2, setValue2] = useState('');

  const menu = [{ value: 'Trades' }, { value: 'Breakdown report' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const menu2 = [{ value: 'IB - 1000' }, { value: 'IB - 1001' }];

  const handleChange2 = (event) => {
    setValue2(event.target.value);
  };

  let mediumScreen = useMediaQuerySize('(max-width:650px)');
  let smallScreen = useMediaQuerySize('(max-width:500px)');

  const screenSizes = () => {
    if (smallScreen) {
      return 185;
    }
    if (mediumScreen) {
      return 200;
    } else {
      return 300;
    }
  };
  return (
    <>
      {/* 1st */}
      <div className='parent-ibSettings'>
        <div className='div1-buttons-ibSettings'>
          <div className='button-list-ibSettings'>
            <div className='button-wrapper-ibSettings'>
              <Button className='button-ibSettings' name='Edit' />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-ibSettings'>
          <SearchInput
            options={accLinkType}
            label='Filter By Type '
            className='searchInput-ibSettings'
            sx={{ width: screenSizes }}
          />
        </div>
      </div>

      {/* 3rd */}
      <Table
        rows={rows}
        columns={columns}
        pageSize={7}
        className='table-ibSettings'
      />
      {/* 4th */}
      <Label label='Synchronize' className='label-ibSettings' />
      <Dropdown
        items={menu}
        label={value}
        handleChange={handleChange}
        value={value}
        inputLabel={value ? value : 'Trades'}
      />
      <Label label='IB' className='label-ibSettings' />
      <Dropdown
        items={menu2}
        label={value2}
        handleChange={handleChange2}
        value={value2}
        inputLabel={value2 ? value2 : 'IB - 1000'}
      />
      <Label label='Date Range' className='label-ibSettings' />
      <DatePicker
        TextField1Styles='datePicker-textField1-ibSettings'
        TextField2Styles='datePicker-textField2-ibSettings'
        middleTextStyles='datePicker-middleText-ibSettings'
        middleText='to'
      />
      <div className='button-wrapper-ibSettings'>
        <Button className='button-ibSettings' name='Synchronize' />
      </div>
      {/* 5th */}
      <Label label='IB Registration Link' className='label-ibSettings' />
      <SearchInput
        options={ibList}
        label='ref '
        className='searchInput-ibSettings'
      />
      <div className='button-wrapper-ibSettings'>
        <Button className='button-ibSettings' name='Update Link' />
      </div>
    </>
  );
}

export default IbSettings;
