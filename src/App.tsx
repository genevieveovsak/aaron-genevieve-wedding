import { Navigate, Route, Routes } from 'react-router-dom';
import { EnvelopeIntro } from './components/EnvelopeIntro/EnvelopeIntro';
import { Nav } from './components/Nav/Nav';
import { Home } from './pages/Home';
import { OurStory } from './pages/OurStory';
import { Rsvp } from './pages/Rsvp';
import { Registry } from './pages/Registry';
import { Schedule } from './pages/Schedule';
import { Venue } from './pages/Venue';
import { Gallery } from './pages/Gallery';
import { Faq } from './pages/Faq';
import { Footer } from './components/Footer/Footer';

export default function App() {
  return (
    <EnvelopeIntro>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-story" element={<OurStory />} />
        <Route path="/details" element={<Navigate to="/schedule" replace />} />
        <Route path="/schedule" element={<Schedule />} />
        <Route path="/venue" element={<Venue />} />
        <Route path="/rsvp" element={<Rsvp />} />
        <Route path="/registry" element={<Registry />} />
        <Route path="/travel" element={<Navigate to="/venue" replace />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/faq" element={<Faq />} />
      </Routes>
      <Footer />
    </EnvelopeIntro>
  );
}
