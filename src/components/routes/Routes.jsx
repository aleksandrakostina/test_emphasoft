import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContainer from '../auth';
import CreateFormContainer from '../createForm';
import EditFormContainer from '../editForm';
import Home from '../home';
import AuthRoute from './AuthRoute';

function Routes() {
  return (
    <BrowserRouter>
      <AuthRoute path="/" exact component={Home} />
      <AuthRoute path="/users/:id" component={EditFormContainer} />
      <Route path="/login" exact component={AuthContainer} />
      <AuthRoute path="/create" exact component={CreateFormContainer} />
    </BrowserRouter>
  );
}

export default Routes;