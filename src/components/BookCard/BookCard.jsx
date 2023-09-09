import React from 'react';
import './BookCard.scss';

function BookCard({ bookData }) {
    console.log(bookData);

    return (
        <div>
            {
                bookData?.map((book) => {
                    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

                    if (thumbnail !== undefined) {
                        return (
                            <div className='bookcard' key={book.accessInfo.id}>
                                <img className='bookcard__img' src={thumbnail} alt="Book cover thumbnail" />
                                <div className='bookcard-data'>
                                    <h3 className='bookcard-data__title'>{book.volumeInfo.title}</h3>
                                    <p className='bookcard-data__author'>{book.volumeInfo.authors}</p>
                                </div>
                            </div>
                        )
                    }
                })}
        </div>
    )
}

export default BookCard;
