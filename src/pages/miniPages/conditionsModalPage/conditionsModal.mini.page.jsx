import React, { useState } from 'react';
import './conditionsModal.mini.styles.css';
import ModalUsage from '../../../components/modalUsageComponent/ModalUsage.component';
import { ConditionsIcon } from '../../../components/iconsComponent/Icons.component';

function ConditionsModal(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      modalBackground='rgb(237,239,242)'
      icon={
        <ConditionsIcon
          className='default-ConditionsIcon-conditionModal'
          onClick={handleOpen}
        />
      }
    >
      {props.content}
    </ModalUsage>
  );
}

export default ConditionsModal;

export function ConditionsModalFixed(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      icon={
        <ConditionsIcon className='fix-conditionIcon' onClick={handleOpen} />
      }
    >
      {props.content}
    </ModalUsage>
  );
}

export function ConditionsModalFixedAgain(props) {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  return (
    <ModalUsage
      open={open}
      handleClose={handleClose}
      modalBackground='white'
      icon={
        <ConditionsIcon
          className='fixed-ConditionsIcon2-conditionModal'
          onClick={handleOpen}
        />
      }
    >
      {props.content}
    </ModalUsage>
  );
}
