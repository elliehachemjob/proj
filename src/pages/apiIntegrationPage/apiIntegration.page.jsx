import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import './apiIntegration.styles.css';
import { useMediaQuerySize } from '../../hooks/hooks';

function ApiIntegration() {
  const [integrationName, setIntegrationName] = useState([
    { label: 'Twilio' },
    { label: 'sumsub' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      integrationName: 'sumsub',
      type: 'Sumsub',
      enabled: 'Enabled',
    },
    {
      id: 2,
      integrationName: 'Twilio',
      type: 'Twilio',
      enabled: 'Enabled',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'integrationName', headerName: 'Integration Name', width: 90 },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      editable: true,
    },
    {
      field: 'enabled',
      headerName: 'Enable',
      width: 150,
      editable: true,
    },
  ]);

  let mediumScreen = useMediaQuerySize('(max-width:755px)');
  let smallScreen = useMediaQuerySize('(max-width:500px)');

  const screenSizes = () => {
    if (smallScreen) {
      return 80;
    }
    if (mediumScreen) {
      return 150;
    } else {
      return 300;
    }
  };

  return (
    <>
      {/* 1st */}
      <Label
        label='API Integration'
        size={18.72}
        className='header-apiIntegration'
      />
      {/* 2nd */}
      <div className='parent-apiIntegration'>
        <div className='div1-buttons-apiIntegration'>
          <div className='button-list-apiIntegration'>
            <div className='button-wrapper-apiIntegration'>
              <Button className='button-apiIntegration' name='Add' />
            </div>
            <div className='button-wrapper-apiIntegration'>
              <Button className='button-apiIntegration' name='Edit' />
            </div>
            <div className='button-wrapper-apiIntegration'>
              <Button className='button-apiIntegration' name='Remove' />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-apiIntegration'>
          <SearchInput
            options={integrationName}
            label='Filter By API Integration'
            sx={{ width: screenSizes }}
          />
        </div>
      </div>

      <Table rows={rows} columns={columns} pageSize={7} />
    </>
  );
}

export default ApiIntegration;
