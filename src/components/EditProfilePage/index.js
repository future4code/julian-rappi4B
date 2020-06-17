import React, { useState } from 'react';
import api from '../../services/api'

import styled from 'styled-components';

const EditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EditProfilePage =()=>{
  const token = localStorage.getItem('token')
  const [editProfile, setEditProfile] = useState(null)

  const onClickEditProfile = () => {    /*como tirar esse body mocado? tb está na requisição*/ 
    const bodyEditProfile = {
      "name": "Astrodev",
      "email": "astrodev@future4.com",
      "cpf": "111.111.111-13"
    }
    
    api.put('profile', bodyEditProfile, {headers: {auth: token}})
      .then((response) => {console.log(response.data)})   /* consoles não estão imprimindo na tela */
      .catch((error) => {console.log(error)
      })
  }

  return (
    <EditProfileContainer>
      <h1>Editar Perfil</h1>
      <form onSubmit={onClickEditProfile}>
        <div>
            <label>Nome:</label>
            <input type="text" id="nome" />
        </div>
        <div>
            <label>E-mail:</label>
            <input type="email" id="email" />
        </div>
        <div>
            <label>CPF:</label>
            <input type="text" id="cpf"></input>
        </div>
        <button>Salvar</button> {/* quando clicar deve salvar e voltar para tela de perfil*/}
      </form>
    </EditProfileContainer>
  )
};
export default EditProfilePage