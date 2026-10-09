export type RsvpPayload = {
  name: string;
  attending: 'yes' | 'no';
  guestCount: number;
  songRequest?: string;
  notes?: string;
};

// Set this after deploying the Google Apps Script web app (see google-apps-script/Code.gs).
const RSVP_ENDPOINT = import.meta.env.VITE_RSVP_ENDPOINT ?? '';

export async function submitRsvp(payload: RsvpPayload): Promise<void> {
  if (!RSVP_ENDPOINT) {
    throw new Error('RSVP endpoint is not configured. Set VITE_RSVP_ENDPOINT in your .env file.');
  }

  const response = await fetch(RSVP_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'text/plain' },
    body: JSON.stringify(payload),
  });

  if (!response.ok) {
    throw new Error(`RSVP submission failed with status ${response.status}`);
  }
}
