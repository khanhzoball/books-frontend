import React, { useState } from 'react';
import '../styles/searchbar.css';

function SearchBar({ onSearch }) {
  const [filters, setFilters] = useState({
    page: '',
    size: '',
    author: '',
    title: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters(prevFilters => ({
      ...prevFilters,
      [name]: value
    }));
  };
  
  const handleSearch = () => {
    // Pass the filters to the parent component for searching
    onSearch(filters);
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        name="page"
        placeholder="Page"
        value={filters.page}
        onChange={handleChange}
      />
      <input
        type="text"
        name="size"
        placeholder="Size"
        value={filters.size}
        onChange={handleChange}
      />
      <input
        type="text"
        name="author"
        placeholder="Author"
        value={filters.author}
        onChange={handleChange}
      />
      <input
        type="text"
        name="title"
        placeholder="Title"
        value={filters.title}
        onChange={handleChange}
      />
      <button onClick={handleSearch}>Search</button>
    </div>
  );
}

export default SearchBar;