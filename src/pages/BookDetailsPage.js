import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import "../styles/bookdetails.css";

function BookDetailsPage({ match }) {
     const { id } = useParams();
     const [book, setBook] = useState({});
     const [addToCartMessage, setAddToCartMessage] = useState('');

    useEffect(() => {
      // Fetch books from backend API
      fetch('http://localhost:8080/inventory/' + id)
      .then(response => {
          return response.json();
      })
      .then(data => {
          console.log(data);
          setBook(data)
      })
      .catch(error => {
          console.error('Error fetching books:', error);
      });
    }, []);


  const handleAddToCart = () => {
    fetch('http://localhost:8080/bookstore/1', {
      method: 'POST', // Assuming adding to cart is a POST request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "bookId": id
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }
      console.log('Book added to cart successfully');
      setAddToCartMessage('Book added to cart successfully.');
      // Handle success as needed
    })
    .catch(error => {
      console.error('Error adding book to cart:', error);
      // Handle error as needed
    });
  };

  return (
    <div className="book-details">
      <div>
        <img src={book.coverUrl} alt={book.title} className="book-cover" />
      </div>
      <div className="book-info">
        <h2>{book.title}</h2>
        <p>id: {book.id} </p>
        <p>Author: {book.author}</p>
        <p>Price: ${book.price}</p>
        <p>inventory: {book.stock}</p>
        
        {book.stock > 0 && <button onClick={handleAddToCart}>Add to Cart</button> }
        {addToCartMessage && <p>{addToCartMessage}</p>}
      </div>
    </div>
  );
}

export default BookDetailsPage;