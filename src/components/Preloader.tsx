import { useEffect } from 'react';
import gsap from 'gsap';

export const Preloader = ({ onComplete }: { onComplete: () => void }) => {
  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to('.preloader', {
          y: '-100%',
          duration: 1,
          ease: 'power4.inOut',
          onComplete
        });
      }
    });

    tl.to('.preloader-text', {
      opacity: 1,
      duration: 1,
      y: 0,
      ease: 'power2.out'
    }).to('.preloader-text', {
      opacity: 0,
      duration: 0.5,
      delay: 0.5
    });
  }, [onComplete]);

  return (
    <div className="preloader" style={{
      position: 'fixed', top: 0, left: 0, width: '100%', height: '100%',
      backgroundColor: 'var(--bg-primary)', zIndex: 9999, display: 'flex',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <div className="preloader-text" style={{
        opacity: 0, transform: 'translateY(20px)', fontSize: '2rem',
        fontFamily: 'var(--font-primary)', color: 'var(--text-primary)'
      }}>
        Sketching...
      </div>
    </div>
  );
};

