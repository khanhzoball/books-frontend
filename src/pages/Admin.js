import React, { useState } from 'react';
import '../styles/AdminPage.css';

function AdminPage() {
    const [id, setId] = useState('');
    const [author, setAuthor] = useState('');
    const [title, setTitle] = useState('');
    const [stock, setStock] = useState('');
    const [price, setPrice] = useState('');

    const handleUpdate = () => {
        fetch('http://localhost:8080/inventory/' + id, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                "author": author,
                "title": title,
                "stock": stock,
                "price": price
            }),
        })
            .then(response => {
                
            })
            .catch(error => {
                
            });
    };

    const handleDelete = () => {
        fetch('http://localhost:8080/inventory/' + id, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({}),
        })
            .then(response => {
                
            })
            .catch(error => {
                
            });
    };

    return (
        <div className="admin-container">
            <h1>Admin Page</h1>
            <div className="input-container">
                <label>ID:</label>
                <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Author:</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Stock:</label>
                <input type="text" value={stock} onChange={(e) => setStock(e.target.value)} />
            </div>
            <div className="input-container">
                <label>Price:</label>
                <input type="text" value={price} onChange={(e) => setPrice(e.target.value)} />
            </div>
            <button onClick={handleUpdate}>Update</button>
            <button onClick={handleDelete}>Delete</button>
        </div>
    );
}

export default AdminPage;
