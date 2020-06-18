import React from 'react';
import {GenNavBar, MainWrapper} from '../general/rappi4bUi'

import{useHistory} from 'react-router-dom'
const LoginPage =()=>{
  const h = useHistory()
  return (
    <MainWrapper>
      <h1>Login</h1>

      <GenNavBar
      />
    </MainWrapper>
  )
};
export default LoginPage