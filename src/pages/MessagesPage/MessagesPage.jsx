import React, { useState } from 'react';
import Messages from '../../components/Messages/Messages';
import './MessagesPage.scss';

function MessagesPage({ socket }) {

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
        <>
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
                    placeholder="Enter A Room ID..."
                    name="room"
                    onChange={(event) => {
                        setRoom(event.target.value);
                    }} />
                <br />
                <button
                    className='chat-form__btn'
                    onClick={handleJoinRoom}>Join A Room</button>
            </div>

            <Messages socket={socket} username={username} room={room} />
        </>
    )
}

export default MessagesPage;