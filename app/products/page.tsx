"use client";

import { useState } from 'react';
import { Search, Filter, Grid, List, Star, Heart, ShoppingCart } from 'lucide-react';

// Sample product data - you'd normally get this from a database/CMS
const allProducts = [
  {
    id: 'cute-dragon',
    name: 'Cute Dragon',
    price: 15,
    image: '/images/products/dragon.jpg',
    description: 'Adorable baby dragon perfect for desks and shelves',
    category: 'Animals',
    rating: 4.8,
    reviewCount: 24,
    inStock: true,
    featured: true,
    tags: ['dragon', 'fantasy', 'cute']
  },
  {
    id: 'sleepy-cat',
    name: 'Sleepy Cat',
    price: 12,
    image: '/images/products/cat.jpg',
    description: 'Perfect desk companion that brings calm to your workspace',
    category: 'Animals',
    rating: 4.9,
    reviewCount: 31,
    inStock: true,
    featured: true,
    tags: ['cat', 'cute', 'desk-toy']
  },
  {
    id: 'tiny-elephant',
    name: 'Tiny Elephant',
    price: 18,
    image: '/images/products/elephant.jpg',
    description: 'Lucky elephant for your home or office',
    category: 'Animals',
    rating: 4.7,
    reviewCount: 18,
    inStock: true,
    featured: false,
    tags: ['elephant', 'luck', 'cute']
  },
  {
    id: 'phone-stand',
    name: 'Phone Stand',
    price: 8,
    image: '/images/products/phone-stand.jpg',
    description: 'Adjustable phone stand for desk or nightstand',
    category: 'Functional',
    rating: 4.6,
    reviewCount: 42,
    inStock: true,
    featured: false,
    tags: ['phone', 'stand', 'functional']
  },
  {
    id: 'desk-organizer',
    name: 'Desk Organizer',
    price: 25,
    image: '/images/products/organizer.jpg',
    description: 'Multi-compartment organizer for pens, clips, and supplies',
    category: 'Functional',
    rating: 4.8,
    reviewCount: 29,
    inStock: true,
    featured: false,
    tags: ['organizer', 'desk', 'functional']
  },
  {
    id: 'mini-planter',
    name: 'Mini Planter',
    price: 14,
    image: '/images/products/planter.jpg',
    description: 'Cute geometric planter for succulents and small plants',
    category: 'Home & Garden',
    rating: 4.5,
    reviewCount: 16,
    inStock: false,
    featured: false,
    tags: ['planter', 'geometric', 'plants']
  },
  {
    id: 'custom-keychain',
    name: 'Custom Keychain',
    price: 6,
    image: '/images/products/keychain.jpg',
    description: 'Personalized keychain with your name or initials',
    category: 'Gifts',
    rating: 4.9,
    reviewCount: 67,
    inStock: true,
    featured: true,
    tags: ['keychain', 'custom', 'gift']
  },
  {
    id: 'dice-set',
    name: 'Gaming Dice Set',
    price: 22,
    image: '/images/products/dice.jpg',
    description: 'Complete D&D dice set in premium finish',
    category: 'Gaming',
    rating: 4.7,
    reviewCount: 35,
    inStock: true,
    featured: false,
    tags: ['dice', 'gaming', 'dnd']
  }
];

const categories = ['All', 'Animals', 'Functional', 'Home & Garden', 'Gifts', 'Gaming'];
const sortOptions = [
  { label: 'Featured', value: 'featured' },
  { label: 'Price: Low to High', value: 'price-asc' },
  { label: 'Price: High to Low', value: 'price-desc' },
  { label: 'Rating', value: 'rating' },
  { label: 'Name A-Z', value: 'name' }
];

export default function ProductsCatalog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('featured');
  const [viewMode, setViewMode] = useState('grid'); // 'grid' or 'list'
  const [showFilters, setShowFilters] = useState(false);

  // Filter and sort products
  const filteredProducts = allProducts
    .filter(product => {
      const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           product.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      const matchesCategory = selectedCategory === 'All' || product.category === selectedCategory;
      return matchesSearch && matchesCategory;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case 'price-asc':
          return a.price - b.price;
        case 'price-desc':
          return b.price - a.price;
        case 'rating':
          return b.rating - a.rating;
        case 'name':
          return a.name.localeCompare(b.name);
        case 'featured':
        default:
          return (b.featured ? 1 : 0) - (a.featured ? 1 : 0);
      }
    });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gray-900">
              Layer<span className="text-blue-600">Z</span> 3D
            </div>
            <nav className="hidden md:flex space-x-8">
              <a href="/" className="text-gray-700 hover:text-blue-600">Home</a>
              <a href="/products" className="text-blue-600 font-medium">Products</a>
              <a href="/custom" className="text-gray-700 hover:text-blue-600">Custom Orders</a>
              <a href="/contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Page Header */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
          <p className="text-lg text-gray-600">
            Discover our collection of custom 3D printed creations, from cute animals to functional designs.
          </p>
        </div>

        {/* Search and Filters */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="flex items-center gap-4">
              {/* Category Filter */}
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>

              {/* Sort */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {sortOptions.map(option => (
                  <option key={option.value} value={option.value}>{option.label}</option>
                ))}
              </select>

              {/* View Mode Toggle */}
              <div className="flex border border-gray-300 rounded-lg overflow-hidden">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 ${viewMode === 'grid' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 ${viewMode === 'list' ? 'bg-blue-600 text-white' : 'bg-white text-gray-600 hover:bg-gray-50'}`}
                >
                  <List size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <div className="mb-6">
          <p className="text-gray-600">
            Showing {filteredProducts.length} of {allProducts.length} products
            {selectedCategory !== 'All' && ` in ${selectedCategory}`}
          </p>
        </div>

        {/* Products Grid/List */}
        {viewMode === 'grid' ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="space-y-4">
            {filteredProducts.map((product) => (
              <ProductListItem key={product.id} product={product} />
            ))}
          </div>
        )}

        {/* No Results */}
        {filteredProducts.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No products found</h3>
            <p className="text-gray-600 mb-4">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
                setSortBy('featured');
              }}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
            >
              Clear All Filters
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

// Product Card Component (Grid View)
function ProductCard({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-lg transition-shadow group">
      <a href={`/products/${product.id}`} className="block">
        <div className="relative">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          {!product.inStock && (
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <span className="text-white font-semibold">Out of Stock</span>
            </div>
          )}
          {product.featured && (
            <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
              Featured
            </div>
          )}
        </div>
        
        <div className="p-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-1 group-hover:text-blue-600 transition-colors">{product.name}</h3>
          <p className="text-sm text-gray-600 mb-2 line-clamp-2">{product.description}</p>
          
          <div className="flex items-center gap-2 mb-3">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                />
              ))}
            </div>
            <span className="text-xs text-gray-500">({product.reviewCount})</span>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-xl font-bold text-blue-600">${product.price}</span>
          </div>
        </div>
      </a>
      
      {/* Separate buttons outside the link to prevent nested interactions */}
      <div className="px-4 pb-4 flex gap-2">
        <button className="absolute top-2 right-2 p-2 bg-white rounded-full shadow-md hover:bg-gray-50 opacity-0 group-hover:opacity-100 transition-opacity z-10">
          <Heart size={16} className="text-gray-600" />
        </button>
        <button
          disabled={!product.inStock}
          className={`flex-1 px-4 py-2 rounded-lg font-medium transition-colors ${
            product.inStock
              ? 'bg-blue-600 hover:bg-blue-700 text-white'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            // Add to cart logic here
            console.log('Add to cart:', product.name);
          }}
        >
          {product.inStock ? 'Add to Cart' : 'Out of Stock'}
        </button>
      </div>
    </div>
  );
}

// Product List Item Component (List View)
// function ProductListItem({ product }) {
//   return (
//     <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
//       <div className="flex flex-col md:flex-row gap-6">
      
// Product List Item Component (List View)
function ProductListItem({ product }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-48 flex-shrink-0">
          <a href={`/products/${product.id}`}>
            <div className="relative">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-32 md:h-48 object-cover rounded-lg hover:scale-105 transition-transform duration-300"
              />
              {!product.inStock && (
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center rounded-lg">
                  <span className="text-white font-semibold">Out of Stock</span>
                </div>
              )}
              {product.featured && (
                <div className="absolute top-2 left-2 bg-blue-600 text-white px-2 py-1 rounded text-xs font-semibold">
                  Featured
                </div>
              )}
            </div>
          </a>
        </div>
        
        <div className="flex-1 flex flex-col justify-between">
          <div>
            <div className="flex items-start justify-between mb-2">
              <a href={`/products/${product.id}`} className="hover:text-blue-600 transition-colors">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
              </a>
              <button className="p-1 text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={20} />
              </button>
            </div>
            
            <p className="text-gray-600 mb-3">{product.description}</p>
            
            <div className="flex items-center gap-4 mb-3">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'}
                  />
                ))}
                <span className="text-sm text-gray-500 ml-1">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>
              
              <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                {product.category}
              </span>
            </div>
          </div>
          
          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-blue-600">${product.price}</span>
            <div className="flex gap-2">
              <a
                href={`/products/${product.id}`}
                className="px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
              >
                View Details
              </a>
              <button
                disabled={!product.inStock}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  product.inStock
                    ? 'bg-blue-600 hover:bg-blue-700 text-white'
                    : 'bg-gray-200 text-gray-500 cursor-not-allowed'
                }`}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  // Add to cart logic here
                  console.log('Add to cart:', product.name);
                }}
              >
                <ShoppingCart size={16} className="inline mr-1" />
                {product.inStock ? 'Add to Cart' : 'Out of Stock'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}