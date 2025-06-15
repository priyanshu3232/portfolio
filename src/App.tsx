import React, { useState } from 'react';
import { Heart, Home, Camera, Settings, Gift, User, MessageCircle, Star, BookOpen, Mail, Calendar, Menu, X, ChevronLeft, ChevronRight, Instagram, Facebook, ArrowRight, Clock, Users, Zap, Award, MapPin, Phone } from 'lucide-react';

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
            <button className="hidden lg:flex items-center space-x-2 bg-[#4A1F29] text-white px-6 py-3 rounded-full hover:bg-[#5A2435] transition-colors">
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
                <button className="flex items-center space-x-2 bg-[#4A1F29] text-white px-6 py-3 rounded-full hover:bg-[#5A2435] transition-colors w-fit">
                  <Calendar className="w-4 h-4" />
                  <span>Book a Session</span>
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
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
              <button className="flex items-center space-x-2 bg-[#4A1F29] text-white px-8 py-4 rounded-full hover:bg-[#5A2435] transition-all duration-300 hover:scale-105">
                <Calendar className="w-5 h-5" />
                <span className="text-lg">Book a Session</span>
              </button>
            </div>
            <div className="order-1 lg:order-2 relative">
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img 
                  src="https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800&h=1000&dpr=2"
                  alt="Beautiful wedding couple"
                  className="w-full h-[500px] lg:h-[600px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1F29]/20 to-transparent"></div>
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
                  <Camera className="w-5 h-5" />
                  <span className="text-sm font-semibold">Award Winning</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Weddings */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Featured Weddings</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Each wedding is a unique love story waiting to be told through beautiful imagery.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                image: "https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
                couple: "Sarah & Michael",
                date: "June 2024",
                location: "Tuscany, Italy"
              },
              {
                image: "https://images.pexels.com/photos/1674666/pexels-photo-1674666.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
                couple: "Emily & James", 
                date: "September 2024",
                location: "Napa Valley, CA"
              },
              {
                image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=2",
                couple: "Rachel & David",
                date: "August 2024",
                location: "Santorini, Greece"
              }
            ].map((wedding, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300">
                <img 
                  src={wedding.image}
                  alt={`${wedding.couple} wedding`}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#4A1F29]/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <h3 className="text-xl font-bold mb-2">{wedding.couple}</h3>
                  <p className="text-sm opacity-90 mb-1">{wedding.date}</p>
                  <p className="text-sm opacity-90 flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {wedding.location}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <button className="inline-flex items-center space-x-2 text-[#4A1F29] border-2 border-[#4A1F29] px-8 py-3 rounded-full hover:bg-[#4A1F29] hover:text-white transition-all duration-300">
              <span>View Full Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Services & Packages */}
      <section id="services" className="py-16 lg:py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Services & Packages</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Comprehensive photography services tailored to capture every precious moment of your special day.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8" />,
                title: "Engagement Shoots",
                description: "Romantic pre-wedding sessions to capture your love story before the big day."
              },
              {
                icon: <Clock className="w-8 h-8" />,
                title: "Full-Day Coverage",
                description: "Complete wedding day documentation from getting ready to final dance."
              },
              {
                icon: <User className="w-8 h-8" />,
                title: "Bridal Portraits",
                description: "Elegant individual and bridal party portraits that showcase natural beauty."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Albums & Prints",
                description: "Custom-designed albums and premium prints to preserve your memories."
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 text-center">
                <div className="text-[#D4AF37] mb-4 flex justify-center">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{service.title}</h3>
                <p className="opacity-80 mb-6">{service.description}</p>
                <button className="text-[#4A1F29] font-semibold hover:text-[#D4AF37] transition-colors">
                  Learn More →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Me */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Why Choose Me</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Dedicated to providing exceptional service and creating timeless memories that last a lifetime.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Award className="w-8 h-8" />,
                title: "10+ Years' Experience",
                description: "A decade of capturing love stories with artistic excellence."
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Second-Shooter Included",
                description: "Additional photographer to capture every angle and moment."
              },
              {
                icon: <Zap className="w-8 h-8" />,
                title: "Fast Turnaround",
                description: "Gallery delivered within 3-4 weeks of your wedding day."
              },
              {
                icon: <BookOpen className="w-8 h-8" />,
                title: "Custom Albums",
                description: "Beautifully designed albums crafted specifically for your story."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <div className="text-[#D4AF37] mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-4">{feature.title}</h3>
                <p className="opacity-80">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Gallery */}
      <section id="portfolio" className="py-16 lg:py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Portfolio Gallery</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto mb-8">
              A curated collection of our finest wedding photography moments.
            </p>
            
            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {['all', 'ceremony', 'portraits', 'details'].map((filter) => (
                <button
                  key={filter}
                  onClick={() => setSelectedGalleryFilter(filter)}
                  className={`px-6 py-2 rounded-full transition-all capitalize ${
                    selectedGalleryFilter === filter
                      ? 'bg-[#4A1F29] text-white'
                      : 'bg-white text-[#4A1F29] hover:bg-[#4A1F29] hover:text-white'
                  }`}
                >
                  {filter}
                </button>
              ))}
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {filteredImages.map((image, index) => (
              <div 
                key={index} 
                className={`group relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  index % 7 === 0 || index % 7 === 3 ? 'md:row-span-2' : ''
                }`}
              >
                <img 
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-[#4A1F29]/0 group-hover:bg-[#4A1F29]/30 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">What Couples Say</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Hear from the couples whose love stories we've had the honor to capture.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative bg-[#F5F4F0] rounded-3xl p-8 lg:p-12">
              <div className="text-center">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-20 h-20 rounded-full object-cover mx-auto mb-6"
                />
                
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-[#D4AF37] fill-current" />
                  ))}
                </div>
                
                <blockquote className="text-lg lg:text-xl mb-6 italic leading-relaxed">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>
                
                <div className="font-semibold text-[#4A1F29]">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-sm opacity-60">
                  {testimonials[currentTestimonial].date}
                </div>
              </div>
              
              <button 
                onClick={prevTestimonial}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <button 
                onClick={nextTestimonial}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-shadow"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
            
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentTestimonial ? 'bg-[#4A1F29]' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Highlights */}
      <section id="blog" className="py-16 lg:py-24 bg-[#F5F4F0]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Latest Blog Posts</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Tips, inspiration, and insights from the world of wedding photography.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "5 Tips for Flawless Wedding Photos",
                excerpt: "Essential preparation tips to ensure your wedding photos are picture-perfect.",
                image: "https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
                date: "December 1, 2024"
              },
              {
                title: "How to Pick Your First-Look Spot",
                excerpt: "Choosing the perfect location for that magical first-look moment.",
                image: "https://images.pexels.com/photos/1024970/pexels-photo-1024970.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
                date: "November 28, 2024"
              },
              {
                title: "Lighting Tricks for Golden Hour",
                excerpt: "Making the most of that perfect golden hour light for romantic portraits.",
                image: "https://images.pexels.com/photos/1194713/pexels-photo-1194713.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&dpr=2",
                date: "November 25, 2024"
              }
            ].map((post, index) => (
              <article key={index} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden">
                <img 
                  src={post.image}
                  alt={post.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="text-sm text-[#D4AF37] mb-2">{post.date}</div>
                  <h3 className="text-xl font-bold mb-3">{post.title}</h3>
                  <p className="opacity-80 mb-4">{post.excerpt}</p>
                  <button className="text-[#4A1F29] font-semibold hover:text-[#D4AF37] transition-colors">
                    Read More →
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Booking */}
      <section id="contact" className="py-16 lg:py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-5xl font-bold mb-6">Let's Create Magic Together</h2>
            <p className="text-lg opacity-80 max-w-2xl mx-auto">
              Ready to capture your love story? Get in touch to discuss your special day.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold mb-2">Your Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A1F29] focus:ring-2 focus:ring-[#4A1F29]/10 outline-none transition-all"
                      placeholder="Enter your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold mb-2">Email Address</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A1F29] focus:ring-2 focus:ring-[#4A1F29]/10 outline-none transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Wedding Date</label>
                  <input 
                    type="date" 
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A1F29] focus:ring-2 focus:ring-[#4A1F29]/10 outline-none transition-all"
                  />
                </div>
                
                <div>
                  <label className="block text-sm font-semibold mb-2">Message</label>
                  <textarea 
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-[#4A1F29] focus:ring-2 focus:ring-[#4A1F29]/10 outline-none transition-all resize-none"
                    placeholder="Tell us about your special day..."
                  ></textarea>
                </div>
                
                <button 
                  type="submit"
                  className="w-full bg-[#4A1F29] text-white py-4 rounded-lg hover:bg-[#5A2435] transition-colors font-semibold text-lg"
                >
                  Send Message
                </button>
              </form>
              
              <div className="mt-8 text-center">
                <p className="text-sm opacity-80 mb-4">Or email me directly at</p>
                <a 
                  href="mailto:hello@loveframes.com" 
                  className="text-[#4A1F29] font-semibold hover:text-[#D4AF37] transition-colors"
                >
                  hello@loveframes.com
                </a>
              </div>
            </div>
            
            <div className="flex flex-col justify-center">
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                    <Mail className="w-5 h-5 text-[#4A1F29]" />
                  </div>
                  <div>
                    <div className="font-semibold">Email</div>
                    <div className="opacity-80">hello@loveframes.com</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                    <Phone className="w-5 h-5 text-[#4A1F29]" />
                  </div>
                  <div>
                    <div className="font-semibold">Phone</div>
                    <div className="opacity-80">+1 (555) 123-4567</div>
                  </div>
                </div>
                
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-[#F5F4F0] rounded-full flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-[#4A1F29]" />
                  </div>
                  <div>
                    <div className="font-semibold">Location</div>
                    <div className="opacity-80">San Francisco, CA</div>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <div className="text-lg font-semibold mb-4">Follow My Work</div>
                <div className="flex space-x-4">
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#4A1F29] rounded-full flex items-center justify-center text-white hover:bg-[#5A2435] transition-colors"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a 
                    href="#" 
                    className="w-12 h-12 bg-[#4A1F29] rounded-full flex items-center justify-center text-white hover:bg-[#5A2435] transition-colors"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A1F29] text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="flex items-center space-x-1">
                  <div className="w-6 h-6 bg-white rounded-full"></div>
                  <div className="w-6 h-6 flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white fill-current" />
                  </div>
                </div>
              </div>
              <p className="opacity-80 mb-4">
                Capturing love stories with elegance and artistry since 2014.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Instagram className="w-5 h-5" />
                </a>
                <a href="#" className="opacity-80 hover:opacity-100 transition-opacity">
                  <Facebook className="w-5 h-5" />
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li><a href="#home" className="opacity-80 hover:opacity-100 transition-opacity">Home</a></li>
                <li><a href="#portfolio" className="opacity-80 hover:opacity-100 transition-opacity">Portfolio</a></li>
                <li><a href="#services" className="opacity-80 hover:opacity-100 transition-opacity">Services</a></li>
                <li><a href="#about" className="opacity-80 hover:opacity-100 transition-opacity">About</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Wedding Photography</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Engagement Sessions</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Bridal Portraits</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Custom Albums</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Legal</h4>
              <ul className="space-y-2">
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Privacy Policy</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Terms of Service</a></li>
                <li><a href="#" className="opacity-80 hover:opacity-100 transition-opacity">Copyright</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-white/20 mt-8 pt-8 text-center">
            <p className="opacity-80">
              © 2024 LoveFrames Photography. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;