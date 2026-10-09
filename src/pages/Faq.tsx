import { faqs } from '../data/wedding';
import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import './WeddingPages.css';

export function Faq() {
  return (
    <main className="guest-page faq-page">
      <header className="guest-page-header">
        <p className="page-kicker">A Few Helpful Things</p>
        <h1>FAQs</h1>
          <h1>FAQs</h1>
        <OrnamentalRule />
        <p>Everything you need for a comfortable, joyful weekend in Red Wing.</p>
      </header>
      <div className="faq-list">
        {faqs.map((faq) => (
          <details key={faq.question}>
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </main>
  );
}
