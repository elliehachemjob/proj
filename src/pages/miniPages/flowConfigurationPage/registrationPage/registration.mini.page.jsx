import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import FlowStepsModal from '../../applicationFlowPage/flowStepsModalPage/flowStepsModal.mini.page';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import BuildForm from '../../../../components/buildFormComponent/BuildForm.component';
import BuildFormMini from '../buildFormPage/buildForm.mini.page';
import './registration.mini.styles.css';

function Registration() {
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: <Label label='Auto Login' className='label-registration' />,
    },
    {
      id: 2,
      label: <Label label='Green Theme' className='label-registration' />,
    },
    {
      id: 3,
      label: <Label label='Is Enabled' className='label-registration' />,
    },
  ]);
  return (
    <>
      {/* 1st */}
      {/* <Label label='Configuration' className='main-header-applicationFlow' /> */}
      <Label label='Set Up Configuration' className='header-registration' />
      <ToggleList
        key={label1.id}
        list={label1}
        parent='toggle-list-parent-registration'
        div1='div1-toggle-list-parent-registration'
        div2='div2-toggle-list-parent-registration'
      />
      <Label label='Build Form' className='header-registration' />
      <BuildFormMini />
    </>
  );
}

export default Registration;
