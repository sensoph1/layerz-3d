// app/products/[slug]/page.tsx
// app/products/[slug]/page.tsx (Individual Product Pages)
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

// Simple interactive component embedded in the page
function ProductInteractiveElements({ product }: { product: Product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedSize, setSelectedSize] = useState(0);
  const [selectedColor, setSelectedColor] = useState(0);
  const [quantity, setQuantity] = useState(1);
  
  const currentPrice = product.sizes?.[selectedSize]?.price || product.price;
  const totalPrice = currentPrice * quantity;

  return (
    <div className="space-y-6">
      {/* Product Images */}
      <div className="space-y-4">
        {/* Main Image */}
        <div className="aspect-square bg-gray-100 rounded-2xl overflow-hidden">
          <img 
            src={product.images[selectedImage]} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Thumbnail Images */}
        {product.images.length > 1 && (
          <div className="grid grid-cols-4 gap-4">
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

      {/* Size Selection */}
      {product.sizes && product.sizes.length > 1 && (
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
      )}

      {/* Color Selection */}
      {product.colors && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Color</h3>
          <div className="flex flex-wrap gap-3">
                          {product.colors.map((color: ProductColor, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedColor(index)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border-2 transition-colors ${
                  selectedColor === index
                    ? 'border-blue-600 bg-blue-50'
                    : 'border-gray-200 hover:border-gray-300'
                }`}
              >
                <div 
                  className="w-5 h-5 rounded-full border border-gray-300"
                  style={{ backgroundColor: color.hex }}
                ></div>
                <span className="text-sm">{color.name}</span>
              </button>
            ))}
          </div>
        </div>
      )}

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
    </div>
  );
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
          {/* Product Images and Interactive Elements */}
          <ProductInteractiveElements product={product} />

          {/* Product Details */}
          <div className="space-y-6">
            {/* Title and Price */}
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
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
              <div className="text-3xl font-bold text-blue-600">${product.price}</div>
            </div>

            {/* Description */}
            <div>
              <p className="text-gray-600 leading-relaxed">{product.description}</p>
            </div>

            {/* Features */}
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
        </div>

        {/* Product Details Tabs */}
        <div className="mt-16">
          <div className="border-b">
            <nav className="flex space-x-8">
              <button className="border-b-2 border-blue-600 text-blue-600 py-4 px-1 font-semibold">
                Description
              </button>
              <button className="text-gray-600 hover:text-gray-900 py-4 px-1">
                Specifications
              </button>
              <button className="text-gray-600 hover:text-gray-900 py-4 px-1">
                Reviews ({product.reviewCount})
              </button>
            </nav>
          </div>
          
          <div className="py-8">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Product Details</h3>
                <p className="text-gray-600 leading-relaxed mb-6">{product.longDescription}</p>
                
                <h4 className="font-semibold text-gray-900 mb-3">Features:</h4>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Specifications</h3>
                <div className="space-y-3">
                  {Object.entries(product.specifications).map(([key, value]) => (
                    <div key={key} className="flex justify-between py-2 border-b border-gray-100">
                      <span className="font-medium text-gray-700">{key}:</span>
                      <span className="text-gray-600">{value}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}