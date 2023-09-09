import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { io } from 'socket.io-client';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

// socket variable shows url for the backend server
const socket = io.connect('http://localhost:7070');

function App() {
  return (
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/browse' element={<BrowsePage />} />
        <Route path='/messages' element={<MessagesPage socket={socket} />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element='' />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element='' />
      </Routes>

      <Footer />
    </BrowserRouter >
  );
}

export default App;
