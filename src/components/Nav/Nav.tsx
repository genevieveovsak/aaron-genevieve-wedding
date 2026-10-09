import { NavLink } from 'react-router-dom';
import './Nav.css';

const links = [
  { to: '/', label: 'Home' },
  { to: '/our-story', label: 'Story' },
  { to: '/venue', label: 'Venue' },
  { to: '/rsvp', label: 'RSVP' },
  { to: '/schedule', label: 'Schedule' },
  { to: '/registry', label: 'Registry' },
];

export function Nav() {
  return (
    <nav className="site-nav">
      <NavLink to="/" end className="site-nav-brand" aria-label="Aaron and Genevieve home">
        <span className="site-nav-brand-name">Aaron &amp; Genevieve</span>
        <span className="site-nav-brand-label">Our Wedding Day</span>
      </NavLink>
      <div className="site-nav-links">
        {links.map(({ to, label }) => (
          <NavLink
            key={to}
            to={to}
            end={to === '/'}
            className={({ isActive }) => (isActive ? 'site-nav-link site-nav-link--active' : 'site-nav-link')}
          >
            {label}
          </NavLink>
        ))}
      </div>
      <span className="site-nav-date">08.28.27</span>
    </nav>
  );
}
