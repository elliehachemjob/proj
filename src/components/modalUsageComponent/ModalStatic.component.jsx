import React, { useState } from 'react';
import Box from '@mui/material/Box';

import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Label from '../labelComponent/Label.component';
import Description from '../descriptionComponent/Description.component';
import Checkbox from '../checkboxComponent/CheckBox.component';
import './modalUsage.styles.css';

export default function ModalUsage(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Button onClick={handleOpen}>Static Modal Of Copy Trader</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>
          <div className='wrapper-modalUsage'>
            <Label
              className='header-modalUsage'
              label='Copy Trading Pop-Up Disclaimer'
              size={18.72}
            />
            <Label
              className='label-modalUsage'
              label='To be confirmed by clients who wish to copy strategy providers'
            />
            <Description
              className='description-modalUsage'
              description='The appointment of a Strategy Provider is done solely at your own risk. The Strategy Provider’s past performance is not a guarantee of future performance. '
            />
          </div>
          <div className='parent-modalUsage'>
            <div className='div1-modalUsage'>
              <Checkbox className='' />
            </div>
            <div className='div2-modalUsage'>
              <Description
                className=''
                description='I confirm that Advanced Markets (Bermuda) Ltd has not recommended the Strategy Trader to me and I choose the Strategy Provider at my own risk and acknowledge that Advanced Markets (Bermuda) Ltd is in no way responsible for reviewing my choice, nor making any recommendations with respect thereto. . '
              />
            </div>
            <div className='div3-modalUsage'>
              <Checkbox className='' />
            </div>
            <div className='div4-modalUsage'>
              <Description
                className=''
                description={`	I confirm that I have carefully read and agree to the Copy Trading Authorization `}
              >
                <a href='https://www.google.com/'>Policy</a>
              </Description>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
