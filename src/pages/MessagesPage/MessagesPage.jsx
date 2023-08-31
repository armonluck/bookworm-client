import React, { useEffect, useState } from 'react';
import images from '../../components/Images/Images';
import './MessagesPage.scss';

function MessagesPage({ socket, username, room }) {

    // State variables to define current message info and the message list or array
    const [currentMessage, setCurrentMessage] = useState("");
    const [messageArray, setMessageArray] = useState([]);

    // Async fx to handle sending a message
    const sendMessage = async () => {
        if (currentMessage !== "") {
            const messageData = {
                room: room,
                username: username,
                message: currentMessage,
                time: new Date(Date.now()).toLocaleTimeString()
            };

            // Sends messageData to websocket, updates the array, and clears out the input values
            await socket.emit("send_message", messageData);
            setMessageArray((prevArray) => [...prevArray, messageData]);
            setCurrentMessage("");
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
                <p>Book Discussion In Progress</p>
            </div>

            <div className='main'>
                {messageArray?.map((messageContent) => (
                    //ternary operator to change id for styling
                    <div id={username === messageContent.author ? "self" : "other"}>
                        <div className='message__content'>
                            <p>{messageContent.message}</p>
                        </div>
                        <div className='message__meta'>
                            <p>{messageContent.time}</p>
                            <p>{messageContent.author}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='footer'>
                <input
                    type="text"
                    value={currentMessage}
                    placeholder="Message..."
                    name="message"
                    onChange={(event) => {
                        setCurrentMessage(event.target.value);
                    }}
                    // Call fx using "Enter" key or Btn click below
                    onKeyDown={(event) => {
                        event.key === "Enter" && sendMessage();
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