//Global-state: 1º - criar a pasta reducers e dentro dela o store.js

//Global-state: 2º - criar o initial state
export const initialState = {
  userCart:{cart:[], cartSum:0},
  userInfos:{},
  restaurantsList: []
};
//Global-state: 3º - criar o reducer
export const storeReducer=(state, action)=>{
  switch (action.type) {
    case 'ADD_TO_CART':
      let product = action.product;
      return {
        ...state, userCart:{
          ...state.userCart, cart: 
          [...state.userCart.cart, product]
      }};

    case 'REMOVE_FROM_CART':
      let filteredCart = action.filteredCart;
      return {
        ...state, userCart:{
          ...state.userCart, cart: filteredCart
      }};

    case 'GET_CART_SUM':
      /* state.userCart.forEach(productObject => {
        state.cartSum += productObject.quantity * productObject.product.price
        console.log(state.cartSum)
      });  
      console.log('teste') */
      return state

    case 'SET_USER_INFOS':
      let infos = action.infos;
      return {...state, userInfos: infos};

    case 'SET_RESTAURANTS_LIST':
      let restaurantsList = action.restaurantsList;
      return {...state, restaurantsList: restaurantsList};

    default:
      return state;
  };
};