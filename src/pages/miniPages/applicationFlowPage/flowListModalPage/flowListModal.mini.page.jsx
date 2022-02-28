import React, { useState } from 'react';
import './flowListModal.mini.styles.css';
import ModalUsage from '../../../../components/modalUsageComponent/ModalUsage.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import Label from '../../../../components/labelComponent/Label.component';
import {
  AddItemIcon,
  PickIcon,
} from '../../../../components/iconsComponent/Icons.component';

function FlowListModal(props) {
  const [createFlows, setCreatedFlows] = useState([
    { id: 1, flowName: 'Main Registration  Flow' },
    { id: 2, flowName: 'USA  Registration flow' },
    { id: 3, flowName: 'UK  Registration Flow' },
  ]);

  const handleChangeServer = () => {
    props.setFlowName(createFlows[2].flowName);
  };

  return (
    <ModalUsage
      popupButtonName={
        <div className='wrapper-addIcon-flowListModal'>
          <Label
            label={
              <div className='newFlow-applicationFlow'>
                <PickIcon />
                Pick Flows
              </div>
            }
            className='label-addIcon-flowListModal'
          />
        </div>
      }
      sx={{
        backgroundColor: '#2B3A67',
        borderRadius: '10px',
        marginBottom: 0.55,
        fontWeight: 600,
        '&:hover': {
          backgroundColor: '#5E807F',
          borderRadius: '10px',
        },
      }}
      modalBackground='white'
    >
      {createFlows.map((item) => {
        return (
          <div className='wrapper-flowListModal'>
            <div key={item.key}>
              <Button
                onClick={handleChangeServer}
                className='button-fieldsAdd'
                name={item.flowName}
                variant='contained'
                sx={{
                  backgroundColor: '#2B3A67',
                  borderRadius: '10px',
                  fontWeight: 600,
                  '&:hover': {
                    backgroundColor: '#5E807F',
                    borderRadius: '10px',
                  },
                }}
              />
            </div>
          </div>
        );
      })}
    </ModalUsage>
  );
}

export default FlowListModal;
