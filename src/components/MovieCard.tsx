import { Movie, Genre } from "../types"
import { getPosterUrl } from "../data/sampleMovies"
import { useAppContext } from "../context/AppContext"
import { Link } from "react-router-dom"

type MovieCardProps = {
    movie: Movie;
    genres?: Genre[];
    onMovieClick?: (movie: Movie) => void;
};

const MovieCard = ({ movie, genres = [], onMovieClick }: MovieCardProps) => {
    const { toggleFavorite, isFavorite } = useAppContext();
    const genreNames = movie.genre_ids
        .map((id) => genres.find((g) => g.id === id)?.name)
        .filter((name): name is string => Boolean(name));

    return (
        <section className="movie-card">
            <div className="poster-wrapper">
                <img className="poster-img" src={getPosterUrl(movie.poster_path)} alt={movie.title} loading="lazy" />
                <div className="poster-overlay">
                    <div className="card-top-badges">
                        <span className="rating-badge">
                            <svg viewBox="0 0 24 24">
                                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                            </svg>
                            {movie.vote_average.toFixed(1)}
                        </span>
                        <button
                            className={`favorite-btn${isFavorite(movie.id) ? " is-favorite" : ""}`}
                            title={isFavorite(movie.id) ? "Remove from Favourites" : "Add to Favourites"}
                            onClick={(e) => {
                                e.stopPropagation();
                                toggleFavorite(movie);
                            }}
                        >
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill={isFavorite(movie.id) ? "currentColor" : "none"}
                                stroke="currentColor"
                                strokeWidth="2"
                            >
                                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
                            </svg>
                        </button>
                    </div>
                    <Link to="/watch" state={{ movie }} className="play-btn" aria-label="Play">
                        <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="6" strokeLinejoin="round">
                            <polygon points="8.5 5.5 18.5 12 8.5 18.5"></polygon>
                        </svg>
                    </Link>
                    <button className="quick-view-hint" onClick={() => onMovieClick?.(movie)}>
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" aria-hidden="true">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                        View Details
                    </button>
                </div>
            </div>
            <div className="movie-card-info">
                <h2 className="movie-card-title">{movie.title}</h2>
                <div className="movie-card-meta">
                    <span>{movie.release_date ? movie.release_date.substring(0, 4) : "TBA"}</span>
                    <span>{movie.vote_count ? `${movie.vote_count.toLocaleString()} votes` : "Upcoming"}</span>
                </div>
                <div className="movie-genres-tags">
                    {genreNames.slice(0, 2).map((genre) => (
                        <span key={genre} className="genre-tag">{genre}</span>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default MovieCard
