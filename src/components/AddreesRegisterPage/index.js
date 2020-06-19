import React from 'react';
import api from '../../services/api'
import { MainWrapper, GenInput, GenForm, GenButton } from '../rappi4bUi/rappi4bUi'
import { useForm } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom'
import rappi4bUi from '../rappi4bUi/rappi4bUi'


const AddreesRegisterPage = () => {
  const { form, onChange } = useForm({
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
    <MainWrapper>
      <GenForm onSubmit={AddreesRegister}>
        <GenInput 
          name='street'
          value={street}
          inputLabel={'rua do cliente'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Nome" 
          required/>   
        <GenInput 
          name='number'
          value={number}
          inputLabel={'numero do endereco'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Número" 
          required/>   
        <GenInput 
          name='neighbourhood'
          value={neighbourhood}
          inputLabel={'bairro'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Bairro" 
          required/>   
        <GenInput 
          name='city'
          value={city}
          inputLabel={'cidade'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Cidade" 
          required/>   
        <GenInput 
          name='state'
          value={state}
          inputLabel={'estado'}
          onChange={handleInputChange}
          type='text' 
          placeholder="state" 
          required/>
          <GenInput 
          name='complement'
          value={complement}
          inputLabel={'complemento'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Complemento" 
          required/>   
          <GenButton type='submit'>Salvar</GenButton>
        </GenForm>
       </MainWrapper>
  )

};
export default AddreesRegisterPage