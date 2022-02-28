import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  AddItemIcon,
  EditItemIcon,
  DeleteItemIcon,
  GoBackIcon,
  InstructionsIcon,
} from '../../components/iconsComponent/Icons.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';

import './flowConfigurationHolder.styles.css';

function FlowConfigurationHolder() {
  const [hooksNames, setHooksName] = useState([
    { label: 'UseLocalStorage' },
    { label: 'UseToggle' },
  ]);
  const [columns, setColumns] = useState([
    {
      field: 'configurationName',
      headerName: 'Configuration Name',
      width: 150,
    },
    {
      field: 'isEnabled',
      headerName: 'Is Enabled',
      width: 150,
      editable: true,
    },
    {
      field: 'registrationLink',
      headerName: 'Registration Link',
      width: 150,
      editable: true,
    },
  ]);
  const [rows, setRows] = useState([
    {
      id: 1,
      configurationName: 'Hamad1',
      isEnabled: 'true',
      registrationLink: 'link1',
    },
    {
      id: 2,
      configurationName: 'Hamad Flow',
      isEnabled: 'false',
      registrationLink: 'link2',
    },
    {
      id: 3,
      configurationName: 'Gale',
      isEnabled: 'true',
      registrationLink: 'link3',
    },
    {
      id: 4,
      configurationName: 'Lewis',
      isEnabled: 'false',
      registrationLink: 'link4',
    },
    {
      id: 5,
      configurationName: 'Helen',
      isEnabled: 'true',
      registrationLink: 'link5',
    },
    {
      id: 6,
      configurationName: 'Darell',
      isEnabled: 'false',
      registrationLink: 'link6',
    },
    {
      id: 7,
      configurationName: 'Nancy',
      isEnabled: 'true',
      registrationLink: 'link7',
    },
    {
      id: 8,
      configurationName: 'Charise',
      isEnabled: 'false',
      registrationLink: 'link8',
    },
    {
      id: 9,
      configurationName: 'Steven',
      isEnabled: 'true',
      registrationLink: 'link9',
    },
    {
      id: 10,
      configurationName: 'Kenneth',
      isEnabled: 'false',
      registrationLink: 'link10',
    },
    {
      id: 11,
      configurationName: 'Velma',
      isEnabled: 'true',
      registrationLink: 'link11',
    },
    {
      id: 12,
      configurationName: 'Warren',
      isEnabled: 'false',
      registrationLink: 'link12',
    },
    {
      id: 13,
      configurationName: 'Suzanne',
      isEnabled: 'true',
      registrationLink: 'link13',
    },
    {
      id: 14,
      configurationName: 'Blanca',
      isEnabled: 'false',
      registrationLink: 'link14',
    },
    {
      id: 15,
      configurationName: 'Vanessa',
      isEnabled: 'true',
      registrationLink: 'link14',
    },
    {
      id: 16,
      configurationName: 'James',
      isEnabled: 'false',
      registrationLink: 'link15',
    },
    {
      id: 17,
      configurationName: 'Stella',
      isEnabled: 'true',
      registrationLink: 'link16',
    },
    {
      id: 18,
      configurationName: 'Robert',
      isEnabled: 'false',
      registrationLink: 'link17',
    },
    {
      id: 19,
      configurationName: 'William',
      isEnabled: 'true',
      registrationLink: 'link18',
    },
    {
      id: 20,
      configurationName: 'Richard',
      isEnabled: 'false',
      registrationLink: 'link19',
    },
    {
      id: 21,
      configurationName: 'Muriel',
      isEnabled: 'true',
      registrationLink: 'link20',
    },
    {
      id: 22,
      configurationName: 'Allan',
      isEnabled: 'false',
      registrationLink: 'link21',
    },
    {
      id: 23,
      configurationName: 'Rosemarie',
      isEnabled: 'true',
      registrationLink: 'link22',
    },
    {
      id: 24,
      configurationName: 'Georgina',
      isEnabled: 'false',
      registrationLink: 'link23',
    },
    {
      id: 25,
      configurationName: 'Evelyn',
      isEnabled: 'true',
      registrationLink: 'link24',
    },
    {
      id: 26,
      configurationName: 'Jennifer',
      isEnabled: 'false',
      registrationLink: 'link25',
    },
    {
      id: 27,
      configurationName: 'Edwin',
      isEnabled: 'true',
      registrationLink: 'link26',
    },
    {
      id: 28,
      configurationName: 'Connie',
      isEnabled: 'false',
      registrationLink: 'link27',
    },
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
      {/* <InstructionsIcon className='instructions-flowConfiguration' /> */}

      <Label
        label='Flow Configuration'
        className='header-ApplicationFlowHolder'
        fontWeight={1000}
      />
      {/* 2nd */}
      <div className='buttonWrapper-applicationFlowHolder'>
        <div className='button1-wrapper-applicationFlowHolder'>
          <Link to='/flowConfiguration' className='link-applicationFlowHolder'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-applicationFlow'>
                  <Label
                    label={
                      <div className='newFlow-applicationFlow'>
                        <AddItemIcon />
                        Add Configuration
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
        <Link to='/flowConfiguration' className='link-applicationFlowHolder'>
          <div className='button2-wrapper-applicationFlowHolder'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-applicationFlow'>
                  <Label
                    label={
                      <div className='newFlow-applicationFlow'>
                        <EditItemIcon />
                        Edit Configuration
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
                      Remove Configuration
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

      {/* 4th */}

      <Table
        rows={rows}
        columns={columns}
        pageSize={8}
        className='table-webHooks'
      />
    </>
  );
}

export default FlowConfigurationHolder;
