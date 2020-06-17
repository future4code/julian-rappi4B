import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { ContainerLogin, InputLogin, InputButton } from './style'
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';


const LoginPage = () => {
  
  const history = useHistory();
  
  const GoToRegisterPage = () => {
    history.push('/cadastrar')

  }
  
  
  return (
    <ContainerLogin>
      <img src={LogoRappi} />
      <p>Entrar</p>
        <form>
          <InputLogin 
            type="email" 
            id='email' 
            placeholder="E-mail" 
            required/>
            
          <InputLogin 
            type="password" 
            name="password"  
            placeholder="Senha" />
        </form>
        <InputButton>Entrar</InputButton>
      <p>Não possui cadastro? <Button size='small' onClick={GoToRegisterPage}>Clique Aqui.</Button></p>
    </ContainerLogin>
  
    )
  
};

export default LoginPage