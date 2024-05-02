import React from 'react';
import Header from './components/Header';

function Home() {
    return (
        <div>
            <Header/>
            <h1>    
                News Feed
            </h1>    
            <button>
                back to feed
            </button>
        </div>
    );
}

export default Home;