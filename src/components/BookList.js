import React from 'react';
import { Link } from 'react-router-dom';

const BookList = ({ books, loading }) => {
  return (
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          {books.map((book) => (
            <div key={book.id}>
              <Link to={`/book/${book.id}`}>
                <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.volumeInfo.title} />
                <p>{book.volumeInfo.title}</p>
              </Link>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BookList;
