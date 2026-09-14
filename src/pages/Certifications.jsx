import { useState, useEffect } from "react";

function Certifications() {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedCert, setSelectedCert] = useState(null);

  const categories = ["All", "Course", "Achievement"];

  const certificates = [
    {
      title: "Machine Learning for Beginners",
      issuer: "Dicoding",
      image:
        "/certificate/dicoding-belajar machine learning untuk pemula-D-gNHk9Z.webp",
      category: "Course",
      date: "Jan 2025",
      credentialId: "D-gNHk9Z",
      skills: ["Machine Learning", "Python", "Supervised Learning"],
      description:
        "Covered fundamental ML concepts including supervised/unsupervised learning, model evaluation, and practical implementation with Python.",
      level: "Beginner",
    },
    {
      title: "Data Visualization",
      issuer: "Dicoding",
      image: "/certificate/dicoding-belajar visualisasi data-BRYqhVab.webp",
      category: "Course",
      date: "Dec 2024",
      credentialId: "BRYqhVab",
      skills: ["Data Visualization", "Matplotlib", "Dashboard Design"],
      description:
        "Mastered data visualization techniques using various tools and libraries to create insightful, interactive dashboards.",
      level: "Beginner",
    },
    {
      title: "Python Programming",
      issuer: "Dicoding",
      image: "/certificate/dicoding-memulai pemrograman dengan python-DuGWBR1e.webp",
      category: "Course",
      date: "Nov 2024",
      credentialId: "DuGWBR1e",
      skills: ["Python", "OOP", "Data Structures"],
      description:
        "Learned Python fundamentals including object-oriented programming, data structures, functions, and best practices.",
      level: "Beginner",
    },
    {
      title: "Golang Development",
      issuer: "Sanbercode",
      image: "/certificate/golang-sanbercode-BwYqxc-J.webp",
      category: "Course",
      date: "Aug 2024",
      credentialId: "BwYqxc-J",
      skills: ["Golang", "REST API", "Backend Development"],
      description:
        "Completed an intensive Go bootcamp covering goroutines, RESTful API development, and backend architecture patterns.",
      level: "Intermediate",
    },
    {
      title: "Machine Learning",
      issuer: "IBM",
      image: "/certificate/machine-learning-ibm-DuIUTlc6.webp",
      category: "Course",
      date: "Mar 2025",
      credentialId: "DuIUTlc6",
      skills: [
        "Machine Learning",
        "IBM Watson",
        "Classification",
        "Regression",
      ],
      description:
        "IBM-certified course covering classification, regression, clustering, and recommendation systems using real-world datasets.",
      level: "Intermediate",
    },
    {
      title: "Introduction to Deep Learning",
      issuer: "IBM",
      image: "/certificate/introduction-to-deep-learning.png",
      category: "Course",
      date: "Aug 2026",
      credentialId: "IBM-DL-2026",
      skills: [
        "Deep Learning",
        "Neural Networks",
        "Backpropagation",
        "Activation Function",
        "Vanishing Gradient",
      ],
      description:
        "Explored the foundations of deep learning, including neural network architectures, backpropagation algorithms, activation functions, and techniques to address the vanishing gradient problem.",
      level: "Intermediate",
    },
    {
      title: "Winner 3rd Place T-Arts Competition",
      issuer: "T-Arts",
      image: "/certificate/winner 3rd place t-arts competition-ByytJNZ-.webp",
      category: "Achievement",
      date: "Oct 2024",
      credentialId: "ByytJNZ-",
      skills: ["Web Development", "UI/UX Design", "Competition"],
      description:
        "Won 3rd place in a technology & arts competition, showcasing a creative web-based solution judged by industry professionals.",
      level: "Competition",
    },
    {
      title: "Winner 1st Place ITC Competition",
      issuer: "ITC",
      image: "/certificate/winner 1st place itc competition.webp",
      category: "Achievement",
      date: "Sep 2024",
      credentialId: "ITC-2024",
      skills: ["Problem Solving", "Innovation", "Web Development"],
      description:
        "Claimed 1st place in the ITC technology competition for developing an innovative web-based solution with real-world impact.",
      level: "Competition",
    },
    {
      title: "Internship Certificate - BCC Community",
      issuer: "BCC",
      image: "/certificate/intern-bcc.webp",
      category: "Achievement",
      date: "Feb 2026",
      credentialId: "BCC-2026",
      skills: ["Data Science", "Teamwork", "Research"],
      description:
        "Completed an internship program focused on data science exploration and collaborative research within the BCC community.",
      level: "Professional",
    },
    {
      title: "Internship Certificate - PT Humma Teknologi",
      issuer: "Hummatech",
      image: "/certificate/magang-hummatech.webp",
      category: "Achievement",
      date: "Jun 2024",
      credentialId: "HMT-2024",
      skills: ["Laravel", "Full-Stack", "Agile Development"],
      description:
        "Successfully completed a 6-month industrial internship focused on full-stack web development using Laravel and modern frameworks.",
      level: "Professional",
    },
  ];

  const filteredCerts =
    activeFilter === "All"
      ? certificates
      : certificates.filter((c) => c.category === activeFilter);

  const courseCount = certificates.filter(
    (c) => c.category === "Course",
  ).length;
  const achieveCount = certificates.filter(
    (c) => c.category === "Achievement",
  ).length;

  const allSkills = [...new Set(certificates.flatMap((c) => c.skills))];

  useEffect(() => {
    const selectors = ['.cert-pg-hero-inner', '.cert-pg-stat-card', '.cert-pg-skills-cloud', '.cert-pg-filter-bar', '.cert-pg-card'];
    const elements = document.querySelectorAll(selectors.join(', '));
    elements.forEach(el => el.style.opacity = '0');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('fade-in-up');
          entry.target.style.opacity = '';
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });

    elements.forEach(el => observer.observe(el));

    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, [activeFilter]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
    <>
      {/* ── HERO ── */}
      <section className="cert-pg-hero">
        <div className="cert-pg-hero-inner">
          <span className="cert-pg-label">/ Credentials</span>
          <h1 className="cert-pg-title">
            Certifications &{" "}
            <span className="cert-pg-accent">Achievements</span>
          </h1>
          <p className="cert-pg-desc">
            A record of continuous learning and competitive success — from
            industry-recognized courses to winning trophies in national tech
            competitions.
          </p>

          {/* Overview Stats */}
          <div className="cert-pg-stats">
            <div className="cert-pg-stat-card">
              <div className="cert-pg-stat-icon">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                  <line x1="8" y1="21" x2="16" y2="21" />
                  <line x1="12" y1="17" x2="12" y2="21" />
                </svg>
              </div>
              <div className="cert-pg-stat-info">
                <span className="cert-pg-stat-num">{certificates.length}</span>
                <span className="cert-pg-stat-txt">Total Credentials</span>
              </div>
            </div>
            <div className="cert-pg-stat-card">
              <div className="cert-pg-stat-icon course">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                </svg>
              </div>
              <div className="cert-pg-stat-info">
                <span className="cert-pg-stat-num">{courseCount}</span>
                <span className="cert-pg-stat-txt">Courses Completed</span>
              </div>
            </div>
            <div className="cert-pg-stat-card">
              <div className="cert-pg-stat-icon achieve">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <circle cx="12" cy="8" r="7" />
                  <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
              </div>
              <div className="cert-pg-stat-info">
                <span className="cert-pg-stat-num">{achieveCount}</span>
                <span className="cert-pg-stat-txt">Achievements Won</span>
              </div>
            </div>
          </div>

          {/* Skills Cloud */}
          <div className="cert-pg-skills-cloud">
            <span className="cert-pg-skills-label">Skills Validated</span>
            <div className="cert-pg-skills-list">
              {allSkills.map((skill, i) => (
                <span key={i} className="cert-pg-skill-tag">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FILTER + GRID ── */}
      <section className="cert-pg-content">
        <div className="cert-pg-content-inner">
          {/* Filter Tabs */}
          <div className="cert-pg-filter-bar">
            {categories.map((cat) => (
              <button
                key={cat}
                className={`cert-pg-filter-btn ${activeFilter === cat ? "active" : ""}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === "All" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <rect x="3" y="3" width="7" height="7" />
                    <rect x="14" y="3" width="7" height="7" />
                    <rect x="14" y="14" width="7" height="7" />
                    <rect x="3" y="14" width="7" height="7" />
                  </svg>
                )}
                {cat === "Course" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                    <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
                  </svg>
                )}
                {cat === "Achievement" && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                )}
                <span>{cat}</span>
                <span className="cert-pg-filter-count">
                  {cat === "All"
                    ? certificates.length
                    : certificates.filter((c) => c.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Grid: Bento-style layout */}
          <div className="cert-pg-grid animate-in">
            {filteredCerts.map((cert, index) => (
              <div
                className={`cert-pg-card ${cert.category === "Achievement" ? "achievement" : ""}`}
                key={`${activeFilter}-${index}`}
                style={{ animationDelay: `${index * 0.08}s` }}
                onClick={() => setSelectedCert(cert)}
              >
                {/* Preview strip */}
                <div className="cert-pg-card-preview">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="cert-pg-card-img"
                    width="400"
                    height="200"
                    loading="lazy"
                  />
                  <div className="cert-pg-card-preview-overlay">
                    <span className="cert-pg-card-view-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                        <circle cx="12" cy="12" r="3" />
                      </svg>
                      View Certificate
                    </span>
                  </div>
                </div>

                {/* Card content */}
                <div className="cert-pg-card-body">
                  <div className="cert-pg-card-top-row">
                    <span
                      className={`cert-pg-card-badge ${cert.category === "Achievement" ? "achieve" : "course"}`}
                    >
                      {cert.category === "Achievement" ? "🏆" : "📜"}{" "}
                      {cert.category}
                    </span>
                    <span className="cert-pg-card-level">{cert.level}</span>
                  </div>

                  <h3 className="cert-pg-card-title">{cert.title}</h3>

                  <div className="cert-pg-card-issuer-row">
                    <span className="cert-pg-card-issuer">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
                      </svg>
                      {cert.issuer}
                    </span>
                    <span className="cert-pg-card-date">
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                      >
                        <rect
                          x="3"
                          y="4"
                          width="18"
                          height="18"
                          rx="2"
                          ry="2"
                        />
                        <line x1="16" y1="2" x2="16" y2="6" />
                        <line x1="8" y1="2" x2="8" y2="6" />
                        <line x1="3" y1="10" x2="21" y2="10" />
                      </svg>
                      {cert.date}
                    </span>
                  </div>

                  <p className="cert-pg-card-desc">{cert.description}</p>

                  <div className="cert-pg-card-skills">
                    {cert.skills.map((skill, i) => (
                      <span key={i} className="cert-pg-card-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULLSCREEN MODAL ── */}
      {selectedCert && (
        <div
          className="cert-pg-modal-overlay"
          onClick={() => setSelectedCert(null)}
        >
          <div className="cert-pg-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="cert-pg-modal-close"
              onClick={() => setSelectedCert(null)}
            >
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>

            <div className="cert-pg-modal-layout">
              {/* Image Side */}
              <div className="cert-pg-modal-img-wrap">
                <img
                  src={selectedCert.image}
                  alt={selectedCert.title}
                  className="cert-pg-modal-img"
                  width="600"
                  height="400"
                />
              </div>

              {/* Info Side */}
              <div className="cert-pg-modal-info">
                <span
                  className={`cert-pg-card-badge ${selectedCert.category === "Achievement" ? "achieve" : "course"}`}
                >
                  {selectedCert.category === "Achievement" ? "🏆" : "📜"}{" "}
                  {selectedCert.category}
                </span>
                <h2 className="cert-pg-modal-title">{selectedCert.title}</h2>

                <div className="cert-pg-modal-meta">
                  <div className="cert-pg-modal-meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M19 21V5a2 2 0 0 0-2-2H7a2 2 0 0 0-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5m-4 0h4" />
                    </svg>
                    <span>
                      <strong>Issuer:</strong> {selectedCert.issuer}
                    </span>
                  </div>
                  <div className="cert-pg-modal-meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                      <line x1="16" y1="2" x2="16" y2="6" />
                      <line x1="8" y1="2" x2="8" y2="6" />
                      <line x1="3" y1="10" x2="21" y2="10" />
                    </svg>
                    <span>
                      <strong>Date:</strong> {selectedCert.date}
                    </span>
                  </div>
                  <div className="cert-pg-modal-meta-item">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
                    </svg>
                    <span>
                      <strong>Level:</strong> {selectedCert.level}
                    </span>
                  </div>
                </div>

                <p className="cert-pg-modal-desc">{selectedCert.description}</p>

                <div className="cert-pg-modal-skills">
                  <span className="cert-pg-modal-skills-label">
                    Skills Validated
                  </span>
                  <div className="cert-pg-modal-skills-list">
                    {selectedCert.skills.map((skill, i) => (
                      <span key={i} className="cert-pg-card-skill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Certifications;