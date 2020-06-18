import React, { useState } from 'react';
import DescriptionCard from './DescriptionCard';
import { RestaurantDetailContainer, AllProductContainer } from './styles';
import api from '../../services/api'
import { useParams } from 'react-router-dom';
import CardProduct from './CardProduct';

const RestaurantDetailPage =()=>{
  const [detail, setDetail] = useState()
  const [products, setProducts] = useState(null)
  const [id, setId] = useState(null)
  const [quantity, setQuantity] = useState('')
  const restaurantId = useParams();    
  //const restId = 1

  console.log('id',id)
  console.log('quantity',quantity)

  const login = () => {   
    const body = {
      email:"isaac@isaac.com",
      password: "123456"
    }
    api.post('login', body).then((response) => {        
      window.localStorage.setItem('token', response.data.token)
      console.log('pegando o token',response)                
    })
  }      
  const restaurantes = () => {
    api.get(`restaurants`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) =>{              
      })
  }   

  const habbibs = () => {
    api.get(`restaurants/${restaurantId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) =>{              
        setDetail(response.data.restaurant)
        setProducts(response.data.restaurant.products)
      })
  }
  const getId = (event) => {
    event.preventDefault()
    setId(event.target.id)    
  } 
  const quantitySelect = (event) => {
    setQuantity(event.target.value)    
  }  

  return(
    <RestaurantDetailContainer>
      <h1>Detalhes do Restaurante</h1>
      <button onClick={login}>Logar</button>
      <button onClick={restaurantes}>Todos restaurantes</button>
      <button onClick={habbibs}>Habbibs</button>
      <DescriptionCard detail={detail}/>
      <p>Principais</p>
      <hr/>
      <AllProductContainer>             
        {
          products !== null &&
          products.map((products) => {
          return <CardProduct getQuantity={quantitySelect} getProductId={getId} products={products}/>
        })}            
      </AllProductContainer>
    </RestaurantDetailContainer>
  ) 
};
export default RestaurantDetailPage