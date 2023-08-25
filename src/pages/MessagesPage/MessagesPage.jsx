import { io } from "socket.io-client";

function MessagesPage () {
    
    const socket = io('http://localhost:3000');
    socket.on('connect', () => {
        displayMessage(`You connected with id: ${socket.id}`);
    })

    return (
        <div>
            
        </div>
    )
}

export default MessagesPage;