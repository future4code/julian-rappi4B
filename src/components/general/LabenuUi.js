import React from 'react';

import{RiShoppingCartLine, RiHomeSmileLine, RiUser5Line} from 'react-icons/ri'

import styled from 'styled-components';
import {
  InputWrapper, InputLabel, InputArea, ButtonWrapper,
  Text, HiText, NavBarWrapper, NavBarButton
}from './LebenuUi-styles'

export const AppWrapper = styled.main`
  margin: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const MainWrapper = styled.main`
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const GenInput =(props)=>{
  console.log(props.required === undefined && true)
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
      />
    </InputWrapper> 
  )
};
export const GenNavBar =(props)=>{

  return(
    <NavBarWrapper>
      <NavBarButton onClick={props.onClickHome}><RiHomeSmileLine/></NavBarButton>
      <NavBarButton onClick={props.onClickCart}><RiShoppingCartLine/></NavBarButton>
      <NavBarButton onClick={props.onClickProfile}><RiUser5Line/></NavBarButton>
    </NavBarWrapper>
  )
};
export const GenButton = ButtonWrapper;
export const GenText = Text;
export const GenHiText = HiText; 