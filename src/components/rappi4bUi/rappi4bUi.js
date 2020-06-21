import React,{useState} from 'react';

import{RiShoppingCartLine, RiHomeSmileLine, RiUser5Line, RiPencilLine} from 'react-icons/ri'
import {FaRegClock} from 'react-icons/fa';
import styled from 'styled-components';
import {
  InputWrapper, InputLabel, InputArea, ButtonWrapper,
  Text, HiText, NavBarWrapper, NavBarButton, FormWrapper,
  RestCardWrapper, RestImg, RestDetails, ProductCardWrapper,
  ProductCardImg, ProductCardDetails, ProductCardAddButton, 
  ProductCardCounter, ProductCardActionBar, PopupSelectWrapper,
  Select, PopupSelectButton, Option, PopupSelectShadow, OrderListenerCard,
  ClockView, ActiveOrderDetails, RadioInputWrapper, RadioSelect, RadioOption,
  RadioMark, RadioHr,OrderHIstoryCardWrapper, PersonalInfosCardWrapper, 
  InfosBox, ProfileBox, AddresBox, EditIconButton
}from './rappi4bUi-styles'

export const AppWrapper = styled.main`
  margin: 0;
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow:auto;
`;
export const MainWrapper = styled.main`
  width: 360px;
  min-height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  overflow-y: auto;
  overflow-x: hidden;
`;
export const GenButton = ButtonWrapper;
export const GenText = Text;
export const GenHiText = HiText;
export const GenForm = FormWrapper; 
export const GenInput =(props)=>{
  
  return(
    <InputWrapper>
      <InputLabel>
      {props.inputLabel}
      </InputLabel>
      <InputArea
      id={props.id}
      name={props.name}
      title={props.title}
      pattern={props.pattern}
      onChange={props.onChange}
      value={props.value}
      placeholder={props.placeholder}
      type={props.type} 
      required={props.required === undefined && true}
      onKeyDown={props.onKeyDown}
      onClick={props.onClick}
      />
    </InputWrapper> 
  )
};
export const GenNavBar =(props)=>{

  return(
    <NavBarWrapper>
      <NavBarButton onClick={props.onClickToHome}><RiHomeSmileLine/></NavBarButton>
      <NavBarButton onClick={props.onClickToCart}><RiShoppingCartLine/></NavBarButton>
      <NavBarButton onClick={props.onClickToProfile}><RiUser5Line/></NavBarButton>
    </NavBarWrapper>
  )
};
export const RestaurantCard =(props)=>{

  return(
    <RestCardWrapper onClick={props.openDetails}>
      <RestImg src={props.src}/>
      <RestDetails>
        <GenText salmon>{props.restaurantName}</GenText>
      </RestDetails>
      <RestDetails>
        <GenText detail>Entrega em aprox. {props.deliveryTime} min.</GenText>
        <GenText detail>Frete R$ {props.shipping}</GenText>
      </RestDetails>
    </RestCardWrapper>
  )
};

export const ProductCard =(props)=>{
  const [showSelect, setShowSelect] = useState(false);
  const [quantity, setQuantity] = useState( props.quantity ? Number(props.quantity) : 0);
 
  const optionsList=[0,1,2,3,4,5,6,7,8,9,10];
 
  const callBackAddToCart=(event)=>{
    const addToCart = props.addToCart;
    addToCart(event);
    setQuantity(event.target.value);
    setShowSelect(false);
  };

  const handleQuantitySelected = (event) => {
    setQuantity(event.target.value);
  };

  const callBackRemoveFromCart =(event)=>{
    const removeFromCart = props.removeFromCart;
    setQuantity(0)
    removeFromCart(event);
  };
  return(
    <ProductCardWrapper>
      <ProductCardImg src={props.src}/>
      <ProductCardDetails>
        <GenText minor salmon>{props.productName}</GenText>
        <GenText detail minor>{props.description}</GenText>
        <GenText minor>R$ {props.price}</GenText>
      </ProductCardDetails>
      <ProductCardActionBar>
        <ProductCardCounter 
        quantity={quantity} 
        >
          <GenText>{quantity}</GenText>
        </ProductCardCounter>
        {
          props.hiddeActionButton === undefined &&
          <ProductCardAddButton
          id={props.id} 
          quantity={quantity}
          onClick={
            quantity === 0 ? 
            () => setShowSelect(true) : callBackRemoveFromCart
          }
          >
            {
            quantity === 0 ? 'Adicionar' : 'Remover'
            }
          </ProductCardAddButton>
        }
        
      </ProductCardActionBar>
      {
        showSelect === true &&
        <PopupSelectShadow>
          <PopupSelectWrapper>
            <GenText>Selecione a quantidade desejada</GenText>
              <Select onChange={handleQuantitySelected} autoFocus>
                {optionsList.map(option=><Option value={option}>{option}</Option>)}
              </Select>
            <PopupSelectButton 
            id={props.id} value={quantity} 
            onClick={callBackAddToCart}
            >
              Adicionar ao carrinho
            </PopupSelectButton>
            <PopupSelectButton 
            onClick={()=> { setQuantity(0); setShowSelect(false)}}
            >
              Cancelar
            </PopupSelectButton>
          </PopupSelectWrapper>
        </PopupSelectShadow>        
      }
    </ProductCardWrapper>
  )
};
export const ListenerCard=(props)=>{

  return(
    <OrderListenerCard>
      <ClockView>
        <GenHiText largeIcon>
          <FaRegClock/>
        </GenHiText>
      </ClockView>
      <ActiveOrderDetails>
        <GenText white>Pedido em andamento</GenText>
        <GenText>{props.restaurantName}</GenText>
        <GenHiText>subtotal r${props.totalPrice}</GenHiText>
      </ActiveOrderDetails>
    </OrderListenerCard>
  )
};
export const RadioInput = (props)=>{
  const optionsList = props.radioOptions !== undefined ? props.radioOptions : []
  return(
    <RadioInputWrapper>
      <GenText minor>{props.radioTitle}</GenText>
      <RadioHr/>
      {
        optionsList.map(option=>{
          return(
            <RadioOption key={option}>{option}
              <RadioSelect 
              value={
                option.toLowerCase().includes('dinheiro') ? 'money' : 'creditcard'
              }
              onClick={props.onClickOption}
              type='radio' /> 
              <RadioMark></RadioMark>
            </RadioOption>
          )
        })
      }
    </RadioInputWrapper>
  )
};
export const OrderHistoryCard=(props)=>{

  return(
    <OrderHIstoryCardWrapper>
      <GenText salmon>{props.restaurantName}</GenText>
      <GenText minor>{props.orderDate}</GenText>
      <GenHiText>subtotal r${props.totalPrice}</GenHiText>
    </OrderHIstoryCardWrapper>
  )
};
export const ViewProfileCard=(props)=>{

  return(
    <ProfileBox>
      <InfosBox>
        <GenText>{props.userName}</GenText>
        <GenText minor>{props.userEmail}</GenText>
        <GenText minor>{props.userCpf}</GenText>
      </InfosBox>
      <EditIconButton 
      onClick={props.editInfo}
      >
        <RiPencilLine/>
      </EditIconButton>
    </ProfileBox>
  )
};
export const ViewAdressCard=(props)=>{
  
  return(
    <AddresBox>
      <InfosBox>
        <GenText minor detail>{props.cardTitle}</GenText>
        <GenText>{props.userAddress}</GenText>
      </InfosBox>
      {
        props.showEditButton !== false &&
        <EditIconButton 
        onClick={props.editInfo}
        >
          <RiPencilLine/>
        </EditIconButton>
      }
    </AddresBox>
  )
};
