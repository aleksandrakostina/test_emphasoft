import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import AuthContainer from './components/auth/AuthContainer';
import AuthProvider from './components/AuthProvider';
import Home from './components/home/Home';

function App(props) {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Route path="/" exact component={Home} />
        <Route path="/login" exact component={AuthContainer} />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
