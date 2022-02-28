import React from 'react'
import Label from "../../../components/labelComponent/Label.component"
import CardContainer from "../../../components/cardComponent/CardContainer.component"
import Image from "../../../components/imageComponent/Image.component"
import BreakLine from "../../../components/breakLineComponent/BreakLine.component"
import "./browserAlbums.styles.css"

function BrowseAlbums() {
  return (
    <>
      {/* 1st  */}
      <Label label='Tom Pretty' size={15} />
      <Label label='Albums' size={15} />

      {/* 2nd card */}
      <CardContainer
    cardContent={
      <>
      <Image 
      style={{width:250,height:30,marginBottom:5}}
       src=""
      />
    <Label label='An American 
Treasure (Deluxe)' size={15} />
    <Label label='Tom Petty' size={15} />
    <Label label='2018-09-28' size={15} />
    <Label label='63 tracks' size={15} />

      </>

  
    
    }

 cardActions={
   <>
         <div >
         <BreakLine />

         Preview on Spotify Label
   

   </div>



   </>
}
    />
  
 




    </>
  )
}

export default BrowseAlbums