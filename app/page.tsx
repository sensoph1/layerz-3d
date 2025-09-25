// app/page.tsx (Homepage)
"use client";

import { useState } from 'react';
import Link from 'next/link';
import { Camera, Mail, Phone, MapPin, Star, ArrowRight, Palette, Clock } from 'lucide-react';

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const featuredProducts = [
    {
      id: "cute-dragon",
      name: "Cute Dragon",
      price: "$15",
      image: "/images/products/dragon.jpg",
      description: "Adorable baby dragon in multiple colors"
    },
    {
      id: "sleepy-cat",
      name: "Sleepy Cat",
      price: "$12",
      image: "/images/products/cat.jpg",
      description: "Perfect desk companion"
    },
    {
      id: "tiny-elephant",
      name: "Tiny Elephant",
      price: "$18",
      image: "/images/products/elephant.jpg",
      description: "Lucky elephant for your home"
    },
    {
      id: "custom-pet",
      name: "Custom Pet",
      price: "Quote",
      image: "/images/products/custom-pet.jpg",
      description: "Your pet recreated in 3D"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="text-2xl font-bold text-gray-900">
                Layer<span className="text-blue-600">Z</span> 3D
              </div>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-900 hover:text-blue-600 font-medium">Home</Link>
              <Link href="/products" className="text-gray-700 hover:text-blue-600">Products</Link>
              <Link href="/custom" className="text-gray-700 hover:text-blue-600">Custom Orders</Link>
              <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
            </nav>
            <button className="md:hidden p-2">
              <div className="w-6 h-6 flex flex-col justify-center space-y-1">
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
                <div className="w-full h-0.5 bg-gray-600"></div>
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="bg-gradient-to-br from-blue-50 to-indigo-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
                Bringing Your Ideas to Life, 
                <span className="text-blue-600"> Layer by Layer</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Custom 3D printed creations specializing in adorable animals, unique gifts, 
                and personalized designs. From concept to creation, we handle every step.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/custom"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 transition-colors"
                >
                  <ArrowRight size={20} />
                  Start Custom Order
                </Link>
                <Link 
                  href="/products"
                  className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors text-center"
                >
                  Browse Products
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-4">
                  <img src="/api/placeholder/150/150" alt="3D printed dragon" className="rounded-lg shadow-md" />
                  <img src="/api/placeholder/150/150" alt="3D printed cat" className="rounded-lg shadow-md" />
                  <img src="/api/placeholder/150/150" alt="3D printed elephant" className="rounded-lg shadow-md" />
                  <img src="/api/placeholder/150/150" alt="Custom 3D print" className="rounded-lg shadow-md" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Why Choose LayerZ 3D?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine cutting-edge 3D printing technology with creative design to deliver 
              exceptional custom creations.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="text-blue-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Custom Designs</h3>
              <p className="text-gray-600">
                From your pet's likeness to original characters, we create unique designs tailored to your vision.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="text-green-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Fast Turnaround</h3>
              <p className="text-gray-600">
                Most orders completed within 3-5 business days, with rush options available.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Star className="text-purple-600" size={32} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Premium Quality</h3>
              <p className="text-gray-600">
                High-resolution printing with premium materials and attention to detail.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section id="products" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600">
              Explore our most popular 3D printed designs
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredProducts.map((product, index) => (
              <Link
                key={index} 
                href={`/products/${product.id || product.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group block"
              >
                <div className="relative overflow-hidden">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                    <Camera className="text-white opacity-0 group-hover:opacity-100 transition-opacity" size={32} />
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                    <span className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                      View Details
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link 
              href="/products"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold inline-flex items-center gap-2 transition-colors"
            >
              View All Products
              <ArrowRight size={20} />
            </Link>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              How It Works
            </h2>
            <p className="text-xl text-gray-600">
              Simple steps to get your custom 3D print
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Share Your Idea</h3>
              <p className="text-gray-600">
                Tell us what you want! Upload reference photos, describe your vision, or choose from our gallery.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">We Create & Print</h3>
              <p className="text-gray-600">
                Our team designs your custom model and prints it with premium materials and precision.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Enjoy Your Creation</h3>
              <p className="text-gray-600">
                Receive your unique 3D printed creation, ready to display, gift, or treasure forever.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to bring your idea to life? Let's chat about your project!
            </p>
          </div>
          <div className="bg-white rounded-2xl shadow-xl p-8">
            <div className="space-y-6">
              {/* Note: For Netlify forms, you'll need to add the actual form tag in your Next.js page */}
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="John Doe"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Project Description
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Tell us about your custom 3D printing project..."
                ></textarea>
              </div>
              <div className="text-center">
                <div
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold flex items-center justify-center gap-2 mx-auto transition-colors cursor-pointer"
                >
                  <Mail size={20} />
                  Send Message
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="text-2xl font-bold mb-4">
                Layer<span className="text-blue-400">Z</span> 3D
              </div>
              <p className="text-gray-300 mb-4">
                Custom 3D printing and design services. Bringing your imagination to life, one layer at a time.
              </p>
              <div className="flex space-x-4">
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
                <div className="w-8 h-8 bg-blue-600 rounded-full"></div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-300">
                <li>Custom Animal Figures</li>
                <li>Personalized Gifts</li>
                <li>Functional Prints</li>
                <li>Design Consultation</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center gap-2">
                  <Mail size={16} />
                  <span>hello@layerz3d.com</span>
                </div>
                <div className="flex items-center gap-2">
                  <Phone size={16} />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin size={16} />
                  <span>Your City, State</span>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2025 LayerZ 3D. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}