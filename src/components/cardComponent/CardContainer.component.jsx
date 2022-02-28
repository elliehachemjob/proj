import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import './card.style.css';

function CardContainer(props) {
  return (
    <Card
      sx={{
        width: props.width ? props.width : 290,
        height: props.height ? props.height : 200,
      }}
    >
      <CardContent style={props.cardContentStyle}>
        {props.cardContent}
      </CardContent>
      <CardActions>{props.cardActions}</CardActions>
    </Card>
  );
}

export default CardContainer;
