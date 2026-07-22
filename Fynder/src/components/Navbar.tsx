import { NavLink } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav className="navbar" id="main-nav">
      <div className="navbar__inner container">
        <NavLink to="/" className="navbar__logo" id="nav-logo">
          <img src="/images/fynderlogo.jpg" alt="FYNDER Logo" className="navbar__logo-img" />
        </NavLink>

        <ul className="navbar__links" id="nav-links">
          <li>
            <NavLink to="/" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} end id="nav-home">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/search" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} id="nav-search">
              Search
            </NavLink>
          </li>
          <li>
            <NavLink to="/report" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} id="nav-report">
              Report
            </NavLink>
          </li>
          <li>
            <NavLink to="/claims" className={({ isActive }) => isActive ? 'navbar__link navbar__link--active' : 'navbar__link'} id="nav-claims">
              My Claims
            </NavLink>
          </li>
        </ul>

        <div className="navbar__actions" id="nav-actions">
          <button className="navbar__icon-btn" id="nav-notifications" aria-label="Notifications">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
              <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
            </svg>
          </button>
          <NavLink to="/profile" className={({ isActive }) => `navbar__icon-btn ${isActive ? 'navbar__icon-btn--active' : ''}`} id="nav-account" aria-label="Profile">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="8" r="4"></circle>
              <path d="M20 21a8 8 0 1 0-16 0"></path>
            </svg>
          </NavLink>
        </div>
      </div>
    </nav>
  );
}
