import React from 'react'
import { useItinerarioForm } from '../hooks/useItinerario'
import { Link } from 'react-router-dom'
import { FaHiking, FaUtensils } from 'react-icons/fa'

const ItineraryDetailsAdmin = () => {
  const {
    form,
    loading,
    error,
    updateField,
    updateList,
    addItemToList,
    uploadImage,
    submit,
    removeItemFromList 
  } = useItinerarioForm()
  

  return (
    <div className="admin-container">
      <Link to="/admin/itinerari" className="back-btn">
      </Link>

      <form onSubmit={submit} className="admin-form">
        <div className="form-hero">
        <Link to="/itinerari" className="back-link">
        <i className="fas fa-arrow-left"></i> Torna alla lista
      </Link>
          <label htmlFor="image-upload" className="image-upload-label">
            {form.immagini.length > 0 ? (
              <img
                src={URL.createObjectURL(form.immagini[0])}
                alt="Copertina"
                className="hero-img"
              />
            ) : (
              <div className="img-placeholder">
                <span>+ Carica immagine</span>
              </div>
            )}
            <div className="hero-content">
              <input
                type="text"
                name="titolo"
                value={form.titolo}
                onChange={updateField}
                placeholder="Titolo itinerario"
                className="title-input"
                required
              />
              <input
                type="text"
                name="città"
                value={form.città}
                onChange={updateField}
                placeholder="Città"
                className="location-input"
                required
              />
            </div>
          </label>
          <input
            id="image-upload"
            type="file"
            accept="image/*"
            onChange={uploadImage}
            className="hidden-input"
            required
          />
        </div>

        {/* Sezione Descrizione */}
        <div className="form-section">
          <h2 className="section-title">Descrizione</h2>
          <textarea
            name="descrizione"
            value={form.descrizione}
            onChange={updateField}
            placeholder="Scrivi la descrizione completa..."
            className="description-input"
            rows="6"
            required
          />
        </div>

        {/* Sezione Attività */}
        <div className="form-section">
          <h2 className="section-title">
            <FaHiking /> Cose da Fare
          </h2>
          <div className="activities-grid">
            {form.coseDaFare.map((attivita, index) => (
              <div key={index} className="activity-card">
                <div className="card-header">
                  <input
                    type="text"
                    value={attivita.titolo}
                    onChange={(e) => updateList('coseDaFare', index, 'titolo', e.target.value)}
                    placeholder="Nome attività"
                    className="activity-input"
                  />
                  {index > 0 && (
                    <button 
                      type="button" 
                      className="remove-btn"
                      onClick={() => removeItemFromList('coseDaFare', index)}
                    >
                      ×
                    </button>
                  )}
                </div>
                <textarea
                  value={attivita.descrizione}
                  onChange={(e) => updateList('coseDaFare', index, 'descrizione', e.target.value)}
                  placeholder="Descrizione attività..."
                  className="activity-desc"
                  rows="3"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItemToList('coseDaFare')}
              className="add-btn"
            >
              + Aggiungi Attività
            </button>
          </div>
        </div>

        {/* Sezione Ristoranti */}
        <div className="form-section">
          <h2 className="section-title">
            <FaUtensils /> Dove Mangiare
          </h2>
          <div className="restaurants-grid">
            {form.doveMangiare.map((ristorante, index) => (
              <div key={index} className="restaurant-card">
                <div className="card-header">
                  <input
                    type="text"
                    value={ristorante.titolo}
                    onChange={(e) => updateList('doveMangiare', index, 'titolo', e.target.value)}
                    placeholder="Nome ristorante"
                    className="restaurant-input"
                  />
                  {index > 0 && (
                    <button 
                      type="button" 
                      className="remove-btn"
                      onClick={() => removeItemFromList('doveMangiare', index)}
                    >
                      ×
                    </button>
                  )}
                </div>
                <input
                  type="text"
                  value={ristorante.indirizzo}
                  onChange={(e) => updateList('doveMangiare', index, 'indirizzo', e.target.value)}
                  placeholder="Indirizzo"
                  className="address-input"
                />
                <textarea
                  value={ristorante.descrizione}
                  onChange={(e) => updateList('doveMangiare', index, 'descrizione', e.target.value)}
                  placeholder="Descrizione..."
                  className="restaurant-desc"
                  rows="3"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={() => addItemToList('doveMangiare')}
              className="add-btn"
            >
              + Aggiungi Ristorante
            </button>
          </div>
        </div>

        {/* Pulsante Salva */}
        <div className="form-footer">
          <button
            type="submit"
            className="submit-btn"
            disabled={loading}
          >
            {loading ? 'Salvataggio in corso...' : 'Salva Itinerario'}
          </button>
        </div>
      </form>

      {error && (
        <div className="error-alert">
          {error}
          <button 
            type="button" 
            className="close-alert"
            onClick={() => this.setState({ error: null })}
          >
            ×
          </button>
        </div>
      )}
    </div>
  )
}

export default ItineraryDetailsAdmin