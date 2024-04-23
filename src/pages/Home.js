import React from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import SearchBar from '../components/searchbar';
import "../styles/home.css";

function Home() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        // Fetch books from backend API
        fetch('http://localhost:8080/inventory')
        .then(response => {
            return response.json();
        })
        .then(data => {
            console.log(data["content"][0]);
            setBooks(data["content"]);
        })
        .catch(error => {
            console.error('Error fetching books:', error);
        });
    }, []);

    const handleSearch = (filters) => {
      let url = 'http://localhost:8080/inventory';
      const queryParams = [];
  
      // Construct query parameters based on the provided filters
      if (filters.page !== '') {
        queryParams.push(`page=${filters.page}`);
      }
      if (filters.size !== '') {
        queryParams.push(`size=${filters.size}`);
      }
      if (filters.author !== '') {
        queryParams.push(`author=${encodeURIComponent(filters.author)}`);
      }
      if (filters.title !== '') {
        queryParams.push(`title=${encodeURIComponent(filters.title)}`);
      }
  
      if (queryParams.length > 0) {
        url += '?' + queryParams.join('&');
      }
  
      // Fetch books from backend API
      fetch(url)
        .then(response => response.json())
        .then(data => {
          setBooks(data.content);
        })
        .catch(error => {
          console.error('Error fetching books:', error);
        });
    };
  

    return (
        <div>
        <h1>Welcome to Our Bookstore</h1>
        <p>Explore our collection of books:</p>
        <SearchBar onSearch={handleSearch}/>
        <div className="book-list">
        {books.map(book => (
          <div className="book-card" key={book.id}>
            <Link to={`/book/${book.id}`} className="book-link">
              {/* <img src={book.coverUrl} alt={book.title} className="book-cover" /> */}
              <h3 className="book-title">{book.title}</h3>
              <p className="book-author">Author: {book.author}</p>
              <p className="book-price">${book.price}</p>
              <p className="book-stock">inventory: {book.stock}</p>
            </Link>
          </div>
        ))}
        </div>
        </div>
    );
}

export default Home;