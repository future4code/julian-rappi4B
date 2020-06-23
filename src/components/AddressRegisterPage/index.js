import React from 'react';
import api from '../../services/api'
import { MainWrapper, GenInput, GenForm, GenButton, GenText } from '../rappi4bUi/rappi4bUi'
import { useForm } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom'

const AddressRegisterPage = () => {
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

  const AddressRegister = (event) => {
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
      <GenForm autoComplete onSubmit={AddressRegister}>
        <GenInput 
          name='street'
          value={street}
          inputLabel={'Logradouro *'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Rua/Av." 
          required
        />   
        <GenInput 
          name='number'
          value={number}
          inputLabel={'Número *'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Número" 
          required
        />
        <GenInput 
          name='complement'
          value={complement}
          inputLabel={'Complemento *'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Apto./Bloco" 
          required
        />   
        <GenInput 
          name='neighbourhood'
          value={neighbourhood}
          inputLabel={'Bairro *'}
          type='text' 
          onChange={handleInputChange}
          placeholder="Bairro" 
          required
        />
        <GenInput 
          name='city'
          value={city}
          inputLabel={'Cidade *'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Cidade" 
          required
        />   
        <GenInput 
          name='state'
          value={state}
          inputLabel={'Estado *'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Estado" 
          required
        /> 
          <GenButton type='submit'>Salvar</GenButton>
        </GenForm>
        <GenText salmon onClick={()=> history.replace('/')}>Voltar para login</GenText>
       </MainWrapper>
  )

};

export default AddressRegisterPage