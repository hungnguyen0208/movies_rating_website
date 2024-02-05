import './App.css';
import api from './api/axiosConfig';
import {useState, useEffect} from 'react';

function App() {

  const [movies, setMovies] = useState();

  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
      
    } catch (err) {
      console.log(err);
    }
  return (
    <div className="App">

    </div>
  );
}

export default App;
