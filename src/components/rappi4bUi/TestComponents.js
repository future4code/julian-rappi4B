import React,{useState} from 'react';
import {useHistory} from 'react-router-dom'
import{
  MainWrapper, GenInput, GenButton, GenText,
  GenHiText, GenNavBar, GenForm, RestaurantCard,
  ProductCard, ListenerCard, RadioInput, OrderHistoryCard,
  ViewProfileCard, ViewAdressCard
}from './rappi4bUi';

const TestComponents =()=>{
  const h = useHistory();

  const [selValue, setSelValue] = useState(0);

  const handleSelectOption = (e)=>{
    setSelValue(e.target.value)
  };
  const addToCart=()=>{
    console.log('adicionado ao carrinho')
  };
  const removeFromCart=()=>{
    console.log('removido do cart')
    setSelValue(0)
  };
  const onClickRadio = (e)=> console.log(e.target.value);
  const onClickEdit = ()=> console.log('editando informação');

  return (
    <MainWrapper>
      
      <ViewProfileCard
      userName={'Bruna Oliveira'}
      userEmail={'bruna@gmail.com'}
      userCpf={'333.333.333-33'}
      editInfo={onClickEdit}
      />

      <ViewAdressCard
      userAddress={`Rua da Guia, 72 - Recife/PE`}
      editInfo={onClickEdit}
      />
      
      <OrderHistoryCard
      restaurantName={'Nome do Restaurante'}
      orderDate={'24 de outubro de 2019'}
      totalPrice={24}
      />

      <RadioInput
      radioTitle={'Forma de pagamento'}
      radioOptions={['a prazo', 'a vista', 'no boleto']}
      onClickOption={onClickRadio}
      />

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