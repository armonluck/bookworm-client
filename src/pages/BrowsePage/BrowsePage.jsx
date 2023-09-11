import React, { useState } from 'react';
import axios from 'axios';
import BookCard from '../../components/BookCard/BookCard';
import images from '../../components/Images/Images';
import './BrowsePage.scss';

function BrowsePage() {

    // URL and secret API key to access Google Book API search results
    const apiKey = process.env.REACT_APP_API_KEY;
    const testURL = "https://www.googleapis.com/books/v1/volumes?q=";
    const pageLimit = "&maxResults=21";

    // useState variables
    const [bookData, setBookData] = useState([]);
    const [search, setSearch] = useState("");


    // searchBook function
    // controls what bookData is pulled from Google API
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
            <div className='browse'>
                <h1 className='browse__title'>{bookwormPhrases.phrase7}</h1>

                <div className='browse-search'>
                    <label className='browse-search__label'>Browse Books</label>
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
                        <img className='browse-search__svg' src={images.Search} alt="Search icon SVG" />
                    </button>
                </div>
            </div>

            <div className='browse-results'>
                <BookCard bookData={bookData} />
            </div>
        </>
    )
}

export default BrowsePage;
