import React from 'react';
import CardProduct from './CardProduct';
import { AllProductContainer } from './styles';

const AllProduct = (props) => {
const products = props.products   
  return (
    
    <AllProductContainer>             
        {products.map((products) => {
        return <CardProduct products={products}/>
      })}            
    </AllProductContainer>
  )
};
export default AllProduct