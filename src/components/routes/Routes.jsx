import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import AuthContainer from '../auth';
import CreateFormContainer from '../createForm';
import EditFormContainer from '../editForm';
import Home from '../home';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Home} />
      <Route path="/users/:id" component={EditFormContainer} />
      <Route path="/login" exact component={AuthContainer} />
      <Route path="/create" exact component={CreateFormContainer} />
    </BrowserRouter>
  );
}

export default Routes;