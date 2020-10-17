import React from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import AuthProvider from './components/AuthProvider';
import Home from './components/home/Home';

function App() {
  return (
    <AuthProvider>
      <Home />
    </AuthProvider>
  );
}

export default App;
