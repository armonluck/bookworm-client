import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/BookCard/BookCard';
import images from '../../components/Images/Images';

function BrowsePage() {

    // URL and secret API key to access Google Book API search results
    const apiKey = process.env.REACT_APP_API_KEY;
    const testURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const pageLimit = "&maxResults=20";

    // useState variables
    const [bookData, setBookData] = useState([]);
    const [search, setSearch] = useState("");

    // // GET all data and set state
    // useEffect(() => {
    //     axios
    //         .get("https://www.googleapis.com/books/v1/volumes?q=fantasy+subject:romance")
    //         .then((response) => {
    //             setBookData(response.data.items);
    //         })
    //         .catch((err) => console.log(err));
    // }, [])

    // searchBook function

    const searchBook = (e) => {
        if (search !== "") {
            axios
                .get(testURL + search + apiKey + pageLimit)
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
        <>
            <div className='browse__header'>
                <h1>{bookwormPhrases.phrase6}</h1>

                <div className='browse-search'>
                    <label>Browse Books</label>
                    <input
                        className='browse-search__input'
                        type="text"
                        placeholder='Search by title, author, edition...'
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        onKeyDown={(event) => {
                            event.key === "Enter" && searchBook();
                        }}
                    />
                    <button className='browse-search__btn' onClick={searchBook}>
                        <img src={images.Search} alt="Search icon SVG" />
                    </button>
                </div>
            </div>
            <div className='browse__results'>
                <BookCard bookData={bookData} />
            </div>
        </>
    )
}

export default BrowsePage;
