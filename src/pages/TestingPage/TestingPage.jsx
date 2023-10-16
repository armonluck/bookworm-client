import React, { useState } from 'react';
import axios from 'axios';
import {
    Box,
    Card,
    CardBody,
    CardFooter,
    Image,
    Stack,
    Heading,
    Text,
    Button
} from '@chakra-ui/react';
import images from '../../components/Images/Images';

function TestingPage() {

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
        phrase2: "Reading: The Ultimate Bookish Workout",
        phrase3: "Bookworms: Turning Pages, Not Turning Back!",
        phrase4: "In a World of Books, We're the Hungry Ones",
        phrase5: "Bookworms: Feasting on Knowledge Since Forever",
        phrase6: "Bookworms: We Know the Best Kind of Snack—Books!",
        phrase7: "Wiggling Through Words: The Bookworm Way"
    }

    return (
        <Box>
            <div className='browse'>
                <h1 className='browse__title'>{bookwormPhrases.phrase2}</h1>

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

            {
                bookData?.map((book) => {
                    const thumbnail = book.volumeInfo.imageLinks && book.volumeInfo.imageLinks.smallThumbnail;

                    if (thumbnail !== undefined) {
                        return (
                            <Card
                            direction={{ base: 'column', sm: 'row' }}
                            overflow='hidden'
                            variant='outline'
                            key={book.accessInfo.id}
                        >
                            <Image
                                objectFit='cover'
                                maxW={{ base: '100%', sm: '200px' }}
                                src={thumbnail}
                                alt='Book cover thumbnail'
                            />
            
                            <Stack>
                                <CardBody>
                                    <Heading size='md'>
                                        {book.volumeInfo.title}
                                    </Heading>
            
                                    <Text py='2'>
                                        {book.volumeInfo.description}
                                    </Text>
                                </CardBody>
            
                                <CardFooter>
                                    <Button variant='solid' colorScheme='blue'>
                                        Buy Book
                                    </Button>
                                </CardFooter>
                            </Stack>
                        </Card>
                        )
                    }
                })
            }
        </Box>
    )
}

export default TestingPage;
