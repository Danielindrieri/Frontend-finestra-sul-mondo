import { useState } from 'react';
import { jwtDecode } from 'jwt-decode';

export const useItinerarioForm = () => {
  const [form, setForm] = useState({
    titolo: '',
    descrizione: '',
    città: '',
    immagini: [],
    coseDaFare: [{ titolo: '', descrizione: '' }],
    doveMangiare: [{ titolo: '', indirizzo: '', descrizione: '' }],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Funzioni per gestire l'aggiornamento dei campi
  const updateField = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Aggiorna elementi delle liste
  const updateList = (list, index, field, value) => {
    setForm((prev) => ({
      ...prev,
      [list]: prev[list].map((item, i) =>
        i === index ? { ...item, [field]: value } : item
      ),
    }));
  };

  // Aggiungi nuovo elemento alle liste
  const addItemToList = (list) => {
    setForm((prev) => ({
      ...prev,
      [list]: [
        ...prev[list],
        list === 'coseDaFare'
          ? { titolo: '', descrizione: '' }
          : { titolo: '', indirizzo: '', descrizione: '' },
      ],
    }));
  };

  const removeItemFromList = (listName, indexToRemove) => {
    setForm(prev => ({
      ...prev,
      [listName]: prev[listName].filter((_, i) => i !== indexToRemove)
    }));
  };

  

  // Gestione upload immagini
  const uploadImage = (e) => {
    setForm((prev) => ({ ...prev, immagini: [...e.target.files] }));
  };

  // Reset form
  const reset = () => {
    setForm({
      titolo: '',
      descrizione: '',
      città: '',
      immagini: [],
      coseDaFare: [{ titolo: '', descrizione: '' }],
      doveMangiare: [{ titolo: '', indirizzo: '', descrizione: '' }],
    });
    setError(null);
  };

  // Submit del form
  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Verifica presenza token
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('Token mancante. Effettua il login.');
      }
      

      // Verifica validità token
      const decodedToken = jwtDecode(token);
      const currentTime = Math.floor(Date.now() / 1000);
      if (decodedToken.exp < currentTime) {
        localStorage.removeItem('token');
        throw new Error('Token scaduto. Effettua di nuovo il login.');
      }

      // Validazione campi
      if (!form.titolo || !form.descrizione || !form.città) {
        throw new Error('Compila tutti i campi principali');
      }

      if (form.immagini.length === 0) {
        throw new Error("Seleziona almeno un'immagine");
      }

      if (form.coseDaFare.some(a => !a.titolo || !a.descrizione)) {
        throw new Error("Compila tutti i campi delle attività");
      }

      if (form.doveMangiare.some(r => !r.titolo || !r.indirizzo || !r.descrizione)) {
        throw new Error("Compila tutti i campi dei ristoranti");
      }


      const formData = new FormData();
      
      const itinerarioData = {
        titolo: form.titolo,
        descrizione: form.descrizione,
        città: form.città,
        coseDaFare: form.coseDaFare,
        doveMangiare: form.doveMangiare
      };

      formData.append('itinerario', new Blob([JSON.stringify(itinerarioData)], {
        type: 'application/json'
      }));

      // Aggiungi immagini
      form.immagini.forEach((file, index) => {
        formData.append(`immagini`, file, `image-${index}`);
      });

      // Invio richiesta
      const response = await fetch('http://localhost:8080/api/admin/itinerari', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        },
        body: formData
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Errore durante il salvataggio');
      }

      // Reset form dopo successo
      reset();
      return true;

    } catch (error) {
      console.error('Errore:', error);
      setError(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    form,
    loading,
    error,
    updateField,
    updateList,
    addItemToList,
    removeItemFromList,
    uploadImage,
    submit,
    reset,

  };
};