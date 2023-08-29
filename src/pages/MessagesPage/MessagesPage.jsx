import React from 'react';
import images from '../../components/Images/Images';
import './MessagesPage.scss';

function MessagesPage ({socket, username, room}) {

    return (
        <div>
            <div className='header'>

            </div>
            <div className='main'>

            </div>
            <div className='footer'>
                <input type="text" placeholder="Message..." name="" id="" />
                <button>&#9658;</button>
                <button>
                    <img src={images.Send} alt="" />
                </button>
            </div>
            
        </div>
    )
}

export default MessagesPage;