import { Link } from 'react-router-dom';
import './Home.css';

const recentItems = [
  {
    id: 1,
    name: 'Bose Noise Cancelling Headphones',
    location: 'Found near the Main Library entrance.',
    date: 'OCT 24, 2023',
    image: '/images/headphones.png',
    status: 'storage',
    statusLabel: 'In Storage',
    tooltip: 'Securely stored at a campus hub',
  },
  {
    id: 2,
    name: 'Lanyard with Student ID',
    location: 'Found in the Engineering Lab B-12.',
    date: 'OCT 24, 2023',
    image: '/images/lanyard.png',
    status: 'urgent',
    statusLabel: 'Urgent',
    tooltip: 'High priority item. Urgent attention needed',
  },
  {
    id: 3,
    name: 'Black Leather Wallet',
    location: 'Found at the South Campus shuttle stop.',
    date: 'OCT 23, 2023',
    image: '/images/wallet.png',
    status: 'processing',
    statusLabel: 'Processing',
    tooltip: 'Currently being processed and verified',
  },
  {
    id: 4,
    name: 'HydroFlask (Silver)',
    location: 'Found in the Student Union cafeteria.',
    date: 'OCT 23, 2023',
    image: '/images/hydroflask.png',
    status: 'storage',
    statusLabel: 'In Storage',
    tooltip: 'Securely stored at a campus hub',
  },
];

const steps = [
  { num: '01', title: 'Report', desc: 'Submit a detailed report of your lost or found item with photos and location.' },
  { num: '02', title: 'Match', desc: 'Our system cross-references reports and alerts you when a potential match is found.' },
  { num: '03', title: 'Verify', desc: 'Confirm ownership through our secure double-blind verification process.' },
  { num: '04', title: 'Reunite', desc: 'Pick up your item from the nearest campus hub. Simple as that.' },
];

const testimonials = [
  {
    quote: "I lost my laptop in the library and someone turned it in within 2 hours. FYNDER made the whole process seamless.",
    name: 'Sarah Chen',
    role: 'Computer Science, Junior',
    initials: 'SC',
  },
  {
    quote: "Found a set of keys in the parking lot. Posted on FYNDER and the owner claimed them the same day. Amazing system.",
    name: 'Marcus Rivera',
    role: 'Business Admin, Senior',
    initials: 'MR',
  },
  {
    quote: "The verification process gave me peace of mind that my wallet was going back to the right person.",
    name: 'Emily Park',
    role: 'Biology, Sophomore',
    initials: 'EP',
  },
];

export default function Home() {
  return (
    <main className="home" id="home-page">
      {/* ─── Hero ─── */}
      <section className="hero" id="hero-section">
        <div className="hero__bg"></div>
        <div className="hero__particles"></div>
        <div className="hero__content container">
          <span className="hero__badge">Official University Utility</span>
          <h1 className="hero__title">
            Reuniting Lost Possessions with<br />
            <span className="hero__title--gold">Their Owners.</span>
          </h1>
          <p className="hero__subtitle">
            FYNDER connects the university community through a secure, verified lost and found
            system — reuniting students with their belongings, faster.
          </p>
          <div className="hero__search">
            <div className="hero__search-bar">
              <svg className="hero__search-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search for keys, phones, wallets..."
                className="hero__search-input"
                id="hero-search-input"
              />
              <Link to="/search" className="hero__search-btn btn--animated btn--animated--maroon" id="hero-search-btn">
                Search
              </Link>
            </div>
            <div className="hero__recent-tags">
              <span className="hero__recent-label">Recent:</span>
              <button className="hero__tag">MacBook Pro</button>
              <button className="hero__tag">Red HydroFlask</button>
              <button className="hero__tag">ID Card</button>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Trust Stats Bar ─── */}
      <div className="trust-stats container" id="trust-bar">
        <div className="trust-stats__inner">
          <div className="trust-stat">
            <span className="trust-stat__num">1,240+</span>
            <span className="trust-stat__label">Items Returned</span>
          </div>
          <div className="trust-stat__divider"></div>
          <div className="trust-stat">
            <span className="trust-stat__num">85%</span>
            <span className="trust-stat__label">Success Rate</span>
          </div>
          <div className="trust-stat__divider"></div>
          <div className="trust-stat">
            <span className="trust-stat__num">24h</span>
            <span className="trust-stat__label">Avg. Recovery</span>
          </div>
        </div>
      </div>

      {/* ─── Action Cards ─── */}
      <section className="actions container" id="action-cards">
        <div className="actions__grid">
          <div className="action-card action-card--primary" id="card-report">
            <div className="action-card__icon-wrap action-card__icon-wrap--light">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="16"></line>
                <line x1="8" y1="12" x2="16" y2="12"></line>
              </svg>
            </div>
            <h3 className="action-card__title">Report Found Item</h3>
            <p className="action-card__desc">
              Help a fellow student by logging an item you've discovered on campus.
            </p>
            <Link to="/report" className="action-card__btn btn--animated btn--animated--gold">
              Start Report &rarr;
            </Link>
          </div>

          <div className="action-card action-card--white" id="card-browse">
            <div className="action-card__icon-wrap action-card__icon-wrap--dark">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                <line x1="8" y1="21" x2="16" y2="21"></line>
                <line x1="12" y1="17" x2="12" y2="21"></line>
              </svg>
            </div>
            <h3 className="action-card__title action-card__title--dark">Browse Items</h3>
            <p className="action-card__desc action-card__desc--dark">
              Explore the full database of recently turned-in lost property.
            </p>
            <Link to="/search" className="action-card__btn action-card__btn--outline">
              View Gallery
            </Link>
          </div>
        </div>

        <div className="security-banner" id="card-security">
          <div className="security-banner__content">
            <div className="security-banner__header">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
              </svg>
              <h3 className="security-banner__title">Institutional Security</h3>
            </div>
            <p className="security-banner__desc">
              Every claim requires university authentication. We use a double-blind proof
              system to ensure items return to rightful owners.
            </p>
          </div>
          <ul className="security-banner__checks">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Photo Proof Required
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"></polyline>
              </svg>
              Campus ID Linkage
            </li>
          </ul>
        </div>
      </section>

      {/* ─── Recently Found ─── */}
      <section className="recent container" id="recent-section">
        <div className="recent__header">
          <div>
            <h2 className="recent__title">Recently Found</h2>
            <p className="recent__subtitle">Last updated: 12 minutes ago</p>
          </div>
          <Link to="/search" className="recent__view-all">
            View all items →
          </Link>
        </div>

        <div className="recent__grid">
          {recentItems.map((item) => (
            <div className="item-card" key={item.id} id={`item-card-${item.id}`}>
              <div className="item-card__img-wrap">
                <img src={item.image} alt={item.name} className="item-card__img" />
                <span 
                  className={`badge badge--${item.status} item-card__badge`}
                  data-tooltip={item.tooltip}
                >
                  {item.statusLabel}
                </span>
              </div>
              <div className="item-card__body">
                <h4 className="item-card__name">{item.name}</h4>
                <p className="item-card__location">{item.location}</p>
                <div className="item-card__footer">
                  <div className="item-card__date">
                    <span className="item-card__date-label">Date Found</span>
                    <span className="item-card__date-value">{item.date}</span>
                  </div>
                  <button className="item-card__info-btn" aria-label="More info">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10"></circle>
                      <line x1="12" y1="16" x2="12" y2="12"></line>
                      <line x1="12" y1="8" x2="12.01" y2="8"></line>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── How It Works ─── */}
      <section className="how-it-works" id="how-it-works">
        <div className="container">
          <span className="section-eyebrow">How It Works</span>
          <h2 className="section-title">Four Simple Steps</h2>
          <p className="section-desc">
            From reporting to reuniting — the entire process is designed to be fast and secure.
          </p>
          <div className="steps__grid">
            {steps.map((s, i) => (
              <div className="step-card" key={i} id={`step-${i}`}>
                <span className="step-card__num">{s.num}</span>
                <h3 className="step-card__title">{s.title}</h3>
                <p className="step-card__desc">{s.desc}</p>
                {i < steps.length - 1 && (
                  <div className="step-card__connector">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <polyline points="9 18 15 12 9 6" />
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Testimonials ─── */}
      <section className="testimonials" id="testimonials-section">
        <div className="container">
          <span className="section-eyebrow">Success Stories</span>
          <h2 className="section-title">Trusted by Students</h2>
          <div className="testimonials__grid">
            {testimonials.map((t, i) => (
              <div className="testimonial-card" key={i} id={`testimonial-${i}`}>
                <div className="testimonial-card__stars">
                  {[...Array(5)].map((_, j) => (
                    <svg key={j} width="14" height="14" viewBox="0 0 24 24" fill="var(--gold)" stroke="var(--gold)" strokeWidth="1">
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  ))}
                </div>
                <p className="testimonial-card__quote">"{t.quote}"</p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">{t.initials}</div>
                  <div>
                    <span className="testimonial-card__name">{t.name}</span>
                    <span className="testimonial-card__role">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


    </main>
  );
}
