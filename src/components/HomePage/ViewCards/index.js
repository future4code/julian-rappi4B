import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  ViewCardsContent,
  Img,
  Title,
  DeliveryTime,
  Shipping
} from './styles';

const ViewCards = (props) => {
  const restaurant = props.restaurant;
  const history = useHistory();

  return (
    <ViewCardsContent
      onClick={() => history.push(`/restaurant-detail/${restaurant.id}`)}
    >

      <Img src={restaurant.logoUrl} />
      <Title>{restaurant.name}</Title>

      <DeliveryTime>{restaurant.deliveryTime} min.</DeliveryTime>
      <Shipping>Frete R$ {restaurant.shipping.toFixed(2)}</Shipping>

    </ViewCardsContent>
  );
};

export default ViewCards;