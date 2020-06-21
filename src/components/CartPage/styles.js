import styled from 'styled-components';

export const RestaurantInfos = styled.div`
  max-height: 102px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const CartProductsView = styled.div`
  max-height: 240px;
  width: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
`; 
export const ShippingInfo = styled.div`
  margin: 16px 0px;
  width: 100%;
  max-height: 18px;
  
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
`;
export const PriceInfo = styled.div`
  width: 100%;
  max-height: 21px;
  margin: 13px 0px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`; 