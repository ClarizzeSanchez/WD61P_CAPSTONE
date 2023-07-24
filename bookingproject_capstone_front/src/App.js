import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/HomePage';
import DateWidget from './components/DateWidget';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import BookingPage from './components/Booking/BookingPage';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <DateWidget />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/booking' element={<BookingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;