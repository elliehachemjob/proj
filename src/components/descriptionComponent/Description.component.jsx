import React from 'react';

function Description(props) {
  return (
    <div className={props.className} style={props.style}>
      {props.description} {props.children}
    </div>
  );
}

export default Description;
