import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Table from '../../components/tableComponent/Table.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import './emailTemplate.styles.css';
import { useMediaQuerySize } from '../../hooks/hooks';

function EmailTemplates() {
  const [rows, setRows] = useState([
    {
      id: 1,
      type: 'withdrawal Live Account request',
      status: 'Enabled',
      name: 'withdrawal live account request default - final 2',
      templateDescription: 'withdrawal live account request default - final 2',
    },
    {
      id: 2,
      type: 'Withdrawal Live Account added',
      status: 'Enabled',
      name: 'Withdrawal Live Account added default - final 2',
      templateDescription: 'Withdrawal Live Account added default - final 2',
    },
    {
      id: 3,
      type: 'User Email Validation',
      status: 'Enabled',
      name: 'User email validation default - final 2',
      templateDescription: 'User email validation default - final 2',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'type', headerName: 'Type', width: 250 },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      editable: true,
    },
    {
      field: 'name',
      250: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'templateDescription',
      headerName: 'Template Description',
      width: 250,
      editable: true,
    },
  ]);
  const [hooksNames, setHooksName] = useState([
    { label: 'withdrawal Live Account request' },
    { label: 'Withdrawal Live Account added' },
    { label: 'User Email Validation' },
  ]);

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
      <div className='parent-emailTemplate'>
        <div className='div1-buttons-emailTemplate'>
          <div className='button-list-emailTemplate'>
            <div className='button-wrapper-emailTemplate'>
              <Button className='button-emailTemplate' name='Email Layout' />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-emailTemplate'>
          <SearchInput
            options={hooksNames}
            label={<Label label='Filter by Email Templates' size={15} />}
            className='searchInput-emailTemplate'
            sx={{ width: screenSizes }}
            size='small'
          />
        </div>
      </div>
      {/* 3rd */}
      <Table
        rows={rows}
        columns={columns}
        pageSize={7}
        className='table-emailTemplate'
      />
    </>
  );
}

export default EmailTemplates;
