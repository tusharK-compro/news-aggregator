import React from 'react';
import SearchBar from './SearchBar';
import { Typography,Box } from '@mui/material';
const header = {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between"

}
const logo = {

}
function Header() {
    return (
        <Box style={header} sx={{bgcolor : "black"}}>
            <Typography variant='h4' sx={{color: "white", p: 2}} style={logo}>
                News Aggregator
            </Typography>
            <SearchBar/>
        </Box>
    );
}

export default Header;