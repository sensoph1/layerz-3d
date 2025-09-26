// lib/products.js (Product Data & Helper Functions)
export const products = [
  {
  id: 'grumpy-dragon',
  slug: 'grumpy-dragon',
  name: 'Grumpy Dragon',
  price: 18,
  images: [
    '/images/products/grumpy-dragon/grumpy-dragon-1.jpg',
    '/images/products/grumpy-dragon/grumpy-dragon-2.jpg',
    '/images/products/grumpy-dragon/grumpy-dragon-3.jpg',
    '/images/products/grumpy-dragon/grumpy-dragon-4.jpg',
    '/images/products/grumpy-dragon/grumpy-dragon-5.jpg',
    '/images/products/grumpy-dragon/grumpy-dragon-6.jpg'
  ],
  description: 'Adorably fierce desktop companion with a signature scowl and flexible articulated body. Perfect for expressing your grumpy mood!',
  longDescription: 'Meet our charmingly cranky Grumpy Dragon - the perfect blend of cute and fierce! This delightful 3D printed figurine captures that classic "don\'t talk to me before my coffee" attitude that we all know and love. With his signature scowl, spiky navy blue back plates, and warm coral-red body, this little guy brings personality and humor to any space. This dragon isn\'t just a decoration - he\'s a mood! His flexible body lets you pose him however matches your current mood.',
  features: [
    'Expressive grumpy facial features with signature scowl',
    'Articulated flexible body for natural posing',
    'Two-tone color scheme - coral red with navy spikes',
    'High-quality PLA printing with smooth finish',
    'Perfect desktop or shelf companion',
    'Conversation starter with personality'
  ],
  specifications: {
    'Print Height': '4-8.5 inches long (depending on size)',
    'Material': 'PLA (Polylactic Acid)',
    'Layer Height': '0.15mm',
    'Print Time': '6-10 hours',
    'Weight': '80-200 grams',
    'Features': 'Articulated segments, flexible posing'
  },
  sizes: [
    { name: 'Small', price: 15, description: '4" long' },
    { name: 'Medium', price: 18, description: '5.5" long' },
    { name: 'Large', price: 25, description: '7" long' }
  ],
  colors: [
    { name: 'Classic Red/Black', hex: '#DC143C' },
    { name: 'Forest Green/Black', hex: '#228B22' },
    { name: 'Royal Blue/Silver', hex: '#4169E1' },
    { name: 'Purple Magic/Black', hex: '#8A2BE2' },
    { name: 'Sunset Orange/Brown', hex: '#FF8C00' },
    { name: 'Pink/White', hex: '#FF1493' }
  ],
  category: 'Animals',
  tags: ['dragon', 'grumpy', 'articulated', 'flexible', 'cute', 'desk-toy', 'fantasy', 'humor'],
  inStock: true,
  featured: true,
  rating: 4.9,
  reviewCount: 15,
  processingTime: '4-6 business days',
  weight: 120
},
  {
    id: 'sleepy-cat',
    slug: 'sleepy-cat',
    name: 'Sleepy Cat',
    price: 12,
    images: [
      '/images/products/cat-1.jpg',
      '/images/products/cat-2.jpg',
      '/images/products/cat-3.jpg'
    ],
    description: 'Perfect desk companion that brings calm to your workspace. This adorable sleeping cat figurine adds personality without distraction.',
    longDescription: 'Our sleepy cat figurine captures that peaceful moment when cats curl up for a nap. The serene expression and comfortable pose make it an ideal desk companion that promotes calm and focus in your workspace. Each cat is printed with careful attention to the subtle curves and peaceful expression.',
    features: [
      'Calming, peaceful design',
      'Smooth, rounded edges',
      'Perfect desk size',
      'Non-distracting presence',
      'Detailed facial features'
    ],
    specifications: {
      'Print Height': '2-4 inches (depending on size)',
      'Material': 'PLA (Polylactic Acid)',
      'Layer Height': '0.15mm',
      'Print Time': '3-6 hours',
      'Weight': '30-100 grams'
    },
    sizes: [
      { name: 'Small', price: 10, description: '2" long' },
      { name: 'Medium', price: 12, description: '3" long' },
      { name: 'Large', price: 18, description: '4" long' }
    ],
    colors: [
      { name: 'Tabby Orange', hex: '#D2691E' },
      { name: 'Midnight Black', hex: '#2F4F4F' },
      { name: 'Pearl White', hex: '#F5F5DC' },
      { name: 'Silver Gray', hex: '#A9A9A9' },
      { name: 'Calico Mix', hex: '#DEB887' }
    ],
    category: 'Animals',
    tags: ['cat', 'cute', 'desk-toy', 'peaceful', 'pet'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 31,
    processingTime: '3-5 business days',
    weight: 45
  },
  {
    id: 'tiny-elephant',
    slug: 'tiny-elephant',
    name: 'Tiny Elephant',
    price: 18,
    images: [
      '/images/products/elephant-1.jpg',
      '/images/products/elephant-2.jpg'
    ],
    description: 'Lucky elephant for your home or office. Traditional symbol of wisdom, strength, and good fortune.',
    longDescription: 'Elephants have long been symbols of wisdom, memory, and good fortune across many cultures. This tiny elephant figurine brings those positive associations to your space while showcasing the intricate detail possible with modern 3D printing. The trunk-up position is traditionally considered especially lucky.',
    features: [
      'Traditional lucky trunk-up position',
      'Intricate surface texturing',
      'Symbol of wisdom and strength',
      'Compact size for any space',
      'Cultural significance'
    ],
    specifications: {
      'Print Height': '2.5-5 inches (depending on size)',
      'Material': 'PLA (Polylactic Acid)',
      'Layer Height': '0.12mm (extra fine detail)',
      'Print Time': '4-7 hours',
      'Weight': '40-120 grams'
    },
    sizes: [
      { name: 'Small', price: 15, description: '2.5" long' },
      { name: 'Medium', price: 18, description: '3.5" long' },
      { name: 'Large', price: 25, description: '5" long' }
    ],
    colors: [
      { name: 'Elephant Gray', hex: '#696969' },
      { name: 'Ivory White', hex: '#FFFFF0' },
      { name: 'Sage Green', hex: '#9CAF88' },
      { name: 'Warm Bronze', hex: '#CD7F32' },
      { name: 'Deep Blue', hex: '#191970' }
    ],
    category: 'Animals',
    tags: ['elephant', 'luck', 'cute', 'wisdom', 'traditional'],
    inStock: true,
    featured: false,
    rating: 4.7,
    reviewCount: 18,
    processingTime: '3-5 business days',
    weight: 65
  },
  {
    id: 'phone-stand',
    slug: 'phone-stand',
    name: 'Adjustable Phone Stand',
    price: 8,
    images: [
      '/images/products/phone-stand-1.jpg',
      '/images/products/phone-stand-2.jpg'
    ],
    description: 'Adjustable phone stand for desk or nightstand. Compatible with all phone sizes and cases.',
    longDescription: 'This practical phone stand solves the daily problem of propping up your phone for video calls, watching content, or just keeping it visible on your desk. The adjustable angle design works with phones of all sizes, even with cases, and the sturdy base prevents tipping.',
    features: [
      'Adjustable viewing angle',
      'Compatible with cases',
      'Non-slip base',
      'Works with all phone sizes',
      'Minimal desk footprint'
    ],
    specifications: {
      'Print Height': '4 inches',
      'Material': 'PETG (extra durability)',
      'Layer Height': '0.2mm',
      'Print Time': '2-3 hours',
      'Weight': '45 grams'
    },
    sizes: [
      { name: 'Universal', price: 8, description: 'Fits all phones' }
    ],
    colors: [
      { name: 'Matte Black', hex: '#2C2C2C' },
      { name: 'Clean White', hex: '#FFFFFF' },
      { name: 'Space Gray', hex: '#4A4A4A' },
      { name: 'Ocean Blue', hex: '#006994' }
    ],
    category: 'Functional',
    tags: ['phone', 'stand', 'functional', 'desk', 'adjustable'],
    inStock: true,
    featured: false,
    rating: 4.6,
    reviewCount: 42,
    processingTime: '2-3 business days',
    weight: 45
  },
  {
    id: 'custom-keychain',
    slug: 'custom-keychain',
    name: 'Custom Keychain',
    price: 6,
    images: [
      '/images/products/keychain-1.jpg',
      '/images/products/keychain-2.jpg'
    ],
    description: 'Personalized keychain with your name, initials, or custom text. Perfect small gift or promotional item.',
    longDescription: 'Make it personal with a custom keychain featuring your name, initials, company logo, or special message. These keychains are perfect for gifts, promotional items, or just adding a personal touch to your keys. Durable construction ensures they\'ll last for years of daily use.',
    features: [
      'Fully customizable text',
      'Durable construction',
      'Smooth edges and finish',
      'Lightweight but strong',
      'Quick turnaround time'
    ],
    specifications: {
      'Print Height': '0.25 inches thick',
      'Material': 'PETG (durability)',
      'Layer Height': '0.15mm',
      'Print Time': '30 minutes',
      'Weight': '8 grams'
    },
    sizes: [
      { name: 'Standard', price: 6, description: '2" x 0.75"' }
    ],
    colors: [
      { name: 'Classic Black', hex: '#000000' },
      { name: 'Bright Red', hex: '#FF0000' },
      { name: 'Royal Blue', hex: '#4169E1' },
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Pure White', hex: '#FFFFFF' },
      { name: 'Sunset Orange', hex: '#FF8C00' }
    ],
    category: 'Gifts',
    tags: ['keychain', 'custom', 'gift', 'personalized', 'promotional'],
    inStock: true,
    featured: true,
    rating: 4.9,
    reviewCount: 67,
    processingTime: '1-2 business days',
    weight: 8
  }
];

// Helper functions to work with the data
export function getProductBySlug(slug) {
  return products.find(product => product.slug === slug);
}

export function getProductById(id) {
  return products.find(product => product.id === id);
}

export function getFeaturedProducts() {
  return products.filter(product => product.featured);
}

export function getProductsByCategory(category) {
  if (category === 'All') return products;
  return products.filter(product => product.category === category);
}

export function searchProducts(query) {
  const lowercaseQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowercaseQuery) ||
    product.description.toLowerCase().includes(lowercaseQuery) ||
    product.tags.some(tag => tag.toLowerCase().includes(lowercaseQuery))
  );
}

export function getCategories() {
  const categories = [...new Set(products.map(product => product.category))];
  return ['All', ...categories];
}

// For easy import in components
export default products;