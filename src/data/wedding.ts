import { publicAsset } from '../lib/assets';

export const weddingDate = 'August 28, 2027';
export const weddingVenue = 'The Round Barn Farm';
export const weddingLocation = 'Red Wing, Minnesota';

export const schedule = [
  { time: '4:00 PM', event: 'Ceremony', detail: 'Outdoor ceremony on the lawn' },
  { time: '4:30 PM', event: 'Cocktail Hour', detail: 'Drinks, lawn games, and time to wander' },
  { time: '5:30 PM', event: 'Dinner & Toasts', detail: 'Good food and words from the people we love' },
  { time: '7:00 PM', event: 'Special Dances', detail: 'First dances, then the night opens up' },
  { time: '7:20 PM', event: 'Dancing', detail: 'Country favorites and a full dance floor' },
  { time: '8:00 PM', event: 'Bonfire', detail: 'Gather outside under the stars' },
  { time: '10:30 PM', event: 'Farewell', detail: 'Music winds down and the evening wraps up' },
];

export const menu = {
  cocktailHour: ['Huli-huli meatballs', 'Cheese and crackers'],
  dinner: ['Italian crusted chicken', 'Mac and cheese', 'Asparagus', 'Mashed potatoes and gravy', 'House salad'],
  dessert: ['Raspberry white chocolate cake', 'Raspberry white chocolate Bundtinis', 'Red velvet Bundtinis', 'Double chocolate Bundtinis', 'Carrot cake Bundtinis'],
};

export const faqs = [
  { question: 'What should I wear?', answer: 'Garden formal means dressy garden-party attire: colorful dresses, jumpsuits, dress shirts, tailored trousers, and elevated summer layers. Choose flats, wedges, or block heels for the gravel and grass; stilettos will be difficult to walk in.' },
  { question: 'Where should I park?', answer: 'Parking is available at Round Barn Farm. Follow the event signs when you arrive, and leave a little extra time to walk from the lot to the lawn.' },
  { question: 'Where should we stay?', answer: 'We are planning two room blocks: a full-service Hilton or Marriott option and a more budget-friendly option. Booking details will be shared once the hotels are confirmed. The St. James Hotel is also a lovely local favorite in historic downtown Red Wing.' },
  { question: 'Are children invited?', answer: 'Absolutely! Children are welcome to celebrate with us. Please include them in your RSVP notes so we can plan the seating and evening comfortably.' },
  { question: 'Can I bring a plus-one?', answer: 'We have planned each invitation individually. If your invitation includes a guest, their name will appear in your RSVP.' },
  { question: 'What happens if it rains?', answer: 'The ceremony will move into the covered pavilion if needed. The celebration will continue rain or shine, so bring a layer that makes you comfortable outdoors.' },
  { question: 'What will the weather be like?', answer: 'Late-August evenings are usually comfortable, around the upper 60s to low 70s after sunset, cooling toward the upper 50s later at night. A light jacket is optional but sensible, and fans will likely be available at the venue.' },
  { question: 'Is the venue accessible?', answer: 'The property includes gravel paths and gentle hills, with flat entrance alternatives wherever there are stairs. Please note any mobility needs in your RSVP so we can help you plan the most comfortable route.' },
];

export const galleryImages = [
  { category: 'engagement', alt: 'Aaron and Genevieve beneath a garden arch', src: publicAsset('images/couple-portrait.png') },
  { category: 'proposal', alt: 'Aaron and Genevieve floral monogram', src: publicAsset('images/floral-monogram-transparent.png') },
  { category: 'relationship', alt: 'The Round Barn Farm line drawing', src: publicAsset('images/round-barn.png') },
];
