import React from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import FlowStepsModal from '../../applicationFlowPage/flowStepsModalPage/flowStepsModal.mini.page';
import BuildForm from '../../../../components/buildFormComponent/BuildForm.component';
import { BuildFormModalFixed } from '../buildFormModalPage/buildFormModal.mini.page';
import './buildForm.mini.styles.css';

function BuildFormMini() {
  return (
    <BuildFormModalFixed
      content={
        <>
          <Label label='Build The Form' className='header-registration' />
          <div className='modalSteps-wrapper-registration'>
            <FlowStepsModal
              modalButtonName={'Customize Fields'}
              field1='Email'
              field2='Password'
              field3='Full Name'
              field4='First Name'
              field5='Last Name'
              field6='Confirm Password'
              field7='Country'
              field8='Phone Number'
              field9='Legal Disclaimer'
              field10='GETCode'
              field1Description='It allows clients to send and receive messages'
              field2Description='Password should contain Uppercase,Lowercase,Numbers and Special Characters'
              field3Description='a persons whole name, including their first name and surname,(Last Name)'
              field4Description='A person name given to someone at birth and used before a family name'
              field5Description='Surname / Family Name / The name that comes after the first name'
              field6Description='Another field to retype password in case user wrote the password wrong while Sign up / Registering'
              field7Description='Nation / The place or location the person is currently residing / Living '
              field8Description='Series of numbers that you dial/type when you are making a telephone call'
              field9Description='Protects your business from legal liability / warning sign when users visit your blog or site. It notifies readers that your advice, products, or services may harm them, and that you cannot be held responsible.'
              field10Description='Allows you to allow user to GetCode'
              allowExtraFields
            />
          </div>

          <div className='buildForm-wrapper-registration'>
            <BuildForm />
          </div>

          <div className='button-wrapper-registration'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-registration'>
                  <Label
                    label='Apply Changes'
                    className='label-addIcon-registration'
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
      }
    />
  );
}

export default BuildFormMini;
