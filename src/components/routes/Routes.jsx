import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContainer from '../auth/AuthContainer';
import EditForm from '../editForm/EditForm';
import Home from '../home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/user/:id" component={EditForm} />
      <Route path="/login" exact component={AuthContainer} />
    </BrowserRouter>
  );
}

export default Routes;