import React, { useState, useEffect } from 'react';
import api from '../../services/api'
import { useParams } from 'react-router-dom';
import { MainWrapper, ProductCard} from '../rappi4bUi/rappi4bUi';
import { 
  Img, 
  Name, 
  Category, 
  DeliveryTime,
  Shipping,
  Address,
  DetailContainer              
} from './styles';


const RestaurantDetailPage =()=>{
  const [detail, setDetail] = useState()
  const [products, setProducts] = useState(null)
  const [id, setId] = useState(null)
  const [quantity, setQuantity] = useState('')
  const {restaurantId} = useParams();
  const [selectedProducts, setSelectedProducts ] = useState([])  

  console.log('id',restaurantId)
  console.log('quantity',quantity)     
 
  useEffect(() => {
    api.get(`restaurants`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) =>{              
      })
  }, [])
  
  useEffect(() => {
    api.get(`restaurants/${restaurantId}`, {
      headers: {
        auth: window.localStorage.getItem('token')
      }
    }).then((response) =>{              
        setDetail(response.data.restaurant)
        setProducts(response.data.restaurant.products)
      })
  }, [])
  
  const getId = (event) => {
    event.preventDefault()
    setId(event.target.id)    
  } 
  const quantitySelect = (event) => {
    setQuantity(event.target.value)    
  }
  const min = 'min.'
  const frete = 'Frete R$'
  const principal = 'Principais'  

  return(
    <MainWrapper>
      <DetailContainer>   
        <Img src={detail !== undefined && detail.logoUrl }  alt='Imagem do Restaurante'/>            
        <Name>{detail !== undefined && detail.name}</Name>
        <Category>{detail !== undefined && detail.category}</Category>
        <DeliveryTime>{detail !== undefined && detail.deliveryTime+`${min}`}</DeliveryTime>
        <Shipping>{detail !== undefined && `${frete}`+detail.shipping.toFixed(2)}</Shipping>
        <Address>{detail !== undefined && detail.address}</Address> 
      <p>{detail !== undefined && `${principal}`}</p>
      
      </DetailContainer>
      <hr/>
      <div>             
        {
          products !== null &&
          products.map((product) => {
          return(
            <ProductCard
              src={product.photoUrl}
              productName={product.name}
              description={product.description}
              price={product.price.toFixed(2)}
              quantity={selectedProducts.quantity} //Ajustar lógica da quantidade 
              id={product.id}
              addToCart={() => console.log('adicionou ao carrinho')}
              selectOnChange={quantitySelect} 
              removeFromCart={() => console.log('removeu do carrinho')}              
              
            />
          )
        })}            
      </div>
    </MainWrapper>
  ) 
};
export default RestaurantDetailPage