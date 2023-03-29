import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
function App() {
  const [songs, setSongs] = useState([])

 async function fetchSongs(){
    const response = await axios.get('http://127.0.0.1:8000/api/music/');
    setSongs(response.data)
    console.log("Music Data", response.data)
  }

  useEffect(() => {
    fetchSongs()
  }, []);
  return (
    <div className="App">
        {console.log('Songs to be rendered', songs)}
        <MusicTable songs={songs}/>
    </div>
  );
}

export default App;
