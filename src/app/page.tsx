'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Star,
  Calendar,
  Phone,
  MapPin,
  Instagram,
  Facebook,
  Youtube,
  Sparkles,
  Heart,
  Award,
  Palette,
  Camera,
  User,
  Clock,
  Gift,
  ChevronRight,
  Mail,
  ArrowUp,
} from 'lucide-react';
import Image from 'next/image';

const ModernBeautySalon = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const services = [
    {
      name: 'Bridal Makeup',
      price: '€150',
      duration: '3 hours',
      description: 'Complete bridal look with trial session',
      icon: <Heart size={24} className="text-rose-500" />,
      features: [
        'Trial session included',
        'Long-lasting formula',
        'Touch-up kit provided',
      ],
    },
    {
      name: 'Evening Glam',
      price: '€85',
      duration: '90 min',
      description: 'Perfect for special occasions',
      icon: <Sparkles size={24} className="text-purple-500" />,
      features: [
        'Dramatic eye makeup',
        'Contouring & highlighting',
        'Perfect for events',
      ],
    },
    {
      name: 'Natural Makeup',
      price: '€65',
      duration: '60 min',
      description: 'Fresh, everyday beautiful look',
      icon: <Palette size={24} className="text-green-500" />,
      features: [
        'Skin-enhancing finish',
        'Subtle color palette',
        'Day-to-night ready',
      ],
    },
    {
      name: 'Photo Shoot Ready',
      price: '€120',
      duration: '2 hours',
      description: 'Professional makeup for photography',
      icon: <Camera size={24} className="text-blue-500" />,
      features: [
        'HD camera ready',
        'Professional lighting',
        'Multiple looks available',
      ],
    },
  ];

  const testimonials = [
    {
      name: 'Isabella R.',
      rating: 5,
      text: 'My wedding makeup was absolutely perfect! The team made me feel like a princess on my special day. The trial session helped us create the exact look I dreamed of.',
      service: 'Bridal Makeup',
      location: 'Amsterdam',
    },
    {
      name: 'Sophia M.',
      rating: 5,
      text: 'The attention to detail is incredible. Every time I leave feeling confident and beautiful. The artists really listen to what you want and deliver beyond expectations.',
      service: 'Evening Glam',
      location: 'Utrecht',
    },
    {
      name: 'Olivia K.',
      rating: 5,
      text: 'Professional, talented, and such a lovely atmosphere. My go-to beauty salon! The natural makeup look they created enhanced my features perfectly.',
      service: 'Natural Makeup',
      location: 'Rotterdam',
    },
  ];

  const treatments = [
    {
      name: 'Facial Treatments',
      count: '8 Types',
      description: 'Deep cleansing to anti-aging',
    },
    {
      name: 'Eyebrow Shaping',
      count: 'Premium',
      description: 'Threading & tinting services',
    },
    {
      name: 'Lash Extensions',
      count: '3D Volume',
      description: 'Classic to mega volume',
    },
    {
      name: 'Skin Analysis',
      count: 'Digital',
      description: 'Professional consultation',
    },
  ];

  const galleryImages = [
    { category: 'Bridal', alt: 'Bridal makeup transformation' },
    { category: 'Evening', alt: 'Evening glam look' },
    { category: 'Natural', alt: 'Natural everyday makeup' },
    { category: 'Editorial', alt: 'Editorial makeup artistry' },
    { category: 'Special Event', alt: 'Special occasion makeup' },
    { category: 'Photo Shoot', alt: 'Professional photo makeup' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-white to-amber-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-full opacity-20 animate-pulse blur-3xl"
          style={{
            transform: `translateY(${scrollY * 0.1}px) rotate(${
              scrollY * 0.1
            }deg)`,
          }}
        ></div>
        <div
          className="absolute top-1/4 -left-32 w-80 h-80 bg-gradient-to-br from-amber-200 via-orange-200 to-rose-200 rounded-full opacity-15 blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.15}px)` }}
        ></div>
        <div
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-gradient-to-br from-purple-200 via-pink-200 to-rose-200 rounded-full opacity-20 blur-2xl"
          style={{ transform: `translateY(${scrollY * 0.08}px)` }}
        ></div>
      </div>

      {/* Navigation */}
      <nav
        className={`fixed w-full z-50 px-4 sm:px-6 lg:px-8 py-4 transition-all duration-500 ${
          scrollY > 50
            ? 'bg-white/90 backdrop-blur-xl shadow-2xl border-b border-white/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center shadow-lg">
              <Sparkles size={20} className="text-white" />
            </div>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 bg-clip-text text-transparent">
              Radiance Beauty
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {['About', 'Services', 'Gallery', 'Artists', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-700 hover:text-rose-600 transition-all duration-300 font-medium relative group text-sm uppercase tracking-wider"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-rose-500 to-purple-500 transition-all duration-300 group-hover:w-full"></span>
                </a>
              )
            )}
            <button className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-8 py-3 rounded-full hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-medium text-sm uppercase tracking-wider">
              Book Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              onClick={toggleMobileMenu}
              className="text-gray-700 hover:text-rose-600 transition-colors p-2 rounded-full hover:bg-white/50"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-xl shadow-2xl transition-all duration-500 ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0'
              : 'opacity-0 -translate-y-8 pointer-events-none'
          }`}
        >
          <div className="px-6 py-8 space-y-6">
            {['About', 'Services', 'Gallery', 'Artists', 'Contact'].map(
              (item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="block py-3 text-gray-700 hover:text-rose-600 transition-colors font-medium text-lg"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </a>
              )
            )}
            <button className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-8 py-4 rounded-full hover:shadow-2xl transition-all duration-300 font-medium text-sm uppercase tracking-wider">
              Book Now
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="relative z-10 px-4 sm:px-6 lg:px-8 pt-28 pb-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center min-h-[85vh]">
            {/* Left Content */}
            <div className="space-y-10">
              <div className="space-y-8">
                <div className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-rose-100 via-pink-100 to-purple-100 rounded-full text-sm font-medium text-rose-700 backdrop-blur-sm border border-white/30">
                  <Gift size={16} className="mr-2" />✨ New Client Special - 25%
                  off First Visit
                </div>

                <h2 className="text-6xl sm:text-7xl lg:text-8xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-gray-800 via-rose-700 to-purple-700 bg-clip-text text-transparent">
                    Unleash
                  </span>
                  <br />
                  <span className="bg-gradient-to-r from-rose-500 via-yellow-500 to-purple-500 bg-clip-text text-transparent">
                    Your Glow
                  </span>
                </h2>

                <p className="text-xl text-gray-600 leading-relaxed max-w-xl">
                  Transform your natural beauty with our expert makeup artists
                  and premium beauty treatments. Where artistry meets elegance.
                </p>
              </div>

              <div className="flex flex-wrap gap-6">
                <button className="bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white px-10 py-5 rounded-full text-lg font-medium hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center group">
                  <Calendar
                    size={22}
                    className="mr-3 group-hover:rotate-12 transition-transform"
                  />
                  BOOK SESSION
                </button>
                <button className="border-2 border-gray-300 text-gray-700 px-10 py-5 rounded-full text-lg font-medium hover:border-rose-500 hover:text-rose-500 hover:bg-rose-50 transition-all duration-300 flex items-center">
                  <Phone size={22} className="mr-3" />
                  Call Now
                </button>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200">
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    1200+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Beautiful Transformations
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent flex items-center justify-center">
                    5.0
                    <Star
                      size={20}
                      className="fill-yellow-400 text-yellow-400 ml-1"
                    />
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Client Rating
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                    5+
                  </div>
                  <div className="text-sm text-gray-600 font-medium">
                    Years Excellence
                  </div>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Visual */}
            <div className="relative">
              <div className="relative z-10">
                {/* Main visual container */}
                <div className="relative w-full h-[600px]  rounded-[3rem] overflow-hidden shadow-2xl border border-white/50">
                  {/* Makeup tools pattern */}
                  <div className="absolute inset-0 ">
                    <Image
                      src={'/hero.jpg'}
                      height={400}
                      width={400}
                      alt="model image"
                      className="h-full w-full object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-yellow-300 to-orange-300 rounded-full opacity-80 animate-bounce shadow-lg"></div>
              <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-gradient-to-br from-green-300 to-teal-300 rounded-full opacity-70 animate-pulse shadow-lg"></div>
              <div className="absolute top-1/4 -right-4 w-16 h-16 bg-gradient-to-br from-blue-300 to-indigo-300 rounded-full opacity-60 animate-bounce delay-100 shadow-lg"></div>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-r from-white via-rose-50 to-purple-50 backdrop-blur-sm"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-5xl font-bold text-gray-800 mb-6">
              Our Signature Services
            </h3>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From bridal glamour to everyday elegance, our expert artists
              create looks that enhance your natural beauty and boost your
              confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transform hover:-translate-y-4 transition-all duration-500 border border-white/50 overflow-hidden"
              >
                {/* Background gradient on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-rose-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-100 to-purple-100 rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h4 className="text-xl font-bold text-gray-800 mb-3">
                    {service.name}
                  </h4>
                  <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                    {service.description}
                  </p>

                  <div className="flex justify-between items-center mb-6">
                    <div className="text-3xl font-bold bg-gradient-to-r from-rose-600 to-purple-600 bg-clip-text text-transparent">
                      {service.price}
                    </div>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Clock size={16} className="mr-1" />
                      {service.duration}
                    </div>
                  </div>

                  {/* Service Features */}
                  <ul className="space-y-2 mb-6 text-sm text-gray-600">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center">
                        <ChevronRight
                          size={14}
                          className="mr-2 text-rose-500"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-3 rounded-2xl hover:shadow-lg transition-all duration-300 font-medium group-hover:scale-105">
                    Book Service
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Why Choose Radiance Beauty
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience the difference that expertise, quality, and
              personalized care can make.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Professional Artists */}
            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/50">
                <User size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Certified Artists
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Our makeup artists are professionally trained and certified,
                with years of experience in beauty and fashion industries.
              </p>
            </div>

            {/* Premium Products */}
            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/50">
                <Award size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Premium Products
              </h4>
              <p className="text-gray-600 leading-relaxed">
                We exclusively use high-end, professional-grade cosmetics from
                top luxury brands for lasting, flawless results.
              </p>
            </div>

            {/* Personalized Service */}
            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/50">
                <Heart size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Personalized Care
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Every service is tailored to your unique features, skin tone,
                and personal style preferences for perfect results.
              </p>
            </div>

            {/* Luxury Experience */}
            <div className="text-center space-y-6 group">
              <div className="w-24 h-24 bg-gradient-to-br from-rose-100 via-pink-100 to-purple-100 rounded-3xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-lg border border-white/50">
                <Sparkles size={40} className="text-rose-600" />
              </div>
              <h4 className="text-2xl font-bold text-gray-800">
                Luxury Experience
              </h4>
              <p className="text-gray-600 leading-relaxed">
                Relax in our elegant studio environment designed for comfort,
                privacy, and the ultimate pampering experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section
        id="gallery"
        className="py-24 bg-gradient-to-br from-gray-50 to-rose-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Our Artistry Portfolio
            </h3>
            <p className="text-xl text-gray-600">
              Witness the transformations that speak louder than words
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 aspect-square"
              >
                <div className="absolute inset-0"></div>
                <Image
                  height={404}
                  width={300}
                  alt="image "
                  src={`/image${index + 1}.jpg`}
                  className="object-cover bg-cover h-full w-full"
                />
                {/* <div className="absolute inset-0 flex items-center justify-center text-white">
                  <div className="text-center transform group-hover:scale-110 transition-transform duration-300">
                    <Camera size={48} className="mx-auto mb-4 opacity-90" />
                    <h4 className="text-2xl font-bold mb-2">
                      {image.category}
                    </h4>
                    <p className="text-sm opacity-90">Professional Makeup</p>
                  </div>
                </div> */}
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Treatments */}
      <section className="py-20 bg-gradient-to-br from-rose-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-4xl font-bold text-gray-800 mb-4">
              Complete Beauty Solutions
            </h3>
            <p className="text-xl text-gray-600">
              Beyond makeup - comprehensive beauty treatments
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {treatments.map((treatment, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group hover:-translate-y-2"
              >
                <h4 className="text-lg font-semibold text-gray-800 mb-2">
                  {treatment.name}
                </h4>
                <div className="text-rose-600 font-medium text-xl mb-2">
                  {treatment.count}
                </div>
                <p className="text-gray-600 text-sm">{treatment.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Artists Section */}
      <section id="artists" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Meet Our Artists
            </h3>
            <p className="text-xl text-gray-600">
              Talented professionals dedicated to your beauty journey
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                name: 'Emma Rodriguez',
                title: 'Lead Makeup Artist',
                specialty: 'Bridal & Editorial',
                experience: '8+ years',
              },
              {
                name: 'Sofia Chen',
                title: 'Color Specialist',
                specialty: 'Color Theory & Correction',
                experience: '6+ years',
              },
              {
                name: 'Aria Williams',
                title: 'Beauty Consultant',
                specialty: 'Skincare & Natural Looks',
                experience: '5+ years',
              },
            ].map((artist, index) => (
              <div key={index} className="text-center group">
                <div className="w-40 h-40 bg-gradient-to-br from-rose-200 via-pink-200 to-purple-200 rounded-full mx-auto mb-6 flex items-center justify-center shadow-xl group-hover:scale-110 transition-transform duration-300">
                  <User size={80} className="text-rose-600" />
                </div>
                <h4 className="text-2xl font-bold text-gray-800 mb-2">
                  {artist.name}
                </h4>
                <p className="text-rose-600 font-medium mb-2">{artist.title}</p>
                <p className="text-gray-600 mb-2">{artist.specialty}</p>
                <p className="text-sm text-gray-500">
                  {artist.experience} experience
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 overflow-hidden bg-gradient-to-br from-white to-rose-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Client Transformations
            </h3>
            <p className="text-xl text-gray-600">
              Real stories from our beautiful clients
            </p>
          </div>

          <div className="relative">
            <div
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentTestimonial * 100}%)` }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-3xl p-12 shadow-xl border border-white/50">
                    <div className="text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star
                            key={i}
                            size={24}
                            className="fill-yellow-400 text-yellow-400 mx-1"
                          />
                        ))}
                      </div>
                      <blockquote className="text-2xl text-gray-700 mb-6 italic leading-relaxed">
                        &quot;{testimonial.text}&quot;
                      </blockquote>
                      <div className="font-bold text-gray-800 text-xl">
                        {testimonial.name}
                      </div>
                      <div className="text-rose-600 font-medium">
                        {testimonial.service}
                      </div>
                      <div className="text-gray-500 text-sm">
                        {testimonial.location}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Dots indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-rose-500 scale-125'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-5xl font-bold text-white mb-6">
            Ready for Your Glow Up?
          </h3>
          <p className="text-xl text-white/90 mb-10 leading-relaxed">
            Book your appointment today and discover the confidence that comes
            with looking and feeling your absolute best.
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-white text-rose-600 px-10 py-4 rounded-full text-lg font-bold hover:bg-gray-50 transform hover:scale-105 transition-all duration-300 shadow-xl">
              BOOK NOW - 25% OFF
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-full text-lg font-bold hover:bg-white hover:text-rose-600 transition-all duration-300">
              Call +31 20 456 7890
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-br from-gray-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h3 className="text-4xl font-bold text-gray-800 mb-6">
              Get In Touch
            </h3>
            <p className="text-xl text-gray-600">
              Ready to enhance your natural beauty? We&quot;d love to hear from
              you!
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
              <h4 className="text-2xl font-bold text-gray-800 mb-6">
                Send us a message
              </h4>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      placeholder="Your last name"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="+31 20 456 7890"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Interest
                  </label>
                  <select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300">
                    <option>Select a service</option>
                    <option>Bridal Makeup</option>
                    <option>Evening Glam</option>
                    <option>Natural Makeup</option>
                    <option>Photo Shoot Ready</option>
                    <option>Consultation</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    //@ts-expect-error error
                    rows="4"
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                    placeholder="Tell us about your beauty goals and any specific requirements..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-rose-500 via-pink-500 to-purple-500 text-white py-4 rounded-xl hover:shadow-lg transform hover:scale-105 transition-all duration-300 font-medium text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">
                  Visit Our Studio
                </h4>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <MapPin size={24} className="text-rose-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Address</h5>
                      <p className="text-gray-600">
                        Prinsengracht 123
                        <br />
                        1015 Amsterdam, Netherlands
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Phone size={24} className="text-rose-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Phone</h5>
                      <p className="text-gray-600">+31 20 456 7890</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Mail size={24} className="text-rose-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Email</h5>
                      <p className="text-gray-600">hello@radiancebeauty.nl</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-rose-100 to-purple-100 rounded-xl flex items-center justify-center">
                      <Clock size={24} className="text-rose-600" />
                    </div>
                    <div>
                      <h5 className="font-semibold text-gray-800">Hours</h5>
                      <p className="text-gray-600">
                        Monday: Closed
                        <br />
                        Tue-Fri: 9:00 AM - 7:00 PM
                        <br />
                        Saturday: 9:00 AM - 6:00 PM
                        <br />
                        Sunday: By appointment
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                <h4 className="text-2xl font-bold text-gray-800 mb-6">
                  Follow Our Journey
                </h4>
                <p className="text-gray-600 mb-6">
                  Stay updated with our latest work and beauty tips
                </p>
                <div className="flex space-x-4">
                  {[
                    {
                      icon: Instagram,
                      label: '@radiancebeauty_nl',
                      color: 'from-pink-500 to-purple-500',
                    },
                    {
                      icon: Facebook,
                      label: 'Radiance Beauty',
                      color: 'from-blue-500 to-indigo-500',
                    },
                    {
                      icon: Youtube,
                      label: 'Beauty Tutorials',
                      color: 'from-red-500 to-pink-500',
                    },
                  ].map((social, index) => (
                    <div
                      key={index}
                      className={`flex-1 bg-gradient-to-r ${social.color} p-4 rounded-xl text-white text-center hover:scale-105 transition-transform duration-300 cursor-pointer`}
                    >
                      <social.icon size={24} className="mx-auto mb-2" />
                      <p className="text-sm font-medium">{social.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-12">
            <div className="col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-400 via-pink-400 to-purple-400 rounded-full flex items-center justify-center">
                  <Sparkles size={24} className="text-white" />
                </div>
                <h4 className="text-3xl font-bold bg-gradient-to-r from-rose-400 to-purple-400 bg-clip-text text-transparent">
                  Radiance Beauty
                </h4>
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed text-lg">
                Your premier destination for professional makeup artistry and
                beauty treatments. Transform your look, elevate your confidence,
                and radiate beauty from within.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Facebook, Youtube].map((Icon, index) => (
                  <div
                    key={index}
                    className="w-12 h-12 bg-gradient-to-r from-rose-500 to-purple-500 rounded-full flex items-center justify-center hover:scale-110 transition-transform cursor-pointer shadow-lg"
                  >
                    <Icon size={20} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6 text-white">Services</h5>
              <ul className="space-y-3 text-gray-300">
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Bridal Makeup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Evening Glam
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Natural Makeup
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Photo Ready
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-rose-400 transition-colors">
                    Facials
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="text-xl font-bold mb-6 text-white">Contact</h5>
              <div className="space-y-4 text-gray-300">
                <div className="flex items-center">
                  <Phone size={18} className="mr-3 text-rose-400" />
                  <span>+31 20 456 7890</span>
                </div>
                <div className="flex items-center">
                  <MapPin size={18} className="mr-3 text-rose-400" />
                  <span>
                    Prinsengracht 123
                    <br />
                    Amsterdam, Netherlands
                  </span>
                </div>
                <div className="pt-4">
                  <span className="text-sm text-gray-400">
                    Open: Tue-Sat 9AM-7PM
                    <br />
                    Sunday by appointment
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-16 pt-8 text-center">
            <p className="text-gray-400">
              © 2025 Radiance Beauty. All rights reserved. |
              <a
                href="#"
                className="hover:text-rose-400 transition-colors ml-2"
              >
                Privacy Policy
              </a>{' '}
              |
              <a
                href="#"
                className="hover:text-rose-400 transition-colors ml-2"
              >
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-rose-500 to-purple-500 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center"
        >
          <ArrowUp size={24} />
        </button>
      )}
    </div>
  );
};

export default ModernBeautySalon;
