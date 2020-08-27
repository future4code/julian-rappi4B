import React, { useEffect, useState, useContext } from 'react';
import api from '../../services/api'
import { useHistory, useLocation } from 'react-router-dom';

import UserInfosContext from '../../contexts/UserInfosContext';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken, validedInfos} from '../../utils/utils';

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
  usePrivatePage(token);

  const profileInfos = validedInfos(userInfosContext.userInfos);

  const [showLoadingPage, setShowLoadingPage] = useState(true);
  
  const [ordersHistory, setOrdersHistory] = useState(null)

  useEffect(() => {
    api.get('orders/history', {headers: {
      auth: token
    }}).then((response) => {
      setOrdersHistory(response.data.orders)
    }).catch((error) => {
      token &&
      window.alert('Não foi possível acessar o histórico de compras. Tente novamente mais tarde.')
    })
  }, []);

  useEffect(()=>{
    ordersHistory != null && setShowLoadingPage(false)
  },[ordersHistory]);

  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return  <MainWrapper>
              <ViewProfileCard
                userName={profileInfos.name}
                userEmail={profileInfos.email}
                userCpf={profileInfos.cpf}
                editInfo={()=>history.push('/editar-perfil')}
              />
              <ViewAdressCard 
                userAddress={profileInfos.address}
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