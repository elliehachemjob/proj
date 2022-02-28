import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  EditItemIcon,
  DeleteItemIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';

import FlowListModal from '../miniPages/applicationFlowPage/flowListModalPage/flowListModal.mini.page';
import FlowStepsModal from '../miniPages/applicationFlowPage/flowStepsModalPage/flowStepsModal.mini.page';
import ServerChooseModal from '../miniPages/applicationFlowPage/serverChooseModalPage/serverChooseModal.mini.page';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import './applicationFlowHeader.styles.css';

function ApplicationFlowHolder(props) {
  const [hooksNames, setHooksName] = useState([
    { label: 'UseLocalStorage' },
    { label: 'UseToggle' },
  ]);
  const [columns, setColumns] = useState([
    { field: 'flowName', headerName: 'Flow Name', width: 150 },
    {
      field: 'isEnabled',
      headerName: 'Is Enabled',
      width: 150,
      editable: true,
    },
  ]);
  const [rows, setRows] = useState([
    { id: 1, flowName: 'Hamad1', isEnabled: 'true' },
    { id: 2, flowName: 'Hamad Flow', isEnabled: 'false' },
    { id: 3, flowName: 'Gale', isEnabled: 'true' },
    { id: 4, flowName: 'Lewis', isEnabled: 'false' },
    { id: 5, flowName: 'Helen', isEnabled: 'true' },
    { id: 6, flowName: 'Darell', isEnabled: 'false' },
    { id: 7, flowName: 'Nancy', isEnabled: 'true' },
    { id: 8, flowName: 'Charise', isEnabled: 'false' },
    { id: 9, flowName: 'Steven', isEnabled: 'true' },
    { id: 10, flowName: 'Kenneth', isEnabled: 'false' },
    { id: 11, flowName: 'Velma', isEnabled: 'true' },
    { id: 12, flowName: 'Warren', isEnabled: 'false' },
    { id: 13, flowName: 'Suzanne', isEnabled: 'true' },
    { id: 14, flowName: 'Blanca', isEnabled: 'false' },
    { id: 15, flowName: 'Vanessa', isEnabled: 'true' },
    { id: 16, flowName: 'James', isEnabled: 'false' },
    { id: 17, flowName: 'Stella', isEnabled: 'true' },
    { id: 18, flowName: 'Robert', isEnabled: 'false' },
    { id: 19, flowName: 'William', isEnabled: 'true' },
    { id: 20, flowName: 'Richard', isEnabled: 'false' },
    { id: 21, flowName: 'Muriel', isEnabled: 'true' },
    { id: 22, flowName: 'Allan', isEnabled: 'false' },
    { id: 23, flowName: 'Rosemarie', isEnabled: 'true' },
    { id: 24, flowName: 'Georgina', isEnabled: 'false' },
    { id: 25, flowName: 'Evelyn', isEnabled: 'true' },
    { id: 26, flowName: 'Jennifer', isEnabled: 'false' },
    { id: 27, flowName: 'Edwin', isEnabled: 'true' },
    { id: 28, flowName: 'Connie', isEnabled: 'false' },
  ]);

  const useStyles = makeStyles((theme) => ({
    textField: {
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: 5,
    },
  }));

  const classes = useStyles();

  return (
    <>
      {/* 1st */}
      <Label
        label='Application Flow'
        className='header-ApplicationFlowHolder'
        fontWeight={1000}
      />
      {/* 2nd */}
      <div className='buttonWrapper-applicationFlowHolder'>
        <div className='button1-wrapper-applicationFlowHolder'>
          <Link to='/newApplicationFlow' className='link-applicationFlowHolder'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-applicationFlow'>
                  <Label
                    label={
                      <div className='newFlow-applicationFlow'>
                        <AddItemIcon />
                        New Flow
                      </div>
                    }
                    className='label-addIcon-applicationFlow'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: 'hsl(204, 82%, 43%)',
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 33%)',
                  borderRadius: '10px',
                },
              }}
            />
          </Link>
        </div>
        <Link to='/newApplicationFlow' className='link-applicationFlowHolder'>
          <div className='button2-wrapper-applicationFlowHolder'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-applicationFlow'>
                  <Label
                    label={
                      <div className='newFlow-applicationFlow'>
                        <EditItemIcon />
                        Edit Flow
                      </div>
                    }
                    className='label-addIcon-applicationFlow'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: 'hsl(204, 82%, 43%)',
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 33%)',
                  borderRadius: '10px',
                },
              }}
            />
          </div>
        </Link>

        <div className='button3-wrapper-applicationFlowHolder'>
          <Button
            className='button-fieldsAdd'
            name={
              <div className='wrapper-addIcon-applicationFlow'>
                <Label
                  label={
                    <div className='newFlow-applicationFlow'>
                      <DeleteItemIcon />
                      Remove Flow
                    </div>
                  }
                  className='label-addIcon-applicationFlow'
                />
              </div>
            }
            variant='contained'
            sx={{
              backgroundColor: 'hsl(204, 82%, 43%)',
              borderRadius: '10px',
              fontWeight: 600,
              '&:hover': {
                backgroundColor: 'hsl(204, 82%, 33%)',
                borderRadius: '10px',
              },
            }}
          />
        </div>
      </div>

      {/* 3rd */}
      <div className='searchInputWrapper-applicationFlowHolder'>
        <div className='searchInput-applicationFlowHolder'>
          <SearchInput
            options={hooksNames}
            label={<Label label='Filter By' />}
            className='searchInput-webHooks'
            textFieldStyles={classes.textField}
          />
        </div>
      </div>

      <Table
        rows={rows}
        columns={columns}
        pageSize={8}
        className='table-webHooks'
      />
    </>
  );
}

export default ApplicationFlowHolder;
