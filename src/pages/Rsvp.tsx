import { FormEvent, useState } from 'react';
import { submitRsvp } from '../lib/rsvp';
import './Rsvp.css';

type Status = 'idle' | 'submitting' | 'success' | 'error';

export function Rsvp() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<'yes' | 'no'>('yes');
  const [guestCount, setGuestCount] = useState(1);
  const [songRequest, setSongRequest] = useState('');
  const [notes, setNotes] = useState('');
  const [status, setStatus] = useState<Status>('idle');

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setStatus('submitting');

    try {
      await submitRsvp({
        name,
        attending,
        guestCount: attending === 'yes' ? guestCount : 0,
        songRequest: attending === 'yes' ? songRequest : undefined,
        notes,
      });
      setStatus('success');
    } catch {
      setStatus('error');
    }
  }

  if (status === 'success') {
    return (
      <section className="rsvp-page">
        <h1>Thank you, {name}!</h1>
        <p>Your RSVP has been recorded. We can&apos;t wait to celebrate with you.</p>
      </section>
    );
  }

  return (
    <section className="rsvp-page">
      <p className="page-kicker">We Hope You Can Join Us</p>
      <h1>RSVP</h1>
      <p>Please reply by July 1, 2027. We can&apos;t wait to celebrate with you.</p>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <p className="rsvp-section-label">Your Reply</p>
        <label>
          Full name
          <input value={name} onChange={(event) => setName(event.target.value)} required />
        </label>

        <fieldset>
          <legend>Will you be attending?</legend>
          <label className="radio-option">
            <input
              type="radio"
              name="attending"
              checked={attending === 'yes'}
              onChange={() => setAttending('yes')}
            />
            Joyfully accepts
          </label>
          <label className="radio-option">
            <input
              type="radio"
              name="attending"
              checked={attending === 'no'}
              onChange={() => setAttending('no')}
            />
            Regretfully declines
          </label>
        </fieldset>

        {attending === 'yes' && (
          <>
            <p className="rsvp-section-label">Reception Details</p>
            <label>
              Number of guests (including you)
              <input
                type="number"
                min={1}
                max={6}
                value={guestCount}
                onChange={(event) => setGuestCount(Number(event.target.value))}
              />
            </label>

            <label>
              Song request
              <input value={songRequest} onChange={(event) => setSongRequest(event.target.value)} />
            </label>
          </>
        )}

        <p className="rsvp-section-label">A Few Extras</p>
        <label>
          Notes (allergies, accessibility needs, etc.)
          <textarea value={notes} onChange={(event) => setNotes(event.target.value)} rows={3} />
        </label>

        {status === 'error' && (
          <p className="rsvp-error">Something went wrong submitting your RSVP. Please try again.</p>
        )}

        <button type="submit" disabled={status === 'submitting'}>
          {status === 'submitting' ? 'Sending...' : 'Send RSVP'}
        </button>
      </form>
    </section>
  );
}
