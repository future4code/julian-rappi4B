import React, { useState, useEffect, useContext } from 'react';
import CartContext from '../../contexts/CartContext';
import api from '../../services/api'
import { useParams, useHistory } from 'react-router-dom';
import { MainWrapper, ProductCard, GenText} from '../rappi4bUi/rappi4bUi';
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
  
  const cartContext = useContext(CartContext);
  
  const {restaurantId} = useParams();
  
  const history = useHistory();
    
  const getSelectedProduct = (event) => {
    const productId = event.target.id
    const productQuantity = event.target.value
    const filteredProduct = products.filter(product => {
      return product.id === productId
    })
    cartContext.dispatch({ 
      type: 'ADD_TO_CART', product:{
        product:filteredProduct[0],
        quantity: productQuantity
      }
    });    
  }

  const removeProduct = (event) => {
    const productId = event.target.id
    const userCart = cartContext.userCart    
    const filteredSelectedProducts = userCart.filter(selectedProduct => {      
      return selectedProduct.product.id !== productId
    })   
    cartContext.dispatch({
      type: 'REMOVE_FROM_CART', filteredCart:filteredSelectedProducts
    })   
  } 

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
 
  return(
    <MainWrapper>
      <DetailContainer>   
        <Img src={detail !== undefined && detail.logoUrl }  alt='Imagem do Restaurante'/>            
        <Name>{detail !== undefined && detail.name}</Name>
        <Category>{detail !== undefined && detail.category}</Category>
        <DeliveryTime>{detail !== undefined && `${detail.deliveryTime}min`}</DeliveryTime>
        <Shipping>{detail !== undefined && `Frete R$${detail.shipping.toFixed(2)}`}</Shipping>
        <Address>{detail !== undefined && detail.address}</Address>      
      </DetailContainer>
      <GenText  onClick={() => history.goBack()} salmon>Voltar</GenText>
      <GenText>{detail !== undefined && `Principal`}</GenText>
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
                id={product.id}
                addToCart={getSelectedProduct}                
                removeFromCart={removeProduct}               
              />
            )
          })
        }
      </div>
    </MainWrapper>
  ) 
};
export default RestaurantDetailPage