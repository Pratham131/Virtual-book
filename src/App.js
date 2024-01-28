import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import SearchBar from './components/SearchBar';

const App = () => {
  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBooks = async (query) => {
      try {
        const response = await fetch(`https://www.googleapis.com/books/v1/volumes?q=${query}`);
        const data = await response.json();
        setBooks(data.items || []);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching books:', error);
        setLoading(false);
      }
    };

    // Fetch initial books
    fetchBooks('harry+potter');
  }, []);

  return (
    <Router>
      <div>
        <SearchBar onSearch={(query) => fetchBooks(query)} />
        <Switch>
          <Route path="/book/:id">
            <BookDetail />
          </Route>
          <Route path="/">
            <BookList books={books} loading={loading} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
};

export default App;
