import { useState } from "react"; 
import Image from 'next/image';
import styles from '../styles/Login.module.css';


const Login = ({ setIsLogged }) => {
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
    <div className={styles['body-login']}>
      <div className={styles['login-container']}>
        <div className={styles['form-login']}>
          <Image className={styles['logo']} src='/ELECTOBANK-logo.png' alt="logobank" width={200} height={24} priority />
          <h2 className={styles['heading']}>Iniciar sesión</h2>
          <input className={styles['input-field']} type="email" placeholder="Correo electrónico" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input className={styles['input-field']} type="password" placeholder="Contraseña" value={password} onChange={(e) => setPassword(e.target.value)} />
          <br />
          <button className={styles['btn-violeta']} onClick={handleLogin}>Iniciar sesión</button>
        </div>
      </div>
    </div>
  );
}

export default Login;