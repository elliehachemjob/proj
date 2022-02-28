import React from 'react';
import './legalDisclaimerExpand.styles.css';
import Input from '../../inputComponent/Input.component';
import Checkbox from '../../checkboxComponent/CheckBox.component';
import { makeStyles } from '@material-ui/core/styles';

function LegalDisclaimerExpand() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      borderRadius: '10px',
      opacity: 1,
      height: '85px',
      padding: 0,
      '&:hover,&:focus': {
        border: ' ',
        backgroundColor: '',
        opacity: 1,
      },
      button: {
        backgroundColor: '#11468F',
        borderRadius: '20px',
        '&:hover': {
          backgroundColor: '#11468F50',
          borderRadius: '20px',
        },
      },
      dropdown: {
        border: '2px solid #94b3fd20',
        backgroundColor: '#94b3fd15',
        minWidth: 189.3,
        borderRadius: '10px',
        opacity: 0.3,
        '&:hover,&:focus': {
          border: '2px solid #94b3fd20',
          backgroundColor: '#94b3fd20',
          opacity: 0.3,
        },
      },
    },
  }));

  const classes = useStyles();

  return (
    <div className='wrapper-legalDisclaimerExpand'>
      <Input
        label='Activation Logins'
        multiline
        rows={4}
        style={{ marginTop: 2, marginBottom: 2, width: 300 }}
        textFieldStyles={classes.textField}
      />
      <div className='checkbox-legalDisclaimerExpand'>
        <Checkbox />
        is Checkbox
      </div>
    </div>
  );
}

export default LegalDisclaimerExpand;
