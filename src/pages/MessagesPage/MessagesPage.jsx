import React, { useEffect, useState } from 'react';
import images from '../../components/Images/Images';
import './MessagesPage.scss';

function MessagesPage({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");
    const [messageArray, setMessageArray] = useState([]);

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).toLocaleTimeString()
            };

            await socket.emit("send_message", messageData);
            setMessageArray((prevArray) => [...prevArray, messageData]);
        }
    };

    useEffect(() => {
        socket.on("receive_message", (data) => {
            setMessageArray((prevArray) => [...prevArray, data]);
        });
    }, [socket]);

    return (
        <div className='messages-container'>
            <div className='header'>

            </div>

            <div className='main'>
                {messageArray?.map((messageContent) => (
                    <h1>{messageContent.message}</h1>
                ))}
            </div>

            <div className='footer'>
                <input
                    type="text"
                    placeholder="Message..."
                    name="message"
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }} />
                <button onClick={sendMessage}>
                    Send
                    <img src={images.Send} alt="Send SVG" />
                </button>
            </div>

        </div>
    )
}

export default MessagesPage;