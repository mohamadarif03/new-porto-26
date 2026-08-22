import { useState } from 'react';
import { motion } from 'framer-motion';
import { FadeIn, StaggerContainer, StaggerItem, ScaleIn } from '../components/Motion.jsx';

function About() {
  const stats = [
    { number: '2+', label: 'Years Experience' },
    { number: '15+', label: 'Projects Completed' },
    { number: '8+', label: 'Certificates Achieved' },
  ];

  const experiences = [
    {
      company: 'BCC Community',
      logo: '/exp/bcc.webp',
      totalDuration: '1 mo',
      roles: [
        {
          title: 'Member - Data Science',
          type: 'Learning Community',
          period: 'May 2026 – Present',
          location: 'Malang, East Java, Indonesia · On-site',
          description: 'Joined a Data Science learning community as a regular member, focusing on building a foundation in modern AI technologies.',
          bullets: [
            'Currently studying machine learning concepts and the basics of deep learning.',
            'Completed a machine learning classification project for predictive modeling.',
            'Developing practical skills in data analysis, data modeling, and neural networks.',
          ],
          skills: ['Python', 'Pandas', 'NumPy', 'Scikit-learn', 'Machine Learning', 'Deep Learning', 'Neural Network', 'Data Analyst', 'Modelling'],
        },
      ],
    },
    {
      company: 'Jobnation.id',
      logo: '/exp/jobnation.webp',
      totalDuration: '1 yr',
      roles: [
        {
          title: 'Web Developer',
          type: 'Freelance',
          period: 'Jun 2025 – Jun 2026 · 1 yr',
          location: 'Malang, East Java, Indonesia · Hybrid',
          description: 'Developed and maintained full-stack web features for a job-platform product serving thousands of users.',
          bullets: [
            'Built RESTful APIs and integrated third-party services using Laravel and PHP.',
            'Improved front-end performance and UX by refactoring legacy jQuery code into modern React components.',
            'Collaborated closely with product and design teams in an Agile sprint workflow.',
            'Implemented responsive designs and ensured cross-browser compatibility across the platform.',
          ],
          skills: ['Laravel', 'React', 'PHP', 'REST API', 'jQuery', 'Bootstrap', 'JavaScript', 'Agile', 'Responsive Design'],
        },
      ],
    },
    {
      company: 'PT Humma Teknologi',
      logo: '/exp/hummatech.webp',
      totalDuration: '2 yrs 7 mos',
      roles: [
        {
          title: 'Mentor - Kelas Industri',
          type: 'Contract',
          period: 'Jan 2024 – Jan 2025 · 1 yr',
          location: 'Malang, East Java, Indonesia · Hybrid',
          description: 'Mentored 100+ students from 4+ different schools throughout my tenure, delivering comprehensive programming curricula.',
          bullets: [
            'Conducted active weekly online teaching sessions and regular on-site school visits to provide hands-on mentoring.',
            'Taught fundamental and advanced concepts in Basic Java, Laravel, JavaScript, HTML, CSS, and PHP.',
            'Guided students through practical coding exercises and project-based learning to build real-world skills.',
          ],
          skills: ['Teaching', 'Mentoring', 'Java', 'Laravel', 'JavaScript', 'HTML', 'CSS', 'PHP'],
        },
        {
          title: 'Web Developer',
          type: 'Contract',
          period: 'Jan 2024 – Jan 2025 · 1 yr 1 mo',
          location: 'Malang, East Java, Indonesia · On-site',
          description: 'Developed and maintained web-based systems, including school management platforms, license/code selling systems, and online course platforms using Laravel.',
          bullets: [
            'Built and shipped 5+ production web applications for various client industries.',
            'Designed database schemas and implemented complex business logic with Laravel Eloquent ORM.',
            'Integrated payment gateways and third-party APIs into client applications.',
            'Collaborated with UI/UX designers to translate Figma mockups into pixel-perfect interfaces.',
          ],
          skills: ['Laravel', 'Nuxt.js', 'MySQL', 'Figma'],
        },
        {
          title: 'Web Developer Intern',
          type: 'Internship',
          period: 'Jan 2024 – Jun 2024 · 6 mos',
          location: 'Malang, East Java, Indonesia · On-site',
          description: 'Assisted senior developers in building and maintaining web applications using Laravel and PHP.',
          bullets: [
            'Created responsive front-end interfaces using Bootstrap and vanilla JavaScript.',
            'Debugged and fixed issues in production environments, improving system reliability.',
            'Gained hands-on experience with Git workflows and agile development practices.',
          ],
          skills: ['Laravel', 'Bootstrap', 'JavaScript', 'Git'],
        },
      ],
    },
  ];

  return (
    <>
      <section className="about-hero">
        <FadeIn direction="left" delay={0.2} className="about-bio">
          <span className="about-subtitle">/ About Me</span>
          <h1 className="about-title">Mohamad <span className="light-text">Arif</span></h1>
          <p className="about-role-badge">Web Developer &amp; Data Enthusiast</p>
          <p className="about-description">
            A passionate web developer and data enthusiast based in Indonesia, focused on
            crafting intuitive digital experiences that blend functionality with aesthetics.
            I've collaborated with teams to design products that solve real-world problems
            through a design thinking process — always pushing boundaries since 2023.
          </p>
          <StaggerContainer staggerDelay={0.1} className="about-stats-row">
            {stats.map((stat, i) => (
              <StaggerItem key={i} direction="up">
                <div className="about-stat-item">
                  <span className="about-stat-number">{stat.number}</span>
                  <span className="about-stat-label">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </FadeIn>

        <FadeIn direction="right" delay={0.3} className="about-photo-col">
          <ScaleIn delay={0.4}>
            <motion.div className="about-photo-wrapper" whileHover={{ scale: 1.02, rotate: 1 }} transition={{ duration: 0.4 }}>
              <img src="/photo.webp" alt="Mohamad Arif" className="about-photo" width="400" height="400" loading="lazy" />
            </motion.div>
          </ScaleIn>
          <div className="about-social-row">
            <motion.a href="https://linkedin.com/in/mohamad-arif-68402627a" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="LinkedIn" whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.2 }}>
              <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" fill="currentColor"/></svg>
            </motion.a>
            <motion.a href="https://github.com/mohamadarif03" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="GitHub" whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.2 }}>
              <svg viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" fill="currentColor"/></svg>
            </motion.a>
            <motion.a href="https://instagram.com/mhmdarif346/" target="_blank" rel="noopener noreferrer" className="about-social-link" aria-label="Instagram" whileHover={{ y: -4, scale: 1.1 }} transition={{ duration: 0.2 }}>
              <svg viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.79-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" fill="currentColor"/></svg>
            </motion.a>
          </div>
        </FadeIn>
      </section>

      <section className="about-journey">
        <div className="about-journey-inner">
          <FadeIn direction="up">
            <div className="about-journey-header">
              <span className="about-journey-subtitle">/ Experience</span>
              <h2 className="about-journey-title">My <span className="light-text">Journey</span></h2>
              <p className="about-journey-intro">Here is a detailed look at what I have been building, learning, and contributing throughout my career.</p>
            </div>
          </FadeIn>
          <div className="exp-list">
            {experiences.map((exp, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.15}>
                <ExperienceCard experience={exp} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function ExperienceCard({ experience }) {
  const hasMultipleRoles = experience.roles.length > 1;
  return (
    <div className="exp-card">
      <div className="exp-company-header">
        <div className="exp-logo-wrapper">
          <img src={experience.logo} alt={experience.company} className="exp-logo-img" width="52" height="52" loading="lazy" />
        </div>
        <div className="exp-company-info">
          <h3 className="exp-company-name">{experience.company}</h3>
          <span className="exp-company-duration">{experience.totalDuration}</span>
        </div>
      </div>
      <div className={`exp-roles ${hasMultipleRoles ? 'has-timeline' : ''}`}>
        {experience.roles.map((role, j) => (
          <RoleItem key={j} role={role} hasTimeline={hasMultipleRoles} isLast={j === experience.roles.length - 1} />
        ))}
      </div>
    </div>
  );
}

function RoleItem({ role, hasTimeline, isLast }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className={`role-item ${hasTimeline ? 'with-line' : ''} ${isLast ? 'last' : ''}`}>
      {hasTimeline && (
        <div className="role-timeline-col">
          <div className="role-dot" />
          {!isLast && <div className="role-line" />}
        </div>
      )}
      <div className="role-content">
        <div className="role-header">
          <div className="role-info">
            <h4 className="role-title">{role.title}</h4>
            <p className="role-meta">{role.type}</p>
            <p className="role-period">{role.period}</p>
            <p className="role-location">{role.location}</p>
          </div>
        </div>
        <p className="role-description">{role.description}</p>
        {role.bullets && role.bullets.length > 0 && (
          <>
            <div className={`role-details ${expanded ? 'expanded' : ''}`}>
              <ul className="role-bullets">
                {role.bullets.map((b, k) => (<li key={k}>{b}</li>))}
              </ul>
            </div>
            <motion.button className="role-toggle" onClick={() => setExpanded(!expanded)} aria-expanded={expanded} whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
              {expanded ? (
                <>Show less <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="18 15 12 9 6 15"/></svg></>
              ) : (
                <>Show more <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"/></svg></>
              )}
            </motion.button>
          </>
        )}
        {role.skills && (
          <div className="role-skills">
            <svg className="role-skills-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2 2 7l10 5 10-5-10-5Z"/><path d="m2 17 10 5 10-5"/><path d="m2 12 10 5 10-5"/></svg>
            <span>{role.skills.join(', ')}</span>
          </div>
        )}
      </div>
    </div>
  );
}

export default About;
