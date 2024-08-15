import React, { useState } from 'react';
import './App.css';

const SearchBar = ({ onSearch }) => {
    const [query, setQuery] = useState('');

    const handleSearch = (e) => {
        if (e.key === 'Enter') {
            onSearch(query);
        }
    };

    return (
        <div className="search-bar">
            <input
                type="text"
                placeholder="Search Here"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={handleSearch}
            />
        </div>
    );
};

export default SearchBar;
