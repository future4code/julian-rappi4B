import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { MainWrapper, GenInput, GenText, GenForm, GenButton } from '../rappi4bUi/rappi4bUi'

import { useForm } from '../../hooks/hooks';
import { useHistory } from 'react-router-dom'


const SignUpPage = () =>{
  const { form, onChange, resetForm } = useForm({
    clientname: '',
    email: '',
    password: '',
    confirmPassword: '',
    cpf: ''

  });

  const { name, email, password, cpf } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const goToPrivateArea = (event) => {
    const body = { name, email, password, cpf }
    event.preventDefault();
    api.post('signup', body)
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      history.push('/cadastro-endereco');
      resetForm();
    })
    .catch(err => {
      console.error(err);
      window.alert('Não foi possível realizar seu cadastro')
    })
  }
  
  return (
      <MainWrapper>
          <img src={LogoRappi} />
          <GenText>Cadastrar</GenText>
      <GenForm onSubmit={goToPrivateArea}>
        <GenInput 
          name='name'
          value={name}
          inputLabel={'Nome'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Nome" 
          required/>   
        <GenInput     
          name='email'
          value={email}
          inputLabel={'E-mail'}
          onChange={handleInputChange}
          placeholder="E-mail" 
          type='text' 
          required/>              
        <GenInput 
          name='cpf'
          value={cpf}
          inputLabel={'Insira seu CPF'}
          onChange={handleInputChange}
          type='text' 
          placeholder="CPF" 
          required/>      
        <GenInput 
          name='password'
          value={password}
          inputLabel={'Senha'}
          onChange={handleInputChange}
          type='password' 
          placeholder="Senha" 
          required/>            
          <GenButton  
           type='submit'>
            Cadastrar
          </GenButton>
      </GenForm>    
      </MainWrapper>
    )
  
};
export default SignUpPage