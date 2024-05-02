import React from 'react';
import SearchBar from './SearchBar';
import { Typography } from '@mui/material';

function Header() {
    return (
        <div>
            <Typography variant='h3'>
                News Aggregator
            </Typography>
            <SearchBar/>
        </div>
    );
}

export default Header;