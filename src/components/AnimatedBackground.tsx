import React, { useEffect, useRef } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (particlesRef.current) {
      const particles = particlesRef.current.querySelectorAll('.particle');
      
      particles.forEach((particle, index) => {
        const size = Math.random() * 3 + 2;
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${x}%`;
        particle.style.top = `${y}%`;
        
        // Add random animation delays
        particle.style.animationDelay = `${Math.random() * 2}s`;
      });
    }
  }, []);

  return (
    <div className="animated-background">
      <div className="particles" ref={particlesRef}>
        {[...Array(50)].map((_, i) => (
          <div key={i} className="particle" />
        ))}
      </div>
      <div className="glow-effect"></div>
    </div>
  );
};

export default AnimatedBackground;
