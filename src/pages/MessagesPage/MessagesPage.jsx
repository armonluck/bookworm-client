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
            <div className='messages-header'>
                <p className='messages-header__title'>Book Discussion In Progress</p>
            </div>

            <div className='messages-main'>
                {messageArray?.map((messageContent) => (
                    //ternary operator to change id for styling
                    <div className='messages-main__container' id={username === messageContent.username ? "self" : "other"}>
                        <div className='messages-main__content'>
                            <p>{messageContent.message}</p>
                        </div>
                        <div className='messages-main__meta'>
                            <p>{messageContent.username}</p>
                            <p>{messageContent.time}</p>
                        </div>
                    </div>
                ))}
            </div>

            <div className='messages-footer'>
                <input
                    className='messages-footer__input'
                    type='text'
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
                <button className='messages-footer__btn' onClick={sendMessage}>
                    Send
                    <img className='messages-footer__svg' src={images.Send} alt="Send SVG" />
                </button>
            </div>
        </div>
    )
}

export default MessagesPage;