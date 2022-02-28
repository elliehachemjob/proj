import React, { useState } from 'react';
import Label from '../../components/labelComponent/Label.component';
import Button from '../../components/FlexibleButtonComponent/FlexibleButton.component';
import SearchInput from '../../components/searchInputComponent/SearchInput.component';
import Table from '../../components/tableComponent/Table.component';
import { useMediaQuerySize } from '../../hooks/hooks';
import './paymentMethod.styles.css';

function PaymentMethod() {
  const [paymentMethods, setPaymentMethods] = useState([
    { label: 'UnionPay' },
    { label: 'ThunderPay' },
    { label: 'TapPay-CreditCard-USD' },
    { label: 'TapPay-CreditCard-KWD' },
  ]);

  const [rows, setRows] = useState([
    {
      id: 1,
      paymentName: 'UnionPay',
      displayName: 'UnionPay',
      type: 'Withdrawal',
      comment: 'UnionPay',
      enabled: 'Enabled',
    },
    {
      id: 2,
      paymentName: 'ThunderPay',
      displayName: 'ThunderPay',
      type: 'Withdrawal',
      comment: 'ThunderPay',
      enabled: 'Enabled',
    },
    {
      id: 3,
      paymentName: 'TapPay-CreditCard-USD',
      displayName: 'desc',
      type: 'Deposit',
      comment: 'TapPay Deposit',
      enabled: 'Enabled',
    },
    {
      id: 4,
      paymentName: 'TapPay-CreditCard-KWD',
      displayName: 'KWD TapPay',
      type: 'Deposit',
      comment: 'tappay kwd',
      enabled: 'Enabled',
    },
  ]);
  const [columns, setColumns] = useState([
    { field: 'paymentName', headerName: 'Payment Name', width: 90 },
    {
      field: 'displayName',
      headerName: 'Display Name',
      width: 150,
      editable: true,
    },
    {
      field: 'type',
      headerName: 'Type',
      width: 150,
      editable: true,
    },
    {
      field: 'comment',
      headerName: 'Comment',
      width: 150,
      editable: true,
    },
    {
      field: 'enabled',
      headerName: 'Enabled',
      width: 150,
      editable: true,
    },
  ]);

  let mediumScreen = useMediaQuerySize('(max-width:805px)');
  let smallScreen = useMediaQuerySize('(max-width:610px)');

  const screenSizes = () => {
    if (smallScreen) {
      return 60;
    }
    if (mediumScreen) {
      return 150;
    } else {
      return 300;
    }
  };

  return (
    <>
      {/* 1st */}
      <div className='parent-paymentMethod'>
        <div className='div1-buttons-paymentMethod'>
          <div className='button-list-paymentMethod'>
            <div className='button-wrapper-paymentMethod'>
              <Button className='button-paymentMethod' name='Add' />
            </div>
            <div className='button-wrapper-paymentMethod'>
              <Button
                className='button-paymentMethod'
                name='Edit Payment Info'
              />
            </div>
          </div>
        </div>
        <div className='div2-searchInput-paymentMethod'>
          <SearchInput
            options={paymentMethods}
            label='Filter By Payment Name'
            sx={{ width: screenSizes }}
          />
        </div>
      </div>
      {/* 3rd */}
      <Table rows={rows} columns={columns} pageSize={7} className='' />
    </>
  );
}

export default PaymentMethod;
