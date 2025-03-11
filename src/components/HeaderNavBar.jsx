import React from 'react'
import {useNavigate} from 'react-router-dom'
import LogoFinestra from '../assets/LogoFinestra.jpg'
import Photo8 from '../assets/Photo8.jpeg'

const HeaderNavBar = () => {
  const navigate = useNavigate()

  const handleLoginClick = () => {
    navigate('/login')
  }

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg" id="Navbar">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" id="contain-logo">
            <p id="Finestra">Finestra sul</p>
            <img id="logo" src={LogoFinestra} alt="logoPage" />
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
                <button
                  className="btn nav-link"
                  id="user-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight">
                  <i className="fas fa-user"></i> Utente
                </button>
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
          backgroundImage: `url(${Photo8})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}>
        <div className="offcanvas-header ">
          <button
            className="sider"
            onClick={handleLoginClick}
            data-bs-dismiss="offcanvas"
            aria-label="Close">
            <h5>Utente</h5>
          </button>
          <button
            type="button"
            className="btn-close text-reset bg-white"
            data-bs-dismiss="offcanvas"
            aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <p className="text-light">
            <strong>Nome:</strong> Mario Rossi
          </p>
          <p className="text-light">
            <strong>Email:</strong> mario@example.com
          </p>
        </div>
      </div>
    </>
  )
}

export default HeaderNavBar
