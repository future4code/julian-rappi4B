import React from 'react';

import styled from 'styled-components'

const EdditAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EditAddressPage =()=>{

  return (
    <EdditAddressContainer>
    <h1>Editar Endereço</h1>
    <form>
      <div>
          <label>Logradouro:</label>
          <input type="text" id="logradouro" />
      </div>
      <div>
          <label>Número:</label>
          <input type="text" id="numero" />
      </div>
      <div>
          <label>Complemento:</label>
          <input type="text" id="complemento"></input>
      </div>
      <div>
          <label>Bairro:</label>
          <input type="text" id="bairro"></input>
      </div>
      <div>
          <label>Cidade:</label>
          <input type="text" id="cidade"></input>
      </div>
      <div>
          <label>Estado:</label>
          <input type="text" id="estado"></input>
      </div>

      <button>Salvar</button>
    </form>
  </EdditAddressContainer>
  
  )
};
export default EditAddressPage