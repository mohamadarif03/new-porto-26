import { useState, useEffect, useRef } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import About from './pages/About.jsx';
import Contact from './pages/Contact.jsx';
import ProjectsPage from './pages/Projects.jsx';
import CertificationsPage from './pages/Certifications.jsx';
import ProjectDetail from './pages/ProjectDetail.jsx';
import { projects } from './data/projects.js';
import './navbar-mobile.css';

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);

  const certificates = [
    {
      title: 'Machine Learning for Beginners',
      issuer: 'Dicoding',
      image: '/certificate/dicoding-belajar machine learning untuk pemula-D-gNHk9Z.png',
    },
    {
      title: 'Data Visualization',
      issuer: 'Dicoding',
      image: '/certificate/dicoding-belajar visualisasi data-BRYqhVab.png',
    },
    {
      title: 'Python Programming',
      issuer: 'Dicoding',
      image: '/certificate/dicoding-memulai pemrograman dengan python-DuGWBR1e.png',
    },
    {
      title: 'Golang Development',
      issuer: 'Sanbercode',
      image: '/certificate/golang-sanbercode-BwYqxc-J.png',
    },
    {
      title: 'Machine Learning',
      issuer: 'IBM',
      image: '/certificate/machine-learning-ibm-DuIUTlc6.png',
    },
    {
      title: 'Winner 3rd Place T-Arts Competition',
      issuer: 'T-Arts',
      image: '/certificate/winner 3rd place t-arts competition-ByytJNZ-.png',
    },
  ];



  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Horizontal scroll effect for project section
      const section = projectSectionRef.current;
      const track = projectTrackRef.current;
      if (section && track) {
        if (window.innerWidth <= 1024) {
          track.style.transform = 'none';
          return;
        }

        const rect = section.getBoundingClientRect();
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollableDistance = sectionHeight - windowHeight;

        if (scrollableDistance > 0) {
          const scrollProgress = (window.scrollY - sectionTop) / scrollableDistance;
          const clampedProgress = Math.max(0, Math.min(1, scrollProgress));
          const maxTranslate = track.scrollWidth - window.innerWidth + 80;
          track.style.transform = `translateX(-${clampedProgress * maxTranslate}px)`;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Navbar (Fixed di Atas) */}
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`} id="navbar">
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>Mohamad Arif</Link>
          
          <button 
            className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>

          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Project</Link></li>
              <li><Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Certifications</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
      </nav>

      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/project/:slug" element={<ProjectDetail projects={projects} />} />
        <Route path="/certifications" element={<CertificationsPage />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/*" element={<HomePage scrolled={isScrolled} projectSectionRef={projectSectionRef} projectTrackRef={projectTrackRef} certificates={certificates} projects={projects} />} />
      </Routes>

      <div className="contact-footer" style={{ padding: '20px', textAlign: 'center', backgroundColor: 'transparent', color: '#64748b', marginTop: 'auto' }}>
          <p>&copy; 2026 Mohamad Arif. All rights reserved.</p>
      </div>
    </>
  );
}

function HomePage({ projectSectionRef, projectTrackRef, certificates, projects }) {
  return (
    <>

      <section className="hero-section">
          <div className="hero-text">
          <h1 className="greeting">Hi I'm Arif</h1>
          <h2 className="role">Web Developer & Data Enthusiast</h2>
      </div>
      
      {/* Memanggil file foto Anda */}
      <img src="/saya.png" alt="Arif" className="profile-image" />

      {/* Stats di Sisi Kiri */}
      <div className="hero-stats">
          <div className="stat-item">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years<br/>Experience</span>
          </div>
          <div className="stat-item">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects<br/>Completed</span>
          </div>
          <div className="stat-item">
              <span className="stat-number">8+</span>
              <span className="stat-label">Certificates<br/>Achieved</span>
          </div>
      </div>

      {/* Teks Deskripsi di Sisi Kanan */}
      <p className="description">
          Passionate web developer currently expanding into data science, driven to create smarter and more impactful digital solutions.
      </p>

      {/* Tombol Get in Touch di Pojok Kanan Bawah */}
      <a href="#" className="btn-contact">
          Download CV &rarr;
      </a>
    
      {/* Tautan Sosial di Kiri Bawah */}
      <div className="social-links">
          <a href="#">LinkedIn</a>
          <a href="#">GitHub</a>
          <a href="#">Instagram</a>
      </div>
      </section>

      {/* Tech Stack Marquee Section (Bagian yang berjalan) */}
      <section className="marquee-section">
          <div className="marquee-track">
              {/* Set Pertama */}
              <div className="marquee-content">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" alt="Go" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="Numpy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
              </div>
              {/* Set Kedua — salinan identik untuk membuat efek loop yang tidak terputus */}
              <div className="marquee-content">
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" alt="PHP" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/go/go-original.svg" alt="Go" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" alt="React" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" alt="Python" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/pandas/pandas-original.svg" alt="Pandas" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/numpy/numpy-original.svg" alt="Numpy" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg" alt="TypeScript" />
                  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" alt="Tailwind" />
              </div>
          </div>
      </section>



      {/* My Journey Section */}
      <section className="journey-section" id="journey">
          <div className="journey-header">
              <span className="journey-subtitle">/ Who Am I</span>
              <h2 className="journey-title">Pushing Boundaries <span className="light-text">since 2023</span></h2>
          </div>
          
          <div className="journey-container">
              <div className="journey-left">
                  <div className="journey-image-wrapper">
                      <img src="/photo.jpg" alt="Arif" className="journey-image" />
                  </div>
                  <div className="journey-social">
                      <div className="social-icons">
                          <a href="#" aria-label="X (Twitter)">
                              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                          </a>
                          <a href="#" aria-label="LinkedIn">
                              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                          </a>
                          <a href="#" aria-label="Instagram">
                              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
                          </a>
                      </div>
                      <div className="journey-name">
                          <strong>Mohamad Arif</strong><br />
                          <span>Data Enthusiast</span>
                      </div>
                  </div>
              </div>
              
              <div className="journey-right">
                  <p className="journey-description">
                      A passionate web developer and data enthusiast focusing on creating intuitive digital experiences. I've collaborated with teams to design products that blend usability and aesthetics, focusing on solving problems through a design thinking journey process.
                  </p>
                  
                  <div className="journey-list">
                      <div className="journey-row">
                          <div className="journey-role">Data Science</div>
                          <div className="journey-company">BCC Community</div>
                          <div className="journey-date">2026 &rarr; Now</div>
                      </div>
                      <div className="journey-row">
                          <div className="journey-role">Web Developer</div>
                          <div className="journey-company">Jobnation.id</div>
                          <div className="journey-date">2025 &rarr; 2026</div>
                      </div>
                      <div className="journey-row">
                          <div className="journey-role">Web Developer & Tech Mentor</div>
                          <div className="journey-company">PT Hummatech</div>
                          <div className="journey-date">2024 &rarr; 2025</div>
                      </div>
                      <div className="journey-row">
                          <div className="journey-role">Web Developer Intern</div>
                          <div className="journey-company">PT Hummatech</div>
                          <div className="journey-date">2023 &rarr; 2024</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Projects Section - Horizontal Scroll */}
      <section className="projects-section" id="projects" ref={projectSectionRef}>
          <div className="projects-sticky">
              <div className="projects-header">
                  <span className="projects-subtitle">/ Selected Work</span>
                  <h2 className="projects-title">Recent <span className="light-text">Projects</span></h2>
              </div>
              <div className="projects-track" ref={projectTrackRef}>
                  {projects.map((project, index) => (
                      <Link to={`/project/${project.slug}`} className="project-card" key={index} style={{backgroundImage: `url(${project.image})`, display: 'block', textDecoration: 'none'}}>
                          <div className="project-overlay">
                              <span className="project-type">{project.type}</span>
                              <h3 className="project-name">{project.title}</h3>
                              <p className="project-desc">{project.description}</p>
                          </div>
                      </Link>
                  ))}
              </div>
          </div>
      </section>

      {/* Certifications Section */}
      <section className="certs-section" id="certifications">
          <div className="certs-header">
              <span className="certs-subtitle">/ Achievements</span>
              <h2 className="certs-title">My <span className="light-text">Certifications</span></h2>
          </div>
          <div className="certs-grid">
              {certificates.slice(0, 3).map((cert, index) => (
                  <div className="cert-card" key={index}>
                      <div className="cert-image-wrapper">
                          <img src={cert.image} alt={cert.title} className="cert-image" />
                      </div>
                      <div className="cert-info">
                          <span className="cert-issuer">{cert.issuer}</span>
                          <h3 className="cert-name">{cert.title}</h3>
                      </div>
                  </div>
              ))}
          </div>
          <div className="certs-action">
              <Link to="/certifications" className="btn-view-all" style={{ textDecoration: 'none' }}>
                  View All Certifications &rarr;
              </Link>
          </div>
      </section>



      {/* ── CONTACT SECTION ── */}
      <section id="contact" className="contact-section">
          <div className="contact-container">
              <div className="contact-left">
                  <span className="contact-subtitle">/ Get In Touch</span>
                  <h2 className="contact-title">Let's Work <span className="light-text">Together</span></h2>
                  <p className="contact-desc">
                      Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to new opportunities and collaborations.
                  </p>
                  <div className="contact-links">
                      <a href="mailto:mohamadarif5392@gmail.com" className="contact-link-item">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                          <span>mohamadarif5392@gmail.com</span>
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                          <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>
                          <span>LinkedIn</span>
                      </a>
                      <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                          <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
                          <span>GitHub</span>
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="contact-link-item">
                          <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/></svg>
                          <span>Instagram</span>
                      </a>
                  </div>
              </div>
              <div className="contact-right">
                  <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
                      <div className="form-group">
                          <label htmlFor="name">Name</label>
                          <input type="text" id="name" placeholder="Your name" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="email">Email</label>
                          <input type="email" id="email" placeholder="Your email" />
                      </div>
                      <div className="form-group">
                          <label htmlFor="message">Message</label>
                          <textarea id="message" rows="5" placeholder="Your message"></textarea>
                      </div>
                      <button type="submit" className="btn-send">Send Message &rarr;</button>
                  </form>
              </div>
          </div>
      </section>
    </>
  );
}

export default App;
