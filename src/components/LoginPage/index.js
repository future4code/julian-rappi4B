import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { ContainerLogin, InputLogin, InputButton } from './style'
import { useHistory } from 'react-router-dom'
//import Button from '@material-ui/core/Button';
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
    <ContainerLogin>
      <img src={LogoRappi} />
      <p>Entrar</p>
        <form onSubmit={goToPrivateArea}>
          <InputLogin  
            name='email'
            value={email}
            label={'E-mail'}
            onChange={handleInputChange}
            type='email'
            placeholder="E-mail" 
            required/>
            
          <InputLogin 
            name='password'
            value={password}
            label={'Senha'}
            onChange={handleInputChange}
            type='password' 
            placeholder="Senha" 
            required/>            
        <InputButton 
           type='submit' 
           >Entrar
        </InputButton>
      <p>Não possui cadastro? <button size='small' onClick={GoToRegisterPage}>Clique Aqui.</button></p>
      </form>
    </ContainerLogin>
  
    )
  
};

export default LoginPage