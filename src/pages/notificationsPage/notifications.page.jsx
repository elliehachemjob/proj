import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Dropdown from '../../components/dropdownComponent/Dropdown.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import './notifications.styles.css';

function Notifications() {
  const [value, setValue] = useState('');

  const [label1, setLabel1] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Contact assigned to youContact assigned to you' },
    { id: 3, label: 'Toggle to its right' },
    { id: 4, label: 'Lead assigned to you' },
  ]);
  const [label2, setLabel2] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Trading Accounts added or Closed' },
    { id: 3, label: 'Trading Accounts Request Changes' },
    { id: 4, label: 'Deposits/Withdrawals/Transfers' },
  ]);
  const [label3, setLabel3] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Application Requests' },
    { id: 3, label: 'Application Changes' },
    { id: 4, label: 'Expired Documents' },
  ]);
  const [label4, setLabel4] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Client Auto-linked to IB' },
  ]);
  const [label5, setLabel5] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Subscribe/UnSubscribe to Strategy MAM' },
    { id: 3, label: 'Subscribe/UnSubscribe to Strategy Signal' },
    { id: 4, label: 'Trading Account Auto-Linked to Strategy' },
  ]);

  const [label6, setLabel6] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Client claimed Bonus added' },
    { id: 3, label: 'Client Bonus to balance reached' },
  ]);

  const [label7, setLabel7] = useState([
    { id: 1, label: 'Turn on/off notifications' },
    { id: 2, label: 'Task assigned to you' },
    { id: 3, label: 'Task Reminder' },
  ]);

  const menu = [
    { value: 'Email Notification' },
    { value: 'Push Notification' },
  ];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const button = {
    backgroundColor: '#44c767',
    borderRadius: '28px',
    border: '1px solid #18ab29',
    display: 'inline-block',
    cursor: 'pointer',
    color: ' #ffffff',
    fontFamily: 'Aria',
    fontSize: '17px',
    padding: '8px 38px',
    textDecoration: 'none',
    extShadow: '0px 1px 0px #2f6627',
  };

  return (
    <>
      {/* 1st */}

      <div className='container1-notificationPage'>
        <Label label='Notification Type' className='label-notificationPage' />
        <Dropdown
          items={menu}
          label={value}
          handleChange={handleChange}
          value={value}
          inputLabel={value ? value : 'Email Notification'}
          sx={{ m: 2, minWidth: 160, marginLeft: 1, marginBottom: 3 }}
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 3rd */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='Clients' />
        <ToggleList
          key={label1.id}
          list={label1}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>
      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 4th */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='Trader' />
        <ToggleList
          key={label2.id}
          list={label2}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>
      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 5th */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='OnBoarding' />
        <ToggleList
          key={label3.id}
          list={label3}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' />  */}
      {/* 6th */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='Partners' />
        <ToggleList
          key={label4.id}
          list={label4}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 7th */}

      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='MAM' />
        <ToggleList
          key={label5.id}
          list={label5}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 8th */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='Bonus' />
        <ToggleList
          key={label6.id}
          list={label6}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 9th */}
      <div className='container1-notificationPage'>
        <Label className='label-notificationPage' label='Tasks' />
        <ToggleList
          key={label7.id}
          list={label7}
          parent='toggle-list-parent-notificationPage'
          div1='div1-toggle-list-parent-notificationPage'
          div2='div2-toggle-list-parent-notificationPage'
        />
      </div>

      {/* <BreakLine className='breakLine-notificationPage' /> */}
      {/* 10th */}
      <div className='button-wrapper-notificationPage'>
        <Button className='button-notificationPage' name='Save Changes' />
      </div>
    </>
  );
}

export default Notifications;
