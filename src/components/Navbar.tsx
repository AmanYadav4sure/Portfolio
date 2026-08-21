/* >_ Kya dekh ra he ladle DevAman name he mera */
import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import './Navbar.css';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
      gsap.to('.mobile-menu', { yPercent: 100, duration: 0.8, ease: 'expo.inOut' });
      gsap.fromTo('.menu-item', 
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, delay: 0.4, ease: 'power3.out' }
      );
    } else {
      gsap.to('.mobile-menu', {
        yPercent: 0, duration: 0.8, ease: 'expo.inOut',
        onComplete: () => setMenuOpen(false)
      });
    }
  };

  const handleNavClick = (path: string, hash?: string) => {
    if (menuOpen) toggleMenu();

    if (location.pathname !== path) {
      const tl = gsap.timeline();
      tl.to('.transition-layer', {
        y: '0%', duration: 0.6, ease: 'expo.inOut',
        onComplete: () => {
          navigate(path);
          window.scrollTo(0, 0);
          gsap.to('.transition-layer', {
            y: '-100%', duration: 0.6, ease: 'expo.inOut', delay: 0.1,
            onComplete: () => {
              gsap.set('.transition-layer', { y: '100%' });
              if (hash) {
                setTimeout(() => {
                  const element = document.getElementById(hash);
                  if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
              }
            }
          });
        }
      });
    } else {
      if (hash) {
        const element = document.getElementById(hash);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="navbar-logo">
          <button onClick={() => handleNavClick('/')} style={{cursor: 'none'}}>
            <span className="logo-text">AMAN YADAV</span>
          </button>
        </div>

        <div className="navbar-desktop-links mono">
          <div className="nav-link-wrapper">
            <button className={location.pathname === '/' ? 'active' : ''} onClick={() => handleNavClick('/')}>HOME</button>
          </div>
          <div className="nav-link-wrapper">
            <button onClick={() => handleNavClick('/', 'about')}>ABOUT</button>
          </div>
          <div className="nav-link-wrapper">
            <button className={location.pathname === '/projects' ? 'active' : ''} onClick={() => handleNavClick('/projects')}>PROJECTS</button>
          </div>
          <div className="nav-link-wrapper">
            <button onClick={() => handleNavClick('/', 'skills')}>SKILLS</button>
          </div>
          <div className="nav-link-wrapper">
            <button className={location.pathname === '/contact' ? 'active' : ''} onClick={() => handleNavClick('/contact')}>CONTACT</button>
          </div>
        </div>

        <div className="navbar-menu-btn">
          <button onClick={toggleMenu} style={{cursor: 'none'}}>
            <span className="mono">{menuOpen ? 'CLOSE' : 'MENU'}</span>
          </button>
        </div>
      </nav>

      <div className="mobile-menu" style={{ transform: 'translateY(-100%)' }}>
        <div className="mobile-menu-inner">
          <div className="mobile-nav-links">
            <div className="menu-item"><button className={location.pathname === '/' ? 'active' : ''} onClick={() => handleNavClick('/')}>HOME</button></div>
            <div className="menu-item"><button onClick={() => handleNavClick('/', 'about')}>ABOUT</button></div>
            <div className="menu-item"><button className={location.pathname === '/projects' ? 'active' : ''} onClick={() => handleNavClick('/projects')}>PROJECTS</button></div>
            <div className="menu-item"><button onClick={() => handleNavClick('/', 'skills')}>SKILLS</button></div>
            <div className="menu-item"><button className={location.pathname === '/contact' ? 'active' : ''} onClick={() => handleNavClick('/contact')}>CONTACT</button></div>
          </div>
          <div className="mobile-menu-footer mono menu-item">
            WEB / APP / CYBER
          </div>
        </div>
      </div>
    </>
  );
};

