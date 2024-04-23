import React, { useState, useEffect } from 'react';
import { useNavigate  } from 'react-router-dom';

function CartPage() {
  const [cartBooks, setCartBooks] = useState([]);
  const [remove, setRemove] = useState(false);
  const navigate = useNavigate ();

  useEffect(() => {
    // Fetch cart books from backend API
    fetch("http://localhost:8080/bookstore/1")
    .then(response => {
        return response.json();
    })
    .then(data => {
        console.log(data.cart);
        setCartBooks(data.cart)
    })
    .catch(error => {
        console.error('Error fetching books:', error);
    });
  }, [remove]);


  const removeFromCart = (bookId) => {
    // remove book from cart
    fetch('http://localhost:8080/bookstore/1', {
      method: 'DELETE', // Assuming adding to cart is a POST request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        "bookId": bookId
      }),
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Failed to add book to cart');
      }
      setRemove(!remove);
    })
    .catch(error => {
      console.error('Error removing book from cart:', error);
      // Handle error as needed
    });
  };

  const handleCheckout = () => {
    // handle checkout
    fetch('http://localhost:8080/bookstore/1/checkout', {
      method: 'POST', // Assuming adding to cart is a POST request
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      }),
    })
    .then(response => {
      return response.json();
    })
    .then(data => {
      navigate('/receipt', {state:{ data }});
    })
    .catch(error => {
      console.error('Error checking out cart:', error);
    });
  };

  return (
    <div>
      <h1>Cart</h1>
      {cartBooks.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="book-list">
          {cartBooks.map(book => (
            <div className="book-card" key={book.id}>
              <div className="book-info">
                <h3 className="book-title">{book.title}</h3>
                <p className="book-author">{book.author}</p>
                <p className="book-price">${book.price}</p>
                <button onClick={() => removeFromCart(book.id)}>Remove from Cart</button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartBooks.length > 0 && (
        <button className="checkout-button" onClick={handleCheckout}>Checkout</button>
      )}
    </div>
  );
}

export default CartPage;