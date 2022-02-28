import React from 'react';
import { Link } from 'react-router-dom';
import './sidebarLink.styles.css';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

function SidebarLink(props) {
  return (
    <div>
      <Link className={props.className} to={props.link}>
        <ListItem button>
          <ListItemIcon>{props.icon}</ListItemIcon>
          <ListItemText primary={props.text} />
        </ListItem>
      </Link>
    </div>
  );
}

export default SidebarLink;
