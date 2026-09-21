import MovieList from "./components/MovieList";
import SearchBar from "./components/SearchBar";
import { SAMPLE_MOVIES } from "./data/sampleMovies";
import { useState } from  "react"; 

const App = () => {
  const [query, setQuery] = useState("");

  const filteredMovies = SAMPLE_MOVIES.filter((m) =>
    m.title.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <div className="app-layout">
      <main className="main-container">
        <h1>Movie App</h1>
        <SearchBar query={query} onChange={setQuery} />
        <MovieList movies={filteredMovies} />
      </main>
    </div>
  );
};

export default App;