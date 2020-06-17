import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import styled from 'styled-components';

import OrderHistoryCard from './OrderHistoryCard';
import ProfileCard from './ProfileCard';


const ProfilePageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

const ProfilePage = () => {
  const [profile, setProfile] = useState(null)
  const [ordersHistory, setOrdersHistory] = useState(null)

  const login = () => {
    const bodyLogin = {
      email: 'carol@carol.com',
      password: '123456'
    }
    api.post('login', bodyLogin).then((response) => {
      window.localStorage.setItem('token', response.data.token)
    })
  }

  const token = localStorage.getItem('token')

  useEffect(() => {
    login()
    const token = localStorage.getItem('token')
    api.get('profile', {headers: {
      auth: token
    }}).then((response) => {
      setProfile(response.data.user)
    }).catch((error) => {
      window.alert('Erro ao logar. Insira seus dados novamente.')
    })
  }, []);

  useEffect(() => {
    const token = localStorage.getItem('token')
    api.get('orders/history', {headers: {
      auth: token
    }}).then((response) => {
      setOrdersHistory(response.data.orders)
    }).catch((error) => {
      window.alert('Não conseguimos acessar seu histórico de compras. Tente novamente mais tarde.')
    })
  })
  
  return(
    <ProfilePageContainer>
      <h1>Meu perfil</h1>
      {profile !== null && <ProfileCard profile={profile}/>}

      <h1>Histórico de compras</h1>
      <OrderHistoryCard orders={ordersHistory}/>
    </ProfilePageContainer>
  )
  
};
export default ProfilePage