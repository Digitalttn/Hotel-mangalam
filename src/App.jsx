// src/App.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Header from './pages/Header';
import Footer from './pages/Footer';
import Attraction from './pages/Attraction';
import RoomPagetwo from './pages/RoomPagetwo';
import ScrollToTop from './component/ScrollToTop';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import ServicesPage from './pages/ServicesPage';

import Whatspp from './pages/Whatspp';

const App = () => {
  

  return (
    <Router>
      <Helmet>
        
        <meta name="description" content="Experience luxury and comfort at Your Hotel Name. Enjoy elegant rooms, exceptional amenities, and serene surroundings. Book your stay today!" />
        <meta name="keywords" content="luxury hotel, elegant rooms, exceptional amenities, travel, comfort" />
        <meta property="og:title" content="Luxury Hotel - Hotel Mangalam" />
        <meta property="og:description" content="Experience luxury and comfort at Your Hotel Name. Enjoy elegant rooms, exceptional amenities, and serene surroundings. Book your stay today!" />
    
        
      </Helmet>
      
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/room' element={<RoomPagetwo />} />
        <Route path='/contact' element={<ContactPage />} />
        <Route path='/service' element={<ServicesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/near' element={<Attraction />} />
      </Routes>
      <Footer />
      <Whatspp />
    </Router>
  );
}

export default App;
