import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
  return (
    <footer className="back text-dark">
      <div className="container py-4">
        <div className="row">
          {/* Colonna 1: Informazioni */}
          <div className="col-md-4 mb-4">
            <h5>Finestra sul Mondo</h5>
            <p className="text-muted">
              Il tuo portale dedicato ai viaggi. Scopri itinerari unici e
              pianifica la tua prossima avventura!
            </p>
          </div>

          {/* Colonna 2: Link utili */}
          <div className="col-md-4 mb-4">
            <h5>Link utili</h5>
            <ul className="list-unstyled ">
              <li>
                <a href="/itinerari" className="text-dark text-decoration-none">
                  Itinerari
                </a>
              </li>
              <li>
                <a href="/contatti" className="text-dark text-decoration-none">
                  Contatti
                </a>
              </li>
              <li>
                <a href="/privacy" className="text-dark text-decoration-none">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Colonna 3: Social Media */}
          <div className="col-md-4 mb-4">
            <h5 className="text-dark">Seguici</h5>
            <div className="d-flex">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3">
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark me-3">
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-dark">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center pt-3 border-top border-dark">
          <p className="text-muted mb-0">
            &copy; {new Date().getFullYear()} Finestra sul Mondo. Tutti i
            diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
