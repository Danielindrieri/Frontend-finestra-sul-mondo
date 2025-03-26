import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

const ItineraryDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [itinerary, setItinerary] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validateId = (id) => {
      return /^\d+$/.test(id);
    };
  
    if (!validateId(id)) {
      setError('ID non valido');
      setLoading(false);
      navigate('/itinerari');
      return;
    }

    const fetchItinerary = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/itinerari/${id}`);
        
        if (response.status === 404) {
          throw new Error('Itinerario non trovato');
        }
        
        if (!response.ok) {
          throw new Error('Errore nel caricamento');
        }

        const data = await response.json();
        
        if (!data?.titolo || !data?.città) {
          throw new Error('Dati corrotti');
        }

        setItinerary(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchItinerary();
  }, [id, navigate]);

  if (loading) return <div className="loader">Caricamento...</div>;
  if (error) return <div className="error-message">Errore: {error}</div>;

  return (
    <div className="itinerary-detail-container">
      <Link to="/itinerari" className="back-link">
        <i className="fas fa-arrow-left"></i> Torna alla lista
      </Link>
      
      <div className="detail-hero">
  <div 
    className="hero-background" 
    style={{ backgroundImage: `url(${itinerary?.immagini?.[0]})` }}
  >
    <div className="hero-overlay">
      <h1 className="detail-title">{itinerary?.titolo}</h1>
      <p className="detail-location">
        <i className="fas fa-map-marker-alt"></i> {itinerary?.città}
      </p>
    </div>
  </div>
</div>

      <div className="detail-content-section">
        <h2 className="detail-section-title">Descrizione</h2>
        <p className="detail-description">{itinerary?.descrizione}</p>
      </div>

      <div className="detail-content-section">
        <h2 className="detail-section-title">
          <i className="fas fa-hiking"></i> Cose da Fare
        </h2>
        <div className="activity-grid">
          {itinerary?.coseDaFare?.map((activity, index) => (
            <div key={index} className="activity-card">
              <h3 className="activity-title">{activity?.titolo}</h3>
              <p className="activity-description">{activity?.descrizione}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="detail-content-section">
        <h2 className="detail-section-title">
          <i className="fas fa-utensils"></i> Dove Mangiare
        </h2>
        <div className="restaurant-grid">
          {itinerary?.doveMangiare?.map((restaurant, index) => (
            <div key={index} className="restaurant-card">
              <h3 className="restaurant-title">{restaurant?.titolo}</h3>
              <p className="restaurant-address">{restaurant?.indirizzo}</p>
              <p className="restaurant-cuisine">{restaurant?.descrizione}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ItineraryDetails;