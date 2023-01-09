import { Routes, Route } from 'react-router-dom';
import MainPage from './components/mainPage/mainPage';
import AuthPage from './components/auth/authPage'
import MapPage from './components/map/mapPage';
import './App.css';
import React, {createContext} from 'react';

function App() {
  const RestaurantsContext = createContext(null);

  return (
    <React.Fragment>
      <Routes>
        <Route path='/' element={<MainPage />} />
        <Route path='/auth' element={<AuthPage />} />
        <Route path='/map' element={
            <RestaurantsContext.Provider value={""}>
                <MapPage />
            </RestaurantsContext.Provider>} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
