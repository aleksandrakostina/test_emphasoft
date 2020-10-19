import React from 'react';
import './App.css';
import AuthProvider from './components/AuthProvider';
import Routes from './components/routes/Routes';

const App = () => {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
