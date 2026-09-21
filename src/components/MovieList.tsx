import { Movie } from "../types.ts";
import MovieCard from "./MovieCard";

interface MovieListProps {
  movies: Movie[];
}

const MovieList = ({ movies }: MovieListProps) => {
  return (
    <div className="movies-grid">
      {movies.length === 0 ? (
        <p>No movies found.</p>
      ) : (
        movies.map(movie => <MovieCard key={movie.id} movie={movie} />)
      )}
    </div>
  );
};

export default MovieList;