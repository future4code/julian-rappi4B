import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import TestComponents from './components/general/TestComponents'
import styled from 'styled-components';

import LoginPage from './components/LoginPage/index'

const LostPage = styled.h1``;

const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
      <Route component={LoginPage} exact path='/'/>
      <Route component={TestComponents} exact path='/test-page'/>
      <Route  path='/'>
        <LostPage>
          Opa!
          <br/> <br/> 
          Página não encontrada.
        </LostPage>
      </Route>
      <Route/>
      <Route/>
    </Switch>
    </BrowserRouter>
  )
};
export default Routes