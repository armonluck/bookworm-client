import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <div>
        <h1>bookworm</h1>
      </div>

      <Routes>
        <Route path='/' element='' />
        <Route path='/home' element='' />
        <Route path='/about' element='' />
        <Route path='/contact' element='' />
        <Route path='/login' element={ <Login />} />
        <Route path='/profile' element='' />
        <Route path='/messages' element='' />
        <Route path='/browse' element='' />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
