import React, { useState } from 'react';
import api from '../../services/api'


import styled from 'styled-components'

const EditAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const EditAddressPage =()=>{
  const [editAddressForm, setEditAddressForm] = useState(null)

  const onClickEditAddres = () => {
    const token = localStorage.getItem('token')
    
    const bodyEditAddress = {    /*como tirar esse body mocado? tb está na requisição*/ 
      "street": "R. Afonso Braz",
      "number": "177",
      "neighbourhood": "Vila N. Conceição",
      "city": "São Paulo",
      "state": "SP",
      "complement": "71"
    }
    
    api.put('address', bodyEditAddress, {headers: {auth: token}})
      .then((response) => {console.log(response.data)})  /* consoles não estão imprimindo na tela */
      .catch((error) => {console.log(error)
      })
 }

  return (
    <EditAddressContainer>
      <h1>Editar Endereço</h1>
      <form onSubmit={onClickEditAddres}>
        <div>
            <label>Logradouro:</label>
            <input type="text" id="logradouro" /> {/*input controlado*/}
        </div>
        <div>
            <label>Número:</label>
            <input type="text" id="numero" />
        </div>
        <div>
            <label>Complemento:</label>
            <input type="text" id="complemento" placeholder="Apto / Bloco"></input>
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

        <button>Salvar</button> {/* quando clicar deve salvar e voltar para tela de perfil*/}
      </form>
  </EditAddressContainer>
  
  )
};
export default EditAddressPage