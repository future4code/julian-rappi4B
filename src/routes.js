import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import LoginPage from './components/LoginPage';
import SignUpPage from './components/SignUpPage';
import AddreesRegisterPage from './components/AddreesRegisterPage';

const Routes = () => {
  return(
       
        <BrowserRouter>
      <Switch>
        <Route component={LoginPage} exact path='/'/>
        <Route component={SignUpPage} exact path='/cadastrar'/>
        <Route component={AddreesRegisterPage} exact path ='/cadastro-endereco'/>
      </Switch>
    </BrowserRouter>
    
  )
};
export default Routes