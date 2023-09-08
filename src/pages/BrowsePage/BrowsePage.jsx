import React, { useEffect, useState } from 'react';
import axios from 'axios';
import images from '../../components/Images/Images';

function BrowsePage() {
    const apiKey = "&key=AIzaSyDE01HuoBovDU2gw0qIgzVfoQlbN582Ys4";
    const testURL = "https://www.googleapis.com/books/v1/volumes?q=";

    // useState variables
    const [bookData, setBookData] = useState([]);
    const [search, setSearch] = useState("");

    // GET all data and set state
    useEffect(() => {
        axios
            .get("https://www.googleapis.com/books/v1/volumes?q=fantasy+subject:romance")
            .then((response) => {
                setBookData(response.data.items);
            })
            .catch((err) => console.log(err));
    }, [])

    // searchBook function
    const searchBook = (e) => {
        if (e.key === "Enter") {
            axios
                .get(testURL + search + apiKey)
                .then((response) => {
                    setBookData(response.data.items);
                })
                .catch((err) => {
                    console.log(err);
                })
        }
    }

    const bookwormPhrases = {
        phrase1: "Worming Our Way Through Every Story",
        phrase2: "Reading: The Ultimate Bookworm Workout",
        phrase3: "Bookworms: Turning Pages, Not Turning Back!",
        phrase4: "In a World of Books, We're the Hungry Ones",
        phrase5: "Bookworms: Feasting on Knowledge Since Forever",
        phrase6: "Bookworms: We Know the Best Kind of Snack—Books!",
        phrase7: "Wiggling Through Words: The Bookworm Way"
    }

    return (
        < >
            <div>
                <h1>{bookwormPhrases.phrase6}</h1>
            </div>
            <div>
                <div className='browse'>
                    <label>Browse Books</label>
                    <input
                        className=''
                        type="text"
                        placeholder='Search by title, author, edition...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={searchBook}
                    />
                    <button>
                        <img src={images.Search} alt="" />
                    </button>
                </div>

                <ul>
                    {bookData.products?.map((book) => (
                        <li>{book.volumeInfo.title}</li>
                    ))}
                </ul>
            </div>
        </>
    )
}

export default BrowsePage;
