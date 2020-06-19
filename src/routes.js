import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import LoginPage from './components/LoginPage/index';
import SignUpPage from './components/SignUpPage/index';
import AddreesRegisterPage from './components/AddreesRegisterPage/index';

import HomePage from './components/HomePage/index';
import CartPage from './components/CartPage'

import RestaurantDetailPage from './components/RestaurantDetailPage/index';

import ProfilePage from './components/ProfilePage/index';
import EditAddressPage from './components/EditAddressPage/index';
import EditProfilePage from './components/EditProfilePage/index';

const Routes = ()=>{
  return(
     <BrowserRouter>
      <Switch>   
        <Route component={LoginPage} exact path='/'/>
        <Route component={SignUpPage} exact path='/cadastrar'/>
        <Route component={AddreesRegisterPage} exact path ='/cadastro-endereco'/>
        <Route component={HomePage} exact path='/home' />
        <Route component={CartPage} exact path='/cart' />
        <Route component={RestaurantDetailPage} exact path='/restaurant-detail/:restaurantId'/>
        <Route component={ProfilePage} exact path='/perfil'/>
        <Route component={EditAddressPage} exact path='/editar-endereco'/>
        <Route component={EditProfilePage} exact path='/editar-perfil'/>
        <Route  path='/'>
        <h1>
          Opa!
          <br/> <br/> 
          Página não encontrada.
        </h1>
      </Route>
      </Switch>
    </BrowserRouter> 
  )
};
export default Routes