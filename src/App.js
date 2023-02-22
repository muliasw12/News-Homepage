import React from 'react';
import { Header, Blog, Navbar, PostWidget } from './components';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar/>
      
      
      <div className="App-grid">
        <Header/>
        <PostWidget/>
      </div>
      <div className="mobile">
        <Header/>
        <PostWidget/>
      </div>
      
      <Blog/>
      
    </div>
  );
}

export default App;
