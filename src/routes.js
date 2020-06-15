import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './components/LoginPage/index'

const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} exact path='/'/>
        <Route/>
        <Route/>
        <Route/>
        <Route/>
      </Switch>
    </BrowserRouter>
  )
};
export default Routes