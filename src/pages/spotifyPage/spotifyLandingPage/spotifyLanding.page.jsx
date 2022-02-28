import React from 'react'
import Button from "../../../components/FlexibleButtonComponent/FlexibleButton.component"
import Label from "../../../components/labelComponent/Label.component"

import "./spotifyLanding.styles.css"

function SpotifyLanding() {
  return (
    <div style={{display:"flex",  justifyContent:"center" ,marginTop:300}}>
     
    <Button
          className=''
          name={
              <Label
                label={<div style={{color:"black",fontWeight:700,textTransform:"none"}}>Login</div>}
                 

                
                
              />
          }
          variant='outlined'
          sx={{
            backgroundColor: '',
            borderRadius: '',
            border:"1px solid rgb(220,220,220)",
            fontWeight: "" ,
            height:50,
            width:300,
            
            '&:hover': {
              backgroundColor: '',
              borderRadius: '',
            },
          }}
        />

        <div style={{position:"relative"}}>
        <span  style={{position:"absolute",top: '20%',
    right: '50%',marginRight:10 ,fontSize:30}} className="iconify" data-icon="logos:spotify-icon"></span>

        </div>


    </div>

  )
}

export default SpotifyLanding