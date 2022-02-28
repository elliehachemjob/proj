import React, { useState } from 'react';
import './walletConfiguration.mini.styles.css';
import Label from '../../../../components/labelComponent/Label.component';
import Dropdown from '../../../../components/dropdownComponent/SpecialDropdown.component';

function WalletConfiguration() {
  const [value, setValue] = useState('');
  const [typeValue, setTypeValue] = useState('');
  const [walletTypeValue, setWalletTypeValue] = useState('');
  const [currencyMenuValue, setCurrencyMenuValue] = useState('');

  const typeMenu = [{ value: 'IB' }, { value: 'Trader' }, { value: 'Signal' }];
  const walletTypeMenu = [
    { value: 'Test Wallet Type' },
    { value: 'My Wallet' },
    { value: 'Category Name' },
  ];
  const currencyMenu = [{ value: 'EUR' }, { value: 'USD' }, { value: 'BTC' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };
  const handleTypeChange = (event) => {
    setTypeValue(event.target.value);
  };
  const handleWalletTypeChange = (event) => {
    setWalletTypeValue(event.target.value);
  };
  const handleCurrencyMenuChange = (event) => {
    setCurrencyMenuValue(event.target.value);
  };

  return (
    <div className=''>
      {/* 1st */}
      <div className=''>
        <Label
          label='Type'
          className='header-walletConfiguration'
          marginLeft={-5}
        />
        <Dropdown
          items={typeMenu}
          label={typeValue}
          handleChange={handleTypeChange}
          value={typeValue}
          inputLabel={typeValue ? typeValue : 'Select'}
          sx={{
            marginLeft: 0.2,
            width: 210,
            borderRadius: 2,
            background: '""',
          }}
          menuSx={{
            width: 210,
          }}
        />
      </div>

      <div className=''>
        <Label
          label='Wallet Type'
          className='header-walletConfiguration'
          marginLeft={-5}
        />
        <Dropdown
          items={walletTypeMenu}
          label={walletTypeValue}
          handleChange={handleWalletTypeChange}
          value={walletTypeValue}
          inputLabel={walletTypeValue ? walletTypeValue : 'Select'}
          sx={{
            marginLeft: 0.2,
            width: 210,
            borderRadius: 2,
            background: '""',
          }}
          menuSx={{
            width: 210,
          }}
        />
      </div>
      <div className=''>
        <Label
          label='Currency'
          className='header-walletConfiguration'
          marginLeft={-5}
        />
        <Dropdown
          items={currencyMenu}
          label={currencyMenuValue}
          handleChange={handleCurrencyMenuChange}
          value={currencyMenuValue}
          inputLabel={currencyMenuValue ? currencyMenuValue : 'Select'}
          sx={{
            marginLeft: 0.2,
            width: 210,
            borderRadius: 2,
            background: '""',
          }}
          menuSx={{
            width: 210,
          }}
        />
      </div>
    </div>
  );
}

export default WalletConfiguration;
