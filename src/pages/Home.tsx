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
      const roles = ["WEB DEVELOPER", "APP DEVELOPER", "CYBER SECURITY ANALYST"];
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
        title="Aman Yadav — Web & App Developer in Nepal"
        description="Aman Yadav is a Grade 10 student and web & app developer from Janakpur, Nepal, exploring software development, Android development, and cyber security."
        canonical="/"
        jsonLd={{
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Person",
              "@id": "https://devamanyadav.vercel.app/#person",
              "name": "Aman Yadav",
              "jobTitle": "Web & App Developer",
              "description": "Grade 10 student and developer from Janakpur, Nepal interested in web development, Android development, and cyber security.",
              "address": {
                "@type": "PostalAddress",
                "addressLocality": "Janakpur",
                "addressCountry": "NP"
              },
              "knowsAbout": [
                "Web Development",
                "App Development",
                "Android Development",
                "Python",
                "Kotlin",
                "JavaScript",
                "Cyber Security"
              ],
              "url": "https://devamanyadav.vercel.app/",
              "sameAs": [
                "https://github.com/AmanYadav4sure",
                "https://www.linkedin.com/in/aman-yadav-5119433b6/",
                "https://www.instagram.com/dev.amanyadav/"
              ]
            },
            {
              "@type": "WebSite",
              "@id": "https://devamanyadav.vercel.app//#website",
              "name": "Aman Yadav",
              "url": "https://devamanyadav.vercel.app/"
            }
          ]
        }}
      />
      <section className="hero-section container">
        <div className="hero-content">
          <p className="hero-greeting mono text-accent">HELLO, I'M</p>
          <h1 className="hero-title">
            <div className="overflow-hidden"><span>AMAN</span></div>
            <div className="overflow-hidden"><span>YADAV</span></div>
          </h1>
          
          <div className="hero-roles mono">
            <span className="typing-role">WEB DEVELOPER</span>
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
      </section>

      
      <section id="about" className="about-section container reveal-section">
        <span className="section-label">ABOUT ME</span>
        <h2 className="section-title">WHO IS AMAN YADAV?</h2>
        <div className="about-grid">
          <div className="about-text-content">
            <p><strong>Aman Yadav is a Grade 10 student and web & app developer from Janakpur, Nepal.</strong></p>
            <p>He builds modern web interfaces, Android applications, and actively studies cyber security and secure software development.</p>
            <p>I enjoy learning by building real projects, exploring new frontend technologies, and experimenting with Kotlin and Python to solve technical challenges.</p>
          </div>
          <div className="about-timeline glass-panel">
            <div className="timeline-item">
              <span className="timeline-dot"></span>
              <div className="timeline-content">
                <span className="mono text-accent">CURRENT</span>
                <h4>GRADE 10</h4>
                <p>WEB DEVELOPMENT / APP DEVELOPMENT / CYBER SECURITY</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="what-i-do-section container reveal-section">
        <span className="section-label">WHAT I DO</span>
        <div className="services-list">
          {[
            { id: '01', title: 'WEB DEVELOPMENT', desc: 'Modern responsive interfaces, interactive experiences and frontend engineering.' },
            { id: '02', title: 'APP DEVELOPMENT', desc: 'Android applications and Kotlin-based development.' },
            { id: '03', title: 'CYBER SECURITY', desc: 'Security research, secure development and learning defensive security techniques.' }
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
            {['ALL', 'LANGUAGES', 'WEB', 'APP', 'SECURITY'].map(tab => (
              <button key={tab} className={`skill-tab ${tab === 'ALL' ? 'active' : ''}`}>{tab}</button>
            ))}
          </div>
          
          <div className="skills-list">
            {[
              { name: 'PYTHON', category: 'LANGUAGE / SECURITY' },
              { name: 'KOTLIN', category: 'LANGUAGE / ANDROID' },
              { name: 'HTML / CSS', category: 'WEB' },
              { name: 'JAVASCRIPT', category: 'LANGUAGE / WEB' },
              { name: 'CYBER SECURITY', category: 'SECURITY / ANALYSIS' }
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
        <span className="section-label">SECURITY MINDSET</span>
        <h2 className="section-title">DEFENSIVE THINKING</h2>
        <div className="security-grid">
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">SECURE BY DESIGN</h4>
            <p>Integrating security principles into the development lifecycle from day one.</p>
          </div>
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">WEB SECURITY</h4>
            <p>Understanding and mitigating common web vulnerabilities and threats.</p>
          </div>
          <div className="security-card glass-panel">
            <h4 className="mono text-accent">APPLICATION SECURITY</h4>
            <p>Building resilient Android and frontend architectures with defensive coding practices.</p>
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
            <p className="mono">WEB DEVELOPER / APP DEVELOPER / CYBER SECURITY</p>
          </div>
          <div className="footer-meta mono">
            <span>JANAKPUR / NEPAL</span>
            <span>© 2026 AMAN YADAV</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

