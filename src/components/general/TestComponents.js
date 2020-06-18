import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import{
  MainWrapper, GenInput, GenButton, GenText,
  GenHiText, GenNavBar, GenForm, RestaurantCard,
  ProductCard, ListenerCard
}from './rappi4bUi';

const TestComponents =()=>{
  const h = useHistory()

  const [selValue, setSelValue] = useState(0);

  const handleSelectOption = (e)=>{
    setSelValue(e.target.value)
  }
  console.log(selValue)
  
  const addToCart=()=>{
    console.log('adicionado ao carrinho')
  };
  const removeFromCart=()=>{
    console.log('removido do cart')
    setSelValue(0)
  }
  return (
    <MainWrapper>
      <ProductCard
      src={'https://static-images.ifood.com.br/image/upload/f_auto,t_high/pratos/d596c695-8f68-4ebf-9e09-da6e4e9d1672/201909301542_8HZD_n.png'}
      productName={'McFlurry Ovomaltine'}
      description={'McFlurry on the rocks!'}
      price={6}
      quantity={selValue}
      id={2}
      addToCart={addToCart}
      selectOnChange={handleSelectOption}
      removeFromCart={removeFromCart}
      />
     
      <RestaurantCard
      src={'http://soter.ninja/futureFoods/logos/mcdonalds.png'}
      restaurantName={'MacDonalds'}
      deliveryTime={60}
      shipping={8}
      openDetails={()=> console.log('abriu detalhes do restaurante')}
      />

      <GenText salmon >Cadastrar</GenText>
      <GenForm>
        <GenInput
        inputLabel='Senha'
        placeholder='Digite sua senha'
        />

        <GenButton>Entrar</GenButton>
      </GenForm>

      <GenText>Não possui cadastro? Clique aqui.</GenText>

      <GenText detail>Burguer</GenText>

      <GenHiText>subtotal R$ 50</GenHiText>

      <ListenerCard
      restaurantName={'Bullguer Vila Madalena'}
      totalPrice={67}
      />

      <GenNavBar
        
      />
    </MainWrapper>
  )
};
export default TestComponents