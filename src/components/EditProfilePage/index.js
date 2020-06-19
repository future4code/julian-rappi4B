import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import {
  MainWrapper, GenInput, GenButton, GenForm
} from '../rappi4bUi/rappi4bUi';

const EditProfilePage =()=>{
  const [infosProfile, setInfosProfile] = useState(null)

  const history = useHistory()

  const token = localStorage.getItem('token')

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
      <h3>Editar</h3>
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
    </MainWrapper>
  )
};
export default EditProfilePage