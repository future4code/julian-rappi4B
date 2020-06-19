// import React from 'react';
// import { ImgCard, CardProductContainer, DivImgPro, DivTexPro, H4, SpanButton } from './styles';

// const CardProduct = (props) => {  
//   const option = [0 ,1, 2, 3, 4, 5, 6, 7, 8, 9, 10]  
//   const products = props.products    
        
//   return (   
   
//     <CardProductContainer>  
//       <DivImgPro>
//         <ImgCard src={products !== undefined && products.photoUrl} alt='Imagem do Produto'/>
//       </DivImgPro>
//       <DivTexPro>           
//         <H4>{products !== undefined && products.name}</H4>            
//         <p>{products !== undefined && products.description}</p>
//         <h4> R${products !== undefined && products.price.toFixed(2)}</h4>
//       </DivTexPro>        
//       <SpanButton>
//         <form id={products !== undefined && products.id} onSubmit={props.getProductId}>  
//           <select onChange={props.getQuantity}>
//             {option.map((option) => {
//               return <option>{option}</option>
//             })}  
//           </select>
//           <button>Adicionar ao Carrinho</button>
//         </form> 
//       </SpanButton>
//     </CardProductContainer>    
//   )
// };
// export default CardProduct