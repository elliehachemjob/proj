import React, { useState, useEffect } from 'react';
import Button from '../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../components/labelComponent/Label.component';
import Dropdown from '../../../components/dropdownComponent/SpecialDropdown.component';
import ExpandableAccordion from '../../../components/expandableAccordionComponent/ExpandableAccordion.component';
import DropdownTagSelector from '../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Input from '../../../components/inputComponent/Input.component';
import AddFields from '../../../components/fieldsAddComponent/SpecialFieldsAdd.component';
import './applicationFlow.mini.page';
import {
  DeleteIconOutlinedIcon,
  GoBackIcon,
  DownArrowIcon,
} from '../../../components/iconsComponent/Icons.component';
import { makeStyles } from '@material-ui/core/styles';
import CheckBox from '../../../components/checkboxComponent/CheckBox.component';
import SearchInput from '../../../components/searchInputComponent/SearchInput.component';
import ConditionsModal, {
  ConditionsModalFixed,
} from '../conditionsModalPage/conditionsModal.mini.page';
import DraggableList from '../../../components/draggableListComponent/DraggableList.component';
import { Link } from 'react-router-dom';
import './applicationFlowRegistrationNoModal.mini.styles.css';

function ApplicationFlowPageRegistrationNoModal() {
  const [addConditionApplicantData, setAddConditionApplicantData] =
    useState(true);
  const [addCustomConditionApplicantData, setAddCustomConditionApplicantData] =
    useState(true);

  const handleIsApplicantDataChange1 = () => {};

  const handleIsApplicantDataChange2 = () => {};

  const useStyles = makeStyles((theme) => ({
    textField: {
      outline: 'none',
      fontSize: 'inherit',
      borderRadius: 4,
      height: '50px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            // section1={
            //   <Label label='Applicant Data' className='label-applicationFlow' />
            // }
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Applicant Data
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  {/* <Input
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
                  /> */}
                </div>
                <AddFields
                  div1Label='div1-label-applicationFlow'
                  div2Label='div2-label-applicationFlow'
                  onClickAddField={handleIsApplicantDataChange1}
                  sx2={{
                    backgroundColor: 'rgb(25,188,155)',
                    borderRadius: '10px',
                    fontWeight: 600,
                    marginTop: addConditionApplicantData ? 2.5 : 0,

                    '&:hover': {
                      backgroundColor: 'hsl(168, 77%, 49%)',
                      borderRadius: '10px',
                    },
                  }}
                  items={menu}
                  label={value}
                  value={value}
                  field1={
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      {addConditionApplicantData ? (
                        <>
                          <Label
                            margin={135}
                            textTransform='none'
                            label='FieldName'
                          />
                          <Label textTransform='none' label='Required' />
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  }
                  field5={<Label textTransform='none' label='Add field' />}
                  testComponent1={
                    <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                      <SearchInput
                        options={searchList}
                        label={<Label label='Applicant Data' size={15} />}
                        className='searchInput-emailTemplate'
                        sx={{ marginLeft: 0, width: 200 }}
                        textFieldStyles={classes.textField}
                      />
                      <div className='checkBox-wrapper-applicationFlow-noModal'>
                        <CheckBox />
                      </div>

                      <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                    </div>
                  }
                />
                <div className='secondBoxAddCustomFieldsWrapper-applicationFlow'>
                  <AddFields
                    div1Label='div1-label-applicationFlow'
                    div2Label='div2-label-applicationFlow'
                    onClickAddField={handleIsApplicantDataChange2}
                    sx2={{
                      backgroundColor: 'rgb(25,188,155)',
                      borderRadius: '10px',
                      fontWeight: 600,
                      marginTop: addCustomConditionApplicantData ? 2.5 : 0,

                      '&:hover': {
                        backgroundColor: 'hsl(168, 77%, 49%)',
                        borderRadius: '10px',
                      },
                    }}
                    items={menu}
                    label={value}
                    value={value}
                    field1={
                      <div
                        style={{
                          display: 'flex',
                        }}
                      >
                        {addCustomConditionApplicantData ? (
                          <>
                            <Label
                              margin={135}
                              textTransform='none'
                              label='FieldName'
                            />
                            <Label textTransform='none' label='Required' />
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    }
                    field5={
                      <Label textTransform='none' label='Add Custom Field' />
                    }
                    testComponent1={
                      <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                        <div className='checkBox-wrapper-applicationFlow-noModal'>
                          <CheckBox />
                        </div>

                        <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                      </div>
                    }
                  />
                </div>
              </div>
            }
          />

          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          SMS Verification Data
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          E-mail Verification
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Selfie Verification
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  {/* <Input
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
                  /> */}
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <>
                <div className='div-wrapper-applicationFlow'>
                  <div className='div-wrapper-child-applicationFlow'>
                    <Dropdown
                      icon={DownArrowIcon}
                      items={applicantData}
                      label={applicantDataValue}
                      handleChange={handleApplicantDataChange}
                      value={applicantDataValue}
                      inputLabel={
                        applicantDataValue ? (
                          applicantDataValue
                        ) : (
                          <div style={{ marginTop: -2, fontWeight: 700 }}>
                            Address Verification
                          </div>
                        )
                      }
                      sx={{
                        width: 275,
                        borderRadius: 1,
                        background: '""',
                        height: 50,
                      }}
                      menuSx={{
                        width: 275,
                      }}
                    />
                  </div>

                  <div className='div-wrapper-child-applicationFlow'>
                    {/* <Input
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
                    /> */}
                  </div>
                  <AddFields
                    div1Label='div1-label-applicationFlow'
                    div2Label='div2-label-applicationFlow'
                    sx2={{
                      backgroundColor: 'rgb(25,188,155)',
                      borderRadius: '10px',
                      fontWeight: 600,
                      marginTop: addConditionApplicantData ? 2.5 : 0,

                      '&:hover': {
                        backgroundColor: 'hsl(168, 77%, 49%)',
                        borderRadius: '10px',
                      },
                    }}
                    items={menu}
                    label={value}
                    value={value}
                    field1={
                      <div
                        style={{
                          display: 'flex',
                        }}
                      >
                        {addConditionApplicantData ? (
                          <>
                            <Label
                              margin={135}
                              textTransform='none'
                              label='FieldName'
                            />
                            <Label textTransform='none' label='Required' />
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    }
                    field5={<Label textTransform='none' label='Add field' />}
                    testComponent1={
                      <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                        <div className='checkBox-wrapper-applicationFlow-noModal'>
                          <CheckBox />
                        </div>

                        <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                      </div>
                    }
                  />
                  <div className='secondBoxAddCustomFieldsWrapper-applicationFlow'>
                    <AddFields
                      div1Label='div1-label-applicationFlow'
                      div2Label='div2-label-applicationFlow'
                      sx2={{
                        backgroundColor: 'rgb(25,188,155)',
                        borderRadius: '10px',
                        fontWeight: 600,
                        marginTop: addCustomConditionApplicantData ? 2.5 : 0,

                        '&:hover': {
                          backgroundColor: 'hsl(168, 77%, 49%)',
                          borderRadius: '10px',
                        },
                      }}
                      items={menu}
                      label={value}
                      value={value}
                      field1={
                        <div
                          style={{
                            display: 'flex',
                          }}
                        >
                          {addCustomConditionApplicantData ? (
                            <>
                              <Label
                                margin={135}
                                textTransform='none'
                                label='FieldName'
                              />
                              <Label textTransform='none' label='Required' />
                            </>
                          ) : (
                            ''
                          )}
                        </div>
                      }
                      field5={
                        <Label textTransform='none' label='Add Custom Field' />
                      }
                      testComponent1={
                        <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                          <SearchInput
                            options={searchList}
                            label={<Label label='Applicant Data' size={15} />}
                            className='searchInput-emailTemplate'
                            sx={{ marginLeft: 0, width: 200 }}
                            textFieldStyles={classes.textField}
                          />
                          <div className='checkBox-wrapper-applicationFlow-noModal'>
                            <CheckBox />
                          </div>

                          <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                        </div>
                      }
                    />
                  </div>
                </div>
              </>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow '>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Upload Documents
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
                <div className=''>
                  {/* <Input
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
                  /> */}
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  <DropdownTagSelector
                    sx={{
                      height: 50,
                    }}
                    minWidth={500}
                    widthTagSelectorOpened={200}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Questionnaire
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  {/* <Input
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
                  /> */}
                </div>
                <AddFields
                  div1Label='div1-label-applicationFlow'
                  div2Label='div2-label-applicationFlow'
                  sx2={{
                    backgroundColor: 'rgb(25,188,155)',
                    borderRadius: '10px',
                    fontWeight: 600,
                    marginTop: addConditionApplicantData ? 2.5 : 0,

                    '&:hover': {
                      backgroundColor: 'hsl(168, 77%, 49%)',
                      borderRadius: '10px',
                    },
                  }}
                  items={menu}
                  label={value}
                  value={value}
                  field1={
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      {addConditionApplicantData ? (
                        <>
                          <Label
                            margin={135}
                            textTransform='none'
                            label='FieldName'
                          />
                          <Label textTransform='none' label='Required' />
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  }
                  field5={<Label textTransform='none' label='Add field' />}
                  testComponent1={
                    <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                      <SearchInput
                        options={searchList}
                        label={<Label label='Applicant Data' size={15} />}
                        className='searchInput-emailTemplate'
                        sx={{ marginLeft: 0, width: 200 }}
                        textFieldStyles={classes.textField}
                      />
                      <div className='checkBox-wrapper-applicationFlow-noModal'>
                        <CheckBox />
                      </div>

                      <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                    </div>
                  }
                />
                <div className='secondBoxAddCustomFieldsWrapper-applicationFlow'>
                  <AddFields
                    div1Label='div1-label-applicationFlow'
                    div2Label='div2-label-applicationFlow'
                    sx2={{
                      backgroundColor: 'rgb(25,188,155)',
                      borderRadius: '10px',
                      fontWeight: 600,
                      marginTop: addCustomConditionApplicantData ? 2.5 : 0,

                      '&:hover': {
                        backgroundColor: 'hsl(168, 77%, 49%)',
                        borderRadius: '10px',
                      },
                    }}
                    items={menu}
                    label={value}
                    value={value}
                    field1={
                      <div
                        style={{
                          display: 'flex',
                        }}
                      >
                        {addCustomConditionApplicantData ? (
                          <>
                            <Label
                              margin={135}
                              textTransform='none'
                              label='FieldName'
                            />
                            <Label textTransform='none' label='Required' />
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    }
                    field5={
                      <Label textTransform='none' label='Add Custom Field' />
                    }
                    testComponent1={
                      <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                        <div className='checkBox-wrapper-applicationFlow-noModal'>
                          <CheckBox />
                        </div>

                        <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                      </div>
                    }
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Create Account
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
                <div className='div-wrapper-child-applicationFlow'>
                  {/* <Input
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
                  /> */}
                </div>
                <AddFields
                  div1Label='div1-label-applicationFlow'
                  div2Label='div2-label-applicationFlow'
                  sx2={{
                    backgroundColor: 'rgb(25,188,155)',
                    borderRadius: '10px',
                    fontWeight: 600,
                    marginTop: addConditionApplicantData ? 2.5 : 0,

                    '&:hover': {
                      backgroundColor: 'hsl(168, 77%, 49%)',
                      borderRadius: '10px',
                    },
                  }}
                  items={menu}
                  label={value}
                  value={value}
                  field1={
                    <div
                      style={{
                        display: 'flex',
                      }}
                    >
                      {addConditionApplicantData ? (
                        <>
                          <Label
                            margin={135}
                            textTransform='none'
                            label='FieldName'
                          />
                          <Label textTransform='none' label='Required' />
                        </>
                      ) : (
                        ''
                      )}
                    </div>
                  }
                  field5={<Label textTransform='none' label='Add field' />}
                  testComponent1={
                    <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                      <SearchInput
                        options={searchList}
                        label={<Label label='Applicant Data' size={15} />}
                        className='searchInput-emailTemplate'
                        sx={{ marginLeft: 0, width: 200 }}
                        textFieldStyles={classes.textField}
                      />
                      <div className='checkBox-wrapper-applicationFlow-noModal'>
                        <CheckBox />
                      </div>

                      <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                    </div>
                  }
                />
                <div className='secondBoxAddCustomFieldsWrapper-applicationFlow'>
                  <AddFields
                    div1Label='div1-label-applicationFlow'
                    div2Label='div2-label-applicationFlow'
                    sx2={{
                      backgroundColor: 'rgb(25,188,155)',
                      borderRadius: '10px',
                      fontWeight: 600,
                      marginTop: addCustomConditionApplicantData ? 2.5 : 0,

                      '&:hover': {
                        backgroundColor: 'hsl(168, 77%, 49%)',
                        borderRadius: '10px',
                      },
                    }}
                    items={menu}
                    label={value}
                    value={value}
                    field1={
                      <div
                        style={{
                          display: 'flex',
                        }}
                      >
                        {addCustomConditionApplicantData ? (
                          <>
                            <Label
                              margin={135}
                              textTransform='none'
                              label='FieldName'
                            />
                            <Label textTransform='none' label='Required' />
                          </>
                        ) : (
                          ''
                        )}
                      </div>
                    }
                    field5={
                      <Label textTransform='none' label='Add Custom Field' />
                    }
                    testComponent1={
                      <div className='checkBoxLabel-wrapper-applicationFlow-noModal'>
                        <SearchInput
                          options={searchList}
                          label={<Label label='Applicant Data' size={15} />}
                          className='searchInput-emailTemplate'
                          sx={{ marginLeft: 0, width: 200 }}
                          textFieldStyles={classes.textField}
                        />
                        <div className='checkBox-wrapper-applicationFlow-noModal'>
                          <CheckBox />
                        </div>

                        <DeleteIconOutlinedIcon className='DeleteIconOutlinedIcon-applicationFlow' />
                      </div>
                    }
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
            style={{
              border: '1px solid hsla(0, 0%, 50%,0.6)',
              borderRadius: 4,
              marginBottom: 10,
            }}
            hideExpandIcon
            width='98%'
            section2={
              <div className='div-wrapper-applicationFlow'>
                <div className='div-wrapper-child-applicationFlow'>
                  <Dropdown
                    icon={DownArrowIcon}
                    items={applicantData}
                    label={applicantDataValue}
                    handleChange={handleApplicantDataChange}
                    value={applicantDataValue}
                    inputLabel={
                      applicantDataValue ? (
                        applicantDataValue
                      ) : (
                        <div style={{ marginTop: -2, fontWeight: 700 }}>
                          Deposit Money
                        </div>
                      )
                    }
                    sx={{
                      width: 275,
                      borderRadius: 1,
                      background: '""',
                      height: 50,
                    }}
                    menuSx={{
                      width: 275,
                    }}
                  />
                </div>
              </div>
            }
          />
          <span className='positionedItem-applicationFlow-registration-noModal'>
            <DeleteIconOutlinedIcon
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
      <DraggableList getItems={draggableListContent1} />
    </>
  );
}

export default ApplicationFlowPageRegistrationNoModal;
