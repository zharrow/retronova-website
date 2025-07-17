'use client';

import { useEffect, useRef, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export function FluidCursor() {
  const [isHovering, setIsHovering] = useState(false);
  const [isClicking, setIsClicking] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springConfig = { damping: 25, stiffness: 700 }; // Augmenté de 300 à 700 pour plus de réactivité
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Vérification mobile
    const checkMobile = () => {
      setIsMobile(
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ||
        window.innerWidth <= 768 ||
        ('ontouchstart' in window)
      );
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;

    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      
      // Vérifier si on survole un élément interactif
      const target = e.target as HTMLElement;
      if (target && typeof target.closest === 'function') {
        const interactiveSelectors = [
          'a', 'button', '.btn', '.btn-minimal', '.interactive', 
          '[role="button"]', 'input', 'textarea', 'select',
          '.nav-dot', '.card-minimal', '.feature-item',
          '[data-slot="button"]' // Pour les boutons shadcn
        ];
        
        const isInteractive = interactiveSelectors.some(selector => {
          try {
            return target.closest(selector);
          } catch (error) {
            return false;
          }
        });
        
        setIsHovering(isInteractive);
      }
    };

    const handleMouseDown = () => setIsClicking(true);
    const handleMouseUp = () => setIsClicking(false);

    // Position initiale au centre
    mouseX.set(window.innerWidth / 2);
    mouseY.set(window.innerHeight / 2);

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [mouseX, mouseY, isMobile]);

  if (isMobile) return null;

  return (
    <div className={`cursor ${isHovering ? 'hover' : ''} ${isClicking ? 'click' : ''}`}>
      <motion.div
        className="cursor-fluid"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="cursor-ring"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
      <motion.div
        className="cursor-dot"
        style={{
          x: cursorX,
          y: cursorY,
          translateX: '-50%',
          translateY: '-50%',
        }}
      />
    </div>
  );
}

export default FluidCursor;