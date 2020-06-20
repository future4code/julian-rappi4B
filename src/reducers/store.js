//Global-state: 1º - criar a pasta reducers e dentro dela o store.js

//Global-state: 2º - criar o initial state
export const initialState = {
  userCart:[],
  userInfos:{},
  restaurantList:[]
};
//Global-state: 3º - criar o reducer
export const storeReducer=(state, action)=>{
  switch (action.type) {
    case 'ADD_TO_CART':
      let product = action.product;
      return {...state, userCart:[...state.userCart, product]};

    case 'SET_USER_INFOS':
      let infos = action.infos;
      return {...state, userInfos: infos};

    default:
      return state;
  };
};