import React from 'react';
import LogoFinestra from '../assets/LogoFinestra.jpg';
import Photo8 from '../assets/Photo8.jpeg';

const HeaderNavBar = () => {
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
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a
                  className="nav-link"
                  href="#"
                  id="user-btn"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  <i className="fas fa-user"></i> Utente
                </a>
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
                }}
      >
        <div className="offcanvas-header text-light">
        <div className="overlay"></div>
          <h5 className='z-1' id="offcanvasRightLabel">Account</h5>
          <button
            type="button"
            className="btn-close text-reset bg-white z-1"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div className="offcanvas-body z-1">
          <p className='text-light' ><strong>Nome:</strong> Mario Rossi</p>
          <p className='text-light' ><strong>Email:</strong> mario@example.com</p>
          <button
            className="btn btn-primary"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            Chiudi
          </button>
        </div>
      </div>
    </>
  );
};

export default HeaderNavBar;