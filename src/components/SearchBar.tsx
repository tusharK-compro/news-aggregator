import { TextField } from '@mui/material';
import React from 'react';

function SearchBar() {
    return (
        <TextField id="outlined-basic" label="Search" variant="outlined" sx={{bgcolor:"white", m: 2, borderRadius: '24px',}}/>

      
    );
}

export default SearchBar;