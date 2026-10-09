import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import { publicAsset } from '../lib/assets';
import './WeddingPages.css';

export function OurStory() {
  return (
    <main className="guest-page story-page">
      <header className="guest-page-header">
        <p className="page-kicker">How It Started</p>
        <h1>Our Story</h1>
        <OrnamentalRule />
        <p>We met on Hinge, ordered the best appetizers in St. Cloud, and have been building a life full of sports, movies, family, and adventure ever since.</p>
      </header>

      <section className="story-before">
        <article>
          <h2>Aaron</h2>
          <p>Aaron grew up in St. Augusta with three older siblings. He played football, but wrestling has always been his true favorite sport. Today he works as an assembly and service technician at Productivity Inc. in Plymouth.</p>
        </article>
        <article>
          <h2>Genevieve</h2>
          <p>Genevieve grew up in Hopkins and attended Edina High School. She played volleyball and basketball, then stuck with softball through high school and part of college. Today she is a product owner for the UnitedHealthcare mobile app at Optum.</p>
        </article>
      </section>

      <figure className="story-photo">
        <img src={publicAsset('images/couple-portrait.png')} alt="Aaron and Genevieve beneath a flower-covered garden arch" />
        <figcaption>Our Favorite Place Is Together</figcaption>
      </figure>

      <section className="guest-section story-section">
        <div className="story-intro">
          <p>Our first date was June 15, 2025, at the Old Brick House in St. Cloud, where we ordered pretzels with beer cheese, parmesan garlic wings, and spinach artichoke dip. We said “I love you” two months later, on August 15.</p>
          <p>We love slow Sunday mornings with smoothies, pancakes or waffles, and The Great British Bake Off. We have watched every Marvel film released since 2000 together; Aaron had never seen any of them before meeting Genevieve. We also share a love of sports, the outdoors, happy-hour appetizers, and trivia nights at Pints and Paddles, where Aaron is a true rockstar at the music identification round.</p>
          <p>We live together in Maple Grove, Minnesota, and have connected over the special awesomeness of both being the youngest sibling in the family. We love time at Genevieve&apos;s parents&apos; cabin on Boot Lake in Park Rapids, Sunday dinners with Aaron&apos;s family in St. Augusta, and every adventure still ahead of us.</p>
        </div>
        <div className="story-timeline">
          <div className="story-timeline-item">
            <span>06.15.25</span>
            <div><strong>The first date</strong><p>Hinge brought us to the Old Brick House in St. Cloud for appetizers and a very good beginning.</p></div>
          </div>
          <div className="story-timeline-item">
            <span>08.15.25</span>
            <div><strong>“I love you”</strong><p>Two months in, and somehow it already felt like the easiest thing in the world.</p></div>
          </div>
          <div className="story-timeline-item">
            <span>07.04.26</span>
            <div><strong>The engagement</strong><p>A beautiful Boot Lake Fourth of July became the beginning of our next chapter.</p></div>
          </div>
          <div className="story-timeline-item">
            <span>08.28.27</span>
            <div><strong>The Round Barn</strong><p>Our favorite people, a summer garden, and a night made for dancing.</p></div>
          </div>
        </div>
      </section>

      <section className="guest-section story-life-section">
        <h2>The life we love</h2>
        <div className="info-grid">
          <div><span className="info-label">Home base</span><strong>Maple Grove, MN</strong><small>Smoothies, movies, and Sunday mornings</small></div>
          <div><span className="info-label">Where we gather</span><strong>Family &amp; friends</strong><small>Boot Lake, St. Augusta, and trivia nights</small></div>
          <div><span className="info-label">Next adventure</span><strong>Oahu, Hawaii</strong><small>Our honeymoon, together</small></div>
        </div>
      </section>
    </main>
  );
}
