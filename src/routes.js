import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './components/LoginPage/index'

const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
      <Route component={LoginPage} exact path='/'/>
      <Route  path='/'>
        <h1>
          Opa!
          <br/> <br/> 
          Página não encontrada.
        </h1>
      </Route>
      <Route/>
      <Route/>
    </Switch>
    </BrowserRouter>
  )
};
export default Routes