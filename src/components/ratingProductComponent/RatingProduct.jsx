import React,{useState} from 'react'
import Rating from '@mui/material/Rating';


function RatingProduct(props) {

  return (
    <Rating
    name="simple-controlled"
    value={props.value}
    onChange={(event, newValue) => {
      props.setValue(newValue);
    }}
  />
  
  )
}

export default RatingProduct