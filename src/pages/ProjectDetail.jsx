import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './ProjectDetail.css';

function ProjectDetail({ projects }) {
  const { slug } = useParams();
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  
  const project = projects.find(p => p.slug === slug);
  
  // Scroll to top when loading new project
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImageIndex(0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Get 3 other random projects for sidebar, excluding the current one
  const otherProjects = projects
    .filter(p => p.slug !== slug)
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);

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

      {/* Hero Image Gallery (Full Width) */}
      <div className="project-gallery">
        <div className="project-main-image">
          {project.images && <img src={project.images[activeImageIndex]} alt={project.title} />}
        </div>
        {project.images && project.images.length > 1 && (
          <div className="project-thumbnails">
            {project.images.map((img, idx) => (
              <div 
                key={idx} 
                className={`thumbnail ${idx === activeImageIndex ? 'active' : ''}`}
                onClick={() => setActiveImageIndex(idx)}
              >
                <img src={img} alt={`${project.title} thumbnail ${idx + 1}`} />
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="project-detail-container">
        {/* Main Content: Left Side */}
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

        {/* Sidebar: Right Side */}
        <div className="project-sidebar">
          <h3>Other Projects</h3>
          <div className="sidebar-projects-list">
            {otherProjects.map((other, idx) => (
              <Link to={`/project/${other.slug}`} key={idx} className="sidebar-project-card">
                <div className="sidebar-project-img">
                  <img src={other.image} alt={other.title} />
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

export default ProjectDetail;
