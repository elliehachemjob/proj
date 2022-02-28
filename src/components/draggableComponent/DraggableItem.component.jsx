import React, { useState } from 'react';
import Draggable from 'react-draggable';
import './draggableItem.style.css';

function DraggableItem(props) {
  const [positionX, setPositionX] = useState(0);
  const [positionY, setPositionY] = useState(0);

  //use later marginLeft
  // if (
  //   clientX >= props.x1 &&
  //   clientX <= props.x2 &&
  //   clientY >= props.y1 &&
  //   clientY <= props.y2
  // ) {
  //   setPositionX(props.setPositionX);
  //   setPositionY(props.props.setPositionY);
  // } else {
  //   setPositionX(0);
  //   setPositionY(0);
  // }

  return (
    <Draggable
      onStop={(e) => {
        const clientX = e.clientX;
        const clientY = e.clientY;
        props.condition()
        console.log(clientX, clientY);
        if (clientX >= props.x1 && clientY >= props.y1) {
          setPositionX(props.setPositionX);
          setPositionY(props.setPositionY);
        } else {
          setPositionX(0);
          setPositionY(0);
        }
      }}
      defaultPosition={{ x: 0, y: 0 }}
      position={{ x: positionX, y: positionY }}
    >
      {props.content}
    </Draggable>
  );
}

export default DraggableItem;
