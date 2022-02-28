import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Description from '../../components/descriptionComponent/Description.component';
import ToggleList from '../../components/ListComponents/toggleListComponent/ToggleList.component';
import Toggle from '../../components/toggleComponent/Toggle.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import {
  DeleteItemIcon,
  RefreshIcon,
  CopyItemIcon,
} from '../../components/iconsComponent/Icons.component';
import Input from '../../components/inputComponent/Input.component';
import RadioButton from '../../components/ListComponents/radioButtonListComponent/RadioButtonList.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import ListItem from '../../components/ListComponents/listItemsComponents/ListItems.component';
import './bonus.styles.css';

function Bonus() {
  const [resetNegativeBalanceLabel, setResetNegativeBalanceLabel] = useState([
    { id: 1, label: 'Reset Negative Balance' },
  ]);
  const [excludeComment, setExcludeComment] = useState('');
  const [excludeComment2, setExcludeComment2] = useState('');
  const [apiKey, setApiKey] = useState('');
  const [excludeComment3, setExcludeComment3] = useState('');
  const [excludeComment4, setExcludeComment4] = useState('');
  const [excludeComment5, setExcludeComment5] = useState('');

  const [bonusRemovalCreditComment, setBonusRemovalCreditComment] =
    useState('');

  const [abuseValidation, setAbuseValidation] = useState([
    { label: 'All Bonus abuse validation with' },
    { label: 'Email' },
    { label: 'State' },
  ]);
  const temporaryStyle = { position: 'relative', left: 350 };

  const handleExcludeCommentChange = (event) => {
    setExcludeComment(event.target.value);
  };

  const handleExcludeCommentChange2 = (event) => {
    setExcludeComment2(event.target.value);
  };

  const handleApiKeyChange3 = (event) => {
    setApiKey(event.target.value);
  };

  const handleExcludeComment3Change3 = (event) => {
    setExcludeComment3(event.target.value);
  };
  const handleExcludeComment3Change4 = (event) => {
    setExcludeComment4(event.target.value);
  };
  const handleExcludeComment3Change5 = (event) => {
    setExcludeComment5(event.target.value);
  };

  const handleBonusRemovalCreditCommentChange = (event) => {
    setBonusRemovalCreditComment(event.target.value);
  };
  const triggerApiList = [
    {
      id: 1,
      value: 'Trigger the deposit from Web API',
      label: 'Trigger the deposit from Web API',
    },
    {
      id: 2,
      value: 'Trigger the deposit from Manager API',
      label: 'Trigger the deposit from Manager API',
    },
  ];
  const removalCreditOnWithdrawalList = [
    {
      id: 1,
      value: 'All Bonus',
      label: 'All Bonus',
    },
    {
      id: 2,
      value: 'None',
      label: 'None',
    },
  ];

  const stopoutAccountList = [
    {
      id: 1,
      value: 'LBV',
      label: 'LBV',
    },
    {
      id: 2,
      value: 'None',
      label: 'None',
    },
  ];

  const stopoutAccountDescriptionItems = [
    { id: 1, value: 'None : will not use a stop out on bonus promotion' },
    {
      id: 2,
      value:
        'LBV : will only use the Stopout value set in the Losable Bonus in the bonus promotion',
    },
    {
      id: 3,
      value:
        'LBSGV: Will use an aggregation of the Stopout value set in the Losable Bonus in the bonus promotion plus the StopOut Value set in your trading platform (i.e. Group StopOut)',
    },
  ];

  const descriptions = [
    {
      id: 1,
      value:
        "When setting up a new bonus promotion if you enable the Losable Bonus option then a client's account can go negative. If the negative balance option is enabled, then when the balance of an account is negative, then it automatically resets to 0. If the setting is disabled, the balance of the account remains negative.",
    },
    {
      id: 2,
      value: 'Removal Credit Comment',
    },
    {
      id: 3,
      value:
        'You can use the Stopout Account option if you want to enable Stopout on accounts using a bonus promotion.',
    },
    {
      id: 4,
      value:
        "On an account withdrawal select an action to perform regarding the added credit. If 'All bonus' is selected on an account withdrawal remove all credit/bonus. If 'None' is selected on an account withdrawal do not remove any credit/bonus.",
    },
  ];

  return (
    <>
      {/* 1st */}
      <div className='parent-restNegativeBalance'>
        <div className='div1-restNegativeBalance'>
          <Label label='Reset Negative Balance' className='label-bonus'></Label>
        </div>
        <div className='div2-restNegativeBalance'>
          <Toggle className='toggle-restNegativeBalance' />
        </div>
        <div className='div3-restNegativeBalance'>
          <Description
            description={descriptions[0].value}
            className='description-bonus'
          />
        </div>
      </div>
      {/* 3th */}
      <div className='parent-bonus'>
        <div className='div1-bonus'>
          <Label
            label='Credit Comment On Bonus Removal'
            className='label-bonus'
          />
          <Input
            value={bonusRemovalCreditComment}
            onChange={handleBonusRemovalCreditCommentChange}
            label='Credit Comment On Bonus Removal'
            className='input-bonus'
            style={{ margin: 1.8 }}
          />
        </div>
        <div className='div2-bonus'>
          <Description
            description={descriptions[1].value}
            className='description-bonus'
          />
        </div>
      </div>

      {/* 4th */}
      <div className='parent-bonus'>
        <div className='div1-bonus'>
          <Label label='Stopout Account' className='label-bonus' />
          <RadioButton list={stopoutAccountList} style={{ marginLeft: 15 }} />
        </div>
        <div className='div2-bonus'>
          <Description
            className='description-bonus'
            description={descriptions[2].value}
          />
          <ul>
            <ListItem
              className='list-bonus'
              list={stopoutAccountDescriptionItems}
            />
          </ul>
        </div>
      </div>

      {/* 5th */}
      <div className='parent-bonus-exception'>
        <div className='div1-bonus-exception'>
          <Label label='Removal Credit on Withdrawal' className='label-bonus' />
          <RadioButton
            style={{ marginLeft: 15 }}
            list={removalCreditOnWithdrawalList}
            style={{ marginLeft: 15 }}
          />
        </div>
        <div className='div2-bonus-exception'>
          <Description
            description={descriptions[3].value}
            className='description-bonus'
          />
          <Label label='Exclude comment' className='label-bonus' />
          <Input
            value={excludeComment3}
            onChange={handleExcludeComment3Change3}
            label='Withdraw'
            className='input-bonus'
            style={{ margin: 2 }}
          >
            {/* <DeleteItemIcon className='deleteItemIcon-bonus' /> */}
          </Input>
          <Input
            value={excludeComment4}
            onChange={handleExcludeComment3Change4}
            label='Ad*'
            className='input-bonus'
            style={{ margin: 2 }}
          >
            {/* <DeleteItemIcon className='deleteItemIcon-bonus' /> */}
          </Input>

          <Input
            value={excludeComment5}
            onChange={handleExcludeComment3Change5}
            label='test'
            className='input-bonus'
            style={{ margin: 2 }}
          >
            {/* <DeleteItemIcon className='deleteItemIcon-bonus' /> */}
          </Input>
        </div>
      </div>

      {/* 6th */}
      <div className='parent-bonus'>
        <div className='div1-bonus'>
          <Label label='Bonus abuse validation with' className='label-bonus' />
          <SearchInput
            options={abuseValidation}
            label='Bonus abuse validation with'
            sx={{ width: 300, margin: 2 }}
          />
        </div>
        <div className='div2-bonus'>
          <Label label='API KEY' className='label-bonus' />
          {/* <RefreshIcon className='refreshIcon-bonus' /> */}
          <Input
            value={apiKey}
            onChange={handleApiKeyChange3}
            label='API KEY'
            style={{ margin: 2 }}
          />
          {/* <CopyItemIcon className='copyItemIcon-bonus' /> */}
        </div>
      </div>
      {/* 7th */}
      <div className='parent-bonus-lastItem'>
        <div className='div1-bonus-lastItem'>
          <Label label='Trigger API' className='label-bonus' />
          <RadioButton style={{ marginLeft: 15 }} list={triggerApiList} />
        </div>
        <div className='div2-bonus-lastItem'>
          <Label label='Exclude comment' className='label-bonus' />
          <Input
            value={excludeComment}
            onChange={handleExcludeCommentChange}
            label='TFR*'
            className='input-bonus-lastItem'
            style={{ margin: 2 }}
          />
          <Input
            value={excludeComment2}
            onChange={handleExcludeCommentChange2}
            label='Exclude'
            className='input-bonus'
            style={{ margin: 2 }}
          />
          {/* <DeleteItemIcon className='deleteItemIcon-bonus' />
          <DeleteItemIcon className='deleteItemIcon-bonus' /> */}
        </div>
      </div>
      {/* 8th */}
      <div className='button-wrapper-bonus'>
        <Button className='button-bonus' name='Save Changes' />
      </div>
    </>
  );
}

export default Bonus;
