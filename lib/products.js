// lib/products.js (Product Data & Helper Functions) - v1.2
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
    'Print Height': '4-7 inches long (depending on size)',
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
    { name: 'Classic Red/Navy', hex: '#DC143C' },
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
  id: 'book-dragon',
  slug: 'book-dragon',
  name: 'Book Dragon',
  price: 20,
  images: [
    '/images/products/book-dragon/book-dragon-1.jpg',
    '/images/products/book-dragon/book-dragon-2.jpg',
    '/images/products/book-dragon/book-dragon-3.jpg',
    '/images/products/book-dragon/book-dragon-4.jpg',
    '/images/products/book-dragon/book-dragon-5.jpg',
    '/images/products/book-dragon/book-dragon-6.jpg'
  ],
  description: 'Whimsical articulated dragon with bookshelf spines and decorative details. Features rainbow gradient tri-color filament with pastel tones.',
  longDescription: 'Meet our enchanting Book Dragon - the perfect companion for readers, book lovers, and fantasy enthusiasts! This delightful articulated dragon features charming bookshelf-style spine segments running down its back, complete with decorative swirls and adorable details. The multi-colored gradient filament creates a stunning rainbow effect from pink to purple to blue, with soft pastel tones and crisp white accents that bring this magical creature to life.\n\nEach Book Dragon is printed with an articulated, flexible body that allows for endless posing possibilities. The whimsical design includes expressive googly eyes, delicate wings, and intricate decorative patterns that showcase the precision of 3D printing technology. Perfect for displaying on bookshelves, desks, or as a unique gift for the book lover in your life.',
  features: [
    'Fully articulated flexible body for dynamic posing',
    'Stunning tri-color rainbow gradient (pink/purple/blue)',
    'Bookshelf-inspired spine segments with decorative details',
    'Expressive googly eye and charming facial features',
    'Delicate wings and intricate swirl patterns',
    'High-quality multi-color PLA printing',
    'Perfect for book lovers and fantasy enthusiasts',
    'Unique conversation piece and desk companion'
  ],
  specifications: {
    'Print Height': '2-3 inches tall, 6-10 inches long (depending on size)',
    'Material': 'Multi-color PLA (Polylactic Acid)',
    'Layer Height': '0.15mm',
    'Print Time': '8-14 hours',
    'Weight': '100-250 grams',
    'Features': 'Articulated segments, rainbow gradient filament'
  },
  sizes: [
    { name: 'Small', price: 16, description: '6" long' },
    { name: 'Medium', price: 20, description: '8" long' },
    { name: 'Large', price: 28, description: '10" long' }
  ],
  colors: [
    { name: 'Rainbow Gradient (Pink/Purple/Blue)', hex: '#FFB6D9' },
    { name: 'Sunset Gradient (Orange/Pink/Yellow)', hex: '#FF8C42' },
    { name: 'Ocean Gradient (Blue/Teal/Green)', hex: '#4169E1' },
    { name: 'Forest Gradient (Green/Yellow/Blue)', hex: '#228B22' },
    { name: 'Galaxy Gradient (Purple/Blue/Pink)', hex: '#8A2BE2' }
  ],
  category: 'Animals',
  tags: ['dragon', 'book', 'articulated', 'flexible', 'rainbow', 'gradient', 'multi-color', 'fantasy', 'whimsical', 'cute', 'book-lover'],
  inStock: true,
  featured: true,
  rating: 0,
  reviewCount: 0,
  processingTime: '5-7 business days',
  weight: 150
},
 // Add this to your lib/products.js array
{
  id: 'robo-tortoise',
  slug: 'robo-tortoise',
  name: 'Robo Tortoise',
  price: 22,
  images: [
    '/images/products/robo-tortoise/robo-tortoise-1.jpg',
    '/images/products/robo-tortoise/robo-tortoise-2.jpg',
    '/images/products/robo-tortoise/robo-tortoise-3.jpg',
    '/images/products/robo-tortoise/robo-tortoise-4.jpg',
    '/images/products/robo-tortoise/robo-tortoise-5.jpg',
    '/images/products/robo-tortoise/robo-tortoise-6.jpg'
  ],
  description: 'Futuristic articulated robotic turtle with mechanical details and vibrant color schemes. Features fully poseable legs and intricate tech-inspired design.',
  longDescription: 'Step into the future with our incredible Robo Tortoise - where nature meets technology! This stunning articulated turtle showcases an impressive blend of mechanical engineering aesthetics and animal design. The detailed shell features geometric patterns and panel lines reminiscent of high-tech armor, while the articulated legs, head, and tail provide incredible poseability.\n\nEach segment is carefully designed with mechanical joints, gears, and tech-inspired details that make this more than just a toy - it\'s a conversation piece and a display of modern 3D printing capabilities. The vibrant cyan blue body contrasts beautifully with bold orange accents and sleek silver/gray mechanical components, creating a eye-catching cyberpunk aesthetic.\n\nPerfect for tech enthusiasts, sci-fi fans, turtle lovers, or anyone who appreciates the intersection of nature and robotics. Display it on your desk, shelf, or tech station as a testament to imagination and innovation.',
  features: [
    'Fully articulated legs, head, and tail for dynamic posing',
    'Intricate mechanical details and panel lines throughout',
    'Multi-color printing with vibrant color combinations',
    'Geometric shell design with tech-inspired patterns',
    'Detailed joints and gear-like mechanical elements',
    'Sturdy construction with smooth articulation',
    'Cyberpunk/sci-fi aesthetic design',
    'Perfect blend of organic and mechanical styling'
  ],
  specifications: {
    'Print Height': '3-5 inches tall, 4-8 inches long (depending on size)',
    'Material': 'Multi-color PLA (Polylactic Acid)',
    'Layer Height': '0.12mm (high detail)',
    'Print Time': '10-18 hours',
    'Weight': '120-300 grams',
    'Features': 'Fully articulated, multi-color, mechanical design'
  },
  sizes: [
    // { name: 'Small', price: 18, description: '4" long' },
    // { name: 'Medium', price: 22, description: '6" long' },
    { name: 'Large', price: 45, description: '8" long' }
  ],
  colors: [
    { name: 'Cyber Blue/Orange', hex: '#00B4D8' }
    
    // ,{ name: 'Neon Green/Purple', hex: '#39FF14' },
    // { name: 'Red/Black Tech', hex: '#DC143C' },
    // { name: 'White/Blue Arctic', hex: '#F0F8FF' },
    // { name: 'Gold/Black Steampunk', hex: '#FFD700' },
    // { name: 'Purple/Pink Synthwave', hex: '#8A2BE2' }
  ],
  category: 'Animals',
  tags: ['turtle', 'tortoise', 'robot', 'robotic', 'articulated', 'mechanical', 'tech', 'cyberpunk', 'sci-fi', 'futuristic', 'poseable'],
  inStock: true,
  featured: true,
  rating: 0,
  reviewCount: 0,
  processingTime: '6-8 business days',
  weight: 180
}
// ,
//   {
//     id: 'phone-stand',
//     slug: 'phone-stand',
//     name: 'Adjustable Phone Stand',
//     price: 8,
//     images: [
//       '/images/products/phone-stand-1.jpg',
//       '/images/products/phone-stand-2.jpg'
//     ],
//     description: 'Adjustable phone stand for desk or nightstand. Compatible with all phone sizes and cases.',
//     longDescription: 'This practical phone stand solves the daily problem of propping up your phone for video calls, watching content, or just keeping it visible on your desk. The adjustable angle design works with phones of all sizes, even with cases, and the sturdy base prevents tipping.',
//     features: [
//       'Adjustable viewing angle',
//       'Compatible with cases',
//       'Non-slip base',
//       'Works with all phone sizes',
//       'Minimal desk footprint'
//     ],
//     specifications: {
//       'Print Height': '4 inches',
//       'Material': 'PETG (extra durability)',
//       'Layer Height': '0.2mm',
//       'Print Time': '2-3 hours',
//       'Weight': '45 grams'
//     },
//     sizes: [
//       { name: 'Universal', price: 8, description: 'Fits all phones' }
//     ],
//     colors: [
//       { name: 'Matte Black', hex: '#2C2C2C' },
//       { name: 'Clean White', hex: '#FFFFFF' },
//       { name: 'Space Gray', hex: '#4A4A4A' },
//       { name: 'Ocean Blue', hex: '#006994' }
//     ],
//     category: 'Functional',
//     tags: ['phone', 'stand', 'functional', 'desk', 'adjustable'],
//     inStock: true,
//     featured: false,
//     rating: 4.6,
//     reviewCount: 42,
//     processingTime: '2-3 business days',
//     weight: 45
//   },
//   {
//     id: 'custom-keychain',
//     slug: 'custom-keychain',
//     name: 'Custom Keychain',
//     price: 6,
//     images: [
//       '/images/products/keychain-1.jpg',
//       '/images/products/keychain-2.jpg'
//     ],
//     description: 'Personalized keychain with your name, initials, or custom text. Perfect small gift or promotional item.',
//     longDescription: 'Make it personal with a custom keychain featuring your name, initials, company logo, or special message. These keychains are perfect for gifts, promotional items, or just adding a personal touch to your keys. Durable construction ensures they\'ll last for years of daily use.',
//     features: [
//       'Fully customizable text',
//       'Durable construction',
//       'Smooth edges and finish',
//       'Lightweight but strong',
//       'Quick turnaround time'
//     ],
//     specifications: {
//       'Print Height': '0.25 inches thick',
//       'Material': 'PETG (durability)',
//       'Layer Height': '0.15mm',
//       'Print Time': '30 minutes',
//       'Weight': '8 grams'
//     },
//     sizes: [
//       { name: 'Standard', price: 6, description: '2" x 0.75"' }
//     ],
//     colors: [
//       { name: 'Classic Black', hex: '#000000' },
//       { name: 'Bright Red', hex: '#FF0000' },
//       { name: 'Royal Blue', hex: '#4169E1' },
//       { name: 'Forest Green', hex: '#228B22' },
//       { name: 'Pure White', hex: '#FFFFFF' },
//       { name: 'Sunset Orange', hex: '#FF8C00' }
//     ],
//     category: 'Gifts',
//     tags: ['keychain', 'custom', 'gift', 'personalized', 'promotional'],
//     inStock: true,
//     featured: true,
//     rating: 4.9,
//     reviewCount: 67,
//     processingTime: '1-2 business days',
//     weight: 8
//   }
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