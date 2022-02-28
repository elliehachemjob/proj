import React, { useState } from 'react';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import './flowStepsModal.mini.styles.css';
import Description from '../../../../components/descriptionComponent/Description.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../../components/labelComponent/Label.component';
import {
  AddItemIcon,
  EditItemIcon,
} from '../../../../components/iconsComponent/Icons.component';

function FlowStepsModal(props) {
  const [smsVerificationDisplay, setSmsVerificationDisplay] = useState('');
  const [emailVerificationDisplay, setEmailVerificationDisplay] = useState('');
  const [selfieVerificationDisplay, setSelfieVerificationDisplay] =
    useState('');
  const [addressVerificationDisplay, setAddressVerificationDisplay] =
    useState('');
  const [createAccountDisplay, setCreateAccountDisplay] = useState('');
  const [questionnaireDisplay, setQuestionnaireDisplay] = useState('');
  const [depositMoneyDisplay, setDepositMoneyDisplay] = useState('');
  const [applicantDataDisplay, setApplicantDataDisplay] = useState('');
  const [uploadDocumentsDisplay, setUploadDocumentsDisplay] = useState('');
  const [addedDataDisplay, setAddedDataDisplay] = useState('');

  const handleSmsVerificationDisplay = () => {
    setSmsVerificationDisplay('none');
  };
  const handleEmailVerificationDisplay = () => {
    setEmailVerificationDisplay('none');
  };
  const handleSelfieVerificationDisplay = () => {
    setSelfieVerificationDisplay('none');
  };
  const handleAddressVerificationDisplay = () => {
    setAddressVerificationDisplay('none');
  };
  const handleCreateAccountDisplay = () => {
    setCreateAccountDisplay('none');
  };
  const handleQuestionnaireDisplay = () => {
    setQuestionnaireDisplay('none');
  };
  const handleDepositMoneyDisplay = () => {
    setDepositMoneyDisplay('none');
  };
  const handleApplicantDataDisplay = () => {
    setApplicantDataDisplay('none');
  };
  const handleUploadDocumentsDisplay = () => {
    setUploadDocumentsDisplay('none');
  };
  const handleAddedDataDisplay = () => {
    setAddedDataDisplay('none');
  };

  return (
    <ModalUsage
      popupButtonName={
        <div className='wrapper-addIcon-applicationFlow'>
          <Label
            label={
              props.modalButtonName ? (
                props.modalButtonName
              ) : (
                <div className='newFlow-applicationFlow'>
                  <EditItemIcon />
                  Flow Steps
                </div>
              )
            }
            className='label-addIcon-applicationFlow'
          />
        </div>
      }
      sx={{
        backgroundColor: 'hsl(204, 82%, 53%)',
        borderRadius: '10px',
        fontWeight: 600,

        '&:hover': {
          backgroundColor: 'hsl(204, 82%, 43%)',
          borderRadius: '10px',
        },
      }}
      modalBackground='#C1E0F7'
    >
      <div className='parent-flowStepsModal'>
        <div className='div1-flowStepsModal'>
          <Button
            onClick={handleSmsVerificationDisplay}
            className='button-fieldsAdd'
            name={props.field1 ? props.field1 : 'SMS Verification'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              display: smsVerificationDisplay,
              fontWeight: 600,

              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div2-flowStepsModal'>
          <Description
            style={{ display: smsVerificationDisplay }}
            className='description-flowStepsModal'
          >
            {props.field1Description ? (
              props.field1Description
            ) : (
              <div>
                In SMS authentication, the user provides a code that has been
                sent to their phone via SMS as proof of their identity.
              </div>
            )}
          </Description>
        </div>
        <div className='div3-flowStepsModal'>
          <Button
            onClick={handleEmailVerificationDisplay}
            className='button-fieldsAdd'
            name={props.field2 ? props.field2 : 'Email Verification'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: emailVerificationDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div4-flowStepsModal'>
          <Description
            style={{ display: emailVerificationDisplay }}
            className='description-flowStepsModal'
          >
            {props.field2Description ? (
              props.field2Description
            ) : (
              <div>
                Email address validation is often accomplished by sending an
                email to the user-provided email address.
              </div>
            )}
          </Description>
        </div>
        <div className='div5-flowStepsModal'>
          <Button
            onClick={handleSelfieVerificationDisplay}
            className='button-fieldsAdd'
            name={props.field3 ? props.field3 : 'Selfie Verification'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: selfieVerificationDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div6-flowStepsModal'>
          <Description
            style={{ display: selfieVerificationDisplay }}
            className='description-flowStepsModal'
          >
            {props.field3Description ? (
              props.field3Description
            ) : (
              <div>
                Detects your face in your selfie to generate a unique
                number.When your selfie template matches the unique number from
                your profile pictures, we know you're the same person as your
                profile photos.
              </div>
            )}
          </Description>
        </div>
        <div className='div7-flowStepsModal'>
          <Button
            onClick={handleAddressVerificationDisplay}
            className='button-fieldsAdd'
            name={props.field4 ? props.field4 : 'Address Verification'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: addressVerificationDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div8-flowStepsModal'>
          <Description
            style={{ display: addressVerificationDisplay }}
            className='description-flowStepsModal'
          >
            {props.field4Description ? (
              props.field4Description
            ) : (
              <div>
                Address validation helps verify the accuracy of address numbers,
                street names postal codes.
              </div>
            )}
          </Description>
        </div>
        <div className='div9-flowStepsModal'>
          <Button
            onClick={handleCreateAccountDisplay}
            className='button-fieldsAdd'
            name={props.field5 ? props.field5 : 'Create Account'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: createAccountDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div10-flowStepsModal'>
          <Description
            style={{ display: createAccountDisplay }}
            className='description-flowStepsModal'
          >
            {props.field5Description ? (
              props.field5Description
            ) : (
              <div>
                Generates the Email and password provided by the user in
                server.Having an account also gives you extra abilities and
                features to which unregistered users do not have access.
              </div>
            )}
          </Description>
        </div>
        <div className='div11-flowStepsModal'>
          <Button
            onClick={handleQuestionnaireDisplay}
            className='button-fieldsAdd'
            name={props.field6 ? props.field6 : 'Questionnaire'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: questionnaireDisplay,

              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div12-flowStepsModal'>
          <Description
            style={{ display: questionnaireDisplay }}
            className='description-flowStepsModal'
          >
            {props.field6Description ? (
              props.field6Description
            ) : (
              <div>
                Series of questions used to collect useful information from the
                Clients
              </div>
            )}
          </Description>
        </div>
        <div className='div13-flowStepsModal'>
          <Button
            onClick={handleDepositMoneyDisplay}
            className='button-fieldsAdd'
            name={props.field7 ? props.field7 : 'Deposit Money'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: depositMoneyDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div14-flowStepsModal'>
          <Description
            style={{ display: depositMoneyDisplay }}
            className='description-flowStepsModal'
          >
            {props.field7Description ? (
              props.field7Description
            ) : (
              <div>
                Deposit is the act of placing money with a party such as a bank
              </div>
            )}
          </Description>
        </div>
        <div className='div15-flowStepsModal'>
          <Button
            onClick={handleApplicantDataDisplay}
            className='button-fieldsAdd'
            name={props.field8 ? props.field8 : 'Applicant Data'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: applicantDataDisplay,
              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div16-flowStepsModal'>
          <Description
            style={{ display: applicantDataDisplay }}
            className='description-flowStepsModal'
          >
            {/* {props.field2Description?  props.field2Description : <div></div>} */}
            {props.field8Description ? (
              props.field8Description
            ) : (
              <div>
                Applicant Data Data related to the Client such as
                Nationality,Country,First Name and Last Name
              </div>
            )}
          </Description>
        </div>
        <div className='div17-flowStepsModal'>
          <Button
            onClick={handleUploadDocumentsDisplay}
            className='button-fieldsAdd'
            name={props.field9 ? props.field9 : 'Upload Documents'}
            variant='contained'
            sx={{
              backgroundColor: '#2B3A67',
              borderRadius: '10px',
              fontWeight: 600,
              display: uploadDocumentsDisplay,

              '&:hover': {
                backgroundColor: '#5E807F',
                borderRadius: '10px',
              },
            }}
          />
        </div>
        <div className='div18-flowStepsModal'>
          <Description
            style={{ display: uploadDocumentsDisplay }}
            className='description-flowStepsModal'
          >
            {props.field9Description ? (
              props.field9Description
            ) : (
              <div>
                Uploading is the transmission of a file from your computer to
                the server.
              </div>
            )}
          </Description>
        </div>
        {/* {props.allowExtraFields ? (
          <>
            <div className='div19-flowStepsModal'>
              <Button
                onClick={handleUploadDocumentsDisplay}
                className='button-fieldsAdd'
                name={props.field10 ? props.field10 : 'Upload Documents'}
                variant='contained'
                sx={{
                  backgroundColor: '#2B3A67',
                  borderRadius: '10px',
                  fontWeight: 600,
                  display: uploadDocumentsDisplay,

                  '&:hover': {
                    backgroundColor: '#5E807F',
                    borderRadius: '10px',
                  },
                }}
              />
            </div>
            <div className='div20-flowStepsModal'>
              <Description
                style={{ display: uploadDocumentsDisplay }}
                className='description-flowStepsModal'
              >
                {props.field10Description ? (
                  props.field10Description
                ) : (
                  <div>Test </div>
                )}
              </Description>
            </div>
          </>
        ) : null} */}
        <div></div>
        <div className='button-wrapper-flowStepsModal'>
          <Button
            className='button-fieldsAdd'
            name='Save'
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
    </ModalUsage>
  );
}

export default FlowStepsModal;
