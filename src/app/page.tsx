'use client';
import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  Instagram,
  Facebook,
  Twitter,
  Phone,
  Mail,
  MapPin,
} from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToServices = () => {
    document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <h1
                className={`text-2xl font-bold transition-colors ${
                  isScrolled ? 'text-gray-900' : 'text-white'
                }`}
              >
                BarB
                <span className="block text-sm font-light">Beauty Salon</span>
              </h1>
            </div>
            <div className="hidden md:flex space-x-8">
              {['Services', 'Prices', 'About Us', 'Contact'].map((item) => (
                <a
                  key={item}
                  href="#"
                  className={`transition-colors hover:text-pink-400 ${
                    isScrolled ? 'text-gray-700' : 'text-white'
                  }`}
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="relative h-screen flex items-center justify-center overflow-hidden bg-[url('/image1.jpg')] bg-cover bg-center bg-no-repeat"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-pink-400/70 via-purple-500/70 to-indigo-600/70 opacity-70"></div>

        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-light mb-4">
            Your{' '}
            <span className="relative">
              beauty
              <div className="absolute -bottom-2 left-0 right-0 h-1 bg-pink-400 transform rotate-1"></div>
            </span>
          </h2>
          <h3 className="text-4xl md:text-6xl font-light mb-12">space</h3>

          <button
            onClick={scrollToServices}
            className="bg-transparent border-2 border-white px-8 py-3 text-white hover:bg-white hover:text-gray-900 transition-all duration-300 transform hover:scale-105"
          >
            Book Now
          </button>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown
            className="w-8 h-8 text-white cursor-pointer"
            onClick={scrollToServices}
          />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white h-full">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:mb-16">
            {[
              { title: 'Manicure, Pedicure', active: true },
              { title: 'Makeup', active: false },
              { title: 'Hair Services', active: false },
              { title: 'Massage', active: false },
            ].map((service, index) => (
              <div
                key={index}
                className={`text-center cursor-pointer transition-all duration-300 ${
                  service.active
                    ? 'text-pink-500 border-b-2 border-pink-500 pb-2'
                    : 'text-gray-500 hover:text-pink-400'
                }`}
              >
                <h3 className="text-lg font-medium">{service.title}</h3>
              </div>
            ))}
          </div>

          <div className="grid md:h-[800px] lg:grid-cols-3 md:gap-12 items-center">
            <div className="col-span-1 space-y-6">
              <p className="text-gray-600 text-lg leading-relaxed">
                Our nails require special care, as their appearance and
                condition affect daily comfort, self-confidence, mood, often
                self-perception and overall well-being.
              </p>
              <p className="text-gray-600 leading-relaxed">
                We offer a full range of nail care services, using only quality
                materials and modern equipment.
              </p>
              <div className="flex space-x-4">
                <div className="bg-white p-4 rounded-lg shadow-md flex-1 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Manicure</h4>
                  <p className="text-gray-600 text-sm">Classic and machine</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md flex-1 text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Polish</h4>
                  <p className="text-gray-600 text-sm">Gel polish, design</p>
                </div>
              </div>
            </div>

            <div className="col-span-2 grid grid-cols-2 gap-4 max-md:h-[400px] md:h-[500px] my-10">
              <div className="space-y-4 flex flex-col">
                <div className="flex-1 bg-cover bg-no-repeat bg-[url('/image4.jpg')] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
                <div className="flex-1 bg-cover bg-no-repeat bg-center bg-[url('/image2.jpg')] rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300"></div>
              </div>
              <div className="mt-8 flex flex-col py-10">
                <div className="bg-cover bg-no-repeat bg-[url('/image3.jpg')] flex-1 rounded-lg"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-light text-gray-900 mb-8">
                Contact Us
              </h2>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-pink-500" />
                  <span className="text-gray-600">+1 (XXX) XXX-XXXX</span>
                </div>
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-pink-500" />
                  <span className="text-gray-600">info@barb-salon.com</span>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-pink-500" />
                  <span className="text-gray-600">
                    New York, Sample Street, 123
                  </span>
                </div>
              </div>

              <div className="mt-8">
                <h3 className="text-lg font-medium text-gray-900 mb-4">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <Facebook className="w-8 h-8 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                  <Instagram className="w-8 h-8 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                  <Twitter className="w-8 h-8 text-gray-400 hover:text-pink-500 cursor-pointer transition-colors" />
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-medium text-gray-900 mb-6">
                Book an Appointment
              </h3>
              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent"
                  />
                </div>
                <div>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent">
                    <option>Choose service</option>
                    <option>Manicure</option>
                    <option>Pedicure</option>
                    <option>Makeup</option>
                    <option>Hair Services</option>
                  </select>
                </div>
                <button
                  type="button"
                  className="w-full bg-pink-500 text-white py-3 rounded-lg hover:bg-pink-600 transition-colors duration-300"
                  onClick={() => alert('Form submitted!')}
                >
                  Book Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-2">BarB Beauty Salon</h3>
            <p className="text-gray-400">We create for modern women</p>
            <p className="text-gray-400 mt-2">bark.studio@gmail.com</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
