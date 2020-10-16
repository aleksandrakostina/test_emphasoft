import React from 'react';
import './App.css';
import Auth from './components/auth/Auth';
import AuthProvider from './components/AuthProvider';

function App() {
  return (
    <AuthProvider>
      <Auth />
    </AuthProvider>
  );
}

export default App;
