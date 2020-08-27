import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import api from '../../services/api'
import { useParams, useHistory } from 'react-router-dom';

import UserInfosContext from '../../contexts/UserInfosContext';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken} from '../../utils/utils';

import LogoRappiW from '../../assets/logo-rappi4-white.png';

import { MainWrapper, ProductCard, GenText, LoadingPage} from '../rappi4bUi/rappi4bUi';
import {RadioHr} from '../rappi4bUi/rappi4bUi-styles';
import { 
  Img, 
  DeliveryInfos,
  DetailContainer
} from './styles';

const RestaurantDetailPage =()=>{

  const [showLoadingPage, setShowLoadingPage] = useState(true);

  const userInfosContext = useContext(UserInfosContext);

  const token = validedToken(userInfosContext);
  usePrivatePage(token);

  const [detail, setDetail] = useState(null)
  const [products, setProducts] = useState(null)  
  
  const cartContext = useContext(CartContext);
  
  const {restaurantId} = useParams();
  
  const history = useHistory();
    
  const getSelectedProduct = (event) => {
    const productId = event.target.id;
    const productQuantity = event.target.value;
    const filteredProduct = products.filter(product => {
      return product.id === productId
    });
    const validedOrder =()=>{
      if(
        cartContext.userCart[restaurantId]!== null &&
        cartContext.userCart[restaurantId]!== undefined &&
        cartContext.userCart[restaurantId].length > 0
        ){
          return {
            restaurantId: Number(restaurantId),
            currentOrder:[
              ...cartContext.userCart[restaurantId],{
              product:filteredProduct[0],quantity: productQuantity
            }]
          };
      }else{
        return {
          restaurantId: Number(restaurantId),
          currentOrder:[{
            product:filteredProduct[0],quantity: productQuantity
          }]
        };
      }
    };
    cartContext.dispatch({ 
      type: 'ADD_TO_CART', order: validedOrder()
    });    
  };
  const removeProduct = (event) => {
    const productId = event.target.id   
    const filteredSelectedProducts = cartContext.userCart.cart.filter(selectedProduct => {      
      return selectedProduct.product.id !== productId
    })   
    cartContext.dispatch({
      type: 'REMOVE_FROM_CART', filteredCart:filteredSelectedProducts
    })   
  }; 

  useEffect(() => {
    api.get(`restaurants/${restaurantId}`, {
      headers: {
        auth: token
      }
    }).then((response) =>{              
        setDetail(response.data.restaurant)
        setProducts(response.data.restaurant.products)
      })
  }, []); 

  useEffect(()=>{
    detail !== null && setShowLoadingPage(false)
  },[detail]);

  const conditionalRender = ()=>{
    if(showLoadingPage === true){
      return <LoadingPage src={LogoRappiW}/>
    }
    return <MainWrapper>
            <DetailContainer>
              <Img src={detail !== null && detail.logoUrl }/>            
              <GenText salmon>{detail !== null && detail.name}</GenText>
              <GenText detail minor>{detail !== null && detail.category}</GenText>
              <DeliveryInfos>
                <GenText detail minor>{detail !== null && `${detail.deliveryTime}min`}</GenText>
                <GenText detail minor>{detail !== null && `Frete R$${detail.shipping.toFixed(2)}`}</GenText>
              </DeliveryInfos>
              <GenText detail minor>{detail !== null && detail.address}</GenText>     
            </DetailContainer>
            <GenText  onClick={() => history.goBack()} salmon>Voltar</GenText>
            <GenText alignSelfStart>{detail !== null && `Cardápio`}</GenText>
            <RadioHr/>
            <MainWrapper>             
              {
                products !== null &&
                products.map((product, index) => {
                  return(
                    <ProductCard
                      key={index}
                      src={product.photoUrl}
                      productName={product.name}
                      description={product.description}
                      price={product.price.toFixed(2)}                
                      id={product.id}
                      addToCart={getSelectedProduct}                
                      removeFromCart={removeProduct}               
                    />
                  )
                })
              }
            </MainWrapper>
          </MainWrapper>
  };
  return(
   conditionalRender()
  ) 
};
export default RestaurantDetailPage