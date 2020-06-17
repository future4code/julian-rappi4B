import React from 'react';
import api from '../../services/api'
import {ContainerAddreesRegisterPage, InputAddreesRegisterPage, ButtonAddreesRegisterPage } from './style'

const AddreesRegisterPage = () => {
  return (
    <ContainerAddreesRegisterPage>
      <InputAddreesRegisterPage 
        type="text" 
        name="nome da rua" 
        placeholder="Rua/Avenida" 
        required /> 
      <InputAddreesRegisterPage 
        type="number" 
        name="numero" 
        placeholder="Número" 
        required /> 
      <InputAddreesRegisterPage 
        type="text" 
        name="apt e bloco" 
        placeholder="Apartamento/Bloco" 
        required /> 
      <InputAddreesRegisterPage 
        type="text" 
        name="bairro" 
        placeholder="Bairro" 
        required /> 
      <InputAddreesRegisterPage 
        type="text" 
        name="cidade" 
        placeholder="Cidade" 
        required /> 
        <ButtonAddreesRegisterPage>Salvar</ButtonAddreesRegisterPage>
       </ContainerAddreesRegisterPage>
  )

};
export default AddreesRegisterPage