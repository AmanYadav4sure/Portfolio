// ---> Kya dekh ra he ladle DevAman name he mera <---
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { SEO } from '../components/SEO';
import './Contact.css';
import { ArrowRight } from 'lucide-react';

export default function Contact() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-title span',
        { y: 150, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: 'power4.out', delay: 0.2 }
      );

      gsap.fromTo('.contact-grid > *',
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.4 }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    
    
    setTimeout(() => {
      setFormStatus('success');
      
      setTimeout(() => setFormStatus('idle'), 3000);
    }, 1500);
  };

  return (
    <div ref={containerRef} className="contact-page container">
      <SEO 
        title="Contact Aman Yadav — Developer in Nepal"
        description="Get in touch with Aman Yadav, a web and app developer from Janakpur, Nepal."
        canonical="/contact"
      />
      <div className="contact-content">
        <h1 className="contact-title">
          <div className="overflow-hidden"><span>LET'S BUILD</span></div>
          <div className="overflow-hidden"><span className="text-accent">SOMETHING.</span></div>
        </h1>

        <div className="contact-grid">
          <div className="contact-info">
            <div className="contact-item">
              <span className="contact-label mono">EMAIL</span>
              <a href="mailto:Dev.Amanmain1@gmail.com" className="contact-link" data-cursor-interact="true">
                <span className="link-text">Dev.Amanmain1@gmail.com</span>
                <ArrowRight className="contact-arrow" />
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label mono">PHONE</span>
              <a href="tel:+9779764495684" className="contact-link" data-cursor-interact="true">
                <span className="link-text">+977 9764495684</span>
                <ArrowRight className="contact-arrow" />
              </a>
            </div>

            <div className="contact-item">
              <span className="contact-label mono">LOCATION</span>
              <div className="contact-link" style={{ pointerEvents: 'none' }}>
                <span className="link-text">JANAKPUR, NEPAL</span>
              </div>
            </div>
          </div>

          <div className="contact-form-container glass-panel">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="mono">NAME</label>
                <input type="text" id="name" required placeholder="Your Name" />
              </div>
              
              <div className="form-group">
                <label htmlFor="email" className="mono">EMAIL</label>
                <input type="email" id="email" required placeholder="your@email.com" />
              </div>
              
              <div className="form-group">
                <label htmlFor="message" className="mono">MESSAGE</label>
                <textarea id="message" required rows={4} placeholder="Tell me about your project..."></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary submit-btn" 
                disabled={formStatus !== 'idle'}
                data-cursor-interact="true"
              >
                {formStatus === 'idle' && <>SEND MESSAGE <ArrowRight size={18} /></>}
                {formStatus === 'submitting' && 'SENDING...'}
                {formStatus === 'success' && 'MESSAGE SENT'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

