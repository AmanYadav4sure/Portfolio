/*
  _   _                 _   
 | | | |               | |  
 | |_| | ___  _   _  __| |  
 |  _  |/ _ \| | | |/ _ |  
 | | | | (_) | |_| | (_| |  
 \_| |_/\___/ \__, |\__,_|  
               __/ |        
              |___/         
  Kya dekh ra he ladle DevAman name he mera!
*/
import { useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { MagneticButton } from '../components/MagneticButton';
import { SEO } from '../components/SEO';
import { projects } from '../data/projects';
import './Home.css';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero Animations
      const tl = gsap.timeline();
      tl.fromTo('.hero-greeting', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out', delay: 0.2 });
      tl.fromTo('.hero-title span', { y: 150, opacity: 0 }, { y: 0, opacity: 1, duration: 1.2, stagger: 0.1, ease: 'power4.out' }, '-=0.8');
      tl.fromTo('.hero-roles', { opacity: 0 }, { opacity: 1, duration: 1, ease: 'power2.out' }, '-=0.5');
      tl.fromTo('.hero-statement', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8');
      tl.fromTo('.hero-ctas', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }, '-=0.8');

      // Scroll reveals for sections
      const sections = gsap.utils.toArray('.reveal-section');
      sections.forEach((section: any) => {
        gsap.fromTo(section, 
          { opacity: 0, y: 50 },
          { opacity: 1, y: 0, duration: 1, ease: 'power3.out', scrollTrigger: { trigger: section, start: 'top 85%' } }
        );
      });

      // Role Typing Effect
      const roles = ["MOBILE APP DEVELOPER", "AI-NATIVE ENGINEER", "FLUTTER DEVELOPER", "REACT NATIVE DEVELOPER"];
      let roleIndex = 0;
      const roleElement = document.querySelector('.typing-role');
      
      if (roleElement) {
        setInterval(() => {
          gsap.to(roleElement, { opacity: 0, duration: 0.5, onComplete: () => {
            roleIndex = (roleIndex + 1) % roles.length;
            roleElement.textContent = roles[roleIndex];
            gsap.to(roleElement, { opacity: 1, duration: 0.5 });
          }});
        }, 3000);
      }

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleNavClick = (path: string) => {
    const tl = gsap.timeline();
    tl.to('.transition-layer', {
      y: '0%', duration: 0.6, ease: 'expo.inOut',
      onComplete: () => {
        navigate(path);
        window.scrollTo(0, 0);
        gsap.to('.transition-layer', {
          y: '-100%', duration: 0.6, ease: 'expo.inOut', delay: 0.1,
          onComplete: () => gsap.set('.transition-layer', { y: '100%' })
        });
      }
    });
  };

  return (
    <div ref={containerRef} className="home-page">
      <SEO 
        title="Aman Yadav | Mobile & AI-Native Developer"
        description="Aman Yadav is a mobile app developer and AI-native engineer specializing in Flutter, React Native, and Supabase."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://amanyadav.site/#person",
              "name": "Aman Yadav",
              "jobTitle": "Mobile Application Developer & AI-Native Software Engineer",
              "description": "Mobile Application Developer & AI-Native Software Engineer specializing in Flutter, Dart, React Native, and AI-driven software development.",
              "url": "https://amanyadav.site",
              "sameAs": [
                "https://github.com/AmanYadav4sure",
                "https://www.linkedin.com/in/aman-yadav-5119433b6/",
                "https://www.instagram.com/dev.amanyadav/"
              ],
              "knowsAbout": ["Flutter", "Dart", "React Native", "Mobile Apps", "Supabase", "AI-Driven Software Development", "Generative AI"]
            },
            {
              "@type": "FAQPage",
              "@id": "https://amanyadav.site/#faq",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "Who is Aman Yadav?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aman Yadav is an AI-native software engineer and mobile application developer based in Janakpur, Nepal, and the owner of the official domain amanyadav.site."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What does Aman Yadav build?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aman Yadav builds high-performance mobile applications using Flutter, Dart, and React Native, powered by cloud backends like Supabase and AI-driven architectures."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What is Aman Yadav's official website?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Aman Yadav's official website is https://amanyadav.site, which showcases his mobile development portfolio and software engineering projects."
                  }
                }
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://amanyadav.site/#website",
              "name": "Aman Yadav Official Portfolio",
              "url": "https://amanyadav.site"
            }
          ]
        }}
      />
      <section className="hero-section container">
        <div className="hero-layout">
          <div className="hero-content">
            <p className="hero-greeting mono text-accent">HELLO, I'M</p>
            <h1 className="hero-title">
              <div className="overflow-hidden"><span>AMAN</span></div>
              <div className="overflow-hidden"><span>YADAV</span></div>
            </h1>
            
            <div className="hero-roles mono">
              <span className="typing-role">MOBILE APP DEVELOPER</span>
            </div>

            <h2 className="hero-statement">
              I BUILD DIGITAL EXPERIENCES<br/>
              AND EXPLORE HOW TO KEEP<br/>
              THEM SECURE.
            </h2>

            <div className="hero-ctas">
              <MagneticButton className="btn-primary" onClick={() => handleNavClick('/projects')}>
                EXPLORE MY WORK <ArrowRight size={20} />
              </MagneticButton>
              <MagneticButton className="btn-secondary" onClick={() => handleNavClick('/contact')}>
                CONTACT ME ↗
              </MagneticButton>
            </div>

            <div className="hero-status mono">
              <span className="status-dot"></span> AVAILABLE FOR PROJECTS / COLLABORATION
            </div>
          </div>
          <div className="hero-image-container">
            <img src="/hero-image.png" alt="Aman Yadav" className="hero-image" />
          </div>
        </div>
      </section>

      <section className="featured-projects-section container reveal-section">
        <span className="section-label">SELECTED WORK</span>
        <h2 className="section-title">RECENT PROJECTS</h2>
        <div className="featured-projects-grid">
          {projects.slice(0, 4).map((project) => (
            <div 
              key={project.id} 
              className="featured-project-card glass-panel"
              onClick={() => {
                if (project.liveUrl) window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
              }}
              style={{ cursor: project.liveUrl ? 'pointer' : 'default' }}
            >
              <div className="featured-project-image">
                <img src={project.image} alt={project.title} loading="lazy" />
              </div>
              <div className="featured-project-info">
                <span className="mono text-accent">{project.category}</span>
                <h3>{project.title}</h3>
                <p className="mono featured-tech">{project.technologies.slice(0, 3).join(' / ')}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="view-all-container">
          <MagneticButton className="btn-primary" onClick={() => handleNavClick('/projects')}>
            VIEW ALL PROJECTS <ArrowRight size={20} />
          </MagneticButton>
        </div>
      </section>

      <section id="about" className="about-section container reveal-section">
        <span className="section-label">ABOUT ME</span>
        <h2 className="section-title">WHO IS AMAN YADAV?</h2>
        <div className="about-grid">
          <div className="about-text-content">
            <p><strong>Hi, I'm Aman Yadav! I'm an AI-native software engineer and mobile application developer based in Janakpur, Nepal.</strong></p>
            <p>My journey into technology started with a deep curiosity about how software works. Today, I build modern mobile applications and actively integrate Generative AI into my software architectures.</p>
            <p>I enjoy learning by building real-world projects. I constantly explore new mobile technologies like Flutter, Dart, and React Native to craft engaging user experiences. On the backend side, I utilize Supabase and cloud-native services to build scalable and robust solutions.</p>
            <p>When I'm not coding, you can find me researching the latest AI models or exploring the intersection of mobile design and full-stack development. I believe that good software should not only look great but also be highly intelligent and performant.</p>
          </div>
          <div className="about-timeline glass-panel">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="mono text-accent">CURRENT</span>
                <h4>DEVELOPER</h4>
                <p>MOBILE DEVELOPMENT / AI ENGINEERING / SUPABASE</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="what-i-do-section container reveal-section">
        <span className="section-label">WHAT I DO</span>
        <div className="services-list">
          {[
            { id: '01', title: 'MOBILE APP DEVELOPMENT', desc: 'High-performance cross-platform applications using Flutter, Dart, and React Native.' },
            { id: '02', title: 'AI INTEGRATION', desc: 'Integrating generative AI capabilities and intelligence into modern software architectures.' },
            { id: '03', title: 'CLOUD BACKENDS', desc: 'Architecting scalable serverless databases and authentication using Supabase and Firebase.' }
          ].map((service) => (
            <div className="service-card glass-panel" key={service.id} data-cursor-interact="true">
              <span className="service-number mono text-accent">{service.id}</span>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.desc}</p>
              </div>
              <ArrowRight className="service-arrow text-accent" />
            </div>
          ))}
        </div>
      </section>

      
      <section id="skills" className="skills-section container reveal-section">
        <span className="section-label">TECHNICAL SKILLS</span>
        <h2 className="section-title">WHAT I KNOW</h2>
        
        <div className="skills-container glass-panel">
          <div className="skills-tabs">
            {['ALL', 'MOBILE', 'AI', 'CLOUD', 'LANGUAGES'].map(tab => (
              <button key={tab} className={`skill-tab ${tab === 'ALL' ? 'active' : ''}`}>{tab}</button>
            ))}
          </div>
          
          <div className="skills-list">
            {[
              { name: 'FLUTTER', category: 'MOBILE' },
              { name: 'DART', category: 'LANGUAGE / MOBILE' },
              { name: 'REACT NATIVE', category: 'MOBILE' },
              { name: 'SUPABASE', category: 'CLOUD / BACKEND' },
              { name: 'GENERATIVE AI', category: 'AI / ENGINEERING' }
            ].map((skill, index) => (
              <div key={index} className="skill-row" data-cursor-interact="true">
                <span className="skill-name">{skill.name}</span>
                <span className="skill-category mono">{skill.category}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      
      <section className="security-section container reveal-section">
        <span className="section-label">AI-NATIVE MINDSET</span>
        <h2 className="section-title">ENGINEERING PHILOSOPHY</h2>
        <div className="security-grid">
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">AI-FIRST ARCHITECTURE</h4>
            <p>Integrating Generative AI and LLMs directly into application workflows for intelligent user experiences.</p>
          </div>
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">MOBILE PERFORMANCE</h4>
            <p>Optimizing Flutter and React Native rendering pipelines for smooth, native-like 60fps animations.</p>
          </div>
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">SCALABLE CLOUD</h4>
            <p>Building resilient, secure, and serverless backend infrastructures with Supabase and Firebase.</p>
          </div>
        </div>
      </section>

      
      <section className="social-section container reveal-section">
        <span className="section-label">WEB PRESENCE</span>
        <div className="social-links">
          <a href="https://github.com/AmanYadav4sure" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor-text="OPEN ↗">
            <span>GITHUB ↗</span>
          </a>
          <a href="https://www.linkedin.com/in/aman-yadav-5119433b6/" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor-text="OPEN ↗">
            <span>LINKEDIN ↗</span>
          </a>
          <a href="https://www.instagram.com/dev.amanyadav/" target="_blank" rel="noopener noreferrer" className="social-link" data-cursor-text="OPEN ↗">
            <span>INSTAGRAM ↗</span>
          </a>
        </div>
      </section>

      
      <footer className="footer container">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>AMAN YADAV</h3>
            <p className="mono">MOBILE APP DEVELOPER / AI-NATIVE SOFTWARE ENGINEER</p>
            <p className="mono" style={{marginTop: '1rem', color: 'var(--text-muted)'}}>
              Janakpurdham, Dhanusha, Nepal<br/>
              +977 9764495684
            </p>
          </div>
          <div className="footer-meta mono">
            <span>JANAKPUR / NEPAL</span>
            <span>© 2026 AMAN YADAV</span>
          </div>
        </div>
        {/* #DevAmanyadav */}
      </footer>
    </div>
  );
}

