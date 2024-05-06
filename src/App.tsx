import React from 'react';
import './App.css';
import Home from './Home';
import { Button } from '@mui/material';
import store from './store'
import { Provider } from 'react-redux'
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Home/>
      
    </div>
    </Provider>
  );
}

export default App;
