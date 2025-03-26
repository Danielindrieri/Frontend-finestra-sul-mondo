import React, {useState} from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'
import {useAuth} from '../Protected/AuthContext'
import SfondoPagina from '../../assets/SfondoPagina.jpg'

const Login = () => {
  const [userName, setUserName] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {login} = useAuth()
  const navigate = useNavigate()

  const handleRegisterClick = () => {
    navigate('/Register')
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
  
    const user = { username: userName, password: password };
    axios
      .post('http://localhost:8080/api/auth/login', user)
      .then((res) => {
        if (res.data.token) {
          const token = res.data.token;
          localStorage.setItem('token', token);

          const decodedToken = jwtDecode(token); 
          console.log("Token decodificato:", decodedToken);
  
          
          const backendRole = decodedToken.roles[0]; 
          const cleanRole = backendRole.replace("ROLE_", "").trim().toLowerCase();
          const username = decodedToken.sub;
  
          const userData = {
            token: token,
            role: cleanRole, 
            username: username 
          };
  
          localStorage.setItem('user', JSON.stringify(userData));
          login(userData);
          navigate('/');
        } else {
          setError('Token non valido o mancante')
        }
      })
      .catch((err) => {
        setError('Credenziali non valide')
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <div
      className="container-fluid background-style2"
      style={{
        backgroundImage: `url(${SfondoPagina})`,
      }}>
      <div className="wrapper">
        <form onSubmit={handleSubmit}>
          <h2>Accedi</h2>
          {error && (
            <div className="error-message" style={{color: 'red'}}>
              {error}
            </div>
          )}
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUserName(e.target.value)}
            />
            <i className="fa-solid fa-user icon"></i>
          </div>
          <div className="input-box">
            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />
            <i className="fas fa-lock icon"></i>
          </div>
          <div className="remember-forgot">
            <label>
              <input type="checkbox" /> Ricordami
            </label>
            <a href="#">Password dimenticata?</a>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Caricamento...' : 'Accedi'}
          </button>
          <div className="register-link">
            <p>
              Non sei ancora registrato?{' '}
              <a
                onClick={handleRegisterClick}
                style={{cursor: 'pointer', color: 'orange'}}>
                Registrati
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login
