import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import { useMediaQuerySize } from '../../hooks/hooks';
import './webhooks.Styles.css';

function WebHooks() {
  const [hooksNames, setHooksName] = useState([
    { label: 'UseLocalStorage' },
    { label: 'UseToggle' },
  ]);
  const [rows, setRows] = useState([
    { id: 0, type: 'Any', name: 'useLocalStorage', target: 'Hook' },
    { id: 1, type: 'Any', name: 'useToggle', target: 'Hook' },
  ]);
  const [columns, setColumns] = useState([
    { field: 'type', headerName: 'Type', width: 90 },
    {
      field: 'name',
      headerName: 'Name',
      width: 150,
      editable: true,
    },
    {
      field: 'target',
      headerName: 'Target',
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
      <div className='parent-webHook'>
        <div className='div1-buttons-webHook'>
          <div className='button-list-webHook'>
            <div className='button-wrapper-webHooks'>
              <Button
                // sx={{ width: 120, height: 40 }}
                className='button-webHooks'
                name='Add'
              />
            </div>
            <div className='button-wrapper-webHooks'>
              <Button
                // sx={{ width: 120, height: 40 }}
                className='button-webHooks'
                name='Edit'
              />
            </div>
            <div className='button-wrapper-webHooks'>
              <Button
                // sx={{ marginBottom: 3 }}
                className='button-webHooks'
                name='Remove'
              />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-webHook'>
          <SearchInput
            options={hooksNames}
            label={<Label label='Filter By Hook Integration' size={15} />}
            className='searchInput-webHooks'
            sx={{ width: screenSizes }}
            size='small'
          />
        </div>
      </div>
      <Table
        rows={rows}
        columns={columns}
        pageSize={7}
        className='table-webHooks'
      />
    </>
  );
}

export default WebHooks;
