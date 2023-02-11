// {id, name,modified, resourceURI}
import { useEffect, useState } from 'react';
import Hero from './components/Hero';

function App() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const response = await fetch(
      'https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023'
    );
    const json = await response.json();
    setMovies(json.data.results);
    setLoading(false);
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        <>
          <h1>{movies.length} Heros are ready!!</h1>
          <ul>
            {movies.map((hero) => (
              <Hero
                key={hero.id}
                name={hero.name}
                modified={hero.modified}
                resourceURI={hero.resourceURI}
              />
            ))}
          </ul>
        </>
      )}
    </div>
  );
}
export default App;
