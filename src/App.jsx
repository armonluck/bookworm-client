import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import { io } from 'socket.io-client';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Login from './components/Login/Login';
import MessagesPage from './pages/MessagesPage/MessagesPage';
import './App.scss';

// socket variable shows url for the backend server
const socket = io.connect('http://localhost:7070');

function App() {

  // State variables to define username and room inputs
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  // Fx connects users who join the same room for a chat
  const handleJoinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room)
    }
  };

  return (
    <BrowserRouter>
      <Header />

      <div className='chat-form'>
        <h3 className='chat-form__subtitle'>Name</h3>
        <input
          className='chat-form__input'
          type="text"
          placeholder="Add Your Name..."
          name="username"
          onChange={(event) => {
            setUsername(event.target.value);
          }} />
        <h3 className='chat-form__subtitle'>Room</h3>
        <input
          className='chat-form__input'
          type="text"
          placeholder="Room ID..."
          name="room"
          onChange={(event) => {
            setRoom(event.target.value);
          }} />
        <br />
        <button
          className='chat-form__btn'
          onClick={handleJoinRoom}>Join A Room</button>
      </div>

      <div>
        <MessagesPage
          socket={socket}
          username={username}
          room={room}
        />
      </div>

      <Routes>
        <Route path='/' element='' />
        <Route path='/home' element='' />
        <Route path='/about' element='' />
        <Route path='/contact' element='' />
        <Route path='/login' element={<Login />} />
        <Route path='/profile' element='' />
        <Route path='/messages' element={<MessagesPage />} />
        <Route path='/browse' element='' />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
