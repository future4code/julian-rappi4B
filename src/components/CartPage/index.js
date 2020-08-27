//Global-state: 10º- para usar o global state nos componentes filhos, importar o useContext
import React, {useState, useContext, useEffect} from 'react';
import {useLocation} from 'react-router-dom'
//Global-state: 11º- importar o context que deseja usar do global state
import CartContext from '../../contexts/CartContext';
import RestaurantsListContex from '../../contexts/RestaurantsListContext';
import UserInfosContext from '../../contexts/UserInfosContext';

import api from '../../services/api';
import {useHistory} from 'react-router-dom';

import {usePrivatePage} from '../../hooks/hooks';
import {validedToken, validedInfos} from '../../utils/utils';

import {
  CartProductsView, RestaurantInfos, ShippingInfo,
  PriceInfo
} from './styles';

import {
  MainWrapper, GenNavBar, ViewAdressCard,
  RadioInput, GenButton, ProductCard,
  GenText, GenHiText
} from '../rappi4bUi/rappi4bUi';

const CartPage =()=>{
  const history = useHistory();
  const {pathname} = useLocation();

  //Global-state: 12º- instanciar o useContext com o context importado e ter acesso global state
  const cartContext = useContext(CartContext);
  const restaurantsListContext = useContext(RestaurantsListContex);
  const userInfosContext = useContext(UserInfosContext);

  const token = validedToken(userInfosContext);
  const userInfos = validedInfos(userInfosContext.userInfos);
  usePrivatePage(token);

  const [userOrder, setUserOrder] = useState([]);
  const [paymentMethod, setPaymentMethod]=useState('');
  const [activeOrderRestaurants, setActiveOrderRestaurants] = useState([]);
  const [totalShipping, setTotalShipping] = useState(0);
  
  //Global-state: 13º- utilizar alguma das actions setadas no switch do storeReducer

  //Não foi possível criar uma função para limpar apenas um item do cart, pois ocorria um bug
  //na renderização condicionaL do botão de remover a qual alterava o mesmo para adicionar na medida
  //em que removia os items de cima para baixo, mas não de baixo para cima "\_(''/)_/".
  const handleClearCart = ()=>{
    const confirm = window.confirm('Deseja esvaziar seu carrinho?')
    confirm === true &&
    setUserOrder([]);   
    cartContext.dispatch({
      type: 'CLEAR_CART', filteredCart:[]
    });  
  };

  const handleSelectPayment=(e)=> setPaymentMethod(e.target.value);

  const handleConfirmOrder=async()=> {
    const sendOrder=async()=>{
      if(window.confirm('Confirmar informações do pedido?') === true){
        const globalCart = cartContext.userCart;
        for(let restaurantWithOrder in globalCart){
          const extractedIdOrder = globalCart[restaurantWithOrder].map(product=>{
            return {id: product.product.id, quantity: product.quantity}
          })
          const requestBody = {products: extractedIdOrder, paymentMethod: paymentMethod}
          try{
            window.alert('Aguarde enquanto confirmamos seu pedido...')
            const response = await api.post(`restaurants/${restaurantWithOrder}/order`, requestBody, {headers:{
              auth: token
            }});
            window.alert(`Pedido no restaurante ${response.data.order.restaurantName} realizado!`)
            handleClearCart();
          }catch(e){
            window.alert(
              `${e.response.data.message}. Não é permitido mais de um pedido de restaurante por vez.`
            );
          }
        }
      }else{window.alert('Pedido cancelado.')}
    };

    userOrder.length === 0 ? window.alert('Seu carrinho está vazio!') :
    paymentMethod === '' ? window.alert('Selecione uma forma de pagamento!') :
    sendOrder();
  };
  const cartSum=()=>{
    let subtotal = 0;
    userOrder.forEach(product=>{
      subtotal += product.product.price*product.quantity
    });
    return (subtotal+totalShipping).toFixed(2)
  };
  useEffect(()=>{
    let shippingCounter = 0;
    const awaitingProducts = [];

    const activeOrderRestaurantsIds =()=>{
      const ids = [];
      for(let order in cartContext.userCart){
        ids.push(order)
      };
      return ids
    };
    const currentRestaurantsWithOrders = 
    restaurantsListContext.restaurantsList.filter(restaurant=>{
      return activeOrderRestaurantsIds().includes(restaurant.id)
    });
    for(let restaurantWithOrder in cartContext.userCart){
      cartContext.userCart[restaurantWithOrder].forEach(product=>{
        awaitingProducts.push(product)
      });
    };
    currentRestaurantsWithOrders.forEach(restaurant=>{
      shippingCounter += restaurant.shipping
    });

    setUserOrder(awaitingProducts);
    setActiveOrderRestaurants(currentRestaurantsWithOrders);
    setTotalShipping(shippingCounter);
  },[])

  return(
    <MainWrapper>
      <ViewAdressCard
      cardTitle={'Endreço de entrega'}
      userAddress={userInfos && userInfos.address}
      showEditButton ={false}
      />

      <RestaurantInfos>
        <GenText salmon minor>
          {activeOrderRestaurants.map(restaurant=>{
            return `${restaurant.name}/ `
          })}
        </GenText>
        <GenText detail minor>
          {activeOrderRestaurants.map(restaurant=>{
            return `${restaurant.address}/ `
          })}
        </GenText>
        <GenText detail minor>
          {activeOrderRestaurants.map(restaurant=>{
            return `${restaurant.name}, ${restaurant.deliveryTime}min/ `
          })}
        </GenText>
      </RestaurantInfos>

      <CartProductsView>
        {
          userOrder.length > 0 ?
          userOrder.map((selectedProduct, index) =>{
            return(
              <ProductCard 
              key={index}
              src={selectedProduct.product.photoUrl}
              productName={selectedProduct.product.name}
              description={selectedProduct.product.description}
              price={selectedProduct.product.price}
              quantity={selectedProduct.quantity}
              id={selectedProduct.product.id}
              hiddeActionButton
              />
            )
          })
          : <GenText>Carrinho vazio</GenText>
        }
      </CartProductsView>

      {
      userOrder.length > 0 &&
        <GenText salmon onClick={handleClearCart}>Esvaziar carrinho</GenText>
      }
      <ShippingInfo>
        <GenText>
          Frete R$ {totalShipping.toFixed(2)}
        </GenText>
      </ShippingInfo>

      <PriceInfo>
        <GenText>SUBTOTAL</GenText>
        <GenHiText salmon>
          r${
            userOrder.length > 0 ?
            cartSum()
            : '00.00'
          }
        </GenHiText>
      </PriceInfo>

      <RadioInput
      radioTitle='Forma de pagamento'
      radioOptions={['Dinheiro', 'Cartão de crédito']}
      onClickOption={handleSelectPayment}
      required
      />
      <GenButton onClick={handleConfirmOrder}>Confirmar</GenButton>

      <GenNavBar
        pathName={pathname}
        onClickToHome={()=>history.push('/home')}
        onClickToProfile={()=> history.push('/perfil')}
      />
    </MainWrapper>
  )
};
export default CartPage