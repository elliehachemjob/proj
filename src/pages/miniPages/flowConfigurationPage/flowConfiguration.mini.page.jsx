import React, { useState, useEffect } from 'react';
import Basics from './basicsPage/basics.mini.page';
import WalletConfiguration from './walletConfigurationPage/walletConfiguration.mini.page';
import ConditionsConfiguration from './conditionsConfiguration/conditionsConfiguration.mini.page';
import Conditions from './conditionsPage/conditions.mini.page';
import Registration from './registrationPage/registration.mini.page';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import {
  BlackCircleIcon,
  CancelCircleIcon,
  CorrectCircleIcon,
  GoBackIcon,
  SaveIcon,
} from '../../../components/iconsComponent/Icons.component';
import BreakLine from '../../../components/breakLineComponent/BreakLine.component';
import ConfettiExplosion from 'react-confetti-explosion';
import BuildFormMini from './buildFormPage/buildForm.mini.page';
import ServerChooseModal from '../applicationFlowPage/serverChooseModalPage/serverChooseModal.mini.page';
import { Link } from 'react-router-dom';

import './flowConfiguration.mini.styles.css';

// make Container marginLeft to  0 or add props/redux etc

function FlowConfiguration() {
  const [basicsIcon, setBasicsIcon] = useState('default');
  const [rightSide, setRightSide] = useState('basics');
  const [walletConfigurationIcon, setWalletConfigurationIcon] =
    useState('default');
  const [conditionsConfigurationIcon, setConditionsConfigurationIcon] =
    useState('default');
  const [conditionsIcon, setConditionsIcon] = useState('default');
  const [registrationIcon, setRegistrationIcon] = useState('default');
  const [buildFormMiniIcon, setBuildFormMiniIcon] = useState('default');

  const [basicBreakLine, setBasicBreakLine] = useState(true);
  const [WalletConfigurationBreakLine, setWalletConfiguration] = useState(true);
  const [ConditionsConfigurationBreakLine, setConditionsConfiguration] =
    useState(true);
  const [ConditionsBreakLine, setConditionsBreakLine] = useState(true);
  const [BuildFormMiniBreakLine, setBuildFormMiniBreakLine] = useState(true);

  const BasicIcon = () => {
    if (basicsIcon === 'default') {
      return <BlackCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (basicsIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!basicsIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const WalletConfigurationIcon = () => {
    if (walletConfigurationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (walletConfigurationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!walletConfigurationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const ConditionsConfigurationIcon = () => {
    if (conditionsConfigurationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (conditionsConfigurationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!conditionsConfigurationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const ConditionsIcon = () => {
    if (conditionsIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (conditionsIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!conditionsIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };
  const RegistrationIcon = () => {
    if (registrationIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (registrationIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!registrationIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };

  const BuildFormMiniIcon = () => {
    if (buildFormMiniIcon === 'default') {
      return (
        <BlackCircleIcon
          className='icon-flowConfiguration-defaultsExceptBasics'
          sx={{ width: '15px', height: '15px' }}
        />
      );
    }
    if (buildFormMiniIcon) {
      return <CorrectCircleIcon className='icon-flowConfiguration-default' />;
    }
    if (!buildFormMiniIcon) {
      return (
        <CancelCircleIcon className='icon-flowConfiguration-notComplete' />
      );
    }
  };

  const handleBasicsIcon = (e) => {
    setBasicBreakLine(false);

    setRightSide('basics');
    setBasicsIcon(true);

    if (e.detail > 1) {
      setBasicsIcon(false);
    }
  };

  const handleWalletConfigurationIcon = (e) => {
    setWalletConfiguration(false);

    setRightSide('Wallet Configuration');

    setWalletConfigurationIcon(true);

    if (e.detail > 1) {
      setWalletConfigurationIcon(false);
    }
  };
  const handleConditionsConfigurationIcon = (e) => {
    setConditionsConfiguration(false);
    setRightSide('Conditions Configuration');

    setConditionsConfigurationIcon(true);
    if (e.detail > 1) {
      setConditionsConfigurationIcon(false);
    }
  };
  const handleConditionsIcon = (e) => {
    setConditionsBreakLine(false);
    setRightSide('Conditions');

    setConditionsIcon(true);
    if (e.detail > 1) {
      setConditionsIcon(false);
    }
  };
  const handleRegistrationIcon = (e) => {
    setRightSide('Registration');
    setRegistrationIcon(true);
    if (e.detail > 1) {
      setRegistrationIcon(false);
    }
  };

  const handleBuildFormIcon = (e) => {
    setBuildFormMiniBreakLine(false);

    setRightSide('Form');
    setBuildFormMiniIcon(true);
    if (e.detail > 1) {
      setBuildFormMiniIcon(false);
    }
  };

  const RightSideBasics = () => {
    if (rightSide === 'basics') {
      return <Basics />;
    }
    if (rightSide === 'Wallet Configuration') {
      return <WalletConfiguration />;
    }
    if (rightSide === 'Conditions Configuration') {
      return <ConditionsConfiguration />;
    }
    if (rightSide === 'Conditions') {
      return <Conditions />;
    }
    if (rightSide === 'Registration') {
      return <Registration />;
    }
    if (rightSide === 'Form') {
      return <BuildFormMini />;
    }
  };

  return (
    <>
      <div className='goBack-wrapper-flowConfiguration'>
        <Link
          to='/flowConfigurationHolder'
          className='link-applicationFlow goBack-wrapper-applicationFlow'
        >
          <GoBackIcon className='goBackIcon-applicationFlow' />
          <Label
            label='Go Back'
            className='goBack-applicationFlow'
            fontWeight={1000}
          />
        </Link>
      </div>

      <div className='newWrapper-flowConfiguration'>
        <div style={{ minWidth: '18.75rem' }} id='mySidebar'>
          <div className='div1-wholeContainer'>
            <div className='wrapper-FlowConfiguration'>
              <div className='inner-iconWrapper-flowConfiguration'>
                <BasicIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Basics'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleBasicsIcon}
                  />
                </div>
              </div>
              <div className='inner-breakLineWrapper-flowConfiguration'>
                <BreakLine
                  className={
                    basicBreakLine
                      ? 'breakLine-flowConfiguration'
                      : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                  }
                />
              </div>
              {/* 2nd */}
              <div className='inner-iconWrapper-flowConfiguration'>
                <WalletConfigurationIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Wallet Configuration'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleWalletConfigurationIcon}
                  />
                </div>
              </div>
              <div className='inner-breakLineWrapper-flowConfiguration'>
                <BreakLine
                  className={
                    WalletConfigurationBreakLine
                      ? 'breakLine-flowConfiguration'
                      : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                  }
                />
              </div>
              {/* 3rd */}
              <div className='inner-iconWrapper-flowConfiguration'>
                <ConditionsConfigurationIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Conditions & Configuration'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleConditionsConfigurationIcon}
                  />
                </div>
              </div>

              <div className='inner-breakLineWrapper-flowConfiguration'>
                <BreakLine
                  className={
                    ConditionsConfigurationBreakLine
                      ? 'breakLine-flowConfiguration'
                      : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked '
                  }
                />
              </div>

              {/* 4th */}
              {/* <div className='inner-iconWrapper-flowConfiguration'>
                <ConditionsIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Conditions'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleConditionsIcon}
                  />
                </div>
              </div>
              <div className='inner-breakLineWrapper-flowConfiguration'>
                <BreakLine
                  className={
                    ConditionsBreakLine
                      ? 'breakLine-flowConfiguration'
                      : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                  }
                />
              </div> */}
              {/* 5th */}
              {/* <div className='inner-iconWrapper-flowConfiguration'>
                <BuildFormMiniIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Build Form'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleBuildFormIcon}
                  />
                </div>
              </div>
              <div className='inner-breakLineWrapper-flowConfiguration'>
                <BreakLine
                  className={
                    BuildFormMiniBreakLine
                      ? 'breakLine-flowConfiguration'
                      : 'breakLine-flowConfiguration breakLine-flowConfiguration-checked'
                  }
                />
              </div> */}
              {/* 6th */}
              <div className='inner-iconWrapper-flowConfiguration'>
                <RegistrationIcon />
                <div className='inner-label-flowConfiguration'>
                  <Label
                    label='Registration'
                    className='label-FlowConfiguration'
                    size={18.72}
                    fontWeight={1000}
                    onClick={handleRegistrationIcon}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: '34.375rem' }} className='div2-wholeContainer'>
          <RightSideBasics />
        </div>
      </div>
      <div className='saveButton-wrapper-flowConfiguration'>
        <Button
          className='button-fieldsAdd'
          name={
            <div className='wrapper-addIcon-applicationFlow'>
              <Label
                label={
                  <div className='newFlow-applicationFlow'>
                    <SaveIcon />
                    Save Configuration
                  </div>
                }
                className='label-addIcon-applicationFlow'
              />
            </div>
          }
          variant='contained'
          sx={{
            backgroundColor: 'hsl(204, 82%, 53%)',
            borderRadius: '10px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: 'hsl(204, 82%, 43%)',
              borderRadius: '10px',
            },
          }}
        />
      </div>
    </>
  );
}

export default FlowConfiguration;
