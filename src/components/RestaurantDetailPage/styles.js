import styled from "styled-components";

export const RestaurantDetailContainer = styled.div`
   text-align: center;        
`
// Estilização da descrição do restaurante

export const DetailContainer = styled.div`  
  margin:16px;
  padding:0;
  height: 246px;
  width: 328px;
  display: flex;
  flex-direction: column;
  
`
export const Img = styled.img`
  width: 100%;
  max-height: 120px;
  border: 1px solid #ddd;
  border-radius: 10px 10px 0 0;  
`
export const DeliveryInfos = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 208px;
  height: auto;
`;

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