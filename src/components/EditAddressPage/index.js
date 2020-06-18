import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api'

import {
  EditAddressContainer  
} from './styles';

const EditAddressPage =()=>{
  const [infosAddressForm, setInfosAddressForm] = useState(null)

  const token = localStorage.getItem('token')
    
  const onClickEditAddres = (event) => { 
    event.preventDefault()
    api.put('address', infosAddressForm, {headers: {auth: token}})
      .then((response) => {
        console.log(response)
        window.alert('Dados alterados com sucesso!') 
        history.push('/perfil')
      })  
      .catch((error) => {window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.')
      })
 }

  useEffect(()=>{
    api.get('profile/address', {headers: {auth: token}})
    .then((response)=>{setInfosAddressForm(response.data.address)})
    .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.')}) 
  },[])  

    
  const onChangeInputAddress = (event) => {
    const {name, value} = event.target
    setInfosAddressForm({...infosAddressForm, [name]: value})
  }

  let history = useHistory()
      
    return (
    <EditAddressContainer>
      <h1>Editar Endereço</h1>
      <form onSubmit={onClickEditAddres}> 
        <div>
          <label>Logradouro:</label>
          <input                       
            type="text"     
            name="street" 
            value={infosAddressForm !== null ? infosAddressForm.street : ""}
            onChange={onChangeInputAddress}
          />
        </div>
        <div>
          <label>Número:</label>
          <input 
            type="text" 
            name="number" 
            value={infosAddressForm !== null ? infosAddressForm.number : ""}
            onChange={onChangeInputAddress}
          />
        </div>
        <div>
          <label>Complemento:</label>
          <input 
            type="text" 
            name="complement" 
            value={infosAddressForm !== null ? infosAddressForm.complement : ""}
            onChange={onChangeInputAddress}
            placeholder="Apto / Bloco"
          />
        </div>
        <div>
          <label>Bairro:</label>
          <input 
            type="text" 
            name="neighbourhood"
            value={infosAddressForm !== null ? infosAddressForm.neighbourhood : ""}
            onChange={onChangeInputAddress}
          />
        </div>
        <div>
          <label>Cidade:</label>
          <input 
            type="text" 
            name="city"
            value={infosAddressForm !== null ? infosAddressForm.city : ""}
            onChange={onChangeInputAddress}
          />
        </div>
        <div>
          <label>Estado:</label>
          <input 
            type="text" 
            name="state"
            value={infosAddressForm !== null ? infosAddressForm.state : ""}
            onChange={onChangeInputAddress}
          />
        </div>

        <button>Salvar</button>
      </form>
  </EditAddressContainer>
  
  )
};
export default EditAddressPage