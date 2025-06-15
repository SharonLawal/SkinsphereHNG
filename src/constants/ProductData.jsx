import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';
import img5 from '../assets/img5.png';
import img6 from '../assets/img6.png';
import img7 from '../assets/img7.png';
import img8 from '../assets/img8.png';
import img9 from '../assets/img9.png';
import img10 from '../assets/img10.png';
import img11 from '../assets/img11.png';
import img12 from '../assets/img12.png';

export const allProducts = [
  {
    id: 1,
    image: img3,
    name: 'Radiant Glow Serum',
    price: 52000,
    category: 'Serum',
    description: 'Unleash your skin\'s natural radiance with this potent serum, formulated to visibly brighten and even skin tone for an unmistakable glow.',
  },
  {
    id: 2,
    image: img4,
    name: 'Hydrating Face Cleanser',
    price: 48000,
    category: 'Cleanser',
    description: 'Gently cleanse away impurities while infusing your skin with essential hydration. Leaves your face feeling soft, never stripped.',
  },
  {
    id: 3,
    image: img7,
    name: 'Anti-Aging Elixir',
    price: 65000,
    category: 'Serum',
    description: 'Turn back the clock with this luxurious elixir. Diminishes the appearance of fine lines and wrinkles, promoting a firmer, more youthful complexion.',
  },
  {
    id: 4,
    image: img8,
    name: 'Gentle Foaming Wash',
    price: 45000,
    category: 'Cleanser',
    description: 'A delicate yet effective foaming wash that purifies pores and removes daily grime, leaving skin refreshed and balanced.',
  },
  {
    id: 5,
    image: img9,
    name: 'Deep Moisture Cream',
    price: 55000,
    category: 'Moisturizer',
    description: 'Indulge your skin with intense, long-lasting hydration. This rich cream locks in moisture, comforting dry and tired skin instantly.',
  },
  {
    id: 6,
    image: img10,
    name: 'Balancing Face Oil',
    price: 60000,
    category: 'Face Oil',
    description: 'Achieve perfect harmony for your skin. This lightweight oil balances oil production, soothes irritation, and promotes a healthy glow without greasiness.',
  },
  {
    id: 7,
    image: img11,
    name: 'Brightening Vitamin C Serum',
    price: 70000,
    category: 'Serum',
    description: 'Boost your skin\'s luminosity with a powerful dose of Vitamin C. Fades dark spots, improves texture, and protects against environmental stressors.',
  },
  {
    id: 8,
    image: img12,
    name: 'Pore Refining Cleanser',
    price: 47000,
    category: 'Cleanser',
    description: 'Minimize the look of pores and achieve a smoother complexion. This cleanser deeply purifies without over-drying, leaving skin clear and refined.',
  },
  {
    id: 9,
    image: img3,
    name: 'Nourishing Night Cream',
    price: 58000,
    category: 'Moisturizer',
    description: 'Wake up to rejuvenated skin. This advanced night cream works while you sleep to repair, hydrate, and restore your skin\'s vitality.',
  },
  {
    id: 10,
    image: img4,
    name: 'Soothing Facial Oil',
    price: 62000,
    category: 'Face Oil',
    description: 'Calm and comfort sensitive skin with this gentle facial oil. Reduces redness and irritation, providing deep nourishment and a healthy barrier.',
  },
  {
    id: 11,
    image: img5,
    name: 'Daily Defense SPF',
    price: 50000,
    category: 'Moisturizer',
    description: 'Your everyday shield against harmful UV rays. This lightweight moisturizer with SPF 30 protects your skin while keeping it hydrated and soft.',
  },
  {
    id: 12,
    image: img6,
    name: 'Acne Control Cleanser',
    price: 49000,
    category: 'Cleanser',
    description: 'Target breakouts and achieve clearer skin. This powerful cleanser deeply cleanses pores and helps prevent future blemishes without harshness.',
  },
];

export const getProductsByCategory = (category) => {
  return allProducts.filter(product => product.category === category);
};