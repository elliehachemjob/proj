import React, { useState } from 'react';
import ExpandableAccordion from '../expandableAccordionComponent/ExpandableAccordion.component';
import Input from '../inputComponent/Input.component';
import { makeStyles } from '@material-ui/core/styles';
import ToggleList from '../ListComponents/toggleListComponent/ToggleList.component';
import PasswordExpand from './passwordComponentFlowConfiguration/PasswordExpand';
import './buildForm.styles.css';
import LegalDisclaimerExpand from './legalDisclaimerComponentFlowConfiguration/LegalDisclaimerExpand.component';

function BuildForm() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: `1px solid  ""`,
      minWidth: 189.3,

      borderRadius: '5px',
      opacity: 0.6,
      '&:hover,&:focus': {},
    },
  }));
  const classes = useStyles();

  const [label1, setLabel1] = useState([
    { id: 1, label: 'Turn on/off notifications' },
  ]);

  return (
    <>
      {/* 1st  */}
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        className='expandableAccordionTest-buildForm'
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Email'
                style={{ width: 165 }}
                sx={{ borderColor: 'red' }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        hideExpandIcon={true}
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm-exception'
            testComponent1={
              <Input
                label='Password'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
        section2={<PasswordExpand />}
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Full Name'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='First Name'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Last Name'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Confirm Password'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Country'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='Phone Number'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
      <ExpandableAccordion
        hideExpandIcon={true}
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm-exception'
            testComponent1={
              <Input
                label='Legal Disclaimer'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
        section2={<LegalDisclaimerExpand />}
      />
      <ExpandableAccordion
        sx={{
          marginTop: '10px',
          marginBottom: '10px',
          backgroundColor: '',
          borderRadius: '5px',
          border: '1px solid 	hsl(0, 0%, 0%)',
          width: 700,
        }}
        expanded={false}
        hideExpandIcon={true}
        section1={
          <ToggleList
            key={label1.id}
            list={label1}
            parent='toggle-list-parent-buildForm'
            div1='div1-toggle-list-parent-buildForm'
            div2='div2-toggle-list-parent-buildForm'
            testComponent1={
              <Input
                label='GETCode'
                style={{ width: 165 }}
                textFieldStyles={classes.textField}
              />
            }
          />
        }
      />
    </>
  );
}

export default BuildForm;
