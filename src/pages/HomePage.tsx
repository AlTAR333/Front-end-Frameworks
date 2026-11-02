import { useState, useEffect, useRef } from "react";
import { useMovies } from "../hooks/useMovies";
import { useGenres } from "../hooks/useGenres";
import { Movie } from "../types";
import MovieModal from "../components/MovieModal";
import MovieList from "../components/MovieList";
const apiUrl = `${import.meta.env.VITE_TMDB_BASE_URL}/movie/popular?language=en-US&page=`;
const genresUrl = `${import.meta.env.VITE_TMDB_BASE_URL}/genre/movie/list?language=en-US`;

const HomePage = ({ searchQuery = "" }: { searchQuery?: string }) => {
    const [page, setPage] = useState(1);
    const { movies, loading, error } = useMovies(apiUrl + page);
    const { genres } = useGenres(genresUrl);
    const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
    const loaderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const loader = loaderRef.current;
        if (!loader || typeof IntersectionObserver === "undefined") return;
        if (loading || error || searchQuery || page >= 500) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setPage((p) => p + 1);
            },
            { rootMargin: "400px" },
        );
        observer.observe(loader);

        return () => observer.disconnect();
    }, [loading, error, searchQuery, page]);

    const filteredMovies = movies.filter((m) =>
        m.title.toLowerCase().includes(searchQuery.toLowerCase()),
    );

    return (
        <main className="main-container">
            <h1 className="section-title">{searchQuery ? "Search results" : "Popular movies"}</h1>
            {movies.length === 0 && loading && (
                <div className="movies-grid" role="status" aria-label="Loading movies">
                    {Array.from({ length: 12 }, (_, i) => (
                        <div key={i} className="skeleton-card" />
                    ))}
                </div>
            )}
            {movies.length > 0 && <MovieList movies={filteredMovies} genres={genres} onMovieClick={setSelectedMovie} />}
            {loading && movies.length > 0 && (
                <div className="status-msg" role="status">
                    <span className="spinner" aria-hidden="true" />
                    Loading...
                </div>
            )}
            {error && <p className="status-msg error">Something went wrong. </p>}
            <div ref={loaderRef}></div>
            {selectedMovie && (
                <MovieModal movie={selectedMovie} onClose={() => setSelectedMovie(null)} />
            )}
        </main>
    )
}

export default HomePage;