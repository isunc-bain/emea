import React, { useEffect, useState } from 'react';
import { config } from '../../server/routes/api/config';
import BookCard from './BookCard';

const ListingPage = () => {
  const [books, setBooks] = useState({});

  useEffect(() => {
    function fetchBooks() {
      fetch(`${config.API_URL}/api/books`)
        .then(res => res.json())
        .then(booksObj => setBooks(booksObj));
    }

    fetchBooks();
  }, []);

  return <BookCard books={books} />
};

export default ListingPage;
