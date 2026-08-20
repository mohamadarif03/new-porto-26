import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState, useMemo, useCallback } from 'react';
import './ProjectDetail.css';

function ProjectDetailInner({ projects, slug }) {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const project = projects.find(p => p.slug === slug);

  // Use slug-based seed for stable "random" shuffle
  const otherProjects = useMemo(() => {
    let seed = 0;
    for (let i = 0; i < slug.length; i++) {
      seed = ((seed << 5) - seed + slug.charCodeAt(i)) | 0;
    }
    const seededRandom = (s) => {
      s = Math.imul(s ^ (s >>> 16), 0x45d9f3b);
      s = Math.imul(s ^ (s >>> 13), 0x45d9f3b);
      return ((s ^ (s >>> 16)) >>> 0) / 4294967296;
    };
    return projects
      .filter(p => p.slug !== slug)
      .sort((a, b) => seededRandom(a.slug.length + seed) - seededRandom(b.slug.length + seed + 1))
      .slice(0, 3);
  }, [projects, slug]);

  const handleImageClick = useCallback((idx) => {
    setActiveImageIndex(idx);
  }, []);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  return (
    <div className="project-detail-page">
      {/* Breadcrumbs */}
      <div className="breadcrumb">
        <Link to="/">Home</Link>
        <span className="separator">/</span>
        <Link to="/projects">Projects</Link>
        <span className="separator">/</span>
        <span className="current">{project.title}</span>
      </div>

      {/* Hero Image Gallery */}
      <div className="project-gallery">
        <div className="project-main-image">
          {project.images && (
            <img
              src={project.images[activeImageIndex]}
              alt={project.title}
              width="1200"
              height="675"
              loading="eager"
            />
          )}
        </div>
        {project.images && project.images.length > 1 && (
          <div className="project-thumbnails">
            {project.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`thumbnail ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => handleImageClick(idx)}
              >
                <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} width="200" height="112" loading="lazy" />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="project-detail-container">
        <div className="project-main-content">
          <h1 className="project-title-large">{project.title}</h1>
          
          <div className="project-meta-tags">
            <span className="meta-tag type">{project.type}</span>
            <span className="meta-tag category">{project.category}</span>
            <span className="meta-tag year">{project.year}</span>
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="visit-website-btn">
                Visit Website
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
              </a>
            )}
          </div>

          <div className="project-info-section">
            <h2>About The Project</h2>
            <p className="project-full-desc">{project.description}</p>
            
            <div className="project-details-grid">
              <div className="detail-box">
                <h3>Role</h3>
                <p>{project.role}</p>
              </div>
              <div className="detail-box">
                <h3>Highlights</h3>
                <ul>
                  {project.highlights && project.highlights.map((hl, idx) => (
                    <li key={idx}>{hl}</li>
                  ))}
                </ul>
              </div>
              <div className="detail-box tech-box">
                <h3>Tech Stack</h3>
                <div className="tech-stack-list">
                  {project.techStack && project.techStack.map((tech, idx) => (
                    <span key={idx} className="tech-chip">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="project-sidebar">
          <h3>Other Projects</h3>
          <div className="sidebar-projects-list">
            {otherProjects.map((other, idx) => (
              <Link to={`/project/${other.slug}`} key={idx} className="sidebar-project-card">
                <div className="sidebar-project-img">
                  <img src={other.image} alt={other.title} width="200" height="120" loading="lazy" />
                </div>
                <div className="sidebar-project-info">
                  <h4>{other.title}</h4>
                  <span>{other.category}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ projects }) {
  const { slug } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Key-based reset: when slug changes, React remounts and activeImageIndex resets to 0
  return <ProjectDetailInner key={slug} projects={projects} slug={slug} />;
}

export default ProjectDetail;
