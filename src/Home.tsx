import React from 'react';
import Header from './components/Header';
import { Button } from '@mui/material';

function Home() {
    return (
        <div>
            <Header/>
            <h1>    
                News Feed
            </h1>    
            <Button variant='contained'>Back to feed</Button>
                
        </div>
    );
}

export default Home;