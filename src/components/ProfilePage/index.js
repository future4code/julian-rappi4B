import React, { useEffect, useState } from 'react';
import api from '../../services/api'
import { useHistory } from 'react-router-dom';

import {
  OrderHistoryCard, MainWrapper, GenNavBar
} from '../rappi4bUi/rappi4bUi';

import ProfileCard from './ProfileCard';


const ProfilePage = () => {
  let history = useHistory()

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
  }, [])
  
  return(
    <MainWrapper>
      <h3>Meu perfil</h3>
      
      {profile !== null && <ProfileCard profile={profile}/>}

      <p>Histórico de compras</p>
      
      {
      ordersHistory.length === 0 ? 
        <p>Você não realizou nenhum pedido</p> : 
        
        ordersHistory.map(order => {
        
        const getDate = new Date(order.createdAt).toLocaleDateString()
          return(
            <OrderHistoryCard
              restaurantName={order.restaurantName} 
              orderDate={getDate}
              totalPrice={order.totalPrice}
            />
          )
        })
      }

      <GenNavBar
        onClickToHome={()=>history.push('/home')}
        onClickToCart={()=>history.push('/cart')} 
      />
      
    </MainWrapper>
  )
  
};
export default ProfilePage