import React, { useState } from 'react';
import DescriptionCard from './DescriptionCard';
import { RestaurantDetailContainer } from './styles';
import api from '../../services/api'
import AllProduct from './AllProduct';


const RestaurantDetailPage =()=>{
    const [detail, setDetail] = useState()
    const [products, setProducts] = useState([])    
    const restId = 1

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
        api.get(`restaurants/${restId}`, {
          headers: {
            auth: window.localStorage.getItem('token')
          }
        }).then((response) =>{              
          setDetail(response.data.restaurant)
          setProducts(response.data.restaurant.products)
        })
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
        <AllProduct products={products}/>    
    </RestaurantDetailContainer>
    ) 
};
export default RestaurantDetailPage