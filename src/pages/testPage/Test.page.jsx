import React from 'react';
import ModalUsage from '../../components/modalUsageComponent/ModalUsage.component';
import ModalStatic from '../../components/modalUsageComponent/ModalStatic.component';

function Test() {
  return (
    <>
      {/* 1st */}
      <ModalUsage popupButtonName='Dynamic Modal/popup'>
        Put anything you want here
      </ModalUsage>
      {/* 2nd */}
      <ModalStatic />
    </>
  );
}

export default Test;
