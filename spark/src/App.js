import React,{useEffect} from 'react'
import './App.css';
import Navbar from './components/Navbar';
import Post from './components/Post';

function App() {
  return (
    <div className="App">
     <Navbar />
     <Post />
    </div>
  );
}

export default App;
