import React from 'react';
import './RightSide.styles.css';
//Right side where we list all content

function RightSide(props) {
  return (
    <div style={{ marginLeft: '14%' }}>
      <div className='w3-container headerColor-rightSide'>
        <h1>{props.pageTitle}</h1>
      </div>
      <img style={{ width: '100 %' }} />
      <div className='w3-container'>{props.children}</div>
    </div>
  );
}

export default RightSide;
