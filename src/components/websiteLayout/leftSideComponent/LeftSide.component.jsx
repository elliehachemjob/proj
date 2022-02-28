import React from 'react';
import './leftSide.styles.css';
//The Menu / Sidebar

function LeftSide(props) {
  return (
    <div
      className='w3-sidebar w3-bar-block background-leftSidebar'
      style={{ width: '14%' }}
    >
      <h3 className='menu-leftSide'>{props.menuTitle}</h3>
      {props.children}
    </div>
  );
}

export default LeftSide;
