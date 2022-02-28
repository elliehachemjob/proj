import React, { useState } from 'react';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/FieldsAdd.component';
import {
  DeleteItemIcon,
  GoBackIcon,
} from '../../../components/iconsComponent/Icons.component';
import FlowStepsModal from './flowStepsModalPage/flowStepsModal.mini.page';
import FlowListModal from './flowListModalPage/flowListModal.mini.page';
import ServerChooseModal from './serverChooseModalPage/serverChooseModal.mini.page';
import { makeStyles } from '@material-ui/core/styles';
import CheckBox from '../../../components/checkboxComponent/CheckBox.component';
import SearchInput from '../../../components/searchInputComponent/SearchInput.component';
import ConditionsModal, {
  ConditionsModalFixed,
} from '../conditionsModalPage/conditionsModal.mini.page';
import DraggableList from '../../../components/draggableListComponent/DraggableList.component';
import { Link } from 'react-router-dom';

import './applicationFlow.mini.styles.css';

function ApplicationFlowPage() {
  const useStyles = makeStyles((theme) => ({
    textField: {
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: 15,
    },
  }));

  const [searchList, setSearchList] = useState([
    { label: 'none' },
    { label: 'Applicant Data' },
    { label: 'Default Account Conditions' },
    { label: 'Identity Verification' },
    { label: 'Address Verification' },
    { label: 'Complete your profile' },
    { label: 'Submit & Review' },
  ]);
  const classes = useStyles();

  const [flowName, setFlowName] = useState('USA Registration Flow');

  const [value, setValue] = useState('');
  const [smsVerificationValue, setSmsVerificationValue] = useState('');
  const [emailVerificationValue, setEmailVerificationValue] = useState('');
  const [selfieVerificationValue, setSelfieVerificationValue] = useState('');
  const [addressVerificationValue, setAddressVerificationValue] = useState('');
  const [applicantDataValue, setApplicantDataValue] = useState('');
  const [uploadDocumentsValue, setUploadDocumentsValue] = useState('');

  const smsVerificationMenu = [{ value: 'Twilio' }];
  const emailVerificationMenu = [{ value: 'By Code' }, { value: 'By Email' }];
  const selfieVerification = [{ value: 'None' }, { value: 'sumsub' }];
  const addressVerification = [{ value: 'None' }, { value: 'sumsub' }];
  const applicantData = [{ value: 'None' }, { value: 'sumsub' }];
  const uploadDocuments = [{ value: 'None' }, { value: 'sumsub' }];

  const menu = [{ value: 'Server - MT4' }];

  const handleSmsVerificationChange = (event) => {
    setSmsVerificationValue(event.target.value);
  };
  const handleEmailVerificationChange = (event) => {
    setEmailVerificationValue(event.target.value);
  };
  const handleSelfieVerificationChange = (event) => {
    setSelfieVerificationValue(event.target.value);
  };
  const handleAddressVerificationChange = (event) => {
    setAddressVerificationValue(event.target.value);
  };
  const handleApplicantDataChange = (event) => {
    setApplicantDataValue(event.target.value);
  };
  const handleUploadDocumentsChange = (event) => {
    setUploadDocumentsValue(event.target.value);
  };

  const handleDeleteStep = () => {};

  const [draggableListContent1, setDraggableListContent1] = useState([
    {
      id: 'item-1',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Applicant Data' className='label-applicationFlow' />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? applicantDataValue : 'None'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <Input
                    label='SumSub Applicant Name'
                    style={{
                      border: '',
                      backgroundColor: '',
                      borderRadius: '15px',
                      width: 200,
                      opacity: 1,
                      '&:hover,&:focus': {
                        border: ' ',
                        backgroundColor: '',
                        opacity: 1,
                      },
                    }}
                    textFieldStyles={classes.textField}
                  />
                </div>
                <ConditionsModal
                  content={
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      div3Label='div3-label-applicationFlow'
                      div4Label='div4-label-applicationFlow'
                      sx={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      sx2={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: 2.5,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1='FieldName'
                      field2='IsRequired'
                      field3='Remove '
                      field4='Type'
                      field5='Add Field'
                      testComponent1={
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                      }
                      testComponent2={
                        <div className='checkBox-wrapper-applicationFlow'>
                          <CheckBox />
                        </div>
                      }
                      testComponent3={
                        <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                      }
                      testComponent4={<Label label='Type' className='' />}
                    />
                  }
                />

                <Label
                  label='Add Conditions'
                  className='label-nearCondition2-applicationFlow'
                />
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-2',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='SMS Verification Data'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={smsVerificationMenu}
                    label={smsVerificationValue}
                    handleChange={handleSmsVerificationChange}
                    value={smsVerificationValue}
                    inputLabel={
                      smsVerificationValue ? smsVerificationValue : 'Twilio'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-3',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='E-mail Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={emailVerificationMenu}
                    label={emailVerificationValue}
                    handleChange={handleEmailVerificationChange}
                    value={emailVerificationValue}
                    inputLabel={
                      emailVerificationValue
                        ? emailVerificationValue
                        : 'By Code'
                    }
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-4',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Selfie Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={selfieVerification}
                    label={selfieVerificationValue}
                    handleChange={handleSelfieVerificationChange}
                    value={selfieVerificationValue}
                    inputLabel={
                      selfieVerificationValue ? selfieVerificationValue : 'None'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <Input
                    label='SumSub Applicant Name'
                    style={{
                      border: '',
                      backgroundColor: '',
                      borderRadius: '15px',
                      width: 200,
                      opacity: 1,
                      '&:hover,&:focus': {
                        border: ' ',
                        backgroundColor: '',
                        opacity: 1,
                      },
                    }}
                    textFieldStyles={classes.textField}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-5',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Address Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <>
                <div className='div-wrapper-applicationFlow'>
                  <div className='div-wrapper-child-applicationFlow'>
                    <Dropdown
                      items={addressVerification}
                      label={addressVerificationValue}
                      handleChange={handleAddressVerificationChange}
                      value={addressVerificationValue}
                      inputLabel={
                        addressVerificationValue
                          ? addressVerificationValue
                          : 'None'
                      }
                      sx={{
                        width: 200,
                        borderRadius: 4,
                        background: '""',
                      }}
                      menuSx={{
                        width: 200,
                      }}
                    />
                  </div>

                  <div className='div-wrapper-child-applicationFlow'>
                    <Input
                      label='SumSub Applicant Name'
                      style={{
                        border: '',
                        backgroundColor: '',
                        borderRadius: '15px',
                        width: 200,
                        opacity: 1,
                        '&:hover,&:focus': {
                          border: ' ',
                          backgroundColor: '',
                          opacity: 1,
                        },
                      }}
                      textFieldStyles={classes.textField}
                    />
                  </div>
                  <ConditionsModal
                    content={
                      <AddFields
                        div1Label='div1-label-applicationFlow'
                        div2Label='div2-label-applicationFlow'
                        div3Label='div3-label-applicationFlow'
                        div4Label='div4-label-applicationFlow'
                        sx={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,

                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        sx2={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,
                          marginTop: 2.5,
                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        items={menu}
                        label={value}
                        value={value}
                        field1='FieldName'
                        field2='IsRequired'
                        field3='Remove '
                        field4='Type'
                        field5='Add Field'
                        testComponent1={
                          <SearchInput
                            options={searchList}
                            label={<Label label='Applicant Data' size={15} />}
                            className='searchInput-emailTemplate'
                            sx={{ marginLeft: 0, width: 200 }}
                            textFieldStyles={classes.textField}
                          />
                        }
                        testComponent2={
                          <div className='checkBox-wrapper-applicationFlow'>
                            <CheckBox />
                          </div>
                        }
                        testComponent3={
                          <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                        }
                        testComponent4={<Label label='Type' className='' />}
                      />
                    }
                  />
                  <Label
                    label='Add Conditions'
                    className='label-nearCondition2-applicationFlow'
                  />
                </div>
              </>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-6',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Address Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <>
                <div className='div-wrapper-applicationFlow'>
                  <div className='div-wrapper-child-applicationFlow'>
                    <Dropdown
                      items={addressVerification}
                      label={addressVerificationValue}
                      handleChange={handleAddressVerificationChange}
                      value={addressVerificationValue}
                      inputLabel={
                        addressVerificationValue
                          ? addressVerificationValue
                          : 'None'
                      }
                      sx={{
                        width: 200,
                        borderRadius: 4,
                        background: '""',
                      }}
                      menuSx={{
                        width: 200,
                      }}
                    />
                  </div>

                  <div className='div-wrapper-child-applicationFlow'>
                    <Input
                      label='SumSub Applicant Name'
                      style={{
                        border: '',
                        backgroundColor: '',
                        borderRadius: '15px',
                        width: 200,
                        opacity: 1,
                        '&:hover,&:focus': {
                          border: ' ',
                          backgroundColor: '',
                          opacity: 1,
                        },
                      }}
                      textFieldStyles={classes.textField}
                    />
                  </div>
                  <ConditionsModal
                    content={
                      <AddFields
                        div1Label='div1-label-applicationFlow'
                        div2Label='div2-label-applicationFlow'
                        div3Label='div3-label-applicationFlow'
                        div4Label='div4-label-applicationFlow'
                        sx={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,

                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        sx2={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,
                          marginTop: 2.5,
                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        items={menu}
                        label={value}
                        value={value}
                        field1='FieldName'
                        field2='IsRequired'
                        field3='Remove '
                        field4='Type'
                        field5='Add Field'
                        testComponent1={
                          <SearchInput
                            options={searchList}
                            label={<Label label='Applicant Data' size={15} />}
                            className='searchInput-emailTemplate'
                            sx={{ marginLeft: 0, width: 200 }}
                            textFieldStyles={classes.textField}
                          />
                        }
                        testComponent2={
                          <div className='checkBox-wrapper-applicationFlow'>
                            <CheckBox />
                          </div>
                        }
                        testComponent3={
                          <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                        }
                        testComponent4={<Label label='Type' className='' />}
                      />
                    }
                  />
                  <Label
                    label='Add Conditions'
                    className='label-nearCondition2-applicationFlow'
                  />
                </div>
              </>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-7',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Upload Documents'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow '>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={uploadDocuments}
                    label={uploadDocumentsValue}
                    handleChange={handleUploadDocumentsChange}
                    value={uploadDocumentsValue}
                    inputLabel={
                      uploadDocumentsValue ? uploadDocumentsValue : 'None'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <Input
                    label='SumSub Applicant Name'
                    style={{
                      border: '',
                      backgroundColor: '',
                      borderRadius: '15px',
                      width: 200,
                      opacity: 1,
                      '&:hover,&:focus': {
                        border: ' ',
                        backgroundColor: '',
                        opacity: 1,
                      },
                    }}
                    textFieldStyles={classes.textField}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <DropdownTagSelector
                    sx={{
                      width: 200,
                    }}
                    widthTagSelectorOpened={200}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-8',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Questionnaire' className='label-applicationFlow' />
            }
            section2={
              <div className='wrapper-questioner-applicationFlow '>
                <ConditionsModalFixed
                  content={
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      div3Label='div3-label-applicationFlow'
                      div4Label='div4-label-applicationFlow'
                      sx={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      sx2={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: 2.5,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1='FieldName'
                      field2='IsRequired'
                      field3='Remove '
                      field4='Type'
                      field5='Add Field'
                      testComponent1={
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                      }
                      testComponent2={
                        <div className='checkBox-wrapper-applicationFlow'>
                          <CheckBox />
                        </div>
                      }
                      testComponent3={
                        <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                      }
                      testComponent4={<Label label='Type' className='' />}
                    />
                  }
                />
                <Label
                  label='Add Conditions'
                  className='label-nearCondition-applicationFlow'
                />
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-9',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Create Account' className='label-applicationFlow' />
            }
            section2={
              <div className='wrapper-questioner-applicationFlow'>
                <ConditionsModalFixed
                  content={
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      div3Label='div3-label-applicationFlow'
                      div4Label='div4-label-applicationFlow'
                      sx={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,

                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      sx2={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: 2.5,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1='FieldName'
                      field2='IsRequired'
                      field3='Remove '
                      field4='Type'
                      field5='Add Field'
                      testComponent1={
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                      }
                      testComponent2={
                        <div className='checkBox-wrapper-applicationFlow'>
                          <CheckBox />
                        </div>
                      }
                      testComponent3={
                        <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                      }
                      testComponent4={<Label label='Type' className='' />}
                    />
                  }
                />
                <Label
                  label='Add Conditions'
                  className='label-nearCondition-applicationFlow'
                />
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-10',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Deposit Money ' className='label-applicationFlow' />
            }
            section2=''
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
  ]);
  const [draggableListContent2, setDraggableListContent2] = useState([
    {
      id: 'item-1',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Flow Changed' className='label-applicationFlow' />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? applicantDataValue : 'None'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <Input
                    label='SumSub Applicant Name'
                    style={{
                      border: '',
                      backgroundColor: '',
                      borderRadius: '15px',
                      width: 200,
                      opacity: 1,
                      '&:hover,&:focus': {
                        border: ' ',
                        backgroundColor: '',
                        opacity: 1,
                      },
                    }}
                    textFieldStyles={classes.textField}
                  />
                </div>
                <ConditionsModal
                  content={
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      div3Label='div3-label-applicationFlow'
                      div4Label='div4-label-applicationFlow'
                      sx={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      sx2={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: 2.5,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1='FieldName'
                      field2='IsRequired'
                      field3='Remove '
                      field4='Type'
                      field5='Add Field'
                      testComponent1={
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                      }
                      testComponent2={
                        <div className='checkBox-wrapper-applicationFlow'>
                          <CheckBox />
                        </div>
                      }
                      testComponent3={
                        <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                      }
                      testComponent4={<Label label='Type' className='' />}
                    />
                  }
                />
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-2',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='SMS Verification Data'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={smsVerificationMenu}
                    label={smsVerificationValue}
                    handleChange={handleSmsVerificationChange}
                    value={smsVerificationValue}
                    inputLabel={
                      smsVerificationValue ? smsVerificationValue : 'Twilio'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-3',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='E-mail Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={emailVerificationMenu}
                    label={emailVerificationValue}
                    handleChange={handleEmailVerificationChange}
                    value={emailVerificationValue}
                    inputLabel={
                      emailVerificationValue
                        ? emailVerificationValue
                        : 'By Code'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-4',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Selfie Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    items={selfieVerification}
                    label={selfieVerificationValue}
                    handleChange={handleSelfieVerificationChange}
                    value={selfieVerificationValue}
                    inputLabel={
                      selfieVerificationValue ? selfieVerificationValue : 'None'
                    }
                    sx={{
                      width: 200,
                      borderRadius: 4,
                      background: '""',
                    }}
                    menuSx={{
                      width: 200,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <Input
                    label='SumSub Applicant Name'
                    style={{
                      border: '',
                      backgroundColor: '',
                      borderRadius: '15px',
                      width: 200,
                      opacity: 1,
                      '&:hover,&:focus': {
                        border: ' ',
                        backgroundColor: '',
                        opacity: 1,
                      },
                    }}
                    textFieldStyles={classes.textField}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-5',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Address Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <>
                <div className='div-wrapper-applicationFlow'>
                  <div className='div-wrapper-child-applicationFlow'>
                    <Dropdown
                      items={addressVerification}
                      label={addressVerificationValue}
                      handleChange={handleAddressVerificationChange}
                      value={addressVerificationValue}
                      inputLabel={
                        addressVerificationValue
                          ? addressVerificationValue
                          : 'None'
                      }
                      sx={{
                        width: 200,
                        borderRadius: 4,
                        background: '""',
                      }}
                      menuSx={{
                        width: 200,
                      }}
                    />
                  </div>

                  <div className='div-wrapper-child-applicationFlow'>
                    <Input
                      label='SumSub Applicant Name'
                      style={{
                        border: '',
                        backgroundColor: '',
                        borderRadius: '15px',
                        width: 200,
                        opacity: 1,
                        '&:hover,&:focus': {
                          border: ' ',
                          backgroundColor: '',
                          opacity: 1,
                        },
                      }}
                      textFieldStyles={classes.textField}
                    />
                  </div>
                  <ConditionsModal
                    content={
                      <AddFields
                        div1Label='div1-label-applicationFlow'
                        div2Label='div2-label-applicationFlow'
                        div3Label='div3-label-applicationFlow'
                        div4Label='div4-label-applicationFlow'
                        sx={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,

                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        sx2={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,
                          marginTop: 2.5,
                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        items={menu}
                        label={value}
                        value={value}
                        field1='FieldName'
                        field2='IsRequired'
                        field3='Remove '
                        field4='Type'
                        field5='Add Field'
                        testComponent1={
                          <SearchInput
                            options={searchList}
                            label={<Label label='Applicant Data' size={15} />}
                            className='searchInput-emailTemplate'
                            sx={{ marginLeft: 0, width: 200 }}
                            textFieldStyles={classes.textField}
                          />
                        }
                        testComponent2={
                          <div className='checkBox-wrapper-applicationFlow'>
                            <CheckBox />
                          </div>
                        }
                        testComponent3={
                          <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                        }
                        testComponent4={<Label label='Type' className='' />}
                      />
                    }
                  />
                </div>
              </>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-6',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label
                label='Address Verification'
                className='label-applicationFlow'
              />
            }
            section2={
              <>
                <div className='div-wrapper-applicationFlow'>
                  <div className='div-wrapper-child-applicationFlow'>
                    <Dropdown
                      items={addressVerification}
                      label={addressVerificationValue}
                      handleChange={handleAddressVerificationChange}
                      value={addressVerificationValue}
                      inputLabel={
                        addressVerificationValue
                          ? addressVerificationValue
                          : 'None'
                      }
                      sx={{
                        width: 200,
                        borderRadius: 4,
                        background: '""',
                      }}
                      menuSx={{
                        width: 200,
                      }}
                    />
                  </div>

                  <div className='div-wrapper-child-applicationFlow'>
                    <Input
                      label='SumSub Applicant Name'
                      style={{
                        border: '',
                        backgroundColor: '',
                        borderRadius: '15px',
                        width: 200,
                        opacity: 1,
                        '&:hover,&:focus': {
                          border: ' ',
                          backgroundColor: '',
                          opacity: 1,
                        },
                      }}
                      textFieldStyles={classes.textField}
                    />
                  </div>
                  <ConditionsModal
                    content={
                      <AddFields
                        div1Label='div1-label-applicationFlow'
                        div2Label='div2-label-applicationFlow'
                        div3Label='div3-label-applicationFlow'
                        div4Label='div4-label-applicationFlow'
                        sx={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,

                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        sx2={{
                          backgroundColor: '#04724D',
                          borderRadius: '10px',
                          fontWeight: 600,
                          marginTop: 2.5,
                          '&:hover': {
                            backgroundColor: '#5E807F',
                            borderRadius: '10px',
                          },
                        }}
                        items={menu}
                        label={value}
                        value={value}
                        field1='FieldName'
                        field2='IsRequired'
                        field3='Remove '
                        field4='Type'
                        field5='Add Field'
                        testComponent1={
                          <SearchInput
                            options={searchList}
                            label={<Label label='Applicant Data' size={15} />}
                            className='searchInput-emailTemplate'
                            sx={{ marginLeft: 0, width: 200 }}
                            textFieldStyles={classes.textField}
                          />
                        }
                        testComponent2={
                          <div className='checkBox-wrapper-applicationFlow'>
                            <CheckBox />
                          </div>
                        }
                        testComponent3={
                          <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                        }
                        testComponent4={<Label label='Type' className='' />}
                      />
                    }
                  />
                </div>
              </>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },

    {
      id: 'item-8',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Questionnaire' className='label-applicationFlow' />
            }
            section2={
              <>
                <div>hi</div>
                <ConditionsModalFixed
                  content={
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      div3Label='div3-label-applicationFlow'
                      div4Label='div4-label-applicationFlow'
                      sx={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,

                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      sx2={{
                        backgroundColor: '#04724D',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: 2.5,
                        '&:hover': {
                          backgroundColor: '#5E807F',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1='FieldName'
                      field2='IsRequired'
                      field3='Remove '
                      field4='Type'
                      field5='Add Field'
                      testComponent1={
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                      }
                      testComponent2={
                        <div className='checkBox-wrapper-applicationFlow'>
                          <CheckBox />
                        </div>
                      }
                      testComponent3={
                        <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                      }
                      testComponent4={<Label label='Type' className='' />}
                    />
                  }
                />
              </>
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
    {
      id: 'item-9',
      content: (
        <div className='expandableAccordionWrapper-applicationFlow'>
          <ExpandableAccordion
            width='60rem'
            section1={
              <Label label='Create Account' className='label-applicationFlow' />
            }
            section2={
              <ConditionsModalFixed
                content={
                  <AddFields
                    div1Label='div1-label-applicationFlow'
                    div2Label='div2-label-applicationFlow'
                    div3Label='div3-label-applicationFlow'
                    div4Label='div4-label-applicationFlow'
                    sx={{
                      backgroundColor: '#04724D',
                      borderRadius: '10px',
                      fontWeight: 600,

                      '&:hover': {
                        backgroundColor: '#5E807F',
                        borderRadius: '10px',
                      },
                    }}
                    sx2={{
                      backgroundColor: '#04724D',
                      borderRadius: '10px',
                      fontWeight: 600,
                      marginTop: 2.5,
                      '&:hover': {
                        backgroundColor: '#5E807F',
                        borderRadius: '10px',
                      },
                    }}
                    items={menu}
                    label={value}
                    value={value}
                    field1='FieldName'
                    field2='IsRequired'
                    field3='Remove '
                    field4='Type'
                    field5='Add Field'
                    testComponent1={
                      <SearchInput
                        options={searchList}
                        label={<Label label='Applicant Data' size={15} />}
                        className='searchInput-emailTemplate'
                        sx={{ marginLeft: 0, width: 200 }}
                        textFieldStyles={classes.textField}
                      />
                    }
                    testComponent2={
                      <div className='checkBox-wrapper-applicationFlow'>
                        <CheckBox />
                      </div>
                    }
                    testComponent3={
                      <DeleteItemIcon className='deleteItemIcon-applicationFlow' />
                    }
                    testComponent4={<Label label='Type' className='' />}
                  />
                }
              />
            }
          />
          <span className='positionedItem-applicationFlow'>
            <DeleteItemIcon
              onClick={handleDeleteStep}
              className='deleteStep-applicationFlow'
            />
          </span>
        </div>
      ),
    },
  ]);

  return (
    <>
      <Link
        to='/applicationFlowHolder'
        className='link-applicationFlow goBack-wrapper-applicationFlow'
      >
        <GoBackIcon className='goBackIcon-applicationFlow' />
        <Label
          label='Go Back'
          className='goBack-applicationFlow'
          fontWeight={1000}
        />
      </Link>

      <div className='scroll-applicationFlow'>
        <div className='wrapper-applicationFlow'>
          <Label
            label={`Flow Name: ${flowName}`}
            className='flowNameLabelHeader-applicationFlow'
          />
          <div className='parent1-buttons-applicationFlow'>
            <div className='buttons1-child-applicationFlow'>
              {/* 1st */}
              <FlowListModal flowName={flowName} setFlowName={setFlowName} />
            </div>
            <div className='buttons1-child-applicationFlow'>
              {/* 2nd */}
              {/* <FlowStepsModal /> */}
            </div>
            <div className='buttons1-child-applicationFlow'>
              <ServerChooseModal />
            </div>
          </div>
          <DraggableList
            getItems={draggableListContent1}
            getItems2={draggableListContent2}
          />
          {/* 12th */}
        </div>
      </div>
    </>
  );
}

export default ApplicationFlowPage;
