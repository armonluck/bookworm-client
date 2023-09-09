import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import BrowsePage from './pages/BrowsePage/BrowsePage';
import AboutPage from './pages/AboutPage/AboutPage';
import HomePage from './pages/HomePage/HomePage';
import './App.scss';

function App() {

  return (
    <BrowserRouter>
      <Header />
      <div>
        <h1>hi</h1>
      </div>

      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/home' element={<HomePage />} />
        <Route path='/browse' element={<BrowsePage />} />
        <Route path='/messages' element={<MessagesPage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element='' />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element='' />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
