import React from 'react';
import api from '../../services/api'
import LogoRappi from '../LogoRappi/title-rappi4.png'
import { ContainerRegisterPage, InputDados, ButtonRegister} from './style'


const SignUpPage = () =>{
  return (
      <ContainerRegisterPage>
        <img src={LogoRappi} />
          <p>Cadastrar</p>
          <InputDados 
            type="text" 
            name="nome" 
            placeholder="Nome" 
            required/>
          <InputDados 
            type="email" 
            name="email" 
            placeholder="E-mail" 
            required/>
          <InputDados 
            type="text" 
            class="form-control cpf-mask" 
            placeholder="000.000.000-00" 
            required/>
          <InputDados 
            type="password" 
            name="senha" 
            placeholder="Senha" 
            required/>
          <InputDados 
          type="password" 
          name="confirma-senha" 
          placeholder="Confirme a sua senha" 
          required/>
          <ButtonRegister>Cadastrar</ButtonRegister>
      </ContainerRegisterPage>
    )
  
};
export default SignUpPage