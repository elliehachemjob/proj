import React from 'react';
import './breakLine.styles.css';
function BreakLine(props) {
  return <div style={props.style} className={`line ${props.className}`}></div>;
}

export default BreakLine;
