import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const ItineraryList = () => {
  const [itineraries, setItineraries] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:8080/api/itinerari');
        
        if (!response.ok) throw new Error('Errore nel caricamento degli itinerari');
        
        const data = await response.json();
        
        if (!Array.isArray(data)) throw new Error('Formato dati non valido');

        setItineraries(data);

      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredItineraries = itineraries.filter(item =>
    item.titolo?.toLowerCase()?.includes(search.toLowerCase())
  );

  if (loading) return <div className="loading">Caricamento...</div>;
  if (error) return <div className="error">Errore: {error}</div>;

  return (
    <div className="itinerary-list-container">
      <h1 className="itinerary-list-title">Esplora gli Itinerari</h1>
      
      <div className="itinerary-search-box">
        <input
          type="text"
          placeholder="Cerca itinerario..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="itinerary-search-input"
        />
      </div>

      <div className="itinerary-card-container">
      {filteredItineraries
    .filter(itinerary => itinerary.id !== undefined)
    .map((itinerary) => (
      <Link 
        to={`/itinerari/${itinerary.id}`} 
        key={itinerary.id} 
        className="itinerary-card-link"
      >
            <div className="itinerary-card">
              <div className="card-image-wrapper">
                {itinerary.immagini?.length > 0 && (
                  <img 
                    src={itinerary.immagini[0]} 
                    alt={itinerary.titolo} 
                    className="card-main-image"
                  />
                )}
              </div>
              <div className="card-info-section">
                <h3 className="card-title">{itinerary.titolo}</h3>
                <p className="card-location">
                  <i className="fas fa-map-marker-alt"></i> {itinerary.città}
                </p>
                <div className="card-stats-container">
                  <span className="activity-stat">
                    <i className="fas fa-hiking"></i> {itinerary.coseDaFare?.length} attività
                  </span>
                  <span className="restaurant-stat">
                    <i className="fas fa-utensils"></i> {itinerary.doveMangiare?.length} ristoranti
                  </span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ItineraryList;