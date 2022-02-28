import React from 'react';
import Button from '../../FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../labelComponent/Label.component';
import Input from '../../inputComponent/Input.component';
import { makeStyles } from '@material-ui/core/styles';

import './passwordExpand.styles.css';

function PasswordExpand() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      border: '',
      backgroundColor: '',
      width: 80,
      borderRadius: '10px',
      opacity: 1,
      height: '34px',
      marginTop: '8px',
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
    <div className='wrapper-passwordExpand'>
      <div className='input-wrapper-passwordExpand'>
        <Input label='Length' textFieldStyles={classes.textField} />
      </div>
      <div className='button-wrapper-passwordExpand'>
        <Button
          className='button-fieldsAdd'
          name={
            <div className='wrapper-addIcon-applicationFlow'>
              <Label
                label='Upper Case '
                className='label-addIcon-applicationFlow'
              />
            </div>
          }
          variant='contained'
          sx={{
            backgroundColor: '#2B3A67',
            borderRadius: '10px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#5E807F',
              borderRadius: '10px',
            },
          }}
        />
      </div>
      <div className='button-wrapper-passwordExpand'>
        <Button
          className='button-fieldsAdd'
          name={
            <div className='wrapper-addIcon-applicationFlow'>
              <Label
                label='Lower Case '
                className='label-addIcon-applicationFlow'
              />
            </div>
          }
          variant='contained'
          sx={{
            backgroundColor: '#2B3A67',
            borderRadius: '10px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#5E807F',
              borderRadius: '10px',
            },
          }}
        />
      </div>

      <div className='button-wrapper-passwordExpand'>
        <Button
          className='button-fieldsAdd'
          name={
            <div className='wrapper-addIcon-applicationFlow'>
              <Label label='Number' className='label-addIcon-applicationFlow' />
            </div>
          }
          variant='contained'
          sx={{
            backgroundColor: '#2B3A67',
            borderRadius: '10px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#5E807F',
              borderRadius: '10px',
            },
          }}
        />
      </div>
      <div className='button-wrapper-passwordExpand'>
        <Button
          className='button-fieldsAdd'
          name={
            <div className='wrapper-addIcon-applicationFlow'>
              <Label
                label='Special Character'
                className='label-addIcon-applicationFlow'
              />
            </div>
          }
          variant='contained'
          sx={{
            backgroundColor: '#2B3A67',
            borderRadius: '10px',
            fontWeight: 600,
            '&:hover': {
              backgroundColor: '#5E807F',
              borderRadius: '10px',
            },
          }}
        />
      </div>
    </div>
  );
}

export default PasswordExpand;
