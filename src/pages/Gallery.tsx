import { useState } from 'react';
import { galleryImages } from '../data/wedding';
import { OrnamentalRule } from '../components/OrnamentalRule/OrnamentalRule';
import './WeddingPages.css';

type GalleryFilter = 'all' | 'engagement' | 'proposal' | 'relationship';

const filters: { value: GalleryFilter; label: string }[] = [
  { value: 'all', label: 'All moments' },
  { value: 'engagement', label: 'Engagement' },
  { value: 'proposal', label: 'Proposal' },
  { value: 'relationship', label: 'Us, along the way' },
];

export function Gallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>('all');
  const visibleImages = activeFilter === 'all' ? galleryImages : galleryImages.filter((image) => image.category === activeFilter);

  return (
    <main className="guest-page gallery-page">
      <header className="guest-page-header">
        <p className="page-kicker">A Few Favorite Frames</p>
        <h1>Gallery</h1>
        <OrnamentalRule />
        <p>A small collection of the places, seasons, and ordinary days that brought us here.</p>
      </header>
      <div className="gallery-filters" aria-label="Filter photos">
        {filters.map((filter) => (
          <button
            className={activeFilter === filter.value ? 'gallery-filter gallery-filter--active' : 'gallery-filter'}
            key={filter.value}
            type="button"
            onClick={() => setActiveFilter(filter.value)}
          >
            {filter.label}
          </button>
        ))}
      </div>
      <div className="gallery-grid">
        {visibleImages.map((image) => (
          <figure className="gallery-item" key={image.src}>
            <img src={image.src} alt={image.alt} loading="lazy" />
          </figure>
        ))}
      </div>
    </main>
  );
}
