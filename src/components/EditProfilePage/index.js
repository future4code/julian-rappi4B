import React, { useState, useEffect } from 'react';
import api from '../../services/api'

import styled from 'styled-components';

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EditProfilePage =()=>{
  const [infosProfile, setInfosProfile] = useState(null)

  const token = localStorage.getItem('token')

  const onClickEditProfile = () => {    
    api.put('profile', infosProfile, {headers: {auth: token}})
      .then((response) => {console.log(response.data.user)})   /* console tá imprimindo na tela? o q fazer c a response?*/
      .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde') 
    })
  }

  useEffect(()=>{
    api.get('profile', {headers: {auth: token}})
    .then((response)=>{setInfosProfile(response.data.user)})
    .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde')}) 
  },[]) 

  const onChangeInputProfile = (event) => {
    const {name, value} = event.target
    setInfosProfile({...infosProfile, [name]: value})
    console.log(infosProfile)
  }

  return (
    <EditProfileContainer>
      <h1>Editar Perfil</h1>
      <form onSubmit={onClickEditProfile}>
        <div>
            <label>Nome:</label>
            <input 
              type="text" 
              name="name" 
              value={infosProfile !== null ? infosProfile.name : ""}
              onChange={onChangeInputProfile}
            />
        </div>
        <div>
            <label>E-mail:</label>
            <input   
              type="email" 
              name="email" 
              value={infosProfile !== null ? infosProfile.email : ""}
              onChange={onChangeInputProfile}

            />
        </div>
        <div>
            <label>CPF:</label>
            <input 
              type="text" 
              name="cpf"
              value={infosProfile !== null ? infosProfile.cpf : ""}
              onChange={onChangeInputProfile}

            />
        </div>
        <button>Salvar</button> {/* quando clicar deve salvar e voltar para tela de perfil*/}
      </form>
    </EditProfileContainer>
  )
};
export default EditProfilePage