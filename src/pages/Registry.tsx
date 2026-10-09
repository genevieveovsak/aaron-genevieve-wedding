import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import './WeddingPages.css';

export function Registry() {
  return (
    <main className="guest-page registry-page">
      <header className="guest-page-header">
        <p className="page-kicker">Gifts From the Heart</p>
        <h1>Registry</h1>
        <OrnamentalRule />
        <p>Your presence is the greatest gift, and we are so grateful you are making the trip to celebrate with us.</p>
      </header>

      <section className="guest-section">
        <h2>Two ways to help us make a home</h2>
        <div className="registry-options">
          <div className="registry-option">
            <span className="info-label">Registry one</span>
            <strong>Home goods</strong>
            <small>Pieces for our first home together</small>
            <span className="registry-link-placeholder">Link coming soon</span>
          </div>
          <div className="registry-option">
            <span className="info-label">Registry two</span>
            <strong>Everyday &amp; projects</strong>
            <small>Useful things for our Maple Grove home</small>
            <span className="registry-link-placeholder">Link coming soon</span>
          </div>
        </div>
      </section>

      <section className="registry-note">
        <p>We&apos;re still choosing the final registry links, and they&apos;ll appear here as they are ready.</p>
        <p>Please know that your presence, your good wishes, and a night together on the dance floor mean the most to us.</p>
      </section>
    </main>
  );
}
