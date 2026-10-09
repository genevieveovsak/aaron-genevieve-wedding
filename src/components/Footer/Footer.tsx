import './Footer.css';
import { Link } from 'react-router-dom';
import { publicAsset } from '../../lib/assets';

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer-inner">
        <img
          className="site-footer-logo"
          src={publicAsset('images/floral-monogram-transparent.png')}
          alt="Aaron and Genevieve monogram"
        />
        <div className="site-footer-copy">
          <p className="site-footer-kicker">Questions About the Weekend?</p>
          <p className="site-footer-title">We&apos;d love to hear from you.</p>
          <div className="site-footer-links">
            <a href="mailto:genevieve.ovsak@gmail.com">genevieve.ovsak@gmail.com</a>
            <a href="tel:+19523032545">(952) 303-2545</a>
          </div>
          <nav className="site-footer-nav" aria-label="More wedding pages">
            <Link to="/gallery">Gallery</Link>
            <Link to="/faq">FAQs</Link>
          </nav>
        </div>
      </div>
      <p className="site-footer-note">Aaron &amp; Genevieve &middot; August 28, 2027</p>
    </footer>
  );
}
