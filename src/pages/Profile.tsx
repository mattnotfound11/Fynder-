import { useState } from 'react';
import './Profile.css';

const activityItems = [
  { id: 1, action: 'Reported', item: 'Apple Watch Series 8', type: 'lost', date: 'Oct 12, 2023', time: '2:34 PM' },
  { id: 2, action: 'Claimed', item: 'Blue Hydroflask', type: 'found', date: 'Oct 8, 2023', time: '11:20 AM' },
  { id: 3, action: 'Reported', item: 'Brown Leather Wallet', type: 'lost', date: 'Oct 5, 2023', time: '9:15 AM' },
  { id: 4, action: 'Resolved', item: 'Silver Keychain + 3 Keys', type: 'resolved', date: 'Sep 28, 2023', time: '4:42 PM' },
  { id: 5, action: 'Reported', item: 'AirPods Pro Case', type: 'found', date: 'Sep 20, 2023', time: '1:05 PM' },
];

export default function Profile() {
  const [activeSection, setActiveSection] = useState('general');
  const [emailNotifs, setEmailNotifs] = useState(true);
  const [pushNotifs, setPushNotifs] = useState(true);
  const [matchAlerts, setMatchAlerts] = useState(true);
  const [weeklyDigest, setWeeklyDigest] = useState(false);

  return (
    <main className="profile-page" id="profile-page">
      <div className="profile-page__inner container">
        {/* ─── Sidebar ─── */}
        <aside className="profile-sidebar" id="profile-sidebar">
          <div className="profile-sidebar__header">
            <div className="profile-sidebar__avatar" id="profile-avatar">
              <span className="profile-sidebar__initials">AH</span>
            </div>
            <h3 className="profile-sidebar__name">Alex Harrison</h3>
            <p className="profile-sidebar__email">alex.harrison@university.edu</p>
            <span className="badge badge--verified">Verified Student</span>
          </div>

          <nav className="profile-sidebar__nav">
            {[
              { id: 'general', label: 'General', icon: 'user' },
              { id: 'notifications', label: 'Notifications', icon: 'bell' },
              { id: 'activity', label: 'Activity', icon: 'clock' },
              { id: 'security', label: 'Security', icon: 'shield' },
            ].map((item) => (
              <button
                key={item.id}
                className={`profile-sidebar__link ${activeSection === item.id ? 'profile-sidebar__link--active' : ''}`}
                onClick={() => setActiveSection(item.id)}
                id={`nav-${item.id}`}
              >
                {item.icon === 'user' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="4" /><path d="M20 21a8 8 0 1 0-16 0" /></svg>
                )}
                {item.icon === 'bell' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" /><path d="M13.73 21a2 2 0 0 1-3.46 0" /></svg>
                )}
                {item.icon === 'clock' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" /></svg>
                )}
                {item.icon === 'shield' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                )}
                {item.label}
              </button>
            ))}
          </nav>

          <div className="profile-sidebar__stats">
            <div className="profile-sidebar__stat">
              <span className="profile-sidebar__stat-value">12</span>
              <span className="profile-sidebar__stat-label">Reports</span>
            </div>
            <div className="profile-sidebar__stat">
              <span className="profile-sidebar__stat-value">8</span>
              <span className="profile-sidebar__stat-label">Resolved</span>
            </div>
            <div className="profile-sidebar__stat">
              <span className="profile-sidebar__stat-value">67%</span>
              <span className="profile-sidebar__stat-label">Recovery</span>
            </div>
          </div>
        </aside>

        {/* ─── Content ─── */}
        <section className="profile-content" id="profile-content">

          {/* General */}
          {activeSection === 'general' && (
            <div className="profile-section" id="section-general">
              <div className="profile-section__header">
                <h2 className="profile-section__title">General Information</h2>
                <p className="profile-section__desc">Manage your personal details and university information.</p>
              </div>

              <div className="profile-card">
                <div className="profile-card__header">
                  <h3 className="profile-card__title">Personal Details</h3>
                  <button className="profile-card__edit-btn" id="edit-personal">
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" /><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" /></svg>
                    Edit
                  </button>
                </div>
                <div className="profile-card__grid">
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Full Name</span>
                    <span className="profile-field-display__value">Alex Harrison</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Email</span>
                    <span className="profile-field-display__value">alex.harrison@university.edu</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Phone</span>
                    <span className="profile-field-display__value">(555) 012-3456</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Student ID</span>
                    <span className="profile-field-display__value">STU-2023-84291</span>
                  </div>
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-card__header">
                  <h3 className="profile-card__title">University Information</h3>
                </div>
                <div className="profile-card__grid">
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Department</span>
                    <span className="profile-field-display__value">Computer Science</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Year Level</span>
                    <span className="profile-field-display__value">3rd Year — Junior</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Campus</span>
                    <span className="profile-field-display__value">Main Campus</span>
                  </div>
                  <div className="profile-field-display">
                    <span className="profile-field-display__label">Member Since</span>
                    <span className="profile-field-display__value">August 2021</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Notifications */}
          {activeSection === 'notifications' && (
            <div className="profile-section" id="section-notifications">
              <div className="profile-section__header">
                <h2 className="profile-section__title">Notification Preferences</h2>
                <p className="profile-section__desc">Control how and when you receive updates about your items.</p>
              </div>

              <div className="profile-card">
                <div className="notif-row">
                  <div className="notif-row__info">
                    <h4 className="notif-row__title">Email Notifications</h4>
                    <p className="notif-row__desc">Receive updates about your reports via email.</p>
                  </div>
                  <label className="toggle-switch" htmlFor="toggle-email">
                    <input type="checkbox" id="toggle-email" checked={emailNotifs} onChange={() => setEmailNotifs(!emailNotifs)} />
                    <span className="toggle-switch__slider"></span>
                  </label>
                </div>

                <div className="notif-row">
                  <div className="notif-row__info">
                    <h4 className="notif-row__title">Push Notifications</h4>
                    <p className="notif-row__desc">Get instant browser notifications for new matches.</p>
                  </div>
                  <label className="toggle-switch" htmlFor="toggle-push">
                    <input type="checkbox" id="toggle-push" checked={pushNotifs} onChange={() => setPushNotifs(!pushNotifs)} />
                    <span className="toggle-switch__slider"></span>
                  </label>
                </div>

                <div className="notif-row">
                  <div className="notif-row__info">
                    <h4 className="notif-row__title">Match Alerts</h4>
                    <p className="notif-row__desc">Be alerted when a found item matches your lost report.</p>
                  </div>
                  <label className="toggle-switch" htmlFor="toggle-match">
                    <input type="checkbox" id="toggle-match" checked={matchAlerts} onChange={() => setMatchAlerts(!matchAlerts)} />
                    <span className="toggle-switch__slider"></span>
                  </label>
                </div>

                <div className="notif-row notif-row--last">
                  <div className="notif-row__info">
                    <h4 className="notif-row__title">Weekly Digest</h4>
                    <p className="notif-row__desc">Summary of new items matching your lost reports.</p>
                  </div>
                  <label className="toggle-switch" htmlFor="toggle-digest">
                    <input type="checkbox" id="toggle-digest" checked={weeklyDigest} onChange={() => setWeeklyDigest(!weeklyDigest)} />
                    <span className="toggle-switch__slider"></span>
                  </label>
                </div>
              </div>
            </div>
          )}

          {/* Activity */}
          {activeSection === 'activity' && (
            <div className="profile-section" id="section-activity">
              <div className="profile-section__header">
                <h2 className="profile-section__title">Recent Activity</h2>
                <p className="profile-section__desc">Your latest actions and report updates.</p>
              </div>

              <div className="profile-card profile-card--no-padding">
                <div className="activity-list">
                  {activityItems.map((a) => (
                    <div className="activity-row" key={a.id} id={`activity-${a.id}`}>
                      <div className={`activity-row__dot activity-row__dot--${a.type}`}></div>
                      <div className="activity-row__info">
                        <span className="activity-row__action">
                          {a.action} <strong>{a.item}</strong>
                        </span>
                        <span className="activity-row__time">{a.date} at {a.time}</span>
                      </div>
                      <span className={`badge badge--${a.type === 'resolved' ? 'found' : a.type}`}>
                        {a.type}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {/* Security */}
          {activeSection === 'security' && (
            <div className="profile-section" id="section-security">
              <div className="profile-section__header">
                <h2 className="profile-section__title">Security Settings</h2>
                <p className="profile-section__desc">Manage your password and account security.</p>
              </div>

              <div className="profile-card">
                <div className="profile-card__header">
                  <h3 className="profile-card__title">Change Password</h3>
                </div>
                <div className="security-form">
                  <div className="report-field">
                    <label className="report-field__label" htmlFor="current-password">Current Password</label>
                    <input type="password" id="current-password" className="report-field__input" placeholder="Enter current password" />
                  </div>
                  <div className="report-field">
                    <label className="report-field__label" htmlFor="new-password">New Password</label>
                    <input type="password" id="new-password" className="report-field__input" placeholder="Enter new password" />
                  </div>
                  <div className="report-field">
                    <label className="report-field__label" htmlFor="confirm-password">Confirm New Password</label>
                    <input type="password" id="confirm-password" className="report-field__input" placeholder="Confirm new password" />
                  </div>
                  <button className="security-form__submit" id="update-password">Update Password</button>
                </div>
              </div>

              <div className="profile-card">
                <div className="profile-card__header">
                  <h3 className="profile-card__title">Two-Factor Authentication</h3>
                </div>
                <div className="security-2fa">
                  <div className="security-2fa__info">
                    <div className="security-2fa__icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    </div>
                    <div>
                      <h4 className="security-2fa__title">Not Enabled</h4>
                      <p className="security-2fa__desc">Add an extra layer of security to your account.</p>
                    </div>
                  </div>
                  <button className="security-2fa__btn" id="enable-2fa">Enable 2FA</button>
                </div>
              </div>

              <div className="profile-card profile-card--danger">
                <div className="profile-card__header">
                  <h3 className="profile-card__title profile-card__title--danger">Danger Zone</h3>
                </div>
                <p className="profile-card__danger-desc">
                  Once you delete your account, there is no going back. All your reports and data will be permanently removed.
                </p>
                <button className="profile-card__danger-btn" id="delete-account">Delete Account</button>
              </div>
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
