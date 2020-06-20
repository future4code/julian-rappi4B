//Global-state: 10º- para usar o global state nos componentes filhos, importar o useContext
import React, {useState, useContext} from 'react';

//Global-state: 11º- importar o context que deseja usar do global state
import CartContext from '../../contexts/CartContext';

import {useHistory} from 'react-router-dom';

import {
  CartProductsView, RestaurantInfos, ShippingInfo,
  PriceInfo
} from './styles';

import {
  MainWrapper, GenNavBar, ViewAdressCard,
  RadioInput, GenButton, GenForm, ProductCard,
  GenText, GenHiText
} from '../rappi4bUi/rappi4bUi';

const CartPage =()=>{
  const history = useHistory();

  //Global-state: 12º- instanciar o useContext com o context importado e ter acesso global state
  const cartContex = useContext(CartContext);

  const [cartProducts, setCartProducts] = useState(
    [{
      src:'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201909301542_8HZD_n.png',
      productName:'McFlurry Ovomaltine',
      description:'McFlurry on the rocks!',
      price:6,
      quantity:3,
      id:2
    }],
  );
  
  //Global-state: 13º- utilizar alguma das actions setadas no switch do storeReducer
  const handleAddedToCart=()=> cartContex.dispatch({ 
    type: 'ADD_TO_CART', product:cartProducts[0] 
  });
  const handleSelectPayment=(e)=> console.log(e.target.value);

  console.log(cartContex)

  return(
    <MainWrapper>
      <ViewAdressCard
      cardTitle={'Endreço de entrega'}
      userAddress={'Rua Alessandra Vieira, 42'}
      showEditButton ={false}
      />

      <RestaurantInfos>
        <GenText salmon>Restaurant name</GenText>
        <GenText detail>Restaurant address</GenText>
        <GenText detail>Restaurant deliveryTime</GenText>
      </RestaurantInfos>

      <CartProductsView>
        {
          cartProducts !== null &&
          cartProducts.map(product =>{
            return(
              <ProductCard 
              src={product.src}
              productName={product.productName}
              description={product.description}
              price={product.price}
              quantity={product.quantity}
              id={product.id}
              addToCart={()=> console.log('adicionado ao carrinho')}
              selectOnChange
              removeFromCart
              />
            )
          })
        }
      </CartProductsView>
      
      <ShippingInfo>
        <GenText>Frete R$ 6.00</GenText>
      </ShippingInfo>

      <PriceInfo>
        <GenText>SUBTOTAL</GenText>
        <GenHiText salmon>r$67.00</GenHiText>
      </PriceInfo>

      <RadioInput
      radioTitle='Forma de pagamento'
      radioOptions={['Dinheiro', 'Cartão de crédito']}
      onClickOption={handleSelectPayment}
      required
      />
      <GenButton onClick={handleAddedToCart}>Confirmar</GenButton>

      <GenNavBar
        onClickToHome={()=>history.push('/home')}
        onClickToProfile={()=> history.push('/perfil')}
      />
    </MainWrapper>
  )
};
export default CartPage