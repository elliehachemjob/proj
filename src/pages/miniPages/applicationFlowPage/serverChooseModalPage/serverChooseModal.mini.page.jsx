import React, { useState } from 'react';
import './serverChooseModal.mini.styles.css';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import Toggle from '../../../../components/toggleComponent/Toggle.component';
import Label from '../../../../components/labelComponent/Label.component';
import {
  AddItemIcon,
  PickIcon,
} from '../../../../components/iconsComponent/Icons.component';

function ServerChooseModal() {
  const [isIb, setIsIb] = useState(false);
  const [isTrader, setIsTrader] = useState(true);

  const handleIbDisabled = () => {
    setIsIb(!isIb);
    setIsTrader(!isTrader);
  };
  const handleTraderDisabled = () => {
    setIsTrader(!isTrader);
    setIsIb(!isIb);
  };

  return (
    <ModalUsage
      popupButtonName={
        <div className='wrapper-addIcon-applicationFlow'>
          <Label
            label={
              <div className='newFlow-applicationFlow'>
                <PickIcon />
                Pick Server
              </div>
            }
            className='label-addIcon-applicationFlow'
          />
        </div>
      }
      sx={{
        backgroundColor: '#2B3A67',
        borderRadius: '10px',
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#5E807F',
          borderRadius: '10px',
        },
      }}
      modalBackground='white'
    >
      <div className='parent-toggle-serverChooseModal'>
        <div className='div1-toggle-serverChooseModal'>
          <Label label='IB' className='label-serverChooseModal' />
        </div>
        <div className='div2-toggle-serverChooseModal'>
          <Toggle checked={isIb} onClick={handleIbDisabled} />
        </div>
      </div>

      <div className='parent-toggle-serverChooseModal'>
        <div className='div1-toggle-serverChooseModal'>
          <Label label='Trader' className='label-serverChooseModal' />
        </div>
        <div className='div2-toggle-serverChooseModal'>
          <Toggle checked={isTrader} onClick={handleTraderDisabled} />
        </div>
      </div>
    </ModalUsage>
  );
}

export default ServerChooseModal;
