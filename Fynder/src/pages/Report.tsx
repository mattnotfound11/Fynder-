import { useState } from 'react';
import './Report.css';

export default function Report() {
  const [reportType, setReportType] = useState<'lost' | 'found'>('lost');

  return (
    <main className="report-page" id="report-page">
      {/* ─── Header ─── */}
      <section className="report-header" id="report-header">
        <h1 className="report-header__title">Report an Item</h1>
        <p className="report-header__desc">
          Help our community reconnect with lost belongings. Please provide as<br />
          much detail as possible to ensure a successful match.
        </p>

        <div className="report-toggle" id="report-toggle">
          <label className="report-toggle__label">
            <input 
              type="radio" 
              name="reportType" 
              checked={reportType === 'lost'} 
              onChange={() => setReportType('lost')} 
            />
            <span>I Lost Something</span>
          </label>
          <label className="report-toggle__label">
            <input 
              type="radio" 
              name="reportType" 
              checked={reportType === 'found'} 
              onChange={() => setReportType('found')} 
            />
            <span>I Found Something</span>
          </label>
          <span className="report-toggle__selection"></span>
        </div>
      </section>

      {/* ─── Form ─── */}
      <section className="report-form-wrap container" id="report-form">
        <div className="report-form">
          <div className="report-form__section-header">
            <div className="report-form__section-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--maroon)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="12" y1="8" x2="12" y2="12"></line>
                <line x1="12" y1="16" x2="12.01" y2="16"></line>
              </svg>
            </div>
            <h2 className="report-form__section-title">Item Information</h2>
          </div>

          <div className="report-form__grid">
            <div className="report-field">
              <label className="report-field__label" htmlFor="item-name">Item Name</label>
              <input
                type="text"
                id="item-name"
                className="report-field__input"
                placeholder="e.g. Blue Hydroflask, Black Wallet"
              />
            </div>
            <div className="report-field">
              <label className="report-field__label" htmlFor="item-category">Category</label>
              <div className="report-field__input-wrap report-field__input-wrap--select">
                <select id="item-category" className="report-field__input report-field__input--with-icon custom-appearance">
                  <option>Select a category</option>
                  <option>Electronics</option>
                  <option>Apparel & Accessories</option>
                  <option>Books & Media</option>
                  <option>Keys & ID Cards</option>
                  <option>Personal Items</option>
                </select>
                <svg className="report-field__icon-right" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="6 9 12 15 18 9"></polyline>
                </svg>
              </div>
            </div>
          </div>

          <div className="report-form__grid">
            <div className="report-field">
              <label className="report-field__label" htmlFor="item-date">Date</label>
              <div className="report-field__input-wrap report-field__input-wrap--date">
                <input
                  type="date"
                  id="item-date"
                  className="report-field__input report-field__input--with-icon custom-date-input"
                />
                <svg className="report-field__icon-right" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                  <line x1="16" y1="2" x2="16" y2="6"></line>
                  <line x1="8" y1="2" x2="8" y2="6"></line>
                  <line x1="3" y1="10" x2="21" y2="10"></line>
                </svg>
              </div>
            </div>
            <div className="report-field">
              <label className="report-field__label" htmlFor="item-location">Location</label>
              <div className="report-field__input-wrap">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                <input
                  type="text"
                  id="item-location"
                  className="report-field__input report-field__input--with-icon"
                  placeholder="Building, Room or Area"
                />
              </div>
            </div>
          </div>

          <div className="report-field">
            <label className="report-field__label" htmlFor="item-description">Description</label>
            <textarea
              id="item-description"
              className="report-field__textarea"
              placeholder="Mention specific identifiers (scratches, stickers, unique contents)..."
              rows={5}
            ></textarea>
          </div>

          {/* ─── Photos ─── */}
          <div className="report-form__section-header report-form__section-header--mt">
            <div className="report-form__section-icon report-form__section-icon--gold">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                <circle cx="8.5" cy="8.5" r="1.5"></circle>
                <polyline points="21 15 16 10 5 21"></polyline>
              </svg>
            </div>
            <h2 className="report-form__section-title">Photos <span className="report-form__optional">(Optional)</span></h2>
          </div>

          <div className="report-upload" id="photo-upload">
            <div className="report-upload__icon">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                <polyline points="17 8 12 3 7 8"></polyline>
                <line x1="12" y1="3" x2="12" y2="15"></line>
              </svg>
            </div>
            <p className="report-upload__text">Click to upload or drag and drop</p>
            <p className="report-upload__hint">SVG, PNG, JPG or GIF (max. 5MB)</p>
          </div>

          {/* ─── Reporter Identity ─── */}
          <div className="report-identity" id="reporter-identity">
            <div className="report-identity__avatar">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="var(--gray-400)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M20 21a8 8 0 1 0-16 0"></path>
              </svg>
            </div>
            <div className="report-identity__info">
              <span className="report-identity__label">Reporter Identity</span>
              <h4 className="report-identity__name">Alex Harrison</h4>
              <span className="report-identity__contact">alex.harrison@university.edu • (555) 012-3456</span>
            </div>
            <span className="badge badge--verified">Verified Student</span>
          </div>

          <p className="report-form__identity-note">
            Your contact information is automatically included to facilitate the return process.
          </p>

          {/* ─── Submit ─── */}
          <button className="report-submit btn--animated btn--animated--maroon" id="submit-report">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px'}}>
              <line x1="22" y1="2" x2="11" y2="13"></line>
              <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
            </svg>
            Submit Report
          </button>

          <p className="report-form__disclaimer">
            By submitting, you agree to our <a href="#" className="report-form__link">Community Guidelines</a>.
          </p>
        </div>
      </section>
    </main>
  );
}
