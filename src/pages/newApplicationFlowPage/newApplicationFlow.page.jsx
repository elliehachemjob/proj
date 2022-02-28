import React, { useState, useRef } from 'react';
import {
  NewGoBackIcon,
  AddressVerificationIcon,
  ProfileIconOutlined,
  SmsVerificationOutlinedIcon,
  EmailVerificationOutlinedIconIcon,
  SelfieVerificationOutlinedIcon,
  UploadDocumentIcon,
  QuestionnaireIcon,
  AddItemIcon,
  DepositMoneyIcon,
} from '../../components/iconsComponent/Icons.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../components/labelComponent/Label.component';
import BreakLine from '../../components/breakLineComponent/BreakLine.component';
import ApplicationFlowFill from './applicantionFlowFill/applicationFlowFill.page';
import { Link } from 'react-router-dom';
import DraggableList from '../../components/draggableListComponent/DraggableList.component';
import DraggableItem from '../../components/draggableComponent/DraggableItem.component';

import './newApplicationFlow.styles.css';

function NewApplicationFlow() {
  const [isApplicantData, setIsApplicantData] = useState(false);
  const [isSmsVerification, setIsSmsVerification] = useState(false);
  const [isEmailVerification, setIsEmailVerification] = useState(false);
  const [counter, setCounter] = useState(1);
  const [submitFlowGlow, setSubmitFlowGlow] = useState('');
  const [isCounterStepDisplay, setIsCounterStepDisplay] = useState('');
  const location1 = useRef('33');

  const [label1, setLabel1] = useState('');

  const Step1Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <ProfileIconOutlined style={{ fontSize: 30 }} />
            <Label
              label='Applicant Data'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <SmsVerificationOutlinedIcon style={{ fontSize: 30 }} />
            <Label
              label='SMS Verification'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <EmailVerificationOutlinedIconIcon />
          <Label
            label='E-mail Verification'
            className='label-newApplicationFlow'
          />
        </div>
      </>
    );
  };

  const Step2Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <SelfieVerificationOutlinedIcon style={{ fontSize: 30 }} />
            <Label
              label='Selfie Verification'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <AddressVerificationIcon style={{ fontSize: 30 }} />
            <Label
              label='Address Verification'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <UploadDocumentIcon />
          <Label
            label='Upload Documents'
            className='label-newApplicationFlow'
          />
        </div>
      </>
    );
  };
  const Step3Component = () => {
    return (
      <>
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <QuestionnaireIcon style={{ fontSize: 30 }} />
            <Label
              label='Questionnaire'
              className='labelIcon1-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <div className='fix-labelRightSide-newApplicationFlow'>
            <AddItemIcon style={{ fontSize: 30 }} />
            <Label
              label='Create Account'
              className='labelIcon2-newApplicationFlow'
            />
          </div>
        </div>
        <BreakLine className='breakLine-steps-newApplicationFlow' />
        <div className='rightSide-labelIconWrapper-newApplicationFlow'>
          <DepositMoneyIcon />
          <Label label='Deposit Money' className='label-newApplicationFlow' />
        </div>
      </>
    );
  };

  const [stepsList, setStepsList] = useState(Step1Component);

  const handleMouseOverChange1 = () => {
    setIsApplicantData(true);
  };
  const handleMouseOverChange2 = () => {
    setIsSmsVerification(true);
  };
  const handleMouseOverChange3 = () => {
    setIsEmailVerification(true);
  };

  const handleBackwardChange = () => {
    setCounter((prev) => {
      return prev - 1;
    });
    if (counter <= 1) {
      setCounter(1);
    }

    if (counter === 2) {
      setStepsList(Step1Component);
    }
    if (counter === 3) {
      setStepsList(Step2Component);
      setSubmitFlowGlow('setSubmitFlowGlow');
    }
  };

  const handleForwardChange = () => {
    setCounter((prev) => {
      return prev + 1;
    });
    if (counter >= 3) {
      setCounter(3);
    }

    if (counter === 1) {
      setStepsList(Step2Component);
    }
    if (counter === 2) {
      setStepsList(Step3Component);
      setSubmitFlowGlow('0px 0px 30px 10px hsl(163.2,41.3%,35.9%)');
    }
  };

  const handleSubmitChange = () => {
    setStepsList(<ApplicationFlowFill />);
    setIsCounterStepDisplay('none');
  };

  const handleProfileIconChange = (e) => {};

  const onDragEndProfileIcon = () => {
    console.log('test');
  };

  const [draggableListContent1, setDraggableListContent1] = useState([
    {
      id: 'item-1',
      content: (
        <div
          draggable
          onDrag={() => {
            console.log('hey');
          }}
          className='wrapperIconLabel-background-newApplicationFlow'
        >
          <div className='iconWrapper-newApplicationFlow'>
            <ProfileIconOutlined ref={location1} style={{ fontSize: 50 }} />
          </div>
        </div>
      ),
    },
    {
      id: 'item-2',
      content: (
        <div className='wrapperIconLabel-background-newApplicationFlow'>
          <div
            className='iconWrapper-newApplicationFlow'
            onMouseOver={handleMouseOverChange2}
          >
            <SmsVerificationOutlinedIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
        </div>
      ),
    },
    {
      id: 'item-3',
      content: (
        <div className='wrapperIconLabel-background-newApplicationFlow'>
          <div className='iconWrapper-newApplicationFlow'>
            <EmailVerificationOutlinedIconIcon
              style={{ fontSize: 50 }}
              className='iconStyles-newApplicationFlow'
            />
          </div>
        </div>
      ),
    },
    {
      id: 'item-4',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <SelfieVerificationOutlinedIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
    {
      id: 'item-5',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <AddressVerificationIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
    {
      id: 'item-6',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <UploadDocumentIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
    {
      id: 'item-7',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <QuestionnaireIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
    {
      id: 'item-8',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <AddItemIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
    {
      id: 'item-9',
      content: (
        <div className='iconWrapper-newApplicationFlow'>
          <DepositMoneyIcon
            style={{ fontSize: 50 }}
            className='iconStyles-newApplicationFlow'
          />
        </div>
      ),
    },
  ]);

  const onDragEnd = (result) => {
    console.log(result);
  };

  const [profileIconOpacity, setProfileIconOpacity] = useState(1);
  const [
    smsVerificationOutlinedIconOpacity,
    setSmsVerificationOutlinedIconOpacity,
  ] = useState(1);
  const [
    emailVerificationOutlinedIconIconOpacity,
    setEmailVerificationOutlinedIconIconOpacity,
  ] = useState(1);
  const [
    selfieVerificationOutlinedIconOpacity,
    setSelfieVerificationOutlinedIconOpacity,
  ] = useState(1);

  const [addressVerificationIconOpacity, setAddressVerificationIconOpacity] =
    useState(1);

  const [uploadDocumentIconOpacity, setUploadDocumentIconOpacity] = useState(1);
  const [questionnaireIconOpacity, setQuestionnaireIconOpacity] = useState(1);
  const [addItemIconIconOpacity, setAddItemIconIconOpacity] = useState(1);
  const [depositMoneyIconOpacity, setDepositMoneyIconOpacity] = useState(1);

  const handleProfileClickChange = () => {
    setProfileIconOpacity(0);
  };

  const handleSmsVerificationChange = () => {
    setSmsVerificationOutlinedIconOpacity(0);
  };

  const handleEmailVerificationChange = () => {
    setEmailVerificationOutlinedIconIconOpacity(0);
  };
  const handleSelfieVerificationChange = () => {
    setSelfieVerificationOutlinedIconOpacity(0);
  };

  const handleAddressVerificationChange = () => {
    setAddressVerificationIconOpacity(0);
  };

  const handleUploadDocumentChange = () => {
    setUploadDocumentIconOpacity(0);
  };

  const handleQuestionnaireChange = () => {
    setQuestionnaireIconOpacity(0);
  };

  const handleAddItemChange = () => {
    setAddItemIconIconOpacity(0);
  };

  const handleDepositMoneyChange = () => {
    setDepositMoneyIconOpacity(0);
  };

  const condition = () => {};
  return (
    <div className='parent-newApplicationFlow'>
      {/* 1st left side */}
      <div className='wrapper-left-newApplicationFlow'>
        <NewGoBackIcon className='newGoBackIcon-newApplicationFlow' />
        <Label label='Flow Setup' className='header-newApplicationFlow' />

        <Label label='Levels' className='levelsLabel-newApplicationFlow' />
        {/* 2nd */}
        {/* <DraggableItem
          x1={1187}
          x2={1228}
          y1={437}
          y2={508}
          setPositionX={750}
          setPositionY={110}
          condition={condition}
          content={
            <div className='wrapperIconLabel-background-newApplicationFlow'>
              <div
                className='iconWrapper-newApplicationFlow'
                style={{ opacity: profileIconOpacity }}
              >
                <ProfileIconOutlined style={{ fontSize: 50 }} />
              </div>
            </div>
          }
        /> */}

        <div className='parent-stepsWrapper-newApplicationFlow'>
          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleProfileClickChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: profileIconOpacity }}
            >
              <ProfileIconOutlined style={{ fontSize: 50 }} />
            </div>
          </div>
          <div className='wrapperIconLabel-background-newApplicationFlow'>
            <div
              className='iconWrapper-newApplicationFlow'
              onClick={handleSmsVerificationChange}
              style={{ opacity: smsVerificationOutlinedIconOpacity }}
            >
              <SmsVerificationOutlinedIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>

          <div
            onClick={handleEmailVerificationChange}
            className='wrapperIconLabel-background-newApplicationFlow'
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: emailVerificationOutlinedIconIconOpacity }}
            >
              <EmailVerificationOutlinedIconIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>
          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleSelfieVerificationChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: selfieVerificationOutlinedIconOpacity }}
            >
              <SelfieVerificationOutlinedIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>
          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleAddressVerificationChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: addressVerificationIconOpacity }}
            >
              <AddressVerificationIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>

          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleUploadDocumentChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: uploadDocumentIconOpacity }}
            >
              <UploadDocumentIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>

          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleQuestionnaireChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: questionnaireIconOpacity }}
            >
              <QuestionnaireIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>

          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleAddItemChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: addItemIconIconOpacity }}
            >
              <AddItemIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>

          <div
            className='wrapperIconLabel-background-newApplicationFlow'
            onClick={handleDepositMoneyChange}
          >
            <div
              className='iconWrapper-newApplicationFlow'
              style={{ opacity: depositMoneyIconOpacity }}
            >
              <DepositMoneyIcon
                style={{ fontSize: 50 }}
                className='iconStyles-newApplicationFlow'
              />
            </div>
          </div>
        </div>

        <div className='buttonWrapper-newApplicationFlow'>
          <Button
            onClick={handleSubmitChange}
            className=''
            name={
              <div className=''>
                <Label
                  label='Submit Flow'
                  className='buttonLabel-newApplicationFlow'
                />
              </div>
            }
            variant='contained'
            sx={{
              backgroundColor: 'hsl(163.2,41.3%,55.9%)',
              borderRadius: '25px',

              padding: 1.5,
              paddingLeft: 3,
              paddingRight: 3,
              boxShadow: submitFlowGlow,
              '&:hover': {
                backgroundColor: 'hsl(163.2,41.3%,45.9%)',
                boxShadow: '0 0 5px 0	hsl(163.2,41.3%,35.9%)',
                transition: '1s',
              },
            }}
          />
        </div>
      </div>
      {/* 3rd right side */}
      <div className='wrapper-right-newApplicationFlow'>
        <div className='rightSide-steps-newApplicationFlow'>
          {/* <BreakLine className='breakLineIndicator-newApplicationFlow' /> */}
          {stepsList}
        </div>
        <div style={{ display: isCounterStepDisplay }}>
          <div className='navigateSteps-newApplicationFlow'>
            <NewGoBackIcon
              className='backwardIcon-newApplicationFlow'
              onClick={handleBackwardChange}
            />
            <div className='steps-counter-newApplicationFlow'>{counter}</div>
            <NewGoBackIcon
              className='forwardIcon-newApplicationFlow'
              onClick={handleForwardChange}
            />
          </div>
        </div>
      </div>
      {/* 4th  later deduced*/}
    </div>
  );
}

export default NewApplicationFlow;
