import React,{useState} from 'react'
import SearchInput from "../../../components/searchInputComponent/SearchInput.component"
import Label from "../../../components/labelComponent/Label.component"
import {SearchFilledIcon} from "../../../components/iconsComponent/Icons.component"
import CardContainer from "../../../components/cardComponent/CardContainer.component"
import Image from "../../../components/imageComponent/Image.component"
import RatingProduct from "../../../components/ratingProductComponent/RatingProduct"

import "./artistSearch.style.css"

function ArtistSearch() {

  const [hooksNames, setHooksName] = useState([
    { label: 'withdrawal Live Account request' },
    { label: 'Withdrawal Live Account added' },
    { label: 'User Email Validation' },
  ]);


  const [value,setValue] = useState(1)



  return (
    <>   
      {/* 1st part */}
      <SearchInput
            options={hooksNames}
            label={<Label label='Search for an artist…' size={15} />}
            className=''
            sx=""
            size='small'
          />
         <SearchFilledIcon/>
    {/* 2nd card item */}
    <CardContainer
    cardContent={
      <>
      <Image 
      style={{width:250,height:100,marginBottom:5}}
       src=""
      />
    <Label label='Tom Pretty' size={15} />
    <Label label='1000 followers' size={15} />

   <RatingProduct
     value={value}
     setValue={setValue}
    />

      </>
  
    
    }

    />
  
    </>
  )
}

export default ArtistSearch