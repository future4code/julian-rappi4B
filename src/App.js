import React, {useReducer} from 'react';//Global-state: 5º- importar o useReducer

//Global-state: 6º- importar os contexts
import CartContext from './contexts/CartContext';

//Global-state: 7º- importar o reducer e o initialState
import {storeReducer, initialState} from './reducers/store'
import Routes from './routes'

import{AppWrapper} from './components/rappi4bUi/rappi4bUi'

function App() {
  //Global-state: 8º- criar o estado global utilizando o reducer
  const [state, dispatch] = useReducer(storeReducer, initialState);

  return (
    /* Global-state: 9º- envolver os componentes e as rotas com contexts */
    <CartContext.Provider value={{ userCart: state.userCart, dispatch: dispatch }}>
      <AppWrapper>
        <Routes/>
      </AppWrapper>
    </CartContext.Provider>
  );
}
export default App;
