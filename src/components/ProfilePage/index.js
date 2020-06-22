import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api'
import { useHistory, useLocation } from 'react-router-dom';

import UserInfosContext from '../../contexts/UserInfosContext';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken} from '../../utils/utils';

import LogoRappiW from '../../assets/logo-rappi4-white.png';

import {RadioHr} from '../rappi4bUi/rappi4bUi-styles'
import {HistoryWrapper} from './styles';
import {
  OrderHistoryCard, MainWrapper, GenNavBar, GenText,
  ViewProfileCard, ViewAdressCard, LoadingPage
} from '../rappi4bUi/rappi4bUi';

const ProfilePage = () => {
  let history = useHistory();
  const {pathname} = useLocation();

  const userInfosContext = useContext(UserInfosContext);

  const token = validedToken(userInfosContext);
  usePrivatePage(userInfosContext);

  const [showLoadingPage, setShowLoadingPage] = useState(true);
  const [profile, setProfile] = useState(null)
  
  const [ordersHistory, setOrdersHistory] = useState([])

  useEffect(() => {
    api.get('profile', {headers: {
      auth: token
    }}).then((response) => {
      setProfile(response.data.user)
    }).catch((error) => {
      window.alert('Erro ao logar. Insira seus dados novamente.')
    })
  }, []);

  useEffect(() => {
    api.get('orders/history', {headers: {
      auth: token
    }}).then((response) => {
      setOrdersHistory(response.data.orders)
    }).catch((error) => {
      window.alert('Não conseguimos acessar seu histórico de compras. Tente novamente mais tarde.')
    })
  }, [])

  useEffect(()=>{
    profile !== null && setShowLoadingPage(false)
  },[profile]);

  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return  <MainWrapper>
                <ViewProfileCard
                  userName={profile !== null && profile.name}
                  userEmail={profile !== null && profile.email}
                  userCpf={profile !== null && profile.cpf}
                  editInfo={()=>history.push('/editar-perfil')}
                />
                <ViewAdressCard 
                  userAddress={profile !== null && profile.address}
                  editInfo ={()=>history.push('/editar-endereco')} 
                />

              <GenText 
              salmon 
              onClick={()=> {history.replace('/'); localStorage.clear()}}
              >
                Sair desta conta
              </GenText>

              <GenText>Histórico de pedidos</GenText>
              <RadioHr/>
              
              <HistoryWrapper>
                {
                ordersHistory.length === 0 ? 
                  <GenText>Nenhum pedido realizado.</GenText> : 
                  
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
              </HistoryWrapper>
              
              <GenNavBar
                pathName={pathname}
                onClickToHome={()=>history.push('/home')}
                onClickToCart={()=>history.push('/cart')} 
              />
              
            </MainWrapper>
  };
  return(
   conditionalRender()
  )
};
export default ProfilePage