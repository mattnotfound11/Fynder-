import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Claims.css';

const tabs = [
  { id: 'lost', label: 'Lost Items', icon: 'grid' },
  { id: 'found', label: 'Found Items', icon: 'search' },
  { id: 'resolved', label: 'Resolved', icon: 'check' },
  { id: 'archived', label: 'Archived', icon: 'archive' },
];

const claimItems = [
  {
    id: 1,
    name: 'Apple Watch Series 8',
    status: 'lost',
    statusLabel: 'Lost',
    location: 'Campus Library, Floor 2',
    description: 'Graphite color, black sport band. Serial number ending in 9X2J. Last seen near the quiet study cubicles.',
    date: 'OCT 12, 2023',
    image: '/images/watch.png',
    tooltip: 'User is actively searching for this item',
  },
  {
    id: 2,
    name: 'Brown Leather Wallet',
    status: 'lost',
    statusLabel: 'Lost',
    location: 'Student Union Cafeteria',
    description: 'Contains student ID and local transit card. No cash inside. Worn texture on the edges.',
    date: 'OCT 09, 2023',
    image: '/images/brown_wallet.png',
    tooltip: 'User is actively searching for this item',
  },
  {
    id: 3,
    name: 'Keys with Blue Carabiner',
    status: 'found',
    statusLabel: 'Found',
    location: 'North Parking Lot',
    description: 'Three silver keys and one car fob. Found near the accessible parking entrance.',
    date: 'OCT 05, 2023',
    image: '/images/keys_carabiner.png',
    tooltip: 'Item has been found by a user',
  },
  {
    id: 4,
    name: 'Yellow Hydro Flask',
    status: 'lost',
    statusLabel: 'Lost',
    location: 'Gym - Locker Room',
    description: '32oz wide mouth. Stickers including a "Go Blue" and a national park emblem.',
    date: 'SEP 28, 2023',
    image: '/images/yellow_flask.png',
    tooltip: 'User is actively searching for this item',
  },
];

export default function Claims() {
  const [activeTab, setActiveTab] = useState('lost');

  return (
    <main className="claims-page" id="claims-page">
      <div className="claims-page__header-bar"></div>
      <div className="claims-page__inner container">
        {/* ─── Header ─── */}
        <div className="claims-header" id="claims-header">
          <div className="claims-header__top">
            <div>
              <h1 className="claims-header__title">My Posts</h1>
              <div className="claims-header__stats">
                <div className="claims-stat">
                  <span className="claims-stat__label">Total Posts</span>
                  <span className="claims-stat__value">12</span>
                </div>
                <div className="claims-stat__divider"></div>
                <div className="claims-stat">
                  <span className="claims-stat__label">Active Lost</span>
                  <span className="claims-stat__value claims-stat__value--maroon">8</span>
                </div>
                <div className="claims-stat__divider"></div>
                <div className="claims-stat">
                  <span className="claims-stat__label">Found Items</span>
                  <span className="claims-stat__value claims-stat__value--green">4</span>
                </div>
              </div>
            </div>
            <Link to="/report" className="claims-header__btn btn--animated btn--animated--black" id="report-new-btn">
              + Report New Item
            </Link>
          </div>
        </div>

        {/* ─── Tabs ─── */}
        <div className="claims-tabs" id="claims-tabs">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`claims-tab ${activeTab === tab.id ? 'claims-tab--active' : ''}`}
              onClick={() => setActiveTab(tab.id)}
              id={`tab-${tab.id}`}
            >
              {tab.id === 'lost' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="3" width="7" height="7"></rect>
                  <rect x="14" y="3" width="7" height="7"></rect>
                  <rect x="14" y="14" width="7" height="7"></rect>
                  <rect x="3" y="14" width="7" height="7"></rect>
                </svg>
              )}
              {tab.id === 'found' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
              )}
              {tab.id === 'resolved' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                  <polyline points="22 4 12 14.01 9 11.01"></polyline>
                </svg>
              )}
              {tab.id === 'archived' && (
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="21 8 21 21 3 21 3 8"></polyline>
                  <rect x="1" y="3" width="22" height="5"></rect>
                  <line x1="10" y1="12" x2="14" y2="12"></line>
                </svg>
              )}
              {tab.label}
            </button>
          ))}
        </div>

        {/* ─── Claims List ─── */}
        <div className="claims-list" id="claims-list">
          {claimItems.map((item) => (
            <div className="claim-card" key={item.id} id={`claim-${item.id}`}>
              <div className="claim-card__img-wrap">
                <img src={item.image} alt={item.name} className="claim-card__img" />
              </div>

              <div className="claim-card__body">
                <div className="claim-card__top">
                  <div className="claim-card__info">
                    <h3 className="claim-card__name">{item.name}</h3>
                    <div className="claim-card__meta">
                      <span 
                        className={`badge badge--${item.status}`}
                        data-tooltip={item.tooltip}
                      >
                        {item.statusLabel}
                      </span>
                      <span className="claim-card__location">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                          <circle cx="12" cy="10" r="3"></circle>
                        </svg>
                        {item.location}
                      </span>
                    </div>
                  </div>
                  <div className="claim-card__date">
                    <span className="claim-card__date-label">Posted On</span>
                    <span className="claim-card__date-value">{item.date}</span>
                  </div>
                </div>

                <p className="claim-card__desc">{item.description}</p>

                <div className="claim-card__actions">
                  <div className="claim-card__btns">
                    <button className="claim-card__btn claim-card__btn--resolve">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                      Resolve
                    </button>
                    <button className="claim-card__btn claim-card__btn--renew">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="23 4 23 10 17 10"></polyline>
                        <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"></path>
                      </svg>
                      Renew
                    </button>
                  </div>
                  <div className="claim-card__tools">
                    <button className="claim-card__tool" aria-label="Edit">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"></path>
                        <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"></path>
                      </svg>
                    </button>
                    <button className="claim-card__tool" aria-label="Delete">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="3 6 5 6 21 6"></polyline>
                        <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ─── Pagination ─── */}
        <div className="pagination claims-pagination" id="claims-pagination">
          <button className="pagination__btn pagination__btn--arrow" disabled>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="pagination__btn pagination__btn--active">1</button>
          <button className="pagination__btn">2</button>
          <button className="pagination__btn">3</button>
          <button className="pagination__btn pagination__btn--arrow">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </main>
  );
}
