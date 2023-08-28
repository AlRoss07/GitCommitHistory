import React, { useState } from 'react';
import './SearchBar.css';

interface SearchBarProps {
    onSearch: (searchText: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
    const [searchText, setSearchText] = useState('');

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchText(event.target.value);
    };

    const handleSearchSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        onSearch(searchText);
    };

    return (
        <form className="search-bar" onSubmit={handleSearchSubmit}>
            <input
                className="search-input"
                type="text"
                placeholder="Search commits..."
                value={searchText}
                onChange={handleSearchChange}
            />
            <button className="search-button" type="submit">Search</button>
        </form>
    );
};

export default SearchBar;