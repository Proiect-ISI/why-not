import { Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import Map from './components/map/map';
import './App.css';
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/map' element={<Map />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
