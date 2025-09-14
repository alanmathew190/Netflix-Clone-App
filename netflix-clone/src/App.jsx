
import { useEffect ,useState} from 'react';
import './App.css'
import HeroBanner from './components/HeroBanner'
import MovieRow from './components/MovieRow'
import Nav from './components/Nav'

function App() {
  const [trending, setTrending] = useState([]);
  const API_KEY = import.meta.env.VITE_TMDB_KEY;

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setTrending(data.results))
    .catch(console.error)
  }, [])

  return (
    <>
     <div className="bg-black min-h-screen">
      <Nav />
      <HeroBanner />
      <div className="pt-4">
          <MovieRow title="Trending Now" movies={trending} />
        </div>
    </div>
    </>
  )
}

export default App
