import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SEO } from '../components/SEO';
import { projects } from '../data/projects';
import './Projects.css';

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.projects-header-title',
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power4.out',
          delay: 0.2
        }
      );

      gsap.fromTo(
        '.projects-subtitle',
        { opacity: 0 },
        {
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          delay: 0.5
        }
      );

      const projectBlocks = gsap.utils.toArray('.project-timeline-block');

      projectBlocks.forEach((block: any, i: number) => {
        gsap.fromTo(
          block,
          { y: 100, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 85%'
            }
          }
        );

        ScrollTrigger.create({
          trigger: block,
          start: 'top center',
          end: 'bottom center',

          onEnter: () => {
            gsap.to(block, {
              opacity: 1,
              scale: 1,
              duration: 0.5
            });

            gsap.to(`.timeline-dot-${i}`, {
              backgroundColor: 'var(--accent-primary)',
              scale: 1.5,
              duration: 0.3
            });
          },

          onLeave: () => {
            gsap.to(block, {
              opacity: 0.5,
              scale: 0.98,
              duration: 0.5
            });

            gsap.to(`.timeline-dot-${i}`, {
              backgroundColor: 'var(--border-color)',
              scale: 1,
              duration: 0.3
            });
          },

          onEnterBack: () => {
            gsap.to(block, {
              opacity: 1,
              scale: 1,
              duration: 0.5
            });

            gsap.to(`.timeline-dot-${i}`, {
              backgroundColor: 'var(--accent-primary)',
              scale: 1.5,
              duration: 0.3
            });
          },

          onLeaveBack: () => {
            gsap.to(block, {
              opacity: 0.5,
              scale: 0.98,
              duration: 0.5
            });

            gsap.to(`.timeline-dot-${i}`, {
              backgroundColor: 'var(--border-color)',
              scale: 1,
              duration: 0.3
            });
          }
        });
      });

      gsap.to('.timeline-progress-line', {
        scaleY: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: '.projects-timeline-container',
          start: 'top center',
          end: 'bottom center',
          scrub: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleProjectHover = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (window.matchMedia('(hover: none)').matches) return;

    const el = e.currentTarget;
    const img = el.querySelector('img');

    if (!img) return;

    const { clientX, clientY } = e;
    const { left, top, width, height } =
      el.getBoundingClientRect();

    const x = (clientX - left) / width - 0.5;
    const y = (clientY - top) / height - 0.5;

    gsap.to(img, {
      rotationY: x * 8,
      rotationX: -y * 8,
      scale: 1.05,
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  const handleProjectLeave = (
    e: React.MouseEvent<HTMLDivElement>
  ) => {
    if (window.matchMedia('(hover: none)').matches) return;

    const img = e.currentTarget.querySelector('img');

    if (!img) return;

    gsap.to(img, {
      rotationY: 0,
      rotationX: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out'
    });
  };

  /*
   * -----------------------------------------
   * PROJECT URL SYSTEM
   * -----------------------------------------
   */

  const handleProjectClick = (
    e: React.MouseEvent<HTMLDivElement>,
    url?: string
  ) => {
    if (!url) return;

    // Don't redirect when clicking an actual link
    const target = e.target as HTMLElement;

    if (target.closest('a')) {
      return;
    }

    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const handleProjectKeyDown = (
    e: React.KeyboardEvent<HTMLDivElement>,
    url?: string
  ) => {
    if (!url) return;

    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();

      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div
      ref={containerRef}
      className="projects-page container"
    >
      <SEO
        title="Projects — Aman Yadav | Web, Android & Cyber Security"
        description="Explore projects by Aman Yadav across web development, Kotlin Android development, creative interfaces, and cyber security experiments."
        canonical="/projects"
      />

      <header className="projects-page-header">
        <span className="section-label">
          PROJECTS
        </span>

        <h1 className="projects-header-title">
          WHAT I'VE BUILT
        </h1>

        <p className="projects-subtitle">
          A collection of web, app, and security projects.
        </p>
      </header>

      <div className="projects-timeline-container">
        <div className="timeline-track">
          <div className="timeline-line"></div>

          <div className="timeline-progress-line"></div>

          {projects.map((_, i) => (
            <div
              key={i}
              className={`timeline-dot timeline-dot-${i}`}
              style={{
                top: `${
                  (i / (projects.length - 1)) * 100
                }%`
              }}
            ></div>
          ))}
        </div>

        <div className="projects-list">
          {projects.map((project, index) => (
            <div
              className={`project-timeline-block glass-panel ${
                project.liveUrl
                  ? 'project-clickable'
                  : ''
              }`}
              key={project.id}
              data-cursor-text={
                project.liveUrl
                  ? 'VIEW PROJECT'
                  : undefined
              }
              onClick={(e) =>
                handleProjectClick(
                  e,
                  project.liveUrl
                )
              }
              onKeyDown={(e) =>
                handleProjectKeyDown(
                  e,
                  project.liveUrl
                )
              }
              role={
                project.liveUrl
                  ? 'link'
                  : undefined
              }
              tabIndex={
                project.liveUrl
                  ? 0
                  : undefined
              }
            >
              <div className="project-block-header">
                <span className="project-number mono text-accent">
                  0{index + 1} — {project.title}
                </span>

                <p className="project-tech mono">
                  {project.technologies.join(' / ')}
                </p>

                <p className="project-desc">
                  {project.description}
                </p>

                <div className="project-links">
                  {project.github ? (
                    project.github ===
                    'COMING SOON' ? (
                      <span className="mono link-disabled">
                        GITHUB — COMING SOON
                      </span>
                    ) : (
                      <a
                        href={project.github}
                        className="mono link-active"
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) =>
                          e.stopPropagation()
                        }
                      >
                        GITHUB
                      </a>
                    )
                  ) : null}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="mono link-active"
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) =>
                        e.stopPropagation()
                      }
                    >
                      VIEW PROJECT
                    </a>
                  )}
                </div>
              </div>

              <div
                className="project-block-visual"
                onMouseMove={handleProjectHover}
                onMouseLeave={handleProjectLeave}
              >
                <img
                  src={project.image}
                  alt={`${project.title} — ${project.category} built by Aman Yadav with ${project.technologies.join(', ')}`}
                  loading="lazy"
                  width="800"
                  height="800"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

console.log(
  '%c Kya dekh ra he ladle DevAman name he mera ',
  'background: #222; color: #bada55'
);
