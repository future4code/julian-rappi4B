// import React from 'react';
// import { DescriptionCardContainer, 
//          ImgCardDetail, 
//          Name, 
//          Category, 
//          DeliveryTime,
//          Shipping,
//          Address,              
// } from './styles';


// const DescriptionCard = (props) => {

//   const detail = props.detail    
    
//   return (
//     <DescriptionCardContainer>                   
//       <ImgCardDetail src={detail !== undefined && detail.logoUrl }  alt='Imagem do Restaurante'/>            
//       <Name>{detail !== undefined && detail.name}</Name>
//       <Category>{detail !== undefined && detail.category}</Category>
//       <DeliveryTime>{detail !== undefined ? detail.deliveryTime : 0}min.</DeliveryTime>
//       <Shipping>Frete R${detail !== undefined && detail.shipping}</Shipping>
//       <Address>{detail !== undefined && detail.address}</Address>        
//     </DescriptionCardContainer>
//   )
// };
// export default DescriptionCard