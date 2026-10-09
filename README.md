# Wedding Website

React + Vite + TypeScript + Framer Motion. Opens with an envelope animation that
unfolds like an invitation before revealing the homepage.

## Getting started

```bash
npm install
cp .env.example .env   # then fill in VITE_RSVP_ENDPOINT once the Apps Script is deployed
npm run dev
```

> Run `npm install` from a network that can reach `registry.npmjs.org` directly
> (home Wi-Fi, not a corporate VPN/proxy).

## RSVP -> Google Sheet

RSVPs are posted to a small Google Apps Script web app, which appends a row to a
Google Sheet. See `google-apps-script/Code.gs` for the script and deployment steps.

Once deployed, put the web app URL in `.env` as `VITE_RSVP_ENDPOINT`.

## Project structure

- `src/components/EnvelopeIntro` — the envelope-opening / unfold intro animation
- `src/components/Nav` — site navigation
- `src/pages` — Home, Our Story, Details, RSVP, Registry, Travel
- `src/lib/rsvp.ts` — posts RSVP form data to the Apps Script endpoint
- `google-apps-script/Code.gs` — backend script that writes RSVPs into a Sheet

## Customizing the intro

The unfold sequence lives in `EnvelopeIntro.tsx` as a `phase` state machine:
`closed -> flap -> cardOut -> unfold -> done`. Timings are controlled by the
`setTimeout` calls in `handleOpen`, and the panel fold angles are in
`panelVariants`. It only plays once per browser session (see `SESSION_KEY`).
