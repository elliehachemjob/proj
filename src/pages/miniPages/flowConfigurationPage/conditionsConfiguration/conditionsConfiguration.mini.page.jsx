import React, { useState } from 'react';
import Label from '../../../../components/labelComponent/Label.component';
import Button from '../../../../components/FlexibleButtonComponent/FlexibleButton.component';
import ToggleList from '../../../../components/ListComponents/toggleListComponent/ToggleList.component';
import DropdownTagSelector from '../../../../components/dropdownTagSelectorComponent/DropdownTagSelector.component';
import Conditions from '../conditionsPage/conditions.mini.page';

import './conditionsConfiguration.mini.styles.css';

function ConditionsConfiguration() {
  const [label1, setLabel1] = useState([
    {
      id: 1,
      label: (
        <Label
          label='LeaderBoard'
          className='toggle-label-conditionsConfiguration'
        />
      ),
    },
  ]);

  const [nationalityButtonColor, setNationalityButtonColor] =
    useState('hsl(204, 82%, 53%)');
  const [countryOfResidence, setCountryOfResidence] =
    useState('hsl(204, 82%, 53%)');
  const [rejectUScitizens, setRejectUScitizens] =
    useState('hsl(204, 82%, 53%)');

  const handleNationalityClicked = () => {
    setNationalityButtonColor('#FFC482');
  };
  const handleCountryOfResidenceClicked = () => {
    setCountryOfResidence('#FFC482');
  };
  const handleRejectUScitizensClicked = () => {
    setRejectUScitizens('#FFC482');
  };

  return (
    <div className=''>
      {/* 1st */}
      <div className='wrapper-test-conditionsConfiguration'>
        <div className=''>
          <Label
            label='Rejected Countries'
            className='header-conditionsConfiguration'
          />
          {/* <Label
          label='Select Countries You Want to Reject'
          className='header-conditionsConfiguration'
        /> */}
          <DropdownTagSelector
            sx={{
              width: 189.3,
              marginLeft: 0.7,
              width: 210,
            }}
            widthTagSelectorOpened={210}
          />
        </div>
        <div className='conditionsModal-conditionsConfiguration'>
          <Conditions />
          <div className='special-conditionsConfiguration'>Add Conditions</div>
        </div>
      </div>
      <div className=''>
        {/* <div className=''>
          <Label
            label='Condition Types'
            className='header-conditionsConfiguration'
          />
        </div> */}
        <div className=''>
          <Label
            label='Select Condition Type'
            className='header-conditionsConfiguration'
          />
        </div>
        <div className=''>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleNationalityClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Nationality'
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: nationalityButtonColor,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 43%)',
                  borderRadius: '10px',
                  boxShadow: '0 0 5px 0 	hsl(204, 82%, 33%)',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleCountryOfResidenceClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Country of residence '
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: countryOfResidence,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 43%)',
                  borderRadius: '10px',
                  boxShadow: '0 0 5px 0 	hsl(204, 82%, 33%)',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              onClick={handleRejectUScitizensClicked}
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Reject U.S citizens'
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: rejectUScitizens,
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 43%)',
                  borderRadius: '10px',
                  boxShadow: '0 0 5px 0 	hsl(204, 82%, 33%)',
                },
              }}
            />
          </div>
          <div className='button-conditionsConfiguration'>
            <Button
              className='button-fieldsAdd'
              name={
                <div className='wrapper-addIcon-conditionsConfiguration'>
                  <Label
                    label='Apply '
                    className='label-addIcon-conditionsConfiguration'
                  />
                </div>
              }
              variant='contained'
              sx={{
                backgroundColor: 'hsl(204, 82%, 53%)',
                borderRadius: '10px',
                fontWeight: 600,
                '&:hover': {
                  backgroundColor: 'hsl(204, 82%, 43%)',
                  borderRadius: '10px',
                  boxShadow: '0 0 5px 0 	hsl(204, 82%, 33%)',
                },
              }}
            />
          </div>
        </div>
      </div>

      <div className=''>
        <ToggleList
          key={label1.id}
          list={label1}
          parent='toggle-list-parent-conditionConfiguration'
          div1='div1-toggle-list-parent-conditionConfiguration'
          div2='div2-toggle-list-parent-conditionConfiguration'
        />
      </div>
      {/* 2nd */}
      {/* <div className='conditions-modal-conditionConfiguration'>
        
      </div> */}
    </div>
  );
}

export default ConditionsConfiguration;
