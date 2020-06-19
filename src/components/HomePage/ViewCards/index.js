import React from 'react';
import { useHistory } from 'react-router-dom';
import { RestaurantCard, RestCardWrapper, RestImg, GenText, RestDetails,  } from '../../rappi4bUi/rappi4bUi'

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
    <ViewCardsContent>

      <RestCardWrapper
        onClick={() => history.push(`/restaurant-detail/${restaurant.id}`)}
      >

        <RestImg src={restaurant.logoUrl} />

        <RestDetails>
          <GenText salmon>{restaurant.name}</GenText>
        </RestDetails>

        <RestDetails>
          <GenText detail>{restaurant.deliveryTime} min.</GenText>
          <GenText detail>Frete R$ {restaurant.shipping.toFixed(2)}</GenText>
        </RestDetails>

      </RestCardWrapper>

    </ViewCardsContent>
  );
};

export default ViewCards;