import { RoundBarnMark } from '../components/RoundBarnMark/RoundBarnMark';
import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import { weddingVenue } from '../data/wedding';
import './WeddingPages.css';

export function Venue() {
  return (
    <main className="guest-page venue-page">
      <header className="guest-page-header">
        <p className="page-kicker">Where We&apos;ll Say I Do</p>
        <h1>The Venue</h1>
        <OrnamentalRule />
        <p>{weddingVenue} is where the lawn, barn, and night sky all become part of the celebration.</p>
      </header>

      <section className="venue-grid">
        <div className="venue-panel venue-mark-panel"><RoundBarnMark /></div>
        <div className="venue-panel">
          <span className="info-label">The address</span>
          <h3>{weddingVenue}</h3>
          <p>28650 Wildwood Ln, Red Wing, MN 55066. On-site parking is free; follow the event signs when you arrive.</p>
        </div>
      </section>

      <section className="guest-section">
        <h2>The Farm</h2>
        <div className="info-grid">
          <div><span className="info-label">Parking</span><strong>Free &amp; on-site</strong><small>Large gravel lot with signage</small></div>
          <div><span className="info-label">Ceremony</span><strong>Covered pavilion</strong><small>Outdoor setting with shelter</small></div>
          <div><span className="info-label">Accessibility</span><strong>Flat entrances</strong><small>Gravel paths and gentle hills</small></div>
        </div>
      </section>

      <section className="guest-section venue-travel-section">
        <h2>Where to stay</h2>
        <p className="venue-section-intro">Red Wing is about an hour southeast of the Minneapolis-Saint Paul airport. A rental car is convenient, and downtown is easy to explore on foot.</p>
        <div className="info-grid">
          <div><span className="info-label">Full-service option</span><strong>Hilton or Marriott</strong><small>A polished hotel stay</small></div>
          <div><span className="info-label">Value option</span><strong>Second hotel block</strong><small>A pricing-friendly stay</small></div>
          <div><span className="info-label">Local favorite</span><strong>St. James Hotel</strong><small>Historic downtown</small></div>
        </div>
      </section>

      <section className="guest-section venue-local-section">
        <h2>While you&apos;re in Red Wing</h2>
        <ul className="venue-recommendations">
          <li><strong>Hanish&apos;s Bakery</strong><span>Start the morning with something sweet.</span></li>
          <li><strong>Red Wing Shoe Company</strong><span>A classic local stop and a little Minnesota history.</span></li>
          <li><strong>The St. James Hotel</strong><span>Historic downtown atmosphere.</span></li>
          <li><strong>Red Wing Golf Course</strong><span>A relaxed way to spend an afternoon.</span></li>
          <li><strong>Kelly&apos;s Tap House</strong><span>Drinks and a casual bite.</span></li>
          <li><strong>Hike the bluffs</strong><span>Big views over the river and town.</span></li>
        </ul>
      </section>
    </main>
  );
}
