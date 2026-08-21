/* ~ Kya dekh ra he ladle DevAman name he mera ~ */
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import './Preloader.css';

interface PreloaderProps {
  onComplete: () => void;
}

export const Preloader = ({ onComplete }: PreloaderProps) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let currentProgress = 0;
    
    // Simulate loading
    const interval = setInterval(() => {
      currentProgress += Math.floor(Math.random() * 15) + 5;
      if (currentProgress > 100) currentProgress = 100;
      
      setProgress(currentProgress);

      if (currentProgress === 100) {
        clearInterval(interval);
        
        // Animate out
        gsap.to('.preloader-content', {
          y: -50,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.inOut',
          delay: 0.2
        });

        gsap.to('.preloader', {
          yPercent: -100,
          duration: 1,
          ease: 'expo.inOut',
          delay: 0.5,
          onComplete: () => {
            onComplete();
          }
        });
      }
    }, 150);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="preloader">
      <div className="preloader-content">
        <div className="preloader-header mono">
          <span>AMAN YADAV®</span>
          <span>WEB / APP / CYBER</span>
        </div>
        
        <div className="preloader-center">
          <div className="progress-number">{progress}%</div>
          <div className="progress-bar-container">
            <div className="progress-bar" style={{ width: `${progress}%` }}></div>
          </div>
        </div>
        
        <div className="preloader-footer mono">
          <span>EXPERIENCE LOADING</span>
          <span>2026</span>
        </div>
      </div>
    </div>
  );
};

