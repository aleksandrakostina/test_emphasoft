import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContainer from '../auth';
import Home from '../home';
import AuthRoute from './AuthRoute';

const Routes = () => {
  return (
    <BrowserRouter basename="/test_emphasoft">
      <AuthRoute path="/" exact component={Home} />
      <Route path="/login" exact component={AuthContainer} />
    </BrowserRouter>   
  );
}

export default Routes;