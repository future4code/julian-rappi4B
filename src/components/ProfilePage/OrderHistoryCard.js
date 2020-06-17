import React from 'react';


const OrderHistoryCard = (props) =>{
  const order = props.orders
  return(
    <div>
        <p>{order !== null && order.restaurantName}</p>
        <p>{order !== null && order.date}</p>
        <p>{order !== null && order.totalPrice}</p>
      
    </div>
  )
    
};
export default OrderHistoryCard