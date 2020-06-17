import React from 'react';
import {useHistory} from 'react-router-dom'
import{
  MainWrapper, GenInput, GenButton, GenText,
  GenHiText, GenNavBar
}from './LabenuUi';

const TestComponents =()=>{
  const h = useHistory()
  return (
    <MainWrapper>

      <GenText>Cadastrar</GenText>

      <GenInput
      
      inputLabel='E-mail'
      placeholder='email@email.com'
      />

      <GenButton>Entrar</GenButton>

      <GenText>Não possui cadastro? Clique aqui.</GenText>

      <GenHiText>subtotal R$ 50</GenHiText>

      <GenNavBar
     
      />
    </MainWrapper>
  )
};
export default TestComponents