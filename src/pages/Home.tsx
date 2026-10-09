import './Home.css';
import { useEffect, useState } from 'react';
import { RoundBarnMark } from '../components/RoundBarnMark/RoundBarnMark';
import { faqs } from '../data/wedding';

type Countdown = {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
};

const weddingMoment = new Date('2027-08-28T16:00:00-05:00').getTime();

function getCountdown(): Countdown {
  const remaining = Math.max(weddingMoment - Date.now(), 0);
  const totalSeconds = Math.floor(remaining / 1000);
  return {
    days: Math.floor(totalSeconds / 86400),
    hours: Math.floor((totalSeconds % 86400) / 3600),
    minutes: Math.floor((totalSeconds % 3600) / 60),
    seconds: totalSeconds % 60,
  };
}

export function Home() {
  const [countdown, setCountdown] = useState<Countdown>(getCountdown);

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown()), 1000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <section className="home-page">
      <RoundBarnMark className="home-barn-mark" />
      <p className="home-eyebrow">Our Wedding Day</p>
      <h1>Aaron <span>&amp;</span> Genevieve</h1>
      <p className="home-date">August 28, 2027 <b>&middot;</b> Red Wing, Minnesota</p>
      <p className="home-venue">The Round Barn Farm</p>
      <div className="home-ornament" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <p className="home-intro">
        Join us for our wedding day: a romantic garden ceremony, an unforgettable night of dancing, and everything in between.
      </p>
      <div className="home-countdown" aria-label="Countdown to the wedding">
        <p>Counting down to the celebration</p>
        <div>
          {Object.entries(countdown).map(([unit, value]) => (
            <span key={unit}><strong>{String(value).padStart(2, '0')}</strong><small>{unit}</small></span>
          ))}
        </div>
      </div>
      <figure className="home-photo">
        <img
          src="/images/couple-portrait.png"
          alt="Aaron and Genevieve beneath a flower-covered garden arch"
        />
        <figcaption>Our Favorite Place Is Together</figcaption>
      </figure>
      <section className="home-info-section home-details-section" id="home-details">
        <h2>The Details</h2>
        <div className="home-detail-grid">
          <div><span>When</span><strong>August 28, 2027</strong><small>Saturday celebration</small></div>
          <div><span>Where</span><strong>The Round Barn Farm</strong><small>Red Wing, Minnesota</small></div>
          <div><span>Ceremony</span><strong>4:00 PM</strong><small>Outdoor lawn</small></div>
          <div><span>Attire</span><strong>Garden formal</strong><small>Dressy garden-party attire</small></div>
        </div>
      </section>
      <section className="home-info-section home-faq-section" id="home-faqs">
        <h2>FAQs</h2>
        <div className="home-faq-list">
          {faqs.map((faq) => (
            <details key={faq.question}>
              <summary>{faq.question}</summary>
              <p>{faq.answer}</p>
            </details>
          ))}
        </div>
      </section>
    </section>
  );
}
