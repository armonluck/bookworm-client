import React, { useEffect, useState } from 'react';
import axios from 'axios';

function BrowsePage() {
    // apiKey = "key=AIzaSyDE01HuoBovDU2gw0qIgzVfoQlbN582Ys4";
    // fantasyURL = "https://www.googleapis.com/books/v1/volumes?q=fantasy+subject:romance";

    // useState variables
    const [bookData, setBookData] = useState([]);

    // GET all data and set state
    useEffect(() => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=fantasy+subject:romance")
            .then((response) => {
                setBookData(response.data);
            })
            .catch((err) => console.log(err));
    }, [])

    return (
        <div>
            <h1>Browse Books</h1>
            <ul>
                {bookData.products?.map((book) => (
                    <li>{book.volumeInfo.title}</li>
                ))}
            </ul>
            
        </div>
    )
}

export default BrowsePage;
