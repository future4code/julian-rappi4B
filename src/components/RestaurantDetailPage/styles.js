import styled from "styled-components";

export const RestaurantDetailContainer = styled.div`
   text-align: center;        
`
// Estilização da descrição do restaurante

export const DetailContainer = styled.div`  
  margin:0;
  padding:0;            
`
export const Img = styled.img`
  width: 328px;
  height: 140px;
  border: 1px solid #ddd;
  border-radius: 10% 10% 0 0;  
`
export const Name = styled.p`
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;  
  letter-spacing: -0.39px;
  text-align: left;
  color: #e86e5a;
     
`
export const Category = styled.p`  
  text-align: left;
  color: #b8b8b8;      
`
export const DeliveryTime = styled.span`
  flex:1;  
  float: left;  
  text-align: left;
  color: #b8b8b8;    
`
export const Shipping = styled.span`
  flex:1;
  display:inline;
  margin-left: 35px;
  text-align: left;
  color: #b8b8b8;        
`
export const Address = styled.p` 
  color: #b8b8b8;
  text-align: left;        
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