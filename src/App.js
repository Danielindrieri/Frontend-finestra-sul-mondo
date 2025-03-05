import './App.css';
import React from 'react';
import HeaderNavBar from './components/HeaderNavBar';
import MainPage from './components/MainPage';
import Footer from './components/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; 






function App() {
  return (
    <div className="App">
      <HeaderNavBar/>
      <MainPage/>
      <Footer/>
    </div>
  );
}

export default App;
