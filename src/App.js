import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar/NavBar';
import { GlobalProvider } from './context/GlobalState'
import Shoes from './Components/Shoes/Shoes';


function App() {
  return (
    <BrowserRouter>
      <GlobalProvider>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Shoes cat="" />} />
            <Route path="/shoes" element={<Shoes cat='shoes' /> } />
            <Route path="/sandals" element={<Shoes cat='sandals' /> } />
            <Route path="/kids" element={<Shoes cat='kids' /> } />
          </Routes>
        </div>
      </GlobalProvider>
    </BrowserRouter>
  );
}

export default App;
