import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { CancelCircleIcon } from '../iconsComponent/Icons.component';
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
    minWidth: props.minWidth ? props.minWidth : 800,
    bgcolor: 'background.paper',
    border: '1px solid #000',
    boxShadow: 24,
    p: 4,
    backgroundColor: props.modalBackground,
    borderRadius: 2,
  };

  return (
    <div className={props.className}>
      {props.icon ? (
        props.icon
      ) : (
        <Button
          variant={props.variant ? props.variant : 'contained'}
          sx={props.sx}
          onClick={handleOpen}
        >
          {props.popupButtonName}
        </Button>
      )}

      <Modal
        open={props.open ? props.open : open}
        onClose={props.handleClose ? props.handleClose : handleClose}
        aria-labelledby='modal-modal-title'
        aria-describedby='modal-modal-description'
      >
        <Box sx={style}>{props.children}</Box>
      </Modal>
    </div>
  );
}
