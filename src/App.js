import './App.css'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import React from 'react'
import Login from './components/Auth/Login'
import Register from './components/Auth/Register'
import HeaderNavBar from './components/HeaderNavBar'
import MainPage from './components/MainPage'
import Footer from './components/Footer'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
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
        </Routes>
      </Router>
    </div>
  )
}
export default App
