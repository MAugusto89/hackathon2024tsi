// Login.js
import React from 'react';
import { auth, provider } from '../../firebaseConfig';
import { signInWithPopup } from 'firebase/auth';
import { Link, Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import HomeScreen from '../HomeScreen';

const Login = () => {
  const navigate = useNavigate()
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log('Usuário logado:', user);
      navigate('/home');
      // Aqui você pode redirecionar ou armazenar os dados do usuário
    } catch (error) {
      console.error('Erro no login:', error);
    }
  };

  return (
    <div>
      <h2>Login com Google</h2>
      <button onClick={handleLogin}>Login com Google</button>
    </div>
  );
};

export default Login;
