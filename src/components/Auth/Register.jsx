import React from 'react'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
import axios from 'axios'
import SfondoPagina from '../../assets/SfondoPagina.jpg'

const Register = () => {
  const [nome, setNome] = useState('')
  const [cognome, setCognome] = useState('')
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/Login')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    const user = {
      firstName: nome,
      lastName: cognome,
      username: username,
      email: email,
      password: password,
    }
    axios
      .post('http://localhost:8080/api/auth/register', user)
      .then((res) => {
        navigate('/Login')
      })
      .catch((err) => {
        if (err.response && err.response.data) {
          setError(
            err.response.data.message || 'Errore durante la registrazione'
          )
        } else {
          setError('Errore di connessione')
        }
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
          <h2>Registrati</h2>
          <div className="input-box">
            <input
              type="text"
              placeholder="Nome"
              required
              onChange={(e) => setNome(e.target.value)}
            />
            <i className="fa-solid fa-user icon"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Cognome"
              required
              onChange={(e) => setCognome(e.target.value)}
            />
            <i className="fa-solid fa-user icon"></i>
          </div>
          <div className="input-box">
            <input
              type="text"
              placeholder="Username"
              required
              onChange={(e) => setUsername(e.target.value)}
            />
            <i className="fa-solid fa-user icon "></i>
          </div>
          <div className="input-box">
            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />
            <i className="fa-solid fa-envelope icon"></i>
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
              <input type="checkbox" required /> Accetto i termini e le
              condizioni
            </label>
          </div>
          <button type="submit" disabled={loading}>
            {loading ? 'Registrazione in corso...' : 'Registrati'}
          </button>
          <div className="register-link">
            <p>
              Hai già un account?{' '}
              <a
                onClick={handleLoginClick}
                style={{cursor: 'pointer', color: 'orange'}}>
                Accedi
              </a>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Register
