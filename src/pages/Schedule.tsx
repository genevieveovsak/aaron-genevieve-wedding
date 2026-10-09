import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import { schedule, weddingDate } from '../data/wedding';
import './WeddingPages.css';

export function Schedule() {
  return (
    <main className="guest-page schedule-page">
      <header className="guest-page-header">
        <p className="page-kicker">Saturday, August 28, 2027</p>
        <h1>Schedule</h1>
        <OrnamentalRule />
        <p>{weddingDate} will begin with a garden ceremony and end with dancing, dessert, and a bonfire under the stars.</p>
      </header>

      <section className="guest-section">
        <h2>Wedding day</h2>
        <div className="schedule-list">
          {schedule.map((item) => (
            <div className="schedule-row" key={`${item.time}-${item.event}`}>
              <span className="schedule-time">{item.time}</span>
              <div>
                <strong>{item.event}</strong>
                <small>{item.detail}</small>
              </div>
            </div>
          ))}
        </div>
      </section>

    </main>
  );
}
