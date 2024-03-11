import React, { useState } from 'react';
import styles from './Login.module.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import ErrorComponent from '../error/ErrorComponent';
const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [color, setColor] = useState('');
  const navigate = useNavigate();


  const handleLogin = () => {
    console.log('Logging in with:', username, password);
    axios.post("http://localhost:8080/api/auth/login",{
      'email':username,
      'password':password,
    }).then((res) => {
      setColor("green")
      setError("succesful")
      localStorage.setItem('JWT', JSON.stringify(res.data.jwt));
      navigate("/owner")
    }).catch((error) =>{
      setError("email or password incorrect");
      setColor("red");
      
    })
  };

  return (
    <div className={styles.loginContainer}>
      {error && <ErrorComponent message={error} color={color} onClose={() => setError('')} />}
      <h2>Login</h2>
      <form className={styles.loginForm}>
        <label className={styles.label} htmlFor="username">Username</label>
        <input
          className={styles.input}
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <label className={styles.label} htmlFor="password">Password</label>
        <input
          className={styles.input}
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className={styles.buttons}>
          <button className={styles.btn} type="button" onClick={handleLogin}>
            Login
          </button>
          <button className={styles.btn} onClick={() => navigate('/sinscrire')} type="button">
            S'inscrire
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
