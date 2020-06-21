export const initialState = {
    restaurantList:[]
};

//criar um case de quando o usuário entrar na pagina pela primeira vez p/ carregar tudo/ LOAD_ALL_RESTAURANTS
//e outro de quando ele continua logado, para que não carregue tudo novamente alternando entre páginas/ LOADED_RESTAURANTS_LIST
export const restaurantListReducer = (state, action) => {
    switch (action.type) {
      case 'LOAD_ALL_RESTAURANTS':
        let list = action.list;
        return {...state, restaurantList:[...state.restaurantList, list]};
  
      case 'LOADED_RESTAURANTS_LIST':
        return 
  
      default:
        return state;
    };
};