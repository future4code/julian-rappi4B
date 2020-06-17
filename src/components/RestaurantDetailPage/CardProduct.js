import React, { useState } from 'react';
import { ImgCard, CardProductContainer, DivImgPro, DivTexPro, H4, SpanButton } from './styles';
import Select from './Select';
import Adicionar from './Adicionar';

const CardProduct = (props) => {
   const [selectedArea, setSelectedAre] = useState(false) 
   const products = props.products 

   const areaDeLogar = () => {
    switch(selectedArea) {
      case false:
        return  <Adicionar goToAreaLogin={goToAreaLogin}/>
      case true:
        return <Select goToHomeArea={goToHomeArea}/>        
      default:
        return <Adicionar/>    
    }
  }

  const goToAreaLogin = () => {
    setSelectedAre(true)
  }  
 
  const goToHomeArea = () => {
    setSelectedAre(false)
  }
   
   
   
   
   

  return (   
   
      <CardProductContainer>  
         <DivImgPro>
            <ImgCard src={products !== undefined && products.photoUrl} alt='Imagem do Produto'/>
         </DivImgPro>
         <DivTexPro>           
            <H4>{products !== undefined && products.name}</H4>            
            <p>{products !== undefined && products.description}</p>
            <h4> R${products !== undefined && products.price}</h4>
         </DivTexPro>
           
         <SpanButton>
         {areaDeLogar()}
         </SpanButton>
      </CardProductContainer>    
  )
};
export default CardProduct