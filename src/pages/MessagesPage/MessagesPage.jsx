import React, { useState } from 'react';
import { io } from 'socket.io-client';
import Messages from '../../components/Messages/Messages';
import './MessagesPage.scss';

// socket variable shows url for the backend server
const socket = io.connect('http://localhost:7070');

function MessagesPage() {

    // State variables to define username and room inputs
    const [username, setUsername] = useState("");
    const [room, setRoom] = useState("");

    // Fx connects users who join the same room for a chat
    const handleJoinRoom = () => {
        if (username !== "" && room !== "") {
            socket.emit("join_room", room)
        }
    };

    // // State variables to define current message info and the message list or array
    // const [currentMessage, setCurrentMessage] = useState("");
    // const [messageArray, setMessageArray] = useState([]);

    // // Async function to handle sending a message
    // const sendMessage = async () => {
    //     if (currentMessage !== "") {
    //         const messageData = {
    //             room: room,
    //             username: username,
    //             message: currentMessage,
    //             time: new Date(Date.now()).toLocaleTimeString()
    //         };

    //         // Sends messageData to websocket, updates the array, and clears out the input values
    //         await socket.emit("send_message", messageData);
    //         setMessageArray((prevArray) => [...prevArray, messageData]);
    //         setCurrentMessage("");
    //     }
    // };

    // useEffect(() => {
    //     socket.on("receive_message", (data) => {
    //         setMessageArray((prevArray) => [...prevArray, data]);
    //     });
    // }, [socket]);

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

            <Messages socket={socket} username={username} room={room} />
        </>
    )
}

export default MessagesPage;