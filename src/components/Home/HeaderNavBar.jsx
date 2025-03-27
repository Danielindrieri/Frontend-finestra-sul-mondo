import React, { useEffect, useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'
import LogoFinestra from '../../assets/LogoFinestra.jpg'
import SfondoList from '../../assets/SfondoList.jpg'

const HeaderNavBar = () => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()

  useEffect(() => {
    const checkUserLogin = () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const decoded = jwtDecode(token)
          console.log('Decoded token:', decoded)
          setUser({
            firstName: decoded.firstName,
            lastName: decoded.lastName
          })
        } catch (error) {
          console.error('Error decoding token:', error)
        }
      }
    }
    checkUserLogin()
  }, [])

  const handleLoginClick = () => {
    navigate('/login')
  }

  const handleLogout = () => {
    localStorage.removeItem('token')
    setUser(null)
    document.querySelector('.btn-close').click()
    navigate('/')
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="Navbar">
        <div className="container-fluid">
          <a className="navbar-brand" id="contain-logo">
            <p id="Finestra">Finestra sul</p>
            <img id="logo" src={LogoFinestra} alt="logoPage"  onClick={() => navigate('/')}/>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                {user ? (
                  <button
                    className="btn nav-link"
                    id="user-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    {user.firstName} {user.lastName}
                  </button>
                ) : (
                  <button
                    className="btn nav-link"
                    id="user-btn"
                    data-bs-toggle="offcanvas"
                    data-bs-target="#offcanvasRight"
                    aria-controls="offcanvasRight">
                    <i className="fas fa-user"></i> Utente
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Sidebar */}
      <div
        className="offcanvas offcanvas-end"
        tabIndex="-1"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
        style={{
          backgroundImage: `url(${SfondoList})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
        <div className="offcanvas-header">
          {user ? (
            <div className="w-100 d-flex justify-content-between align-items-center">
              <div>
                <h5 className="text-white mb-0">Benvenuto!</h5>
                <p className="text-white mb-0 pt-1">
                  <strong>{user.firstName} {user.lastName}</strong>
                </p>
              </div>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close">
              </button>
            </div>
          ) : (
            <button
            className="sider"
            onClick={handleLoginClick}
            data-bs-dismiss="offcanvas"
            aria-label="Close">
            <h5>Accedi</h5>
          </button>
          )}
        </div>
        <div className="offcanvas-body">
          {user && (
            <div className="d-grid gap-2">
              <button 
                className="btn btn-danger"
                onClick={handleLogout}
              >
                <i className="fas fa-sign-out-alt me-1"></i>
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default HeaderNavBar