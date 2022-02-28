import React, { useState } from 'react';
import Toggle from '../../toggleComponent/Toggle.component';
import Label from '../../labelComponent/Label.component';
import './toggleList.styles.css';

function ToggleList(props) {
  const [list, setList] = useState('');

  return (
    <>
      {props.list.map((list1) => {
        return (
          <div style={{ margin: '10px' }} key={list1.id}>
            <div className={props.parent}>
              <div className={props.div1}>
                {props.testComponent1 ? (
                  props.testComponent1
                ) : (
                  <Label label={list1.label} />
                )}
              </div>
              <div className={props.div2}>
                <Toggle disabled={list1.disabled} onClick={props.onClick} />
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
}

export default ToggleList;
