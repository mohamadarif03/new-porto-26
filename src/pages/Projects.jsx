import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { projects } from '../data/projects.js';
function Projects() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [hoveredProject, setHoveredProject] = useState(null);

  const categories = ['All', 'Web Development', 'Data Science'];



  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  useEffect(() => {
    const selectors = ['.proj-hero-inner', '.proj-filter-bar', '.proj-card'];
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

  return (
    <>
      {/* ── HERO BANNER ── */}
      <section className="proj-hero">
        <div className="proj-hero-inner">
          <span className="proj-hero-label">/ Portfolio</span>
          <h1 className="proj-hero-title">
            My <span className="proj-hero-accent">Projects</span>
          </h1>
          <p className="proj-hero-desc">
            A curated collection of projects spanning web development and data science — 
            each crafted with purpose, precision, and a passion for solving real-world problems.
          </p>

         
        </div>
      </section>

      {/* ── FILTER & PROJECTS GRID ── */}
      <section className="proj-content">
        <div className="proj-content-inner">

          {/* Filter Tabs */}
          <div className="proj-filter-bar">
            {categories.map(cat => (
              <button
                key={cat}
                className={`proj-filter-btn ${activeFilter === cat ? 'active' : ''}`}
                onClick={() => setActiveFilter(cat)}
              >
                {cat === 'All' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                )}
                {cat === 'Web Development' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
                )}
                {cat === 'Data Science' && (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
                )}
                <span>{cat}</span>
                <span className="proj-filter-count">
                  {cat === 'All' ? projects.length : projects.filter(p => p.category === cat).length}
                </span>
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="proj-grid animate-in">
            {filteredProjects.map((project, index) => (
              <Link
                to={`/project/${project.slug}`}
                className={`proj-card ${hoveredProject === index ? 'hovered' : ''}`}
                key={`${activeFilter}-${index}`}
                style={{ animationDelay: `${index * 0.1}s`, display: 'block', textDecoration: 'none' }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Image area */}
                <div className="proj-card-img-wrap">
                  <img src={project.image} alt={project.title} className="proj-card-img" width="600" height="240" loading="lazy" />
                  <div className="proj-card-img-overlay">
                    <span className="proj-card-type-badge">{project.type}</span>
                    <span className="proj-card-year-badge">{project.year}</span>
                  </div>
                </div>

                {/* Content area */}
                <div className="proj-card-body">
                  <div className="proj-card-meta">
                    <span className={`proj-card-category ${project.category === 'Data Science' ? 'ds' : 'wd'}`}>
                      {project.category}
                    </span>
                    <span className="proj-card-role">{project.role}</span>
                  </div>

                  <h3 className="proj-card-title">{project.title}</h3>
                  <p className="proj-card-desc">{project.description}</p>

                  {/* Highlights */}
                  <div className="proj-card-highlights">
                    {project.highlights.map((hl, i) => (
                      <span key={i} className="proj-highlight-chip">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
                        {hl}
                      </span>
                    ))}
                  </div>

                  {/* Tech Stack */}
                  <div className="proj-card-tech">
                    {project.techStack.map((tech, i) => (
                      <span key={i} className="proj-tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Empty state */}
          {filteredProjects.length === 0 && (
            <div className="proj-empty">
              <p>No projects found in this category yet.</p>
            </div>
          )}

        </div>
      </section>
    </>
  );
}

export default Projects;