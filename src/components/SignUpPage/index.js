import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { ContainerRegisterPage, InputDados, ButtonRegister} from './style'
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
      <ContainerRegisterPage>
          <img src={LogoRappi} />
          <p>Cadastrar</p>
      <form onSubmit={goToPrivateArea}>
        <InputDados 
          name='name'
          value={name}
          label={'Nome do cliente'}
          onChange={handleInputChange}
          type='text' 
          placeholder="Nome" 
          required/>   
        <InputDados     
          name='email'
          value={email}
          label={'Insira seu email'}
          onChange={handleInputChange}
          placeholder="E-mail" 
          type='text' 
          required/>              
        <InputDados 
          name='cpf'
          value={cpf}
          label={'Insira seu CPF'}
          onChange={handleInputChange}
          type='text' 
          placeholder="CPF" 
          required/>      
        <InputDados 
          name='password'
          value={password}
          label={'Senha'}
          onChange={handleInputChange}
          type='password' 
          placeholder="Senha" 
          required/>            
          <ButtonRegister  
           type='submit'>
            Cadastrar
          </ButtonRegister>
      </form>    
      </ContainerRegisterPage>
    )
  
};
export default SignUpPage