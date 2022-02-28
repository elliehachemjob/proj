import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarLink.styles.css';
function SidebarLink(props) {
  return (
    <div className='linkWrapper'>
      <Link className='link' to={props.link}>
        {props.linkName}
      </Link>
    </div>
  );
}

export default SidebarLink;
