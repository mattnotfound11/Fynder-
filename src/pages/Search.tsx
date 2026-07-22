import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Search.css';

const categories = [
  { id: 'electronics', label: 'Electronics', checked: true },
  { id: 'apparel', label: 'Apparel & Accessories', checked: false },
  { id: 'books', label: 'Books & Media', checked: false },
  { id: 'keys', label: 'Keys & ID Cards', checked: false },
  { id: 'personal', label: 'Personal Items', checked: false },
];

const searchItems = [
  {
    id: 1,
    name: 'Space Gray Laptop Case',
    description: 'Found near the Main Library entrance stairs. Contains some stickers.',
    location: 'Main Library',
    date: 'OCT 24, 2023',
    image: '/images/laptop.png',
    status: 'found',
    statusLabel: 'Found',
    tooltip: 'Item has been found by a user',
    actionLabel: 'Claim Item',
    actionType: 'claim',
  },
  {
    id: 2,
    name: 'Silver Keychain + 3 Keys',
    description: "Missing since Monday morning. Keychain has a 'New York' leather fob.",
    location: 'Science Plaza',
    date: 'OCT 23, 2023',
    image: '/images/keys.png',
    status: 'lost',
    statusLabel: 'Lost',
    tooltip: 'User is actively searching for this item',
    actionLabel: 'View Details',
    actionType: 'details',
  },
  {
    id: 3,
    name: 'Yellow Hydro Flask',
    description: 'Found in the Fitness Center near the treadmill area. 32oz capacity.',
    location: 'Athletics Center',
    date: 'OCT 22, 2023',
    image: '/images/yellow_flask.png',
    status: 'found',
    statusLabel: 'Found',
    tooltip: 'Item has been found by a user',
    actionLabel: 'Claim Item',
    actionType: 'claim',
  },
  {
    id: 4,
    name: 'AirPods Pro Case',
    description: 'Left in Room 302 of the Engineering Block. Case only, no buds inside.',
    location: 'Engineering Block',
    date: 'OCT 23, 2023',
    image: '/images/airpods.png',
    status: 'found',
    statusLabel: 'Found',
    tooltip: 'Item has been found by a user',
    actionLabel: 'Claim Item',
    actionType: 'claim',
  },
  {
    id: 5,
    name: 'Navy University Cap',
    description: 'Lost during the football game. Has a small gold pin on the side.',
    location: 'Stadium North',
    date: 'OCT 20, 2023',
    image: '/images/cap.png',
    status: 'lost',
    statusLabel: 'Lost',
    tooltip: 'User is actively searching for this item',
    actionLabel: 'View Details',
    actionType: 'details',
  },
  {
    id: 6,
    name: 'Reading Glasses',
    description: 'Tortoiseshell frames, found in the Student Union cafe area.',
    location: 'Student Union',
    date: 'OCT 19, 2023',
    image: '/images/glasses.png',
    status: 'found',
    statusLabel: 'Found',
    tooltip: 'Item has been found by a user',
    actionLabel: 'Claim Item',
    actionType: 'claim',
  },
];

export default function Search() {
  const [checkedCategories, setCheckedCategories] = useState<Record<string, boolean>>(
    Object.fromEntries(categories.map((c) => [c.id, c.checked]))
  );

  const toggleCategory = (id: string) => {
    setCheckedCategories((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <main className="search-page" id="search-page">
      <div className="search-page__inner container">
        {/* ─── Sidebar ─── */}
        <aside className="search-sidebar" id="search-sidebar">
          <div className="search-sidebar__header">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <line x1="4" y1="21" x2="4" y2="14"></line>
              <line x1="4" y1="10" x2="4" y2="3"></line>
              <line x1="12" y1="21" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12" y2="3"></line>
              <line x1="20" y1="21" x2="20" y2="16"></line>
              <line x1="20" y1="12" x2="20" y2="3"></line>
              <line x1="1" y1="14" x2="7" y2="14"></line>
              <line x1="9" y1="8" x2="15" y2="8"></line>
              <line x1="17" y1="16" x2="23" y2="16"></line>
            </svg>
            <span>Refine Search</span>
          </div>

          <div className="search-sidebar__section">
            <h4 className="search-sidebar__label">Category</h4>
            <div className="search-sidebar__checks">
              {categories.map((cat) => (
                <label className="search-checkbox" key={cat.id} htmlFor={`cat-${cat.id}`}>
                  <input
                    type="checkbox"
                    id={`cat-${cat.id}`}
                    checked={checkedCategories[cat.id]}
                    onChange={() => toggleCategory(cat.id)}
                  />
                  <span className="search-checkbox__box">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" className="search-checkbox__icon">
                      <polyline points="20 6 9 17 4 12"></polyline>
                    </svg>
                  </span>
                  <span className="search-checkbox__label">{cat.label}</span>
                </label>
              ))}
            </div>
          </div>

          <div className="search-sidebar__section">
            <h4 className="search-sidebar__label">Location</h4>
            <select className="search-select" id="location-select">
              <option>All Locations</option>
              <option>Main Library</option>
              <option>Student Union</option>
              <option>Engineering Block</option>
              <option>Athletics Center</option>
              <option>Science Plaza</option>
            </select>
          </div>

          <div className="search-sidebar__section">
            <h4 className="search-sidebar__label">Date Range</h4>
            <div className="search-sidebar__dates">
              <div className="search-date-field">
                <label className="search-date-field__label">From</label>
                <input type="date" className="search-date-field__input" id="date-from" />
              </div>
              <div className="search-date-field">
                <label className="search-date-field__label">To</label>
                <input type="date" className="search-date-field__input" id="date-to" />
              </div>
            </div>
          </div>

          <button className="search-sidebar__clear" id="clear-filters">
            Clear All Filters
          </button>

          <div className="search-sidebar__cta" id="cant-find-cta">
            <h4 className="search-sidebar__cta-title">Can't find your item?</h4>
            <p className="search-sidebar__cta-desc">
              New items are added every hour. Report a lost item to get notified if a match is found.
            </p>
            <Link to="/report" className="search-sidebar__cta-link">
              Report Lost Item
            </Link>
          </div>
        </aside>

        {/* ─── Results ─── */}
        <section className="search-results" id="search-results">
          <div className="search-results__bar">
            <div className="search-results__input-wrap">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
              </svg>
              <input
                type="text"
                placeholder="Search for lost items (e.g., 'Blue MacBook', 'House keys')"
                className="search-results__input"
                id="search-input"
              />
            </div>
          </div>

          <div className="search-results__meta">
            <span className="search-results__count">Showing 24 Results</span>
            <div className="search-results__sort">
              <span className="search-results__sort-label">Sort by:</span>
              <select className="search-results__sort-select" id="sort-select">
                <option>Most Recent</option>
                <option>Oldest First</option>
                <option>A–Z</option>
              </select>
            </div>
          </div>

          <div className="search-results__grid">
            {searchItems.map((item) => (
              <div className="search-card" key={item.id} id={`search-card-${item.id}`}>
                <div className="search-card__img-wrap">
                  <img src={item.image} alt={item.name} className="search-card__img" />
                  <span 
                    className={`badge badge--${item.status} search-card__badge`}
                    data-tooltip={item.tooltip}
                  >
                    {item.statusLabel}
                  </span>
                </div>
                <div className="search-card__body">
                  <h4 className="search-card__name">{item.name}</h4>
                  <p className="search-card__desc">{item.description}</p>
                  <div className="search-card__meta">
                    <span className="search-card__meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                        <circle cx="12" cy="10" r="3"></circle>
                      </svg>
                      {item.location}
                    </span>
                    <span className="search-card__meta-item">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                        <line x1="16" y1="2" x2="16" y2="6"></line>
                        <line x1="8" y1="2" x2="8" y2="6"></line>
                        <line x1="3" y1="10" x2="21" y2="10"></line>
                      </svg>
                      {item.date}
                    </span>
                  </div>
                  <button className={`search-card__action ${item.actionType === 'claim' ? 'search-card__action--claim' : 'search-card__action--details'}`}>
                    {item.actionLabel}
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ─── Pagination ─── */}
          <div className="pagination" id="pagination">
            <button className="pagination__btn pagination__btn--arrow" disabled>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="15 18 9 12 15 6"></polyline>
              </svg>
            </button>
            <button className="pagination__btn pagination__btn--active">1</button>
            <button className="pagination__btn">2</button>
            <button className="pagination__btn">3</button>
            <span className="pagination__ellipsis">...</span>
            <button className="pagination__btn">12</button>
            <button className="pagination__btn pagination__btn--arrow">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="9 18 15 12 9 6"></polyline>
              </svg>
            </button>
          </div>
        </section>
      </div>
    </main>
  );
}
