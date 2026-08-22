import { useState, useEffect, useRef, lazy, Suspense } from 'react';
import { Routes, Route, Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { projects } from './data/projects.js';
import { FadeIn, StaggerContainer, StaggerItem, Parallax, MagneticHover, GlowCard } from './components/Motion.jsx';
import './navbar-mobile.css';
import './animations.css';

const About = lazy(() => import('./pages/About.jsx'));
const Contact = lazy(() => import('./pages/Contact.jsx'));
const ProjectsPage = lazy(() => import('./pages/Projects.jsx'));
const CertificationsPage = lazy(() => import('./pages/Certifications.jsx'));
const ProjectDetail = lazy(() => import('./pages/ProjectDetail.jsx'));

const pageVariants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  exit: { opacity: 0, y: -20, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } },
};

function PageWrapper({ children }) {
  return (
    <motion.div variants={pageVariants} initial="initial" animate="animate" exit="exit">
      {children}
    </motion.div>
  );
}

function App() {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);

  const certificates = [
    { title: 'Machine Learning for Beginners', issuer: 'Dicoding', image: '/certificate/dicoding-belajar machine learning untuk pemula-D-gNHk9Z.webp' },
    { title: 'Data Visualization', issuer: 'Dicoding', image: '/certificate/dicoding-belajar visualisasi data-BRYqhVab.webp' },
    { title: 'Python Programming', issuer: 'Dicoding', image: '/certificate/dicoding-memulai pemrograman dengan python-DuGWBR1e.webp' },
    { title: 'Golang Development', issuer: 'Sanbercode', image: '/certificate/golang-sanbercode-BwYqxc-J.webp' },
    { title: 'Machine Learning', issuer: 'IBM', image: '/certificate/machine-learning-ibm-DuIUTlc6.webp' },
    { title: 'Winner 3rd Place T-Arts Competition', issuer: 'T-Arts', image: '/certificate/winner 3rd place t-arts competition-ByytJNZ-.webp' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const section = projectSectionRef.current;
      const track = projectTrackRef.current;
      if (section && track) {
        if (window.innerWidth <= 1024) { track.style.transform = 'none'; return; }
        const scrollableDistance = section.offsetHeight - window.innerHeight;
        if (scrollableDistance > 0) {
          const clampedProgress = Math.max(0, Math.min(1, (window.scrollY - section.offsetTop) / scrollableDistance));
          track.style.transform = `translateX(-${clampedProgress * (track.scrollWidth - window.innerWidth + 80)}px)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR - regular nav, CSS handles centering with transform: translateX(-50%) */}
      <nav
        className={`navbar navbar-animate ${isScrolled ? 'scrolled' : ''}`}
        id="navbar"
      >
          <Link to="/" className="nav-logo" onClick={() => setIsMobileMenuOpen(false)}>Mohamad Arif</Link>
          <button className={`mobile-menu-btn ${isMobileMenuOpen ? 'open' : ''}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle Menu">
            <span></span><span></span><span></span>
          </button>
          <ul className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
              <li><Link to="/" className={location.pathname === '/' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Home</Link></li>
              <li><Link to="/about" className={location.pathname === '/about' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>About</Link></li>
              <li><Link to="/projects" className={location.pathname === '/projects' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Project</Link></li>
              <li><Link to="/certifications" className={location.pathname === '/certifications' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Certifications</Link></li>
              <li><Link to="/contact" className={location.pathname === '/contact' ? 'active' : ''} onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link></li>
          </ul>
      </nav>

      <AnimatePresence mode="wait">
        <Suspense fallback={<div style={{ minHeight: '100vh' }} />}>
          <Routes location={location} key={location.pathname}>
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/projects" element={<PageWrapper><ProjectsPage /></PageWrapper>} />
            <Route path="/project/:slug" element={<PageWrapper><ProjectDetail projects={projects} /></PageWrapper>} />
            <Route path="/certifications" element={<PageWrapper><CertificationsPage /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/*" element={<PageWrapper><HomePage projectSectionRef={projectSectionRef} projectTrackRef={projectTrackRef} certificates={certificates} projects={projects} /></PageWrapper>} />
          </Routes>
        </Suspense>
      </AnimatePresence>

      <motion.div className="contact-footer" style={{ padding: '20px', textAlign: 'center', backgroundColor: 'transparent', color: '#64748b', marginTop: 'auto' }} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <p>&copy; 2026 Mohamad Arif. All rights reserved.</p>
      </motion.div>
    </>
  );
}

function HomePage({ projectSectionRef, projectTrackRef, certificates, projects }) {
  return (
    <>
      {/* HERO - motion elements are fine here since hero uses flex, not absolute transforms */}
      <section className="hero-section">
          <motion.div className="hero-text" initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}>
            <h1 className="greeting">Hi I'm Arif</h1>
            <h2 className="role">Web Developer & Data Enthusiast</h2>
          </motion.div>
          <motion.img src="/saya.webp" alt="Arif" className="profile-image" width="373" height="669" initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }} />
          <motion.div className="hero-stats" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 0.8 }}>
              <div className="stat-item"><span className="stat-number">2+</span><span className="stat-label">Years<br/>Experience</span></div>
              <div className="stat-item"><span className="stat-number">15+</span><span className="stat-label">Projects<br/>Completed</span></div>
              <div className="stat-item"><span className="stat-number">8+</span><span className="stat-label">Certificates<br/>Achieved</span></div>
          </motion.div>
          <motion.p className="description" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8, delay: 1 }}>
              Passionate web developer currently expanding into data science, driven to create smarter and more impactful digital solutions.
          </motion.p>
          <motion.a href="/Mohamad_Arif_CV_ATS.pdf" target="_blank" rel="noopener noreferrer" className="btn-contact" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.2 }} whileHover={{ scale: 1.05, y: -3 }} whileTap={{ scale: 0.97 }}>
              Download CV &rarr;
          </motion.a>
          <motion.div className="social-links" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 1.3 }}>
              <MagneticHover strength={0.2}><a href="https://www.linkedin.com/in/mohamad-arif-68402627a/" target="_blank" rel="noopener noreferrer">LinkedIn</a></MagneticHover>
              <MagneticHover strength={0.2}><a href="https://github.com/mohamadarif03" target="_blank" rel="noopener noreferrer">GitHub</a></MagneticHover>
              <MagneticHover strength={0.2}><a href="https://www.instagram.com/mhmdarif346/" target="_blank" rel="noopener noreferrer">Instagram</a></MagneticHover>
          </motion.div>
      </section>

      {/* MARQUEE */}
      <section className="marquee-section">
          <div className="marquee-track">
              <div className="marquee-content">
                  {['php','go','react','python','pandas','numpy','typescript','tailwindcss'].map(icon => (
                    <img key={icon} src={`/icons/${icon}.svg`} alt={icon} width="45" height="45" loading="lazy" />
                  ))}
              </div>
              <div className="marquee-content">
                  {['php','go','react','python','pandas','numpy','typescript','tailwindcss'].map(icon => (
                    <img key={icon} src={`/icons/${icon}.svg`} alt={icon} width="45" height="45" loading="lazy" />
                  ))}
              </div>
          </div>
      </section>

      {/* JOURNEY */}
      <section className="journey-section" id="journey">
          <FadeIn direction="up">
            <div className="journey-header">
              <span className="journey-subtitle">/ Who Am I</span>
              <h2 className="journey-title">Pushing Boundaries <span className="light-text">since 2023</span></h2>
            </div>
          </FadeIn>
          <div className="journey-container">
              <FadeIn direction="left" delay={0.2} className="journey-left">
                  <Parallax speed={0.1}>
                    <motion.div className="journey-image-wrapper" whileHover={{ rotate: 0, scale: 1.02 }} transition={{ duration: 0.4 }}>
                        <img src="/photo.webp" alt="Arif" className="journey-image" width="500" height="500" loading="lazy" />
                    </motion.div>
                  </Parallax>
                  <div className="journey-social">
                      <div className="social-icons">
                          <motion.a href="#" aria-label="X" rel="noopener noreferrer" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg></motion.a>
                          <motion.a href="#" aria-label="LinkedIn" rel="noopener noreferrer" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg></motion.a>
                          <motion.a href="#" aria-label="Instagram" rel="noopener noreferrer" whileHover={{ y: -3 }} transition={{ duration: 0.2 }}><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.79-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg></motion.a>
                      </div>
                      <div className="journey-name"><strong>Mohamad Arif</strong><br /><span>Data Enthusiast</span></div>
                  </div>
              </FadeIn>
              <div className="journey-right">
                  <FadeIn direction="right" delay={0.3}>
                    <p className="journey-description">A passionate web developer and data enthusiast focusing on creating intuitive digital experiences. I've collaborated with teams to design products that blend usability and aesthetics, focusing on solving problems through a design thinking journey process.</p>
                  </FadeIn>
                  <StaggerContainer staggerDelay={0.1} className="journey-list">
                      {[
                        { role: 'Data Science', company: 'BCC Community', date: '2026 \u2192 Now' },
                        { role: 'Web Developer', company: 'Jobnation.id', date: '2025 \u2192 2026' },
                        { role: 'Web Developer & Tech Mentor', company: 'PT Hummatech', date: '2024 \u2192 2025' },
                        { role: 'Web Developer Intern', company: 'PT Hummatech', date: '2023 \u2192 2024' },
                      ].map((item, i) => (
                        <StaggerItem key={i} direction="right">
                          <div className="journey-row">
                            <div className="journey-role">{item.role}</div>
                            <div className="journey-company">{item.company}</div>
                            <div className="journey-date">{item.date}</div>
                          </div>
                        </StaggerItem>
                      ))}
                  </StaggerContainer>
              </div>
          </div>
      </section>

      {/* PROJECTS HORIZONTAL SCROLL - NO extra motion.div wrappers! */}
      <section className="projects-section" id="projects" ref={projectSectionRef}>
          <div className="projects-sticky">
              <FadeIn direction="up">
                <div className="projects-header">
                    <span className="projects-subtitle">/ Selected Work</span>
                    <h2 className="projects-title">Recent <span className="light-text">Projects</span></h2>
                </div>
              </FadeIn>
              <div className="projects-track" ref={projectTrackRef}>
                  {projects.map((project, index) => (
                      <Link to={`/project/${project.slug}`} className="project-card" key={index} style={{ textDecoration: 'none' }}>
                          <img src={project.image.replace(/\.(png|jpg|jpeg)$/, '.webp')} alt={project.title} className="project-card-bg" width="700" height="394" loading={index < 2 ? 'eager' : 'lazy'} />
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

      {/* CERTIFICATIONS */}
      <section className="certs-section" id="certifications">
          <FadeIn direction="up">
            <div className="certs-header">
              <span className="certs-subtitle">/ Achievements</span>
              <h2 className="certs-title">My <span className="light-text">Certifications</span></h2>
            </div>
          </FadeIn>
          <StaggerContainer staggerDelay={0.12} className="certs-grid">
              {certificates.slice(0, 3).map((cert, index) => (
                  <StaggerItem key={index} direction="up">
                    <GlowCard>
                      <motion.div className="cert-card" whileHover={{ y: -8, boxShadow: '0 20px 50px rgba(14, 165, 233, 0.15)' }} transition={{ duration: 0.3 }}>
                          <div className="cert-image-wrapper">
                              <img src={cert.image} alt={cert.title} className="cert-image" width="400" height="280" loading="lazy" />
                          </div>
                          <div className="cert-info">
                              <span className="cert-issuer">{cert.issuer}</span>
                              <h3 className="cert-name">{cert.title}</h3>
                          </div>
                      </motion.div>
                    </GlowCard>
                  </StaggerItem>
              ))}
          </StaggerContainer>
          <FadeIn direction="up" delay={0.3}>
            <div className="certs-action">
              <Link to="/certifications" className="btn-view-all" style={{ textDecoration: 'none' }}>
                  <motion.span whileHover={{ x: 5 }} transition={{ duration: 0.2 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>View All Certifications &rarr;</motion.span>
              </Link>
            </div>
          </FadeIn>
      </section>

      {/* CONTACT */}
      <section id="contact" className="contact-section">
          <div className="contact-container">
              <FadeIn direction="left" delay={0.2} className="contact-left">
                  <span className="contact-subtitle">/ Get In Touch</span>
                  <h2 className="contact-title">Let's Work <span className="light-text">Together</span></h2>
                  <p className="contact-desc">Have a project in mind or just want to say hello? Feel free to reach out. I'm always open to new opportunities and collaborations.</p>
                  <StaggerContainer staggerDelay={0.08} className="contact-links">
                      <StaggerItem direction="left"><a href="mailto:mohamadarif5392@gmail.com" className="contact-link-item"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg><span>mohamadarif5392@gmail.com</span></a></StaggerItem>
                      <StaggerItem direction="left"><a href="https://linkedin.com/in/mohamad-arif-68402627a" target="_blank" rel="noopener noreferrer" className="contact-link-item"><svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg><span>LinkedIn</span></a></StaggerItem>
                      <StaggerItem direction="left"><a href="https://github.com/mohamadarif03" target="_blank" rel="noopener noreferrer" className="contact-link-item"><svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg><span>GitHub</span></a></StaggerItem>
                      <StaggerItem direction="left"><a href="https://instagram.com/mhmdarif346/" target="_blank" rel="noopener noreferrer" className="contact-link-item"><svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.79-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/></svg><span>Instagram</span></a></StaggerItem>
                  </StaggerContainer>
              </FadeIn>
              <FadeIn direction="right" delay={0.3} className="contact-right">
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
              </FadeIn>
          </div>
      </section>
    </>
  );
}

export default App;
