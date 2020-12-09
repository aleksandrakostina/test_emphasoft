import React from 'react';
import { ToastContainer } from 'react-toastify';
import './App.css';
import AuthProvider from './components/AuthProvider';
import Routes from './components/routes/Routes';
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <AuthProvider>
      <ToastContainer position="top-center" autoClose={5000} />
      <Routes />
    </AuthProvider>
  );
}

export default App;
