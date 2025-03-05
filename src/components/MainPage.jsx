import React from "react";
import Photo1 from "../assets/Photo1.jpeg";
import Photo2 from "../assets/Photo2.jpeg";
import Photo3 from "../assets/Photo3.jpeg";
import Photo5 from "../assets/Photo5.jpeg";
import Photo6 from "../assets/Photo6.jpeg";
import Photo7 from "../assets/Photo7.jpeg";
import SfondoPagina from "../assets/SfondoPagina.jpg";
import viaggio from "../assets/viaggio.mp4";
import Card from 'react-bootstrap/Card';

const MainPage = () => {
  return (
    <div className="container-fluid adjust p-0 m-0">
      
      {/* Seconda riga: Video */}
      <div className="col-12 mb-12 video-container">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="video"
        >
          <source src={viaggio} type="video/mp4" />
          Il tuo browser non supporta il tag video.
        </video>
        <div className="overlay"></div>
        <div className="overlay-content">
          <h1>Vuoi conoscere la tua prossima meta?</h1>
          <p className="video-paragraph"> Pianifica la tua avventura con i nostri itinerari esclusivi e consigli di viaggio! 🗺️🌟</p>
          <button className="video-button">Portami li</button>
        </div>
      </div>

      {/* Prima riga: Carousel e Card */}
      <div
        className="row d-flex justify-content-center align-items-center pt-4 px-5"
        style={{
          backgroundImage: `url(${SfondoPagina})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
        }}
      >
        {/* Prima colonna: Carousel */}
        <div className="col-6 mb-4">
          <div
            id="customCarousel"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {/* Prima Slide */}
              <div className="carousel-item active foto-slide">
                <img src={Photo1} alt="Photo1" className="photos" />
              </div>

              {/* Seconda Slide */}
              <div className="carousel-item foto-slide">
                <img src={Photo2} alt="Photo2" className="photos" />
              </div>

              {/* Terza Slide */}
              <div className="carousel-item foto-slide">
                <img src={Photo3} alt="Photo3" className="photos" />
              </div>
            </div>

            {/* Indicatori */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>

        {/* Seconda colonna: Card */}
        <div className="col-6 mb-4">
          <Card className="gradiente">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Finestra sul Mondo è il tuo portale dedicato ai viaggi, un luogo dove ogni itinerario inizia guardando il mondo da un finestrino: che tu sia su un aereo, una nave, un treno o in auto, la tua prossima avventura è a portata di clic!
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </div>

        {/* Terza colonna: Card */}
        <div className="col-6 mb-4">
          <Card className="gradiente">
            <Card.Body>
              <blockquote className="blockquote mb-0">
                <p>
                  Finestra sul Mondo è il tuo biglietto per esplorare il mondo. Dalle montagne ai mari, dai borghi incantati alle grandi metropoli, ogni viaggio è un'occasione per scoprire nuove prospettive. Parti ora, la tua prossima destinazione ti aspetta!
                </p>
              </blockquote>
            </Card.Body>
          </Card>
        </div>

        {/* Quarta colonna: Carousel */}
        <div className="col-6 mb-4 space">
          <div
            id="customCarousel2"
            className="carousel slide"
            data-bs-ride="carousel"
            data-bs-interval="5000"
          >
            <div className="carousel-inner">
              {/* Prima Slide */}
              <div className="carousel-item active foto-slide">
                <img src={Photo5} alt="Photo5" className="photos" />
              </div>

              {/* Seconda Slide */}
              <div className="carousel-item foto-slide">
                <img src={Photo6} alt="Photo6" className="photos" />
              </div>

              {/* Terza Slide */}
              <div className="carousel-item foto-slide">
                <img src={Photo7} alt="Photo7" className="photos" />
              </div>
            </div>

            {/* Indicatori */}
            <div className="carousel-indicators">
              <button
                type="button"
                data-bs-target="#customCarousel2"
                data-bs-slide-to="0"
                className="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel2"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#customCarousel2"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default MainPage;
