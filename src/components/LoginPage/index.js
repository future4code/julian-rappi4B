import React, {useContext, useState, useEffect} from 'react';
import UserInfosContext from '../../contexts/UserInfosContext';
import api from '../../services/api';
import LogoRappi from '../../assets/logo-rappi4-salmon.png';
import LogoRappiW from '../../assets/logo-rappi4-white.png';
import { InputButton, RememberMark, RememberMarkOption, RememberMarkSelect } from './style';
import { MainWrapper, GenInput, GenText, GenForm, GenButton, LoadingPage} from '../rappi4bUi/rappi4bUi';
import { useHistory } from 'react-router-dom';
import { useForm } from '../../hooks/hooks';
import {validedToken} from '../../utils/utils';

const LoginPage = () => {
  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const userInfosContext = useContext(UserInfosContext); 
  const [rememberLogin, setRememberLogin] = useState(false);
  const { form, onChange, resetForm } = useForm({
    email: '',
    password: ''
  });

  const { email, password } = form;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    onChange(name, value);
  };

  const history = useHistory();

  const goToPrivateArea = (event) => {
    setShowLoadingPage(true);
    const body = { email, password }
    event.preventDefault();
    api.post('login', body)
    .then(response => {
      if(rememberLogin === true){
        localStorage.setItem('rappi4BUserInfos', JSON.stringify(response.data));
        userInfosContext.dispatch({type: 'SET_USER_INFOS', infos: null});
      }else{
        userInfosContext.dispatch({type: 'SET_USER_INFOS', infos: response.data});
        localStorage.setItem('rappi4BUserInfos', '')
      };
      history.replace('/home');
      resetForm();
    })
    .catch(err => {
      setShowLoadingPage(false)
      console.log(err)
      window.alert('Acesso negado.')
    })
  };
  const GoToRegisterPage = () => {
    history.push('/cadastrar')
  };  
  useEffect(()=>{
    validedToken() ? setTimeout(()=> history.push('/home'), 2000) : setShowLoadingPage(false);
  },[]);

  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return <MainWrapper>
      <img src={LogoRappi} />
      <GenText>Entrar</GenText>
        <GenForm onSubmit={goToPrivateArea}>
          <GenInput  
            name='email'
            value={email}
            inputLabel={'E-mail *'}
            onChange={handleInputChange}
            type='email'
            placeholder="e-mail@email.com" 
            required/>
            
          <GenInput 
            name='password'
            value={password}
            inputLabel={'Senha *'}
            onChange={handleInputChange}
            type='password' 
            placeholder="Mínimo 6 caracteres" 
            required/>            
        <GenButton 
           type='submit' 
           >Entrar
        </GenButton> 
      </GenForm>
      <RememberMarkOption>Lembre-se de mim
        <RememberMarkSelect 
        onClick={()=>setRememberLogin(! rememberLogin)}
        />
        <RememberMark rememberLogin={rememberLogin}/>
      </RememberMarkOption>
      <GenText>
        Não possui cadastro? 
      <InputButton size='small' onClick={GoToRegisterPage}>
        <i>Clique aqui.</i>
      </InputButton>
      </GenText>
    </MainWrapper>
  }
  return (
    conditionalRender()
   )
};

export default LoginPage