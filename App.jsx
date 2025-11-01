import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X, Github, Linkedin, Mail, ExternalLink, Download, Code, Database, Brain, ChevronDown, Send, Sun, Moon } from 'lucide-react';

// Main App Component
export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  const theme = {
    bg: darkMode ? 'bg-gray-900' : 'bg-gray-50',
    text: darkMode ? 'text-gray-100' : 'text-gray-900',
    textSecondary: darkMode ? 'text-gray-400' : 'text-gray-600',
    card: darkMode ? 'bg-gray-800' : 'bg-white',
    border: darkMode ? 'border-gray-700' : 'border-gray-200',
    accent: 'bg-gradient-to-r from-cyan-500 to-blue-600',
  };

  return (
    <div className={`min-h-screen ${theme.bg} ${theme.text} transition-colors duration-300`}>
      {/* Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 origin-left z-50"
        style={{ scaleX: scrollYProgress }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-40 ${darkMode ? 'bg-gray-900/95' : 'bg-white/95'} backdrop-blur-sm border-b ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="text-xl font-bold bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent"
            >
              SSB
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className={`transition-colors ${
                    activeSection === item.toLowerCase()
                      ? 'text-cyan-500'
                      : theme.textSecondary
                  } hover:text-cyan-500`}
                >
                  {item}
                </button>
              ))}
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className={`md:hidden ${theme.card} border-t ${theme.border}`}
          >
            {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`block w-full text-left px-4 py-3 ${theme.textSecondary} hover:text-cyan-500`}
              >
                {item}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-500/30 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0.2, 1, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 p-1"
            >
              <div className={`w-full h-full rounded-full ${theme.card} flex items-center justify-center text-4xl font-bold`}>
                SB
              </div>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Shashank Shekhar Behera
            </h1>
            <div className="text-2xl md:text-3xl mb-6 bg-gradient-to-r from-cyan-500 to-blue-600 bg-clip-text text-transparent">
              Data Scientist | ML Enthusiast | AI Innovator
            </div>
            <p className={`text-xl ${theme.textSecondary} mb-8`}>
              Turning data into intelligent insights
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
                onClick={() => scrollToSection('contact')}
              >
                Hire Me
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-8 py-3 border-2 border-cyan-500 rounded-lg font-semibold hover:bg-cyan-500/10 transition-colors flex items-center gap-2`}
              >
                <Download size={20} />
                View Resume
              </motion.button>
            </div>
          </motion.div>
        </div>

        <motion.div
          style={{ opacity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <ChevronDown className="animate-bounce" size={32} />
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className={`${theme.card} p-8 rounded-2xl border ${theme.border}`}
            >
              <p className={`text-lg ${theme.textSecondary} mb-6`}>
                I'm a passionate Data Scientist and AI Engineer with a strong foundation in machine learning, 
                statistical analysis, and predictive modeling. My journey in data science began with a curiosity 
                about how intelligent systems can solve real-world problems.
              </p>
              <p className={`text-lg ${theme.textSecondary} mb-6`}>
                With certifications from Coursera and edX, I've honed my skills in Python, Java, SQL, and 
                various ML frameworks. I'm driven by the challenge of transforming raw data into actionable 
                insights that drive business value.
              </p>
              <p className={`text-lg ${theme.textSecondary}`}>
                When I'm not coding or training models, you'll find me exploring the latest research papers 
                in AI, contributing to open-source projects, or writing about machine learning concepts.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {['Python Expert', 'ML Engineer', 'Data Analyst', 'SQL Pro', 'AI Enthusiast', 
                'Deep Learning', 'Statistics', 'Problem Solver'].map((tag, i) => (
                <motion.span
                  key={tag}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="px-4 py-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 border border-cyan-500/50 rounded-full"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Skills & Expertise</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Code,
                title: 'Programming',
                skills: [
                  { name: 'Python', level: 95 },
                  { name: 'Java', level: 85 },
                  { name: 'SQL', level: 90 },
                  { name: 'JavaScript', level: 75 },
                ]
              },
              {
                icon: Brain,
                title: 'ML & AI',
                skills: [
                  { name: 'Machine Learning', level: 90 },
                  { name: 'Deep Learning', level: 85 },
                  { name: 'NLP', level: 80 },
                  { name: 'Computer Vision', level: 75 },
                ]
              },
              {
                icon: Database,
                title: 'Tools & Tech',
                skills: [
                  { name: 'TensorFlow', level: 85 },
                  { name: 'PyTorch', level: 80 },
                  { name: 'Scikit-learn', level: 90 },
                  { name: 'PostgreSQL', level: 85 },
                ]
              },
            ].map((category, idx) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.2 }}
                className={`${theme.card} p-6 rounded-2xl border ${theme.border} hover:border-cyan-500/50 transition-colors`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-3 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg">
                    <category.icon className="text-white" size={24} />
                  </div>
                  <h3 className="text-xl font-bold">{category.title}</h3>
                </div>

                {category.skills.map((skill, i) => (
                  <div key={skill.name} className="mb-4">
                    <div className="flex justify-between mb-2">
                      <span className={theme.textSecondary}>{skill.name}</span>
                      <span className="text-cyan-500">{skill.level}%</span>
                    </div>
                    <div className={`h-2 ${darkMode ? 'bg-gray-700' : 'bg-gray-300'} rounded-full overflow-hidden`}>
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.2 + i * 0.1, duration: 1 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600"
                      />
                    </div>
                  </div>
                ))}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Customer Churn Prediction',
                description: 'ML model predicting customer churn with 92% accuracy using ensemble methods',
                tags: ['Python', 'Scikit-learn', 'XGBoost'],
                github: '#'
              },
              {
                title: 'Sentiment Analysis Engine',
                description: 'NLP-based sentiment analyzer for social media data using transformers',
                tags: ['NLP', 'BERT', 'PyTorch'],
                github: '#'
              },
              {
                title: 'Sales Forecasting System',
                description: 'Time series forecasting model for retail sales prediction',
                tags: ['Python', 'ARIMA', 'Prophet'],
                github: '#'
              },
              {
                title: 'Image Classification API',
                description: 'Deep learning API for multi-class image classification',
                tags: ['TensorFlow', 'FastAPI', 'Docker'],
                github: '#'
              },
              {
                title: 'Recommendation Engine',
                description: 'Collaborative filtering system for personalized recommendations',
                tags: ['Python', 'ML', 'SQL'],
                github: '#'
              },
              {
                title: 'Data Dashboard',
                description: 'Interactive analytics dashboard with real-time insights',
                tags: ['React', 'D3.js', 'PostgreSQL'],
                github: '#'
              },
            ].map((project, idx) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ y: -10 }}
                className={`${theme.card} p-6 rounded-2xl border ${theme.border} hover:border-cyan-500/50 transition-all cursor-pointer group`}
              >
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-500 transition-colors">
                  {project.title}
                </h3>
                <p className={`${theme.textSecondary} mb-4`}>
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-cyan-500/10 text-cyan-500 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors"
                  >
                    <Github size={18} />
                    <span>Code</span>
                  </a>
                  <button className="flex items-center gap-2 text-cyan-500 hover:text-cyan-400 transition-colors">
                    <ExternalLink size={18} />
                    <span>Details</span>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 ${darkMode ? 'bg-gray-800/50' : 'bg-gray-100'}`}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-gradient-to-r from-cyan-500 to-blue-600 mx-auto mb-4"></div>
            <p className={`${theme.textSecondary} text-lg`}>
              Let's discuss how we can work together on your next data science project
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`${theme.card} p-8 rounded-2xl border ${theme.border}`}
          >
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block mb-2 font-semibold">Name</label>
                  <input
                    type="text"
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg border ${theme.border} focus:border-cyan-500 focus:outline-none transition-colors`}
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label className="block mb-2 font-semibold">Email</label>
                  <input
                    type="email"
                    className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg border ${theme.border} focus:border-cyan-500 focus:outline-none transition-colors`}
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block mb-2 font-semibold">Subject</label>
                <input
                  type="text"
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg border ${theme.border} focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="Project Discussion"
                />
              </div>
              <div>
                <label className="block mb-2 font-semibold">Message</label>
                <textarea
                  rows="5"
                  className={`w-full px-4 py-3 ${darkMode ? 'bg-gray-700' : 'bg-gray-100'} rounded-lg border ${theme.border} focus:border-cyan-500 focus:outline-none transition-colors`}
                  placeholder="Tell me about your project..."
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={(e) => {
                  e.preventDefault();
                  alert('Contact form submitted! In production, this would integrate with EmailJS or Formspree.');
                }}
                className="w-full py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow flex items-center justify-center gap-2"
              >
                <Send size={20} />
                Send Message
              </motion.button>
            </div>
          </motion.div>

          <div className="flex justify-center gap-6 mt-12">
            {[
              { icon: Github, link: 'https://github.com' },
              { icon: Linkedin, link: 'https://linkedin.com' },
              { icon: Mail, link: 'mailto:shashank@example.com' },
            ].map((social, idx) => (
              <motion.a
                key={idx}
                href={social.link}
                whileHover={{ scale: 1.2, rotate: 5 }}
                className="p-4 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-full hover:shadow-lg hover:shadow-cyan-500/50 transition-shadow"
              >
                <social.icon className="text-white" size={24} />
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 border-t ${theme.border}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className={theme.textSecondary}>
            © 2025 Shashank Shekhar Behera. All rights reserved.
          </p>
          <p className={`${theme.textSecondary} text-sm mt-2`}>
            Built with React, Tailwind CSS & Framer Motion
          </p>
        </div>
      </footer>
    </div>
  );
}
//framer motion hook form lucide tailwind css postcss autofixer 