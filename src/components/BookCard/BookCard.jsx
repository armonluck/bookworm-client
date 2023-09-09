import React from 'react';
import images from '../Images/Images';
import './BookCard.scss';

function BookCard( { bookData }) {
    console.log(bookData);

    return (
        <>

            <div className='book-card'>
                <img src={images.Bookworm} alt="Bookworm logo" />
                <div>
                    <h3></h3>
                </div>
            </div>
        </>
    )
}

export default BookCard;
