import React from 'react';

import styled from 'styled-components';

const EdditProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EditProfilePage =()=>{

  return (
    <EdditProfileContainer>
      <h1>Editar Perfil</h1>
      <form>
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
        <button>Salvar</button>
      </form>
    </EdditProfileContainer>
  )
};
export default EditProfilePage