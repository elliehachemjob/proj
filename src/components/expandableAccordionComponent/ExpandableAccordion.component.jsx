import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import './expandableAccordion.styles.css';

function ExpandableAccordion(props) {
  return (
    <Accordion
      style={props.style}
      expanded
      // expanded={props.expanded && props.expanded}
      sx={
        props.sx
          ? props.sx
          : {
              marginTop: '10px',
              marginBottom: '10px',
              backgroundColor: '',
              borderRadius: '10px',
              width: props.width,
            }
      }
    >
      <AccordionSummary
        style={{ marginTop: 10, marginBottom: -70 }}
        expandIcon={props.hideExpandIcon ? null : <ExpandMoreIcon />}
        aria-controls='panel1a-content'
        id='panel1a-header'
      >
        {props.section1}
      </AccordionSummary>
      <AccordionDetails>{props.section2}</AccordionDetails>
    </Accordion>
  );
}

export default ExpandableAccordion;
