import React from 'react';

import {
    
} from './styles';


const OrderHistoryCard = (props) =>{
  
  return(
    <div>
      <p>{props.restaurantName !== null && props.restaurantName}</p>
      <p>{props.date !== null && props.date}</p>
      <p>{props.totalPrice !== null && props.totalPrice}</p>
    </div>
  )
    
};
export default OrderHistoryCard