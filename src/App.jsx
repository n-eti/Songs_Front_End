import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
function App() {

  function fetchSongs(){
    const response = axios.get('http://127.0.0.1:8000/api/music/');
  }
  return (
    <div className="App">

    </div>
  );
}

export default App;
