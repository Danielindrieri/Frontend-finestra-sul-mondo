import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import ProtectedRoute from './components/Protected/ProtectedRoute'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import HeaderNavBar from './components/Home/HeaderNavBar'
import MainPage from './components/Home/MainPage'
import Footer from './components/Home/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import ItineraryList from './components/Itinerary/ItineraryList'
import ItineraryDetails from './components/Itinerary/ItineraryDetails'
import ItineraryDetailsAdmin from './components/Itinerary/ItineraryDetailsAdmin'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Route senza header/footer */}
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Route con header/footer */}
          <Route
            path="/"
            element={
              <>
                <HeaderNavBar />
                <MainPage />
                <Footer />
              </>
            }
          />

          <Route
            path="/itinerari"
            element={
              <>
                <HeaderNavBar />
                <ItineraryList />
                <Footer />
              </>
            }
          />

          <Route
            path="/itinerari/:id"
            element={
              <>
                <HeaderNavBar />
                <ItineraryDetails />
                <Footer />
              </>
            }
          />

          <Route
            path="/admin/itinerari"
            element={
              <ProtectedRoute role="admin">
                <HeaderNavBar />
                <ItineraryDetailsAdmin />
              </ProtectedRoute>
            }
          />
        </Routes>
      </Router>
    </div>
  )
}

export default App
