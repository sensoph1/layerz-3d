// app/products/[slug]/page.tsx (Individual Product Pages) - v2.3
"use client";

import { useState, use } from 'react';
import Link from 'next/link';
import { ArrowLeft, ShoppingCart, Heart, Share2, Star, Truck, Shield, RotateCcw } from 'lucide-react';
import { getProductBySlug } from '../../../lib/products';

// TypeScript interfaces
interface ProductSize {
  name: string;
  price: number;
  description: string;
}

interface ProductColor {
  name: string;
  hex: string;
}

interface Product {
  id: string;
  slug: string;
  name: string;
  price: number;
  images: string[];
  description: string;
  longDescription: string;
  features: string[];
  specifications: Record<string, string>;
  sizes?: ProductSize[];
  colors: ProductColor[];
  category: string;
  tags: string[];
  inStock: boolean;
  featured: boolean;
  rating: number;
  reviewCount: number;
  processingTime: string;
  weight: number;
}

interface ProductPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default function ProductPage({ params }: ProductPageProps) {
  // Unwrap the async params
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  
  // State for interactive elements
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  
  // Calculate current price and total
  const currentPrice = product?.sizes?.[selectedSize]?.price || product?.price || 0;
  const totalPrice = currentPrice * quantity;
  
  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
          <Link href="/products" className="text-blue-600 hover:text-blue-700">
            ← Back to Products
          </Link>
        </div>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-4">
              <Link href="/products" className="flex items-center gap-2 text-gray-600 hover:text-gray-900">
                <ArrowLeft size={20} />
                <span>Back to Products</span>
              </Link>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              Layer<span className="text-blue-600">Z</span> 3D
            </div>
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Heart size={20} />
              </button>
              <button className="p-2 text-gray-600 hover:text-gray-900">
                <Share2 size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-2 gap-12">
          
          {/* ========== LEFT COLUMN - ALL TEXT ========== */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
              {product.reviewCount > 0 && (
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        size={16} 
                        className={i < Math.floor(product.rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'} 
                      />
                    ))}
                    <span className="text-sm text-gray-600 ml-2">
                      {product.rating} ({product.reviewCount} reviews)
                    </span>
                  </div>
                </div>
              )}
              <div className="text-3xl font-bold text-blue-600 mt-4">${currentPrice}</div>
            </div>

            {/* Size Selection */}
            {product.sizes && product.sizes.length > 1 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Size</h3>
                <div className="grid grid-cols-3 gap-3">
                  {product.sizes.map((size: ProductSize, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedSize(index)}
                      className={`p-3 rounded-lg border-2 text-center transition-colors ${
                        selectedSize === index
                          ? 'border-blue-600 bg-blue-50 text-blue-700'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <div className="font-semibold">{size.name}</div>
                      <div className="text-sm text-gray-600">{size.description}</div>
                      <div className="text-sm font-medium">${size.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            ) : product.sizes && product.sizes.length === 1 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Size</h3>
                <p className="text-gray-600">
                  {product.sizes[0].name} ({product.sizes[0].description})
                </p>
              </div>
            ) : null}

            {/* Color Selection */}
            {product.colors && product.colors.length > 1 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
                <div className="grid grid-cols-2 gap-3">
                  {product.colors.map((color: ProductColor, index: number) => (
                    <button
                      key={index}
                      onClick={() => setSelectedColor(index)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg border-2 transition-colors ${
                        selectedColor === index
                          ? 'border-blue-600 bg-blue-600 text-white shadow-lg'
                          : 'border-gray-300 bg-white text-gray-900 hover:border-blue-300 hover:bg-blue-50'
                      }`}
                    >
                      <div 
                        className="w-6 h-6 rounded-full border-2 border-white shadow-sm"
                        style={{ backgroundColor: color.hex }}
                      ></div>
                      <span className="text-sm font-semibold">{color.name}</span>
                    </button>
                  ))}
                </div>
              </div>
            ) : product.colors && product.colors.length === 1 ? (
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Color</h3>
                <div className="flex items-center gap-3">
                  <div 
                    className="w-6 h-6 rounded-full border-2 border-gray-300 shadow-sm"
                    style={{ backgroundColor: product.colors[0].hex }}
                  ></div>
                  <span className="text-gray-600">{product.colors[0].name}</span>
                </div>
              </div>
            ) : null}

            {/* Quantity and Add to Cart */}
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Quantity</h3>
                <div className="flex items-center space-x-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    -
                  </button>
                  <span className="text-lg font-semibold w-12 text-center">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 rounded-lg border border-gray-300 flex items-center justify-center hover:bg-gray-50"
                  >
                    +
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="text-2xl font-bold text-gray-900">
                  Total: ${totalPrice}
                </div>
                <button 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                  onClick={() => {
                    console.log('Add to cart:', {
                      product: product.name,
                      size: product.sizes?.[selectedSize]?.name,
                      color: product.colors?.[selectedColor]?.name,
                      quantity,
                      price: totalPrice
                    });
                    alert(`Added ${quantity} ${product.name} to cart!`);
                  }}
                >
                  <ShoppingCart size={20} />
                  Add to Cart
                </button>
                <button className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white py-4 px-6 rounded-lg font-semibold transition-colors">
                  Buy Now
                </button>
              </div>
            </div>

            {/* Tabs - Description, Features, and Reviews */}
            <div className="border-t pt-6">
              <div className="border-b mb-6">
                <nav className="flex space-x-8">
                  <button 
                    onClick={() => setActiveTab('description')}
                    className={`py-3 px-1 font-semibold border-b-2 transition-colors ${
                      activeTab === 'description' 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Description
                  </button>
                  <button 
                    onClick={() => setActiveTab('features')}
                    className={`py-3 px-1 font-semibold border-b-2 transition-colors ${
                      activeTab === 'features' 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Features
                  </button>
                  <button 
                    onClick={() => setActiveTab('reviews')}
                    className={`py-3 px-1 font-semibold border-b-2 transition-colors ${
                      activeTab === 'reviews' 
                        ? 'border-blue-600 text-blue-600' 
                        : 'border-transparent text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    Reviews {product.reviewCount > 0 ? `(${product.reviewCount})` : ''}
                  </button>
                </nav>
              </div>

              {/* Tab Content */}
              {activeTab === 'description' && (
                <div>
                  <p className="text-gray-600 leading-relaxed whitespace-pre-line">{product.longDescription}</p>
                </div>
              )}

              {activeTab === 'features' && (
                <div>
                  {product.features && product.features.length > 0 ? (
                    <ul className="space-y-3">
                      {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  ) : (
                    <p className="text-gray-600">No features listed for this product.</p>
                  )}
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="text-center py-8 text-gray-600">
                  <p className="text-lg mb-2">No reviews yet</p>
                  <p className="text-sm">Be the first to review this product!</p>
                </div>
              )}
            </div>

            {/* Features at Bottom */}
            <div className="border-t pt-6">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center gap-2">
                  <Truck className="text-blue-600" size={24} />
                  <div className="text-sm">
                    <div className="font-semibold">Free Shipping</div>
                    <div className="text-gray-600">Orders over $50</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <Shield className="text-green-600" size={24} />
                  <div className="text-sm">
                    <div className="font-semibold">Quality Guarantee</div>
                    <div className="text-gray-600">100% satisfaction</div>
                  </div>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <RotateCcw className="text-purple-600" size={24} />
                  <div className="text-sm">
                    <div className="font-semibold">Processing Time</div>
                    <div className="text-gray-600">{product.processingTime}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========== RIGHT COLUMN - ALL IMAGES ========== */}
          <div className="space-y-4">
            {/* Main Large Image */}
            <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
              <img 
                src={product.images[selectedImage]} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Two Column Grid of Remaining Images */}
            {product.images.length > 1 && (
              <div className="grid grid-cols-2 gap-4">
                {product.images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-colors ${
                      selectedImage === index 
                        ? 'border-blue-600' 
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <img 
                      src={image} 
                      alt={`${product.name} view ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}