import React, { useEffect, useState } from 'react';
import api from '../../services/api'

import {
  ProfilePageContainer
} from './styles';

import OrderHistoryCard from './OrderHistoryCard';
import ProfileCard from './ProfileCard';


const ProfilePage = () => {
  const [profile, setProfile] = useState(null)
  
  const [ordersHistory, setOrdersHistory] = useState([])

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
      
      {
      ordersHistory.length === 0 ? 
        <p>Você não realizou nenhum pedido</p> : 
        ordersHistory.map(order => {
          return(
            <OrderHistoryCard
              restaurantName={order.restaurantName} 
              date={order.date}
              totalPrice={order.totalPrice}
            />
          )
        })
      } 
      
    </ProfilePageContainer>
  )
  
};
export default ProfilePage