import { useState, useEffect, useRef } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const projectSectionRef = useRef(null);
  const projectTrackRef = useRef(null);

  const projects = [
    {
      type: 'WEBSITE',
      title: 'CobyLearnAI',
      description: 'Solving information overload for students by leveraging Gemini AI to summarize complex materials instantly. The platform integrates seamlessly with student workflows.',
      image: '/projects/cobyLearn.png',
    },
    {
      type: 'WEB PLATFORM',
      title: 'Sistem Informasi Pembina Jasa Konstruksi',
      description: 'Platform informasi terpadu untuk pembina jasa konstruksi nasional, provinsi dan kabupaten/kota guna meningkatkan transparansi dan kemudahan akses.',
      image: '/projects/sipjaki.png',
    },
    {
      type: 'MOBILE APP',
      title: 'Squad Hub',
      description: 'Aplikasi fintech modern dengan fitur pembayaran digital, manajemen keuangan, serta integrasi e-wallet yang praktis dan aman.',
      image: '/projects/squadhub.png',
    },
    {
      type: 'DASHBOARD',
      title: 'Kejar Taff',
      description: 'Dashboard manajemen interaktif dengan visualisasi distribusi area risiko dan analisis data real-time untuk pengambilan keputusan.',
      image: '/projects/kejarTaf.png',
    },
    {
      type: 'E-LEARNING',
      title: 'Get Skill',
      description: 'Platform edukasi online interaktif yang menghubungkan mentor dengan siswa untuk pengembangan skill di era digital.',
      image: '/projects/get-skill.png',
    },
    {
      type: 'AI PLATFORM',
      title: 'Dolfin Brain',
      description: 'Platform analitik canggih bertenaga kecerdasan buatan untuk pemrosesan bahasa alami (NLP) dan prediksi tren data secara instan.',
      image: '/projects/dolfinBrain.png',
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
          <a href="#" className="nav-logo">Mohamad Arif</a>
          <ul className="nav-links">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Project</a></li>
              <li><a href="#">Certifications</a></li>
              <li><a href="#">Contact Us</a></li>
          </ul>
      </nav>

      <section className="hero-section">
          <div className="hero-text">
          <h1 className="greeting">Hi I'm Arif</h1>
          <h2 className="role">Web Developer & Data Enthusiast</h2>
      </div>
      
      {/* Memanggil file foto Anda */}
      <img src="/saya.png" alt="Arif" className="profile-image" />

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
                      {/* Anda bisa mengganti dengan foto yang sesuai */}
                      <img src="/photo.jpg" alt="Arif" className="journey-image" />
                  </div>
                  <div className="journey-social">
                      <div className="social-icons">
                          <a href="#" aria-label="X (Twitter)">
                              <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                          </a>
                          <a href="#" aria-label="LinkedIn">
                              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
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
                  <h2 className="projects-title">My <span className="light-text">Projects</span></h2>
              </div>
              <div className="projects-track" ref={projectTrackRef}>
                  {projects.map((project, index) => (
                      <div className="project-card" key={index} style={{backgroundImage: `url(${project.image})`}}>
                          <div className="project-overlay">
                              <span className="project-type">{project.type}</span>
                              <h3 className="project-name">{project.title}</h3>
                              <p className="project-desc">{project.description}</p>
                          </div>
                      </div>
                  ))}
              </div>
          </div>
      </section>
    </>
  );
}

export default App;
