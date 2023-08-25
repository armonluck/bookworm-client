import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element='' />
        <Route path='/home' element='' />
        <Route path='/about' element='' />
        <Route path='/contact' element='' />
        <Route path='/login' element='' />
        <Route path='/profile' element='' />
        <Route path='/messages' element='' />
        <Route path='/browse' element='' />
      </Routes>

      <div>
        <h1>bookworm</h1>
      </div>
    </BrowserRouter>
  );
}

export default App;
