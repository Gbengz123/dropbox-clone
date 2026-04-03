import { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import Lenis from '@studio-freight/lenis';

function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.08,
      duration: 1.5,
    });

    // Sync Lenis with GSAP
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    // Sync Lenis scroll events with ScrollTrigger
    lenis.on('scroll', () => {
      ScrollTrigger.update();
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);
}

export default useLenis;
