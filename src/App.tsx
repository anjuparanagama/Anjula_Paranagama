import {
  Github,
  Linkedin,
  Twitter,
  Mail,
  Menu,
  X,
  ExternalLink,
  Code2,
  ArrowRight,
  Phone,
  MapPin,
} from "lucide-react";
import { useState, useEffect } from "react";
import TItle from "./Title.tsx";
import Frm from "./Form.tsx";
import Education from "./Education";
import Skills from "./Skills";
import ProjectDetails from "./ProjectDetails";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Education & Experience", href: "#education" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const skillsByCategory = {
    "Programming Languages": ["Python", "Java", "JavaScript", "Go", "HTML"],
    "Frontend & Mobile Frameworks": [
      "React",
      "Next.js",
      "Tailwind CSS",
      "CSS",
      "React Native",
    ],
    "Backend Frameworks": ["Node.js", "Express", "Flask/FastAPI", "Go"],
    Database: ["MySQL", "PostgreSQL", "Supabase", "MongoDB"],
    AI: ["OpenAI", "TensorFlow"],
    Other: ["Docker", "Vercel", "Git", "Arduino", "Postman", "Figma", "Linux"],
  };

  const skillsDetails: Record<string, string> = {
    Python: "Automation, scripting, data analysis",
    Java: "Object-oriented programming, backend apps",
    Go: "Concurrent programming, microservices",
    "React Native": "Cross-platform mobile development",
    "Flask/FastAPI": "Python web frameworks for APIs",
    JavaScript: "ES6+, DOM, async programming",
    MongoDB: "NoSQL database, document modeling",
    HTML: "Semantic markup, accessibility",
    CSS: "Layout, responsive design, Tailwind",
    React: "Hooks, component design, state management",
    "Next.js": "SSR, routing, static sites",
    "Tailwind CSS": "Utility-first styling",
    "Node.js": "APIs with Express, async I/O",
    Express: "REST APIs and middleware",
    Django: "Python web framework, ORM",
    MySQL: "Relational databases, queries",
    PostgreSQL: "Advanced SQL features",
    Supabase: "Hosted Postgres + auth",
    OpenAI: "Prompting & integration",
    TensorFlow: "ML model building",
    Docker: "Containerization and images",
    AWS: "EC2, S3, basic infra",
    Git: "Version control workflows",
    Vercel: "Deployment and hosting",
    Arduino: "Embedded systems programming",
    Postman: "API testing and development",
    Figma: "UI/UX design",
    Linux: "Operating system, command line",
  };

  const projects = [
    {
      title: "Function.O",
      description:
        "A Full-Stack Event Management System with QR-Based Ticketing, Custom Designs, Real-Time Attendance, Email Automation, and a Modern Blue-White UI using React, Tailwind CSS, and Supabase",
      image: "/function.png",
      tags: ["React", "Tailwind CSS", "Supabase", "EmailJs"],
    },
    {
      title: "Laptop Mart",
      description:
        "A Full-Stack E-Commerce Platform for Laptop Sales with User Authentication, Product Listings, Cart System, Order Management, Admin Dashboard, and Modern UI using Next.js, Node.js, MySQL, and Tailwind CSS",
      image: "/laptopmart.png",
      tags: ["Next", "Tailwind CSS", "NodeJs", "mySQL"],
    },
    {
      title: "Meteo Earth",
      description:
        "A weather forecasting web application that fetches real-time weather data using the OpenWeather API. It displays temperature, humidity, wind speed, and weather conditions in an interactive and visually appealing format.",
      image: "/weather.png",
      tags: ["html", "css", "javascript", "API"],
    },
    {
      title: "Conference Day Management System",
      description:
        "A web-based system that streamlines conference management by handling participant registrations, schedules, and email notifications. It includes an admin panel for event organizers and an automated email system using PHPMailer.",
      image: "/irc.png",
      tags: ["HTML", "CSS", "PHP"],
    },
    {
      title: "Eco Vibe",
      description:
        "A modern and eco-friendly website built using React, designed to promote sustainability and environmental awareness. It features interactive UI components, responsive design, and smooth navigation.",
      image: "/ecovibe.png",
      tags: ["React", "Tailwind CSS"],
    },
    {
      title: "Simple Library Management System",
      description:
        "A basic library management system built in Java to help manage book records, issue tracking, and user management. It provides a simple interface for adding, searching, and issuing books.",
      image: "/lms.png",
      tags: ["Python"],
    },
    {
      title: "Simple Library Management System",
      description:
        "A Python-based library management system designed to handle book inventory, user accounts, and book transactions efficiently. It supports basic CRUD operations and a user-friendly interface.",
      image: "/lms.png",
      tags: ["Java"],
    },
    {
      title: "QR Code Generator ",
      description:
        "A simple web application that generates QR codes for URLs, text, and other data. Users can customize the size and style of the QR codes and download them for use.",
      image: "/qr.png",
      tags: ["HTML", "CSS", "JavaScript"],
    },
  ];

  const contactInfo = [
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+94 (71) 90 54 755 ",
    },
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "anjulaparanagama@gmail.com",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "Homagama, Sri lanka",
    },
  ];

  const [selectedProject, setSelectedProject] = useState<any | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  const openProject = (project: any) => {
    setSelectedProject(project);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProject(null);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modalOpen) closeModal();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen]);

  return (
    <div className="min-h-screen bg-white selection:bg-green-200">
      {/* Navbar */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm" : "bg-transparent"}`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-20">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-green-700 to-green-400 bg-clip-text text-transparent"></span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-gray-600 hover:text-green-700 transition-all hover:scale-105"
                >
                  {item.name}
                </a>
              ))}
            </div>

            {/* Mobile Navigation Button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-gray-600 hover:text-green-700 transition-colors"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Menu */}
        {isMenuOpen && (
          <div className="md:hidden absolute w-full">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg border-b border-green-50">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-600 hover:text-green-700 hover:bg-green-50/50 rounded-lg transition-all"
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
      <section className="min-h-screen flex items-center pt-20 pb-32 relative overflow-hidden">
        <div className="absolute inset-0 -z-10 hero-bg"></div>
        <div className="max-w-7xl mx-auto px-4 mt-5 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="md:w-2/3 space-y-4">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-green-100 to-white text-green-700 font-medium text-sm shadow-sm mb-2">
                <span className="relative flex h-2 w-2 mr-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-60"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-700"></span>
                </span>
                Open for opportunities
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight fade-in-up">
                Hi, I'm Anjula Paranagama
              </h1>
              <TItle />
              <p
                className="text-lg text-gray-600 max-w-xl fade-in-up"
                style={{ animationDelay: "250ms" }}
              >
                Bridging development and operations with secure cloud
                infrastructure and automation.
              </p>

              <div className="flex items-center gap-4 mt-4">
                <a
                  href="#contact"
                  className="cta-btn inline-flex items-center px-6 py-3 rounded-lg shadow-lg"
                >
                  Let's talk <ArrowRight className="ml-2 h-5 w-5" />
                </a>
                <a
                  href="#projects"
                  className="cta-outline inline-flex items-center px-5 py-3 rounded-lg"
                >
                  View Projects
                </a>
              </div>
            </div>

            <div className="md:w-1/3 flex justify-center md:justify-end relative">
              <div className="relative w-80 h-80 md:w-96 md:h-96">
                <div className="blob absolute -left-8 -top-8 w-96 h-96 rounded-full opacity-30 blur-3xl animate-blob"></div>
                <img
                  src="/profbg.png"
                  alt="Profile background"
                  className="absolute inset-0 rounded-3xl w-full h-[500px] object-cover z-0"
                />
                <img
                  src="/prof.png"
                  alt="Profile"
                  className="relative rounded-3xl w-full h-full object-cover mt-8 z-10"
                />
                <div className="absolute -bottom-10 -right-4 flex space-x-3 z-20">
                  <a
                    href="https://github.com/anjulaparanagama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md cursor-pointer"
                    aria-label="Open GitHub profile"
                  >
                    <Github className="w-4 h-4 text-gray-600" />
                  </a>

                  <a
                    href="https://linkedin.com/in/anjulaparanagama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full shadow-md cursor-pointer"
                    aria-label="Open LinkedIn profile"
                  >
                    <Linkedin className="w-4 h-4 text-green-700" />
                  </a>

                  <a
                    href="mailto:anjulaparanagama@gmail.com"
                    className="p-2 bg-white rounded-full shadow-md cursor-pointer"
                    aria-label="Send email"
                  >
                    <Mail className="w-4 h-4 text-red-500" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <Skills groups={skillsByCategory} skillsDetails={skillsDetails} />

      <Education />

      {/* Projects Section */}
      <section
        id="projects"
        className="py-2 pt-6  sm:py-32 bg-gradient-to-b from-green-50 to-white"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#06402B] to-[#2E6F40]">
              Featured Projects
            </h2>
            <div className="mx-auto h-1 w-28 rounded-full bg-gradient-to-r from-indigo-500 to-teal-400 opacity-90 mb-4"></div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Showcasing some of my best work in cloud security and DevOps
              automation.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mx-3">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group project-card bg-white rounded-2xl overflow-hidden shadow-xl transition-all duration-500 cursor-pointer"
                style={{ animationDelay: `${index * 80}ms` }}
                onClick={() => openProject(project)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") openProject(project);
                }}
              >
                <div className="relative overflow-hidden h-64 md:h-56 lg:h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                  <div className="absolute inset-0 flex items-end justify-between p-4 project-overlay">
                    <div className="flex space-x-2">
                      <a
                        href="#"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/90 text-gray-800 p-2 rounded-md shadow hover:scale-105 transition-transform"
                        aria-label="Open project"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </a>
                      <a
                        href="#"
                        onClick={(e) => e.stopPropagation()}
                        className="bg-white/90 text-gray-800 p-2 rounded-md shadow hover:scale-105 transition-transform"
                        aria-label="View code"
                      >
                        <Code2 className="w-4 h-4" />
                      </a>
                    </div>
                    <div className="text-right">
                      <span className="px-3 py-1 bg-white/80 rounded-full text-sm font-medium text-gray-800">
                        {project.tags[0]}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 bg-green-50 text-green-700 rounded-full text-sm font-medium tag-anim"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section
        id="contact"
        className="py-10 sm:py-32 bg-gradient-to-b from-white to-green-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#06402B] to-[#2E6F40]">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Schedule a consultation or reach out to discuss your project
              needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-xl border border-green-50">
                <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                  Contact Information
                </h3>
                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="flex items-center space-x-4">
                      <div className="text-green-700">{info.icon}</div>
                      <div>
                        <p className="text-sm text-gray-500">{info.label}</p>
                        <p className="text-gray-900 font-medium">
                          {info.value}
                        </p>
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
      <ProjectDetails
        project={selectedProject}
        open={modalOpen}
        onClose={closeModal}
      />
      <footer className="bg-[#001D00] text-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-white text-lg font-semibold">
                Anjula Paranagama
              </h3>
              <p className="mt-2 text-gray-400 max-w-xs">
                Bridging development and operations with secure cloud
                infrastructure and automation.
              </p>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Quick Links</h4>
              <nav className="flex flex-col space-y-2">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.name}
                  </a>
                ))}
              </nav>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-3">Contact</h4>
              <div className="space-y-3 text-gray-400">
                {contactInfo.map((info, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="text-green-400">{info.icon}</div>
                    <div>
                      <p className="text-sm">{info.label}</p>
                      <p className="text-gray-200 font-medium">{info.value}</p>
                    </div>
                  </div>
                ))}

                <div className="mt-4 flex items-center space-x-3">
                  <a
                    href="https://github.com/anjuparanagama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="GitHub"
                  >
                    <Github className="h-5 w-5 text-gray-200" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/anjula-paranagama"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <Linkedin className="h-5 w-5 text-green-300" />
                  </a>
                  <a
                    href="#"
                    className="p-2 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors"
                    aria-label="Twitter"
                  >
                    <Twitter className="h-5 w-5 text-blue-400" />
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-10 border-t border-gray-800 pt-6 text-center text-gray-500">
            © {new Date().getFullYear()} Anjula Paranagama. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
