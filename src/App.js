import React from 'react';

import 'Global/Global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from 'Context/UserContext';
import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import Home from 'Components/Home/Home';
import Login from 'Components/Login/Login';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
