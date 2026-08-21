// ++ Kya dekh ra he ladle DevAman name he mera ++
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

export const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const button = buttonRef.current;
    const text = textRef.current;
    
    // Disable on touch devices
    if (!button || !text || window.matchMedia('(hover: none) and (pointer: coarse)').matches) return;

    const xTo = gsap.quickTo(button, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const yTo = gsap.quickTo(button, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    
    const textXTo = gsap.quickTo(text, 'x', { duration: 1, ease: 'elastic.out(1, 0.3)' });
    const textYTo = gsap.quickTo(text, 'y', { duration: 1, ease: 'elastic.out(1, 0.3)' });

    const onMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);

      xTo(x * 0.4);
      yTo(y * 0.4);
      textXTo(x * 0.2);
      textYTo(y * 0.2);
    };

    const onMouseLeave = () => {
      xTo(0);
      yTo(0);
      textXTo(0);
      textYTo(0);
    };

    button.addEventListener('mousemove', onMouseMove);
    button.addEventListener('mouseleave', onMouseLeave);

    return () => {
      button.removeEventListener('mousemove', onMouseMove);
      button.removeEventListener('mouseleave', onMouseLeave);
    };
  }, []);

  return (
    <button 
      ref={buttonRef} 
      className={`magnetic-btn ${className}`} 
      onClick={onClick}
      style={{ display: 'inline-flex', cursor: 'none', background: 'transparent', border: 'none' }}
    >
      <span ref={textRef} style={{ pointerEvents: 'none', display: 'inline-block' }}>
        {children}
      </span>
    </button>
  );
};

