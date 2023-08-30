import React, { useState } from 'react';
import images from '../../components/Images/Images';
import './MessagesPage.scss';

function MessagesPage({ socket, username, room }) {

    const [currentMessage, setCurrentMessage] = useState("");

    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                author: username,
                message: currentMessage,
                time: new Date(Date.now()).toLocaleTimeString()
            };

            await socket.emit("send_message", messageData);
        }
    };

    return (
        <div>
            <div className='header'>

            </div>
            <div className='main'>

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