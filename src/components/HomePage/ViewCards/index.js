import React from 'react';
import { ViewCardsContent,
         Img,
         Title,
         DeliveryTime,
         Shipping } from './styles';

const ViewCards = (props) => {
  const restaurant = props.restaurant;

  return (
          <ViewCardsContent>

          <Img src={restaurant.logoUrl} />
          <Title>{restaurant.name}</Title>
          
          <DeliveryTime>{restaurant.deliveryTime} min.</DeliveryTime>
          <Shipping>Frete R$ {restaurant.shipping}</Shipping>

        </ViewCardsContent>
  );
};

export default ViewCards;