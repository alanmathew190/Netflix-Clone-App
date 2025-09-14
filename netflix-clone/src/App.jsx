
import { useEffect ,useState} from 'react';
import './App.css'
import HeroBanner from './components/HeroBanner'
import MovieRow from './components/MovieRow'
import Nav from './components/Nav'

function App() {
  const [trending, setTrending] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/trending/movie/week?api_key=2afd343931f492051678cf5fd9ff0c8d`)
    .then((res) => res.json())
      .then((data) => setTrending(data.results))
    .catch(console.error)
  },[])

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
