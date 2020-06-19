import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { InputButton } from './style'
import { MainWrapper, GenInput, GenText, GenForm, GenButton, InputLabel } from '../rappi4bUi/rappi4bUi'
import { useHistory } from 'react-router-dom'
import { useForm } from '../../hooks/hooks';

const LoginPage = () => {
  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  }

  const history = useHistory();

  const goToPrivateArea = (event) => {
    const body = { email, password }
    event.preventDefault();
    api.post('login', body)
    .then(response => {
      window.localStorage.setItem('token', response.data.token);
      history.push('/home');
      resetForm();
    })
    .catch(error => {
      console.log(error);
      window.alert('Não foi possível acessar')
    })
  }
  
  const GoToRegisterPage = () => {
    history.push('/cadastrar')

  }
  
 
  return (
    <MainWrapper>
      <img src={LogoRappi} />
      <GenText>Entrar</GenText>
        <GenForm onSubmit={goToPrivateArea}>
          <GenInput  
            name='email'
            value={email}
            inputLabel={'E-mail'}
            onChange={handleInputChange}
            type='email'
            placeholder="E-mail" 
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
           type='submit' 
           >Entrar
        </GenButton> 
      </GenForm>
      <GenText>Não possui cadastro? <InputButton size='small' onClick={GoToRegisterPage}>Clique Aqui.</InputButton></GenText>
    </MainWrapper>
   )
};

export default LoginPage