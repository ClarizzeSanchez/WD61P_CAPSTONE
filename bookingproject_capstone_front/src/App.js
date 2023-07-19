import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/Home/HomePage';
import DateWidget from './components/DateWidget';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Home/>
        <DateWidget />
        <Routes>
          <Route path='/' exact component={Home} />
        </Routes>
      </Router>
    </>
  );
}

export default App;