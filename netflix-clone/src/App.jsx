
import { useEffect ,useState} from 'react';
import './App.css'
import HeroBanner from './components/HeroBanner'
import MovieRow from './components/MovieRow'
import Nav from './components/Nav'
import Reasons from './components/Reasons';


function App() {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([])
   const API_KEY = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTrending(data.results))
      .catch(console.error)
    
      fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=1`
      )
        .then((res) => res.json())
        .then((data) => setTopRated(data.results))
        .catch(console.error);
  }, [])

  

 
  return (
    <>
      <div className="bg-black min-h-screen">
        <Nav />
        <HeroBanner />
        <div className="pt-4">
          <MovieRow title="Trending Now" movies={trending} />
          <MovieRow title="Top Rated" movies={topRated} />
        </div>
        <Reasons />
      </div>
    </>
  );
}

export default App
