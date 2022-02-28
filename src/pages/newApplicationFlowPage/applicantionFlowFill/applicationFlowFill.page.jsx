import React, { useState } from 'react';
import Label from '../../../components/labelComponent/Label.component';
import Input from '../../../components/inputComponent/Input.component';
import BreakLine from '../../../components/breakLineComponent/BreakLine.component';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import CheckBox from '../../../components/checkboxComponent/CheckBox.component';
import RadioButton from '../../../components/radioButtonComponent/radioButton.component';
import SearchInput from '../../../components/searchInputComponent/SearchInput.component';
import ApplicationFlowPageRegistration from '../../miniPages/applicationFlowPage/applicationFlowRegistration.mini.page';
import ApplicationFlowPageRegistrationNoModal from '../../miniPages/applicationFlowPage/applicationFlowRegistrationNoModal.mini.page';
import { makeStyles } from '@material-ui/core/styles';
import FlowConfigurationRegistration from '../../miniPages/flowConfigurationPage/flowConfigurationRegistration.mini.page';

import './applicationFlowFill.styles.css';

function ApplicationFlowFill() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      width: '40vw',
      height: '5vh',
      color: 'black',
      backgroundColor: 'rgb(234,235,237)',
    },
    searchInput: {
      width: '40vw',
      height: '5.5vh',
      color: 'black',
    },
  }));
  const classes = useStyles();

  const countriesAndTerritoriesList = [
    {
      id: 1,
      value: 'Included',
      label: 'Included',
    },
    {
      id: 2,
      value: 'Excluded',
      label: 'Excluded',
    },
  ];

  const [countryList, setCountryList] = useState([
    { label: 'Lebanon' },
    { label: 'Cyprus' },
    { label: 'USA' },
  ]);

  const [optionsList, setOptionsList] = useState([
    { label: 'option1' },
    { label: 'option2' },
    { label: 'option3' },
  ]);

  const [secondFlow, setSecondFlow] = useState(false);

  const handleSaveChange = () => {
    setSecondFlow(true);
  };

  if (secondFlow) {
    return (
      <div style={{ width: '50vw' }}>
        <FlowConfigurationRegistration />
      </div>
    );
  }

  return (
    <div className='mainWrapper-ApplicationFlowFill'>
      {/* 1st */}
      <div className='container1-ApplicationFlowFill'>
        <Label
          label='Level Name'
          className='levelNameHeader-ApplicationFlowFill'
        />
        <Input name='basic-kyc-level' textFieldStyles={classes.textField} />
        <Label
          label='Note that once you create a level,you will not be able to change its name.'
          className='levelNameLabel-ApplicationFlowFill'
        />
      </div>
      {/* 2nd */}
      <div className='container2-ApplicationFlowFill'>
        <Label
          label='Required Steps'
          className='requiredStepsHeader-ApplicationFlowFill'
        />
        <BreakLine className='breakLine-ApplicationFlowFill' />
        <Label
          label='Here you should set up the steps that are required
          from your customers to complete the verification process'
          className='requiredStepsLabel-ApplicationFlowFill'
        />
        <Label
          label={`Please note that the order of these steps is
          important, as it defines your customer's journey  `}
          className='requiredStepsLabel-ApplicationFlowFill'
        />
        <Label
          label='Choose Server'
          className='chooseServerHeader-ApplicationFlowFill'
        />
        <div className='radioButtons-ApplicationFlowFill'>
          <RadioButton label='IB' />
          <RadioButton label='Trader' />
        </div>
        {/* 3rd */}
        <div style={{ marginLeft: 5 }}>
          <ApplicationFlowPageRegistrationNoModal />
          <div className='addNewStep-buttonWrapper-ApplicationFlowFill'>
            <Button
              name={
                <Label
                  textTransform='none'
                  label='Add a new step'
                  className='buttonLabel-ApplicationFlowFill'
                />
              }
              variant='contained'
            />
          </div>
        </div>
        {/* 4th */}
        <Label
          label='Countries and Territories'
          className='countriesHeader-ApplicationFlowFill'
        />
        <div className='radioButtons-ApplicationFlowFill'>
          <RadioButton label='Included' />
          <RadioButton label='Excluded' />
        </div>

        <SearchInput
          options={countryList}
          label='Select included countries'
          textFieldStyles={classes.searchInput}
          sx={{ marginLeft: 0.9, padding: 0 }}
        />

        <Label
          label={`Here you may specify the countries that this
          applicant level supports.leave this field empty if there is no
          restrictions `}
          className='countryIncludedLabel-ApplicationFlowFill'
          marginLeft={6}
        />
        <Label
          label='Source Key'
          className='header-ApplicationFlowFill'
          marginLeft={7}
        />
        <SearchInput
          options={optionsList}
          label='Select option'
          textFieldStyles={classes.searchInput}
          sx={{ marginLeft: 0.9, padding: 0 }}
        />
        <div className='checkBoxAndLabelWrapper-ApplicationFlowFill'>
          <CheckBox />
          <Label
            label='Email Notifications'
            className='checkboxLabel-ApplicationFlowFill'
          />
        </div>
        <div className='checkBoxAndLabelWrapper-ApplicationFlowFill'>
          <CheckBox />
          <Label
            label='Use Custom ID documents Settings'
            className='checkboxLabel-ApplicationFlowFill'
          />
        </div>

        {/* 5th */}
        <div className='buttonsWrapper-ApplicationFlowFill'>
          <div className='button1Wrapper-ApplicationFlowFill'>
            <Button
              name={
                <Label
                  textTransform='none'
                  label='Add a new flow'
                  className='buttonLabel-ApplicationFlowFill'
                />
              }
              variant='contained'
            />
          </div>
          <div className='button2Wrapper-ApplicationFlowFill'>
            <Button
              onClick={handleSaveChange}
              name={
                <Label
                  textTransform='none'
                  label='Save'
                  className='buttonLabel-ApplicationFlowFill'
                />
              }
              variant='contained'
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationFlowFill;
