import React from 'react';
import { useLocation } from 'react-router-dom';
import "../styles/receipt.css"

function ReceiptPage() {
    const { state } = useLocation();
    const data = state?.data;

    console.log(state.data["cart"][0])

    return (
        <div>
            <h1>Receipt</h1>
            <div className="book-container">
                <ul className="book-list">
                    {state.data["cart"].map(book => (
                        <li key={book.id}>
                            <span className="book-title">{book.title}</span>
                            <span className="book-price">${book.price}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <p>Total Price: ${data.total}</p>
            {/* Render other receipt information */}
        </div>
    );
}

export default ReceiptPage;
