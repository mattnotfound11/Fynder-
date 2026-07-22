import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer" id="main-footer">
      <div className="footer__inner container">
        <div className="footer__brand">
          <h3 className="footer__logo">FYNDER</h3>
          <p className="footer__desc">
            The official university lost and found system. We use advanced search technology and secure
            verification to return items to students and faculty.
          </p>
          <div className="footer__social">
            <button className="footer__social-btn" aria-label="Website">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
              </svg>
            </button>
            <button className="footer__social-btn" aria-label="Share">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="18" cy="5" r="3"></circle>
                <circle cx="6" cy="12" r="3"></circle>
                <circle cx="18" cy="19" r="3"></circle>
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49"></line>
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49"></line>
              </svg>
            </button>
          </div>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__heading">Quick Links</h4>
          <ul className="footer__links">
            <li><Link to="/">How It Works</Link></li>
            <li><Link to="/">Success Stories</Link></li>
            <li><Link to="/">Privacy Policy</Link></li>
            <li><Link to="/">Help Center</Link></li>
          </ul>
        </div>

        <div className="footer__links-group">
          <h4 className="footer__heading">Contact</h4>
          <ul className="footer__links">
            <li>
              <span className="footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                support@fynder.uni.edu
              </span>
            </li>
            <li>
              <span className="footer__contact-item">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                Main Student Union, Rm 102
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container">
          <p className="footer__copyright">
            © 2023 University Lost & Found Management System. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
