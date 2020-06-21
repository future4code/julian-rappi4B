//Global-state: 10º- para usar o global state nos componentes filhos, importar o useContext
import React, {useState, useContext, useEffect} from 'react';

//Global-state: 11º- importar o context que deseja usar do global state
import CartContext from '../../contexts/CartContext';
import RestaurantsListContex from '../../contexts/RestaurantsListContext';

import api from '../../services/api';
import {useHistory} from 'react-router-dom';

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

  //Global-state: 12º- instanciar o useContext com o context importado e ter acesso global state
  const cartContext = useContext(CartContext);
  const restaurantsListContext = useContext(RestaurantsListContex);

  const [userCart, setUserCart] = useState([]);
  const [currentOrder, setCurrentOrder]=useState(null);
  const [activeOrderRestaurants, setActiveOrderRestaurants] = useState([]);
  const [totalShipping, setTotalShipping] = useState(0);

  //Global-state: 13º- utilizar alguma das actions setadas no switch do storeReducer
  const handleClearCart = ()=>{
    const confirm = window.confirm('Deseja esvaziar seu carrinho?')
    confirm === true &&
    setUserCart([]);   
    cartContext.dispatch({
      type: 'REMOVE_FROM_CART', filteredCart:[]
    });  
  };
  const handleSelectPayment=(e)=> setCurrentOrder(
    {...currentOrder, paymentMethod: e.target.value}
  );
  const handleConfirmOrder=async()=> {
    const extractedIdCart = userCart.map(product=>{
      return {id: product.product.id, quantity: product.quantity}
    })
    setCurrentOrder({...currentOrder, products: extractedIdCart})

  
      /* activeOrderRestaurants.forEach(restaurant=>{
        try{
          api.post(`restaurants/${restaurant.id}/order`, )
        }catch(e){
          console.log(e.response.data)
        }
      })
    window.alert('Aguarde enquanto processamos seu pedido...') */
  };
  const cartSum=()=>{
    let subtotal = 0;
    userCart.forEach(product=>{
      subtotal += product.product.price*product.quantity
    });
    return (subtotal+totalShipping).toFixed(2)
  };

  useEffect(()=>{
    userCart.length < cartContext.userCart.cart.length &&
    setUserCart(cartContext.userCart.cart)
  },[]);
  useEffect(()=>{
    let shippingCounter = 0;
    const currentRestaurantsIds = [];
    cartContext.userCart.cart.forEach(product=>{
      ! currentRestaurantsIds.includes(product.restaurantId) && 
      currentRestaurantsIds.push(product.restaurantId)
    });
    const currentRestaurants = restaurantsListContext.restaurantsList.filter(restaurant=>{
      return currentRestaurantsIds.includes(restaurant.id)
    });
    currentRestaurants.forEach(restaurant=>{
      shippingCounter += restaurant.shipping
    });

    setActiveOrderRestaurants(currentRestaurants);
    setTotalShipping(shippingCounter);
  },[])

  console.log(userCart)
  
  return(
    <MainWrapper>
      <ViewAdressCard
      cardTitle={'Endreço de entrega'}
      userAddress={'Rua Alessandra Vieira, 42'}
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
          userCart.length > 0 ?
          userCart.map(selectedProduct =>{
            return(
              <ProductCard 
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
      userCart.length > 0 &&
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
            userCart.length > 0 ?
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
        onClickToHome={()=>history.push('/home')}
        onClickToProfile={()=> history.push('/perfil')}
      />
    </MainWrapper>
  )
};
export default CartPage