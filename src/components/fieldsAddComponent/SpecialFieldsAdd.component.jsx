import React, { useState } from 'react';
import Label from '../labelComponent/Label.component';
import BreakLine from '../breakLineComponent/BreakLine.component';
import Button from '../FlexibleButtonComponent/FlexibleButton.component';
import { DeleteItemIcon, AddItemIcon } from '../iconsComponent/Icons.component';
import Dropdown from '../dropdownComponent/SpecialDropdown.component';
import CheckBox from '../checkboxComponent/CheckBox.component';
import SearchInput from '../searchInputComponent/SearchInput.component';
import ListFieldsAddComponent from '../ListComponents/ListFieldsAddComponent/ListFieldsAddComponent.component';
import './specialFieldsAdd.styles.css';

function SpecialFieldsAdd(props) {
  const [addedField, setAddedField] = useState(true);
  const [value, setValue] = useState('');
  const [fields, setFields] = useState([]);

  const menu = [{ value: 'Server - MT4' }, { value: 'Demo - MT5' }];

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  const handleOnPressAdd = () => {
    const date = new Date();
    const newId = date.toString();

    setFields([...fields, { id: newId, name: 'hi' }]);
  };

  const [abuseValidation, setAbuseValidation] = useState([
    { label: 'Add Fields' },
    { label: 'Email' },
    { label: 'State' },
  ]);

  return (
    <div className=''>
      <div className=''>
        <div
          className={
            props.tableSection1 ? props.tableSection1 : 'parentLabel-fieldsAdd'
          }
        >
          <div
            className={
              props.div1Label ? props.div1Label : 'div1-label-fieldsAdd'
            }
          >
            <Label
              label={props.field1 ? props.field1 : 'FieldName'}
              className='label-fieldsAdd'
            />
          </div>
        </div>
      </div>

      <div className=''>
        <ListFieldsAddComponent
          parent={
            props.tableSection2
              ? props.tableSection2
              : 'parentButton2-fieldsAdd'
          }
          section1Style={
            props.section1Style ? props.section1Style : { paddingTop: 7 }
          }
          section2Style={
            props.section2Style ? props.section2Style : { paddingTop: 14 }
          }
          searchInput={
            props.testComponent1 ? (
              props.testComponent1
            ) : (
              <SearchInput options={abuseValidation} label='Add Fields' />
            )
          }
          searchInputDiv='div1-Button-fieldsAdd'
          isRequiredDiv='div2-Button-fieldsAdd'
          deleteElementDiv='div3-Button-fieldsAdd '
          TypeDiv='div4-Button-fieldsAdd'
          fieldsList={fields}
        />

        <div className='parentButton-fieldsAdd'>
          <div className='div3-Button-fieldsAdd'></div>
          <div className='button-wrapper-fieldsAdd'>
            <Button
              onClick={handleOnPressAdd}
              className='button-fieldsAdd-noModal'
              name={
                <div
                  onClick={props.onClickAddField}
                  className='wrapper-addIcon-addFields'
                  style={{
                    width: 300,
                    display: 'flex',
                    justifyContent: 'center',
                  }}
                >
                  <AddItemIcon className='addItemIcon-applicationFlow' />

                  <Label
                    label={props.field5 ? props.field5 : 'Add field'}
                    className='label-addIcon-applicationFlow'
                  />
                </div>
              }
              variant='contained'
              sx={
                props.sx2
                  ? props.sx2
                  : {
                      backgroundColor: '#11468F',
                      borderRadius: '20px',
                      fontWeight: 600,
                      '&:hover': {
                        backgroundColor: '#11468F50',
                        borderRadius: '20px',
                        boxShadow: '0 0 5px 0 	hsl(178, 15%, 34%)',
                      },
                    }
              }
            />
          </div>
          <div className='div2-Button-fieldsAdd'>
            {/* {props.isField6 ? null : (
              <div className='button-wrapper-fieldsAdd-fixed'>
                <Button
                  onClick={handleOnPressAdd}
                  className='button-fieldsAdd'
                  name={
                    <div
                      className='wrapper-addIcon-applicationFlow'
                      style={{ width: 130 }}
                    >
                      <AddItemIcon className='addItemIcon-applicationFlow' />

                      <Label
                        label={props.field6 ? props.field6 : 'Custom field'}
                        className='label-addIcon-applicationFlow'
                      />
                    </div>
                  }
                  variant='contained'
                  sx={
                    props.sx
                      ? props.sx
                      : {
                          backgroundColor: '#11468F',
                          borderRadius: '20px',
                          fontWeight: 600,
                          '&:hover': {
                            backgroundColor: '#11468F50',
                            borderRadius: '20px',
                            boxShadow: '0 0 5px 0 	hsl(178, 15%, 34%)',
                          },
                        }
                  }
                />
              </div>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SpecialFieldsAdd;
