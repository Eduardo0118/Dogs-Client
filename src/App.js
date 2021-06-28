import React from 'react';

import 'Global/Global.css';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from 'Context/UserContext';

import Footer from 'Components/Footer/Footer';
import Header from 'Components/Header/Header';
import Home from 'Components/Home/Home';
import Login from 'Components/Login/Login';
import User from 'Components/User/User';
import PrivateRoute from 'Components/Helper/PrivateRoute';

function App() {
  return (
    <BrowserRouter>
      <UserStorage>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login/*" element={<Login />} />
          <PrivateRoute path="/account/*" element={<User />} />
        </Routes>
        <Footer />
      </UserStorage>
    </BrowserRouter>
  );
}

export default App;
