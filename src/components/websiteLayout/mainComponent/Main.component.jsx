import React from 'react';
import LeftSide from '../leftSideComponent/LeftSide.component';
import RightSide from '../rightSideComponent/RightSide.component';

function Main(props) {
  return (
    <>
      <LeftSide menuTitle={props.menuTitle}>{props.leftSideChildren}</LeftSide>
      <RightSide pageTitle={props.pageTitle}>
        {props.rightSideChildren}
      </RightSide>
    </>
  );
}

export default Main;
