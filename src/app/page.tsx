'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Instagram,
  Facebook,
  Star,
  Calendar,
  Users,
  Award,
  Palette,
  Clock,
  Shield,
  ChevronDown,
  ArrowUp,
  Send,
} from 'lucide-react';
import Image from 'next/image';

const TattooArtistLanding = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('traditional');
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const portfolioCategories = {
    traditional: [
      {
        id: 1,
        title: 'Traditional Rose',
        category: 'Traditional',
        description: 'Classic American traditional rose with bold lines',
        imageUrl: '/rose.png',
      },
      {
        id: 2,
        title: 'Eagle Design',
        category: 'Traditional',
        description: 'Majestic eagle with traditional styling',
        imageUrl: '/eagle.png',
      },
      {
        id: 3,
        title: 'Anchor Piece',
        category: 'Traditional',
        description: 'Nautical anchor with rope details',
        imageUrl: '/anchor.png',
      },
    ],
    realism: [
      {
        id: 4,
        title: 'Portrait Work',
        category: 'Realism',
        description: 'Hyper-realistic portrait tattoo',
        imageUrl: '/portrait.png',
      },
      {
        id: 5,
        title: 'Nature Scene',
        category: 'Realism',
        description: 'Detailed landscape with wildlife',
        imageUrl: '/nature.png',
      },
      {
        id: 6,
        title: 'Animal Portrait',
        category: 'Realism',
        description: 'Lifelike animal representation',
        imageUrl: '/animal.png',
      },
    ],
    geometric: [
      {
        id: 7,
        title: 'Sacred Geometry',
        category: 'Geometric',
        description: 'Intricate geometric patterns',
        imageUrl: '/sacred.png',
      },
      {
        id: 8,
        title: 'Mandala Design',
        category: 'Geometric',
        description: 'Symmetrical mandala artwork',
        imageUrl: '/mandala.png',
      },
      {
        id: 9,
        title: 'Abstract Lines',
        category: 'Geometric',
        description: 'Modern abstract line work',
        imageUrl: '/abstract.png',
      },
    ],
  };

  const testimonials = [
    {
      name: 'Sarah Johnson',
      text: 'Absolutely incredible work! The attention to detail is phenomenal. My tattoo healed perfectly and looks exactly like the design we discussed.',
      rating: 5,
      location: 'Los Angeles, CA',
    },
    {
      name: 'Mike Rodriguez',
      text: 'Professional, clean, and talented. The studio atmosphere was welcoming and the artist made me feel comfortable throughout the entire process.',
      rating: 5,
      location: 'San Diego, CA',
    },
    {
      name: 'Emma Davis',
      text: 'My tattoo healed perfectly and looks amazing. Great experience from consultation to final touch-up. Highly recommend!',
      rating: 5,
      location: 'Phoenix, AZ',
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const services = [
    {
      icon: Palette,
      title: 'Custom Designs',
      price: 'From $150',
      description: 'Unique artwork tailored to your vision and personal story',
      features: ['Original artwork', 'Multiple revisions', 'Digital mockup'],
    },
    {
      icon: Users,
      title: 'Cover-ups',
      price: 'From $200',
      description: 'Transform old tattoos into stunning masterpieces',
      features: ['Design consultation', 'Color matching', 'Expert technique'],
    },
    {
      icon: Award,
      title: 'Touch-ups',
      price: 'From $80',
      description: 'Refresh and enhance your existing tattoos',
      features: ['Color restoration', 'Line work repair', 'Free evaluation'],
    },
    {
      icon: Shield,
      title: 'Consultation',
      price: 'Free',
      description: 'Discuss your ideas and get professional advice',
      features: ['Design planning', 'Placement advice', 'Price estimate'],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrollY > 50
            ? 'bg-black/95 backdrop-blur-xl border-b border-red-900/50'
            : 'bg-black/80 backdrop-blur-sm border-b border-red-900/30'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              INK MASTERS
            </div>

            <div className="hidden md:flex space-x-8">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="hover:text-red-500 transition-all duration-300 relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                  </a>
                )
              )}
            </div>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-white hover:text-red-500 transition-colors p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          <div
            className={`md:hidden transition-all duration-300 ${
              isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
            } overflow-hidden`}
          >
            <div className="px-4 py-6 space-y-4 bg-black/95 backdrop-blur-sm border-t border-red-900/30">
              {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map(
                (item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block hover:text-red-500 transition-colors py-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        style={
          {
            // backgroundImage: '/hero.png',
          }
        }
        className="relative bg-[url('/artist.png')] bg-no-repeat bg-cover pt-16 min-h-screen flex items-center overflow-hidden"
      >
        {/* Background with Parallax Effect */}
        <div
          className="absolute inset-0 bg-black/50 object-contain"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        >
          {/* Animated Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-red-600/10 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-600/5 rounded-full blur-3xl animate-pulse delay-500"></div>
          </div>
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-4xl">
            <div className="mb-8">
              <div className="inline-flex items-center bg-red-600/20 backdrop-blur-sm border border-red-500/30 px-6 py-3 rounded-full text-red-400 text-sm font-medium mb-8">
                <Award className="w-4 h-4 mr-2" />
                Award-Winning Tattoo Artist Since 2014
              </div>
              <h1 className="text-6xl lg:text-8xl font-bold leading-tight mb-6">
                <span className="bg-gradient-to-r from-red-500 via-orange-500 to-yellow-500 bg-clip-text text-transparent">
                  ART THAT
                </span>
                <br />
                <span className="text-white drop-shadow-2xl">LIVES ON</span>
              </h1>
              <p className="text-xl lg:text-2xl text-gray-300 leading-relaxed max-w-2xl mb-8">
                Transform your vision into permanent art with over 10 years of
                experience in custom tattoo design and execution. Every piece
                tells a story.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 mb-12">
              <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/25 border border-red-500/50 flex items-center justify-center group">
                <Calendar className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                Book Consultation
              </button>
              <button className="border-2 border-white/30 hover:border-red-500 backdrop-blur-sm px-10 py-5 rounded-xl font-semibold text-lg transition-all duration-300 hover:bg-red-500/10 flex items-center justify-center">
                <ChevronDown className="w-5 h-5 mr-3" />
                View Portfolio
              </button>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { number: '10+', label: 'Years Experience', icon: Clock },
                { number: '500+', label: 'Tattoos Created', icon: Palette },
                { number: '4.9★', label: 'Average Rating', icon: Star },
                { number: '100%', label: 'Satisfaction', icon: Shield },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-black/40 backdrop-blur-sm border border-gray-700/50 p-6 rounded-xl text-center group hover:border-red-500/50 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-red-500 mx-auto mb-3 group-hover:scale-110 transition-transform" />
                  <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-1">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-sm">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section
        id="portfolio"
        className="py-24 bg-gradient-to-b from-black to-gray-900/50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Portfolio
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Explore my latest work across different styles and techniques,
              each piece crafted with precision and passion.
            </p>
          </div>

          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/70 p-2 rounded-2xl backdrop-blur-sm border border-gray-700/50">
              {Object.keys(portfolioCategories).map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveTab(category)}
                  className={`px-8 py-4 rounded-xl font-semibold capitalize transition-all duration-300 ${
                    activeTab === category
                      ? 'bg-gradient-to-r from-red-600 to-red-700 text-white shadow-lg transform scale-105'
                      : 'text-gray-400 hover:text-white hover:bg-gray-800/50'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 
            
            //@ts-expect-error error*/}
            {portfolioCategories[activeTab].map((item) => (
              <div key={item.id} className="group cursor-pointer">
                <div className="h-80 relative overflow-hidden rounded-2xl bg-gray-900 border border-gray-700/50 hover:border-red-500/50 transition-all duration-500">
                  {/* Tattoo image */}
                  <Image
                    height={400}
                    width={400}
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover bg-contain"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-xl font-semibold text-white mb-2">
                        {item.title}
                      </h3>
                      <span className="text-red-400 text-sm font-medium">
                        {item.category}
                      </span>
                      <p className="text-gray-300 text-sm mt-2">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105">
              View Full Gallery
            </button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section
        id="services"
        className="py-24 bg-gradient-to-b from-gray-900/50 to-black"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Professional tattoo services with the highest standards of
              quality, safety, and artistic excellence.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl hover:border-red-500/50 transition-all duration-300 group hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-red-500/10"
              >
                <div className="bg-red-600/20 p-4 rounded-xl mb-6 inline-block">
                  <service.icon className="w-8 h-8 text-red-500 group-hover:text-red-400 transition-colors" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                <div className="text-2xl font-bold text-red-500 mb-4">
                  {service.price}
                </div>
                <p className="text-gray-400 mb-6">{service.description}</p>
                <ul className="space-y-2 text-sm text-gray-300">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center">
                      <div className="w-1 h-1 bg-red-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="py-24 bg-gradient-to-b from-black to-gray-900/30"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-8">
              <h2 className="text-4xl lg:text-6xl font-bold">
                <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                  Meet the Artist
                </span>
              </h2>
              <p className="text-xl text-gray-300 leading-relaxed">
                With over a decade of experience in the tattoo industry, I
                specialize in creating unique, personalized artwork that tells
                your story. My passion for art and dedication to excellence
                ensures every piece is crafted with precision and care.
              </p>
              <p className="text-lg text-gray-400 leading-relaxed">
                From traditional American designs to hyper-realistic portraits,
                I work closely with each client to bring their vision to life.
                Every tattoo is a collaboration, and I&apos;m committed to
                making your experience comfortable, professional, and memorable.
              </p>
              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: Clock, text: '10+ Years Experience' },
                  { icon: Shield, text: 'Licensed & Certified' },
                  { icon: Award, text: 'Award Winning Artist' },
                  { icon: Users, text: '500+ Happy Clients' },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-3 group"
                  >
                    <item.icon className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-300">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl border border-red-900/30 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src={'/artist.png'}
                    height={500}
                    width={500}
                    alt="artist"
                    className="h-full w-full object-cover bg-cover text-red-500 mx-auto mb-4 opacity-50"
                  />
                  <p className="text-gray-400">Artist Photo</p>
                </div>
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-red-500 to-orange-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-yellow-500 to-red-500 rounded-full opacity-30 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gradient-to-r from-red-900/10 via-black to-orange-900/10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl lg:text-6xl font-bold mb-16">
            <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
              Client Reviews
            </span>
          </h2>

          <div className="relative">
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 p-12 rounded-3xl shadow-2xl">
              <div className="flex justify-center mb-8">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-8 h-8 text-yellow-500 fill-current mx-1"
                  />
                ))}
              </div>
              <blockquote className="text-2xl text-gray-300 mb-8 italic leading-relaxed">
                &apos;{testimonials[currentTestimonial].text}&apos;
              </blockquote>
              <div className="flex items-center justify-center space-x-4">
                <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-orange-500 rounded-full flex items-center justify-center">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-xl text-white">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-400">
                    {testimonials[currentTestimonial].location}
                  </div>
                </div>
              </div>
            </div>

            <div className="flex justify-center mt-8 space-x-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-4 h-4 rounded-full transition-all duration-300 ${
                    index === currentTestimonial
                      ? 'bg-red-500 scale-125'
                      : 'bg-gray-600 hover:bg-gray-500'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-24 bg-gradient-to-b from-black to-gray-900"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Ready to start your tattoo journey? Let&apos;s discuss your vision
              and create something amazing together.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              {[
                {
                  icon: MapPin,
                  title: 'Studio Location',
                  content:
                    '123 Ink Street, Art District\nCreative City, CC 12345',
                },
                { icon: Phone, title: 'Phone', content: '(555) 123-4567' },
                { icon: Mail, title: 'Email', content: 'info@inkmasters.com' },
                {
                  icon: Calendar,
                  title: 'Studio Hours',
                  content:
                    'Monday - Friday: 12PM - 8PM\nSaturday: 10AM - 6PM\nSunday: Closed',
                },
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="bg-red-600/20 p-3 rounded-xl">
                    <item.icon className="w-6 h-6 text-red-500 group-hover:scale-110 transition-transform" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2 text-white">
                      {item.title}
                    </h3>
                    <p className="text-gray-400 whitespace-pre-line">
                      {item.content}
                    </p>
                  </div>
                </div>
              ))}

              <div className="flex space-x-6 pt-6">
                {[Instagram, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="text-gray-400 hover:text-red-500 transition-colors group"
                  >
                    <div className="bg-gray-800 p-3 rounded-xl group-hover:bg-red-600/20 transition-colors">
                      <Icon className="w-8 h-8" />
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-900/70 backdrop-blur-sm border border-gray-700/50 p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Send a Message
              </h3>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                      placeholder="Your last name"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Phone
                  </label>
                  <input
                    type="tel"
                    className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    Message
                  </label>
                  <textarea
                    //@ts-expect-error err
                    rows="6"
                    className="w-full bg-gray-800/50 border border-gray-600 text-white px-4 py-3 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent outline-none transition-all resize-none"
                    placeholder="Describe your tattoo idea, placement, size, and any other details..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg hover:shadow-red-500/25 flex items-center justify-center group"
                >
                  <Send className="w-5 h-5 mr-3 group-hover:translate-x-1 transition-transform" />
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-r from-red-600 via-red-700 to-orange-600 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h3 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Ready to Get Inked?
          </h3>
          <p className="text-xl text-red-100 mb-10 leading-relaxed max-w-2xl mx-auto">
            Don&apos;t wait to bring your vision to life. Book your consultation
            today and let&apos;s create something extraordinary together.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <button className="bg-white text-red-600 px-10 py-4 rounded-xl text-lg font-bold hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-xl">
              BOOK CONSULTATION
            </button>
            <button className="border-2 border-white text-white px-10 py-4 rounded-xl text-lg font-bold hover:bg-white hover:text-red-600 transition-all duration-300">
              Call (555) 123-4567
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Company Info */}
            <div className="col-span-2">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-500 to-orange-500 bg-clip-text text-transparent mb-4">
                INK MASTERS
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                Creating art that lives on your skin. Professional tattoo
                services with over 10 years of experience in custom designs,
                cover-ups, and artistic excellence.
              </p>
              <div className="flex space-x-4">
                {[Instagram, Facebook].map((Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="bg-gray-800 hover:bg-red-600 p-3 rounded-xl transition-colors group"
                  >
                    <Icon className="w-6 h-6 text-gray-400 group-hover:text-white" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {['Home', 'Portfolio', 'Services', 'About', 'Contact'].map(
                  (link) => (
                    <li key={link}>
                      <a
                        href={`#${link.toLowerCase()}`}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        {link}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-red-500" />
                  <span>(555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-red-500" />
                  <span>info@inkmasters.com</span>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-red-500 mt-1" />
                  <span>
                    123 Ink Street
                    <br />
                    Creative City, CC 12345
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="text-gray-500 text-sm mb-4 md:mb-0">
                © 2025 Ink Masters. All rights reserved.
              </div>
              <div className="flex space-x-6 text-sm">
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="text-gray-500 hover:text-red-500 transition-colors"
                >
                  Health & Safety
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-full shadow-2xl hover:scale-110 transition-all duration-300 z-50 flex items-center justify-center group"
        >
          <ArrowUp
            size={24}
            className="group-hover:-translate-y-1 transition-transform"
          />
        </button>
      )}
    </div>
  );
};

export default TattooArtistLanding;
