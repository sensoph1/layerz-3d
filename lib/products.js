// lib/products.js (Product Data & Helper Functions)
export const products = [
  {
    id: 'cute-dragon',
    slug: 'cute-dragon',
    name: 'Cute Dragon',
    price: 15,
    images: [
      '/images/products/dragon-1.jpg',
      '/images/products/dragon-2.jpg', 
      '/images/products/dragon-3.jpg',
      '/images/products/dragon-4.jpg'
    ],
    description: 'Adorable baby dragon perfect for desks, shelves, or as a unique gift. Printed in high-quality PLA with smooth finish and fine details.',
    longDescription: 'This charming dragon figurine captures the whimsical spirit of fantasy creatures while maintaining an adorable, friendly appearance. Each dragon is carefully printed with premium PLA filament, ensuring durability and vibrant colors that last. Perfect for fantasy lovers, desk decoration, or as a unique gift that stands out from typical presents.',
    features: [
      'High-resolution 3D printing (0.15mm layer height)',
      'Premium PLA filament - safe and durable',
      'Hand-finished for smooth surface',
      'Available in multiple colors',
      'Perfect size for desk display'
    ],
    specifications: {
      'Print Height': '3-6 inches (depending on size)',
      'Material': 'PLA (Polylactic Acid)',
      'Layer Height': '0.15mm',
      'Print Time': '4-8 hours',
      'Weight': '50-150 grams'
    },
    sizes: [
      { name: 'Small', price: 12, description: '3" tall' },
      { name: 'Medium', price: 15, description: '4" tall' },
      { name: 'Large', price: 22, description: '6" tall' }
    ],
    colors: [
      { name: 'Forest Green', hex: '#228B22' },
      { name: 'Dragon Red', hex: '#DC143C' },
      { name: 'Royal Blue', hex: '#4169E1' },
      { name: 'Purple Magic', hex: '#8A2BE2' },
      { name: 'Sunset Orange', hex: '#FF8C00' },
      { name: 'Classic White', hex: '#FFFFFF' }
    ],
    category: 'Animals',
    tags: ['dragon', 'fantasy', 'cute', 'desk-toy', 'gift'],
    inStock: true,
    featured: true,
    rating: 4.8,
    reviewCount: 24,
    processingTime: '3-5 business days',
    weight: 75 // grams for shipping calculation
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
      { name: 'Small', price: 15, description: '2.5" tall' },
      { name: 'Medium', price: 18, description: '3.5" tall' },
      { name: 'Large', price: 25, description: '5" tall' }
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