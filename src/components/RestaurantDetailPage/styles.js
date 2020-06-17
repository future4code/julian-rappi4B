import styled from "styled-components";

export const RestaurantDetailContainer = styled.div`
   text-align: center;        
`
// Estilização da descrição do restaurante

export const DescriptionCardContainer = styled.div`  
  display: flex;
  flex-wrap: wrap;            
`
export const ImgCardDetail = styled.img`
   flex: 100%;
   width: 100vw;
  border: 1px solid #ddd;
  border-radius: 10% 10% 0 0;  
`
export const Name = styled.h4`
  flex:100vw;
  text-align: left;
  color: red;
  font-size: 1.3rem;      
`
export const Category = styled.p`
  flex:100vw;
  text-align: left;
  color: #746d65;      
`
export const DeliveryTime = styled.span`
  flex:1;  
  float: left;  
  text-align: left;
  color: #746d65;    
`
export const Shipping = styled.span`
  flex:1;
  display:inline;
  text-align: left;
  color: #746d65;         
`
export const Address = styled.p`
  flex:100vw; 
  color: #746d65;
  text-align: left;         
`

export const AllProductContainer = styled.div`  
 
`

// Estilização do Card de Produtos

export const CardProductContainer = styled.div` 
border: 1px solid black; 
  border-radius:5%; 
  display:flex;  
  text-align: center;
  color:black;
  width: 100%;  
  margin: auto;
`
export const ImgCard = styled.img`
   width: 30vw;
   height: 25vh;
   border-radius: 10% 0 0 10%; 
   `   

export const DivImgPro = styled.span`
   float: left;
   width: 30vw;
   height: 25vh;     
`

export const DivTexPro = styled.span`
   
   float: left;
   p {
      color: #746d65;    
   }  
`

export const H4 = styled.h4`
   color: red;
`
export const SpanButton = styled.span`
   margin-top: 25vh;   
   button {
      padding: 2%;
      
   }
`

// Estilização do component Select

export const SelectContainer = styled.div`  
 
`