import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <main className="main-container">
      <div className="empty-state">
        <div className="empty-icon">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
            <line x1="8" y1="8" x2="14" y2="14" />
            <line x1="14" y1="8" x2="8" y2="14" />
          </svg>
        </div>
        <h1>404</h1>
        <p className="empty-text">Page not found.</p>
        <Link to="/" className="btn-secondary">Back to Home</Link>
      </div>
    </main>
  );
};

export default NotFoundPage;