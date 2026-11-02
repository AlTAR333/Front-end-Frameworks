import { Link } from "react-router-dom";

const AboutPage = () => {
  return (
    <main className="main-container">
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="2" y="2" width="20" height="20" rx="2.18" />
            <line x1="7" y1="2" x2="7" y2="22" />
            <line x1="17" y1="2" x2="17" y2="22" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <line x1="2" y1="7" x2="7" y2="7" />
            <line x1="2" y1="17" x2="7" y2="17" />
            <line x1="17" y1="17" x2="22" y2="17" />
            <line x1="17" y1="7" x2="22" y2="7" />
          </svg>
        </div>
        <h1>About CineGrid</h1>
        <p className="empty-text">A movie discovery app built with React and the TMDB API.</p>
        <p className="empty-text">This product uses the TMDB API but is not endorsed or certified by TMDB.</p>
        <Link to="/" className="btn-secondary">Back to movies</Link>
      </div>
    </main>
  );
};

export default AboutPage;