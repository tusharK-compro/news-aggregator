import React from 'react';
import Header from './components/Header';
import { Button } from '@mui/material';
import NewsComponent from './components/NewsComponent';

function Home() {
    return (
        <div>
            <Header/>
            <h1>    
                News Feed
            </h1>    
            <Button variant='contained'>Back to feed</Button>

            <NewsComponent title='Goldy Brar Shot Dead' content='Oh jatt da muqabala Dass mainu kithe ae ni Jatt da muqabala Dass mainu kithe ae ni Jatt da muqabala Dass mainu kithe'/>
                
        </div>
    );
}

export default Home;