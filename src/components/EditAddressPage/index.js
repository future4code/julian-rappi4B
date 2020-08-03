import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import api from '../../services/api';

import UserInfosContext from '../../contexts/UserInfosContext';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken, validedInfos} from '../../utils/utils';

import LogoRappiW from '../../assets/logo-rappi4-white.png';

import {
  MainWrapper, GenInput, GenForm, GenButton, GenText, LoadingPage
} from '../rappi4bUi/rappi4bUi';

const EditAddressPage =()=>{
  let history = useHistory();

  const userInfosContext = useContext(UserInfosContext);

  const token = validedToken(userInfosContext);
  usePrivatePage(token);

  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const [infosAddressForm, setInfosAddressForm] = useState(null)
    
  const onClickEditAddres = (event) => { 
    event.preventDefault()
    api.put('address', infosAddressForm, {headers: {auth: token}})
      .then((response) => {
        window.alert('Dados alterados com sucesso!') 
        history.push('/perfil')
        window.alert('Saia da conta e faça login novamente para atualizar seus dados.');
      })  
      .catch((error) => {window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.')
      })
  };
  useEffect(()=>{
    api.get('profile/address', {headers: {auth: token}})
    .then((response)=>{setInfosAddressForm(response.data.address)})
    .catch((error)=>{window.alert('Não foi possível acessar seus dados. Tente novamente mais tarde.')}) 
  },[])  

    
  const onChangeInputAddress = (event) => {
    const {name, value} = event.target
    setInfosAddressForm({...infosAddressForm, [name]: value})
  }

  useEffect(()=>{
    infosAddressForm !== null && setShowLoadingPage(false)
  },[infosAddressForm]);

  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return(
      <MainWrapper>
          <GenText>Informações de endereço</GenText>
          <GenForm onSubmit={onClickEditAddres}> 
            <GenInput  
              inputLabel="Logradouro"                     
              type="text"     
              name="street" 
              value={infosAddressForm !== null ? infosAddressForm.street : ""}
              onChange={onChangeInputAddress}
            />

            <GenInput 
              inputLabel="Número"                     
              type="text" 
              name="number" 
              value={infosAddressForm !== null ? infosAddressForm.number : ""}
              onChange={onChangeInputAddress}
            />

            <GenInput 
              inputLabel="Complemento"                     
              type="text" 
              name="complement" 
              value={infosAddressForm !== null ? infosAddressForm.complement : ""}
              onChange={onChangeInputAddress}
              placeholder="Apto / Bloco"
            />

            <GenInput 
              inputLabel="Bairro"                     
              type="text" 
              name="neighbourhood"
              value={infosAddressForm !== null ? infosAddressForm.neighbourhood : ""}
              onChange={onChangeInputAddress}
            />

            <GenInput 
              inputLabel="Cidade"                     
              type="text" 
              name="city"
              value={infosAddressForm !== null ? infosAddressForm.city : ""}
              onChange={onChangeInputAddress}
            />

            <GenInput 
              inputLabel="Estado"                     
              type="text" 
              name="state"
              value={infosAddressForm !== null ? infosAddressForm.state : ""}
              onChange={onChangeInputAddress}
            />
          
            <GenButton>Salvar</GenButton>
        </GenForm>
        <GenText salmon onClick={()=> history.push('/perfil')}>Voltar</GenText>
      </MainWrapper>
    )
  };
  return (
    conditionalRender()
  )
};
export default EditAddressPage