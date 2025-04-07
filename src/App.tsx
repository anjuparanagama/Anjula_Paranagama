import React from 'react';
import { Github, Linkedin, Twitter, Mail, Menu, X, ExternalLink, Code2, Shield, Database, Terminal, ArrowRight, Calendar, Phone, MapPin } from 'lucide-react';
import { useState, useEffect } from 'react';
import TItle from './Title.tsx';
import Frm from './Form.tsx';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    date: '',
    time: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const skills = [
    { icon: <Code2 className="w-8 h-8" />, name: 'DevOps', description: 'CI/CD, git' },
    { icon: <Database className="w-8 h-8" />, name: 'Infrastructure', description: 'AWS' },
    { icon: <Terminal className="w-8 h-8" />, name: 'Languages', description: 'Python, Java, HTML, JavaScript, C' },
  ];

  const projects = [
    {
      title: 'Meteo Earth',
      description: 'A weather forecasting web application that fetches real-time weather data using the OpenWeather API. It displays temperature, humidity, wind speed, and weather conditions in an interactive and visually appealing format.',
      image: '/weather.png',
      tags: ['html', 'css', 'javascript','API'],
    },
    {
      title: 'Conference Day Management System',
      description: 'A web-based system that streamlines conference management by handling participant registrations, schedules, and email notifications. It includes an admin panel for event organizers and an automated email system using PHPMailer.',
      image: '/irc.png',
      tags: ['HTML', 'CSS', 'PHP'],
    },
    {
      title: 'Eco Vibe',
      description: 'A modern and eco-friendly website built using React, designed to promote sustainability and environmental awareness. It features interactive UI components, responsive design, and smooth navigation.',
      image: '/ecovibe.png',
      tags: ['React', 'Tailwind CSS'],
    },
    {
      title: 'Simple Library Management System',
      description: 'A basic library management system built in Java to help manage book records, issue tracking, and user management. It provides a simple interface for adding, searching, and issuing books.',
      image: '/lms.png',
      tags: ['Python'],
    },
    {
      title: 'Simple Library Management System',
      description: 'A Python-based library management system designed to handle book inventory, user accounts, and book transactions efficiently. It supports basic CRUD operations and a user-friendly interface.',
      image: '/lms.png',
      tags: ['Java'],
    },
    {
      title: 'QR Code Generator ',
      description: 'A simple web application that generates QR codes for URLs, text, and other data. Users can customize the size and style of the QR codes and download them for use.',
      image: '/qr.png',
      tags: ['HTML', 'CSS', 'JavaScript'],
    },
  ];

  const contactInfo = [
    { icon: <Phone className="w-6 h-6" />, label: 'Phone', value: '+94 (71) 90 54 755 ' },
    { icon: <Mail className="w-6 h-6" />, label: 'Email', value: 'anjulaparanagama145@gmail.com' },
    { icon: <MapPin className="w-6 h-6" />, label: 'Location', value: 'Homagama, Sri lanka' },
  ];

  return (
    <div className="min-h-screen bg-white selection:bg-blue-200">
      {/* Navbar */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-lg shadow-sm' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-400 bg-clip-text text-transparent"></span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-blue-600 transition-all hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-blue-600 transition-colors"
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-b border-blue-50">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50/50 rounded-lg transition-all"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center pt-20 pb-32 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-16">
            <div className="md:w-1/2">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-600 font-medium text-sm mb-6">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                Available for hire
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Anjula Paranagama
              </h1>
              <TItle />

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Bridging the gap between development and operations while ensuring robust security practices. Specializing in cloud infrastructure and automated security solutions.
              </p>
              <div className="flex flex-wrap gap-4">
                <a
                  href="#contact"
                  className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-xl hover:bg-blue-700 transition-all hover:scale-105 shadow-lg shadow-blue-500/20"
                >
                  Get in Touch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#projects"
                  className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-xl hover:bg-blue-50 transition-all border-2 border-blue-100 hover:border-blue-200"
                >
                  View Projects
                </a>
              </div>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-blue-400 rounded-full blur-3xl opacity-20 animate-pulse"></div>
                <img
                  src="/my.jpg"
                  alt="Profile"
                  className="relative rounded-3xl w-72 h-72 object-cover border-8 border-white shadow-2xl transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Combining technical expertise with security best practices to deliver robust and scalable solutions.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="group p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 border border-blue-50 hover:border-blue-100"
              >
                <div className="text-blue-600 mb-6 transform group-hover:scale-110 transition-transform">{skill.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{skill.name}</h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-32 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Showcasing some of my best work in cloud security and DevOps automation.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className="relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-gray-900 mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="px-3 py-1 bg-blue-50 text-blue-600 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">Schedule a consultation or reach out to discuss your project needs.</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-blue-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-blue-600">{info.icon}</div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-gray-900 font-medium">{info.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Appointment Form */}
            <Frm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-blue-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center">
            <div className="flex justify-center space-x-8">
              <a href="https://github.com/anjuparanagama" className="text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
                <Github className="h-6 w-6" />
              </a>
              <a href="https://www.linkedin.com/in/anjula-paranagama" className="text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
                <Linkedin className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-600 transition-all hover:scale-110">
                <Twitter className="h-6 w-6" />
              </a>
            </div>
            <p className="mt-8 text-center text-gray-500">
              © 2025 Anjula Paranagama. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
