import FeaturesSection from './components/layout/FeaturesSection';
import Hero from './components/layout/Hero';
import Navbar from './components/layout/Navbar';
import useLennis from './utils/useLenis';
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect } from 'react';

function App() {
  gsap.registerPlugin(useGSAP, ScrollTrigger);

  // This is a workaround to maintain scroll position on refresh when using GSAP matchmedia. Without this, the scroll position resets to the top on refresh, which can be jarring for users.
  useEffect(() => {
    let progress = 0;

    const onRefreshInit = () => {
      // Save current progress
      progress = window.scrollY / ScrollTrigger.maxScroll(window);
    };

    const onRefresh = () => {
      // Scroll back to saved position
      window.scrollTo(0, progress * ScrollTrigger.maxScroll(window));
    };

    ScrollTrigger.addEventListener('refreshInit', onRefreshInit);
    ScrollTrigger.addEventListener('refresh', onRefresh);

    return () => {
      ScrollTrigger.removeEventListener('refreshInit', onRefreshInit);
      ScrollTrigger.removeEventListener('refresh', onRefresh);
    };
  }, []);

  useLennis();

  return (
    <>
      <Navbar />
      <Hero />
      <FeaturesSection />
    </>
  );
}

export default App;
