import React, {useState} from 'react';

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

  const [cartProducts, setCartProducts] = useState([
    {
      src:'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201909301542_8HZD_n.png',
      productName:'McFlurry Ovomaltine',
      description:'McFlurry on the rocks!',
      price:6,
      quantity:3,
      id:2
    },
    {
      src:'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201909301542_8HZD_n.png',
      productName:'McFlurry Ovomaltine',
      description:'McFlurry on the rocks!',
      price:6,
      quantity:5,
      id:2
    }
  ]);
  const handleSelectPayment=(e)=> console.log(e.target.value);

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
              addToCart
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

      <GenForm>
        <RadioInput
        radioTitle='Forma de pagamento'
        radioOptions={['Dinheiro', 'Cartão de crédito']}
        onClickOption={handleSelectPayment}
        required
        />
        <GenButton>Confirmar</GenButton>
      </GenForm>

      <GenNavBar
      
      />
    </MainWrapper>
  )
};
export default CartPage