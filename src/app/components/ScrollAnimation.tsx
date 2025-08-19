"use client";
import React, { useEffect, useRef } from 'react';

interface ScrollAnimationProps {
  children: React.ReactNode;
  className?: string;
  animationType?: 'fade-up' | 'fade-left' | 'fade-right' | 'scale';
  delay?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({ 
  children, 
  className = '', 
  animationType = 'fade-up',
  delay = 0 
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add('scroll-visible');
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);
    return () => observer.unobserve(element);
  }, []);

  const getAnimationClass = () => {
    switch (animationType) {
      case 'fade-left':
        return 'scroll-animate-left';
      case 'fade-right':
        return 'scroll-animate-right';
      case 'scale':
        return 'scroll-animate-scale';
      default:
        return 'scroll-animate';
    }
  };

  const getDelayClass = () => {
    if (delay === 0.1) return 'scroll-animate-delay-1';
    if (delay === 0.2) return 'scroll-animate-delay-2';
    if (delay === 0.3) return 'scroll-animate-delay-3';
    return '';
  };

  return (
    <div 
      ref={ref} 
      className={`${getAnimationClass()} ${getDelayClass()} ${className}`}
      style={delay > 0 ? { transitionDelay: `${delay}s` } : {}}
    >
      {children}
    </div>
  );
};

export default ScrollAnimation; 