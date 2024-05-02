import React from 'react';
import SearchBar from './SearchBar';

function Header() {
    return (
        <div>
            <span>
                News Aggregator
            </span>
            <SearchBar/>
        </div>
    );
}

export default Header;