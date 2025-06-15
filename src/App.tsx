import React, { useState } from 'react';
import { Heart, Home, Camera, Settings, Gift, User, MessageCircle, Star, BookOpen, Mail, Calendar, Menu, X, ChevronLeft, ChevronRight, Instagram, Facebook, ArrowRight, Clock, Users, Zap, Award, MapPin, Phone, Sparkles } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedGalleryFilter, setSelectedGalleryFilter] = useState('all');

  const testimonials = [
    {
      name: "Sarah & Michael",
      date: "June 2024",
      text: "Absolutely magical! Every photo tells our story perfectly. The attention to detail and ability to capture our emotions was incredible.",
      rating: 5,
      image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    {
      name: "Emily & James",
      date: "September 2024",
      text: "From engagement to wedding day, the experience was flawless. Our photos are works of art that we'll treasure forever.",
      rating: 5,
      image: "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    },
    {
      name: "Rachel & David",
      date: "August 2024",
      text: "Professional, creative, and so much fun to work with! The photos exceeded all our expectations. Highly recommend!",
      rating: 5,
      image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&dpr=2"
    }
  ];

  const portfolioImages = [
    { 
      src: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2", 
      category: "ceremony",
      alt: "Wedding ceremony moment"
    },
    { 
      src: "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2", 
      category: "portraits",
      alt: "Couple portrait"
    },
    { 
      src: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&dpr=2", 
      category: "details",
      alt: "Wedding details"
    },
    { 
      src: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2", 
      category: "ceremony",
      alt: "Wedding kiss"
    },
    { 
      src: "https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2", 
      category: "portraits",
      alt: "Bridal portrait"
    },
    { 
      src: "https://images.pexels.com/photos/169193/pexels-photo-169193.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&dpr=2", 
      category: "details",
      alt: "Wedding rings"
    },
    { 
      src: "https://images.pexels.com/photos/1616403/pexels-photo-1616403.jpeg?auto=compress&cs=tinysrgb&w=600&h=600&dpr=2", 
      category: "ceremony",
      alt: "Wedding dance"
    },
    { 
      src: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=600&h=900&dpr=2", 
      category: "portraits",
      alt: "Couple in nature"
    }
  ];

  const filteredImages = selectedGalleryFilter === 'all' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === selectedGalleryFilter);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleBookingClick = () => {
    window.open('https://calendly.com/priyanshch332/30min', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#F5F4F0] text-[#4A1F29]">
      {/* Header */}
      <header className="fixed top-0 w-full bg-[#F5F4F0]/95 backdrop-blur-sm z-50 border-b border-[#4A1F29]/10">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-2">
              <div className="flex items-center space-x-1">
                <div className="w-6 h-6 bg-[#4A1F29] rounded-full"></div>
                <div className="w-6 h-6 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-[#4A1F29] fill-current" />
                </div>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-8">
              <a href="#home" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <Home className="w-4 h-4" />
                <span>Home</span>
              </a>
              <a href="#portfolio" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <Camera className="w-4 h-4" />
                <span>Portfolio</span>
              </a>
              <a href="#services" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <Settings className="w-4 h-4" />
                <span>Services</span>
              </a>
              <a href="#packages" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <Gift className="w-4 h-4" />
                <span>Packages</span>
              </a>
              <a href="#about" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <User className="w-4 h-4" />
                <span>About</span>
              </a>
              <a href="#testimonials" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <MessageCircle className="w-4 h-4" />
                <span>Testimonials</span>
              </a>
              <a href="#blog" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <BookOpen className="w-4 h-4" />
                <span>Blog</span>
              </a>
              <a href="#contact" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </nav>

            {/* CTA Button */}
            <button 
              onClick={handleBookingClick}
              className="hidden lg:flex items-center space-x-2 bg-[#4A1F29] text-white px-6 py-3 rounded-full hover:bg-[#5A2435] transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book a Session</span>
            </button>

            {/* Mobile Menu Button */}
            <button 
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="lg:hidden mt-4 pb-4 border-t border-[#4A1F29]/10">
              <nav className="flex flex-col space-y-4 pt-4">
                <a href="#home" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <Home className="w-4 h-4" />
                  <span>Home</span>
                </a>
                <a href="#portfolio" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <Camera className="w-4 h-4" />
                  <span>Portfolio</span>
                </a>
                <a href="#services" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <Settings className="w-4 h-4" />
                  <span>Services</span>
                </a>
                <a href="#packages" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <Gift className="w-4 h-4" />
                  <span>Packages</span>
                </a>
                <a href="#about" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <User className="w-4 h-4" />
                  <span>About</span>
                </a>
                <a href="#testimonials" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <MessageCircle className="w-4 h-4" />
                  <span>Testimonials</span>
                </a>
                <a href="#blog" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <BookOpen className="w-4 h-4" />
                  <span>Blog</span>
                </a>
                <a href="#contact" className="flex items-center space-x-2 hover:text-[#D4AF37] transition-colors">
                  <Mail className="w-4 h-4" />
                  <span>Contact</span>
                </a>
                <button 
                  onClick={handleBookingClick}
                  className="flex items-center space-x-2 bg-[#4A1F29] text-white px-6 py-3 rounded-full hover:bg-[#5A2435] transition-colors w-fit"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book a Session</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section - Updated with Services Showcase */}
      <section id="home" className="pt-24 lg:pt-32 pb-16 lg:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
                Capturing Your Love Story, One Frame at a Time
              </h1>
              <p className="text-lg lg:text-xl mb-8 opacity-80 leading-relaxed">
                Fine-art wedding photography that tells your unique story with elegance, passion, and timeless beauty.
              </p>
              <button 
                onClick={handleBookingClick}
                className="flex items-center space-x-2 bg-[#4A1F29] text-white px-8 py-4 rounded-full hover:bg-[#5A2435] transition-all duration-300 hover:scale-105"
              >
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Book a Session</span>
              </button>
            </div>
            
            {/* Services Showcase instead of single image */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                {/* Wedding Photography */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-[#D4AF37] mb-4">
                    <Camera className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Wedding Photography</h3>
                  <p className="text-sm opacity-80">Complete coverage of your special day with artistic flair</p>
                </div>

                {/* Engagement Shoots */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-[#D4AF37] mb-4">
                    <Heart className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Engagement Sessions</h3>
                  <p className="text-sm opacity-80">Romantic pre-wedding shoots to capture your love story</p>
                </div>

                {/* Portrait Sessions */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-[#D4AF37] mb-4">
                    <User className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Bridal Portraits</h3>
                  <p className="text-sm opacity-80">Elegant individual and group portraits for the bridal party</p>
                </div>

                {/* Event Documentation */}
                <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <div className="text-[#D4AF37] mb-4">
                    <Sparkles className="w-8 h-8" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">Event Documentation</h3>
                  <p className="text-sm opacity-80">Professional coverage of ceremonies and celebrations</p>
                </div>
              </div>
              
              {/* Floating Elements */}
              <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-lg">
                <div className="flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-500 fill-current" />
                  <span className="text-sm font-semibold">Love Captured</span>
                </div>
              </div>
              
              <div className="absolute -bottom-6 -left-6 bg-[#D4AF37] rounded-2xl p-4 shadow-lg text-white">
                <div className="flex items-center space-x-2">
                  <Award className="w-5 h-5" />
                  <span className="text-sm font-semibold">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rest of your sections remain the same... */}
      {/* I'll continue with the remaining sections in the next part */}
