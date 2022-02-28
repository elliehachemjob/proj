import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import { StackIcon } from '../../../../components/iconsComponent/Icons.component';
import Label from '../../../../components/labelComponent/Label.component';
import BreakLine from '../../../../components/breakLineComponent/BreakLine.component';
import ExpandableAccordion from '../../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import Input from '../../../../components/inputComponent/Input.component';
import SearchInput from '../../../../components/searchInputComponent/SearchInput.component';

import { makeStyles } from '@material-ui/core/styles';

import './editSubConditions.mini.styles.css';

function EditSubConditions(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: (
        <Label
          className='toggle-label-editSubCondition'
          label='Restrict phone to the domain of Country of residence'
        />
      ),
    },
  ]);
  const [label2, setLabel2] = useState([
    {
      id: 1,
      label: (
        <Label
          className='toggle-label-editSubCondition'
          label='Check if phone exist'
        />
      ),
    },
  ]);
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      borderRadius: '10px',
      background: '""',
      opacity: 1,
      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
    },
  }));
  const classes = useStyles();
  const [searchList, setSearchList] = useState([
    { label: 'none' },
    { label: 'Applicant Data' },
    { label: 'Default Account Conditions' },
    { label: 'Identity Verification' },
    { label: 'Address Verification' },
    { label: 'Complete your profile' },
    { label: 'Submit & Review' },
  ]);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      icon={
        <StackIcon
          className='stackIcon-editSubCondition'
          onClick={handleOpen}
        />
      }
      modalBackground='white'
    >
      {/* 1st */}
      <Label className='header-editSubCondition' label='Condition 1' />
      {/* 2st */}
      <Label className='header-editSubCondition' label='Primary' />
      {/* 3rd */}
      <ExpandableAccordion
        section1={<Label className='label-editSubCondition' label='Deadline' />}
        section2={
          <>
            <ToggleList
              key={label1.id}
              list={label1}
              parent='toggle-list-parent-editSubCondition'
              div1='div1-toggle-list-parent-editSubCondition'
              div2='div2-toggle-list-parent-editSubCondition'
            />
            <Label
              className='specialHeader-editSubCondition'
              label='Set How Many Days Client Have To Complete Profile'
            />
            <Input
              label='0'
              style={{
                // marginBottom: 2.5,
                marginLeft: 0.8,
                width: 190,
              }}
              textFieldStyles={classes.textField}
            />
          </>
        }
      />

      {/* 4th */}
      <ExpandableAccordion
        section1={<Label className='label-editSubCondition' label='SumSub' />}
        section2={
          <>
            <Label
              className='specialHeader-editSubCondition'
              label='Select After Which Step you want to Verify data with SumSub'
            />
            <SearchInput
              options={searchList}
              label={<Label label='Applicant Data' size={15} />}
              className='searchInput-emailTemplate'
              sx={{ marginLeft: 1, width: 190 }}
              textFieldStyles={classes.textField}
            />
          </>
        }
      />
      {/* 5th */}
      <ExpandableAccordion
        section1={
          <Label className='label-editSubCondition' label='Phone OTP' />
        }
        section2={
          <>
            <ToggleList
              key={label1.id}
              list={label1}
              parent='toggle-list-parent-editSubCondition'
              div1='div1-toggle-list-parent-editSubCondition'
              div2='div2-toggle-list-parent-editSubCondition'
            />
            <ToggleList
              key={label2.id}
              list={label2}
              parent='toggle-list-parent-editSubCondition'
              div1='div1-toggle-list-parent-editSubCondition'
              div2='div2-toggle-list-parent-editSubCondition'
            />
          </>
        }
      />
    </ModalUsage>
  );
}

export default EditSubConditions;
