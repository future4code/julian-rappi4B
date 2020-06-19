import React from 'react';
import api from '../../services/api'
import {ContainerAddreesRegisterPage, InputAddreesRegisterPage, ButtonAddreesRegisterPage } from './style'
import { useForm } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom'
import rappi4bUi from '../rappi4bUi/rappi4bUi'


const AddreesRegisterPage = () => {
  const { form, onChange, resetForm } = useForm({
    street: '',
    number:'',
    neighbourhood:'',
    city: '',
    state: '',
    complement: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  

  const history = useHistory();
  
  const { street, number, neighbourhood, city, state, complement } = form

  const AddreesRegister = (event) => {
    event.preventDefault()
    const token = window.localStorage.getItem('token'); 
    const body = { street, number, neighbourhood, city, state, complement }
      api.put('address', body, {
      headers: {
        auth: token
      }
    }).then((response) => {
      window.localStorage.setItem('token', response.data.token);
      history.push('/');
    }).catch((err) => {
      console.error(err)
      window.alert('Não foi possível realizar seu cadastro')
    })
}
  return (
    <ContainerAddreesRegisterPage>
      <form onSubmit={AddreesRegister}>
        <InputAddreesRegisterPage 
          name='street'
          value={street}
          label={'rua do cliente'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Nome" 
          required/>   
        <InputAddreesRegisterPage 
          name='number'
          value={number}
          label={'numero do endereco'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Número" 
          required/>   
        <InputAddreesRegisterPage 
          name='neighbourhood'
          value={neighbourhood}
          label={'bairro'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Bairro" 
          required/>   
        <InputAddreesRegisterPage 
          name='city'
          value={city}
          label={'cidade'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Cidade" 
          required/>   
        <InputAddreesRegisterPage 
          name='state'
          value={state}
          label={'estado'}
          onChange={handleInputChange}
          type='text' 
          placeholder="state" 
          required/>
          <InputAddreesRegisterPage 
          name='complement'
          value={complement}
          label={'complemento'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Complemento" 
          required/>   
          <ButtonAddreesRegisterPage type='submit'>Salvar</ButtonAddreesRegisterPage>
        </form>
       </ContainerAddreesRegisterPage>
  )

};
export default AddreesRegisterPage