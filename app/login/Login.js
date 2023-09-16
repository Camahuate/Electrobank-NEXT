import React from "react"
import { useState } from "react";
import Electrobank from '../main/images/ELECTOBANK-logo.png'
import '../main/styles/Login.css'

const Login = ({setIsLogged}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
  
    const handleLogin = () => {
      if (email === 'usuario@example.com' && password === 'password') {
        setIsLogged(true);
      } else {
        alert('Credenciales incorrectas');
      }
    };
  
    const handleLogout = () => {
      setIsLogged(false);
      setEmail('');
      setPassword('');
    };

    return (
        <div className='body-login'>
              <div className='login-container'>
                <div className='form-login'>
                <img className="logo" src={Electrobank} alt="logobank" />
                <h2>Iniciar sesión</h2>
                <input
                  type="email"
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  type="password"
                  placeholder="Contraseña"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <br/>
                <button className='btn-violeta' onClick={handleLogin}>Iniciar sesión</button>
                </div>
              </div>
        </div>
    )
}

export default Login;