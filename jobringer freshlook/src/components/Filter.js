import React, { useState } from 'react';
import './Filter.css';

const Filter = ({ onFilterChange }) => {
    const [keyword, setKeyword] = useState('');
    const [location, setLocation] = useState('');

    const handleFilter = () => {
        onFilterChange({ keyword, location });
    };

    return (
        <section className="filter">
            <input
                type="text"
                placeholder="Keyword (e.g., Developer)"
                value={keyword}
                onChange={(e) => setKeyword(e.target.value)}
                className="filter-input"
            />
            <input
                type="text"
                placeholder="Location (e.g., New York)"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="filter-input"
            />
            <button onClick={handleFilter} className="filter-btn">
                Search
            </button>
        </section>
    );
};

export default Filter;