import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import UserInfosContext from '../../contexts/UserInfosContext';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken} from '../../utils/utils';

import {
  MainWrapper, GenInput, GenButton, GenForm, GenText
} from '../rappi4bUi/rappi4bUi';

const EditProfilePage =()=>{

  const userInfosContext = useContext(UserInfosContext);

  const token = validedToken(userInfosContext);
  usePrivatePage(userInfosContext);

  const [infosProfile, setInfosProfile] = useState(null)

  const history = useHistory()

  const onClickEditProfile = (event) => {    
    event.preventDefault()
    api.put('profile', infosProfile, {headers: {auth: token}})
      .then((response) => {
        window.alert('Dados alterados com sucesso!') 
        history.push('/perfil')
      }) 
      .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.') 
    })
  }

  useEffect(()=>{
    api.get('profile', {headers: {auth: token}})
    .then((response)=>{setInfosProfile(response.data.user)})
    .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.')}) 
  },[]) 

  const onChangeInputProfile = (event) => {
    const {name, value} = event.target
    setInfosProfile({...infosProfile, [name]: value})
  }

  

  return (
    <MainWrapper>
      <GenText>Informações pessoais</GenText>
      <GenForm onSubmit={onClickEditProfile}>
        <GenInput 
          inputLabel="Nome"
          type="text" 
          name="name" 
          value={infosProfile !== null ? infosProfile.name : ""}
          onChange={onChangeInputProfile}
        />

        <GenInput                 
          inputLabel="E-mail"
          type="email" 
          name="email" 
          value={infosProfile !== null ? infosProfile.email : ""}
          onChange={onChangeInputProfile}
        />

        <GenInput 
          inputLabel="CPF"
          type="text" 
          name="cpf"
          value={infosProfile !== null ? infosProfile.cpf : ""}
          onChange={onChangeInputProfile}
        />
        
        <GenButton>Salvar</GenButton>
         
      </GenForm>
      <GenText salmon onClick={()=> history.push('/perfil')}>Voltar</GenText>
    </MainWrapper>
  )
};
export default EditProfilePage