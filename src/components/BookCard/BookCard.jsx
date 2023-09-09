import React from 'react';
import images from '../Images/Images';
import './BookCard.scss';

function BookCard({ bookData }) {
    console.log(bookData);

    return (
        <>
            {
                bookData?.map((book) => {
                    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

                    if(thumbnail !== undefined) {
                        return (
                            <div className='book-card' key={book.accessInfo.id}>
                                <img src={thumbnail} alt="Bookworm logo" />
                                <div>
                                    <h3>{book.volumeInfo.title}</h3>
                                    <p>{book.volumeInfo.authors}</p>
                                    <p>&#8377; 1000</p>
                                </div>
                            </div>
                        )
                    }
                })}

        </>
    )
}

export default BookCard;
