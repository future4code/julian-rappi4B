import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import LoginPage from './components/LoginPage/index'
import ProfilePage from './components/ProfilePage/index'
import EditAddressPage from './components/EditAddressPage/index'
import EditProfilePage from './components/EditProfilePage/index'



const Routes = ()=>{
  return(
    <BrowserRouter>
      <Switch>
        <Route component={LoginPage} exact path='/'/>
        <Route component={ProfilePage} exact path='/perfil'/>
        <Route component={EditAddressPage} exact path='/editar-endereco'/>
        <Route component={EditProfilePage} exact path='/editar-perfil'/>


      </Switch>
    </BrowserRouter>
  )
};
export default Routes