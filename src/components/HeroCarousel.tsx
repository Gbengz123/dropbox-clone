import { useRef, useState } from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import AutoScroll from 'embla-carousel-auto-scroll';
import Crique from '../assets/Cirque.svg';
import Crunch from '../assets/Crunch.svg';
import Hydro from '../assets/Hydro.svg';
import Katz from '../assets/Katz.svg';
import Lincoln from '../assets/Lincoln.svg';
import McLaren from '../assets/McLaren.svg';
import Zoom from '../assets/Zoom.svg';
import { CirclePause, CirclePlay } from 'lucide-react';

const carouselImages = [
  Crique,
  Crunch,
  Hydro,
  Katz,
  Lincoln,
  McLaren,
  Zoom,
] as const;

const HeroCarousel = () => {
  const [isPlaying, setIsPlaying] = useState<boolean>(true);
  const autoScroll = useRef(
    AutoScroll({
      speed: 0.5, // controls continuous speed
      stopOnInteraction: false, // keeps scrolling after drag
      startDelay: 0, // no delay on start
    }),
  );

  const [emblaRef] = useEmblaCarousel(
    { loop: true, dragFree: true, watchDrag: false }, // 🔥 REQUIRED for infinite scroll
    [autoScroll.current],
  );

  function togglePlay() {
    if (isPlaying) {
      autoScroll.current.stop();
      setIsPlaying(false);
    } else {
      autoScroll.current.play();
      setIsPlaying(true);
    }
  }

  const extendedImages = Array(3).fill(carouselImages).flat();

  return (
    <div className="flex w-full flex-col items-center gap-5">
      <div
        className="w-full overflow-hidden"
        ref={emblaRef}
        onPointerEnter={() => {
          if (isPlaying === false) return; // block when paused
          autoScroll.current?.stop();
        }}
        onPointerLeave={() => {
          if (isPlaying === false) return; // block when paused
          autoScroll.current?.reset();
          autoScroll.current?.play();
        }}
      >
        <div className="flex">
          {extendedImages.map((src, index) => (
            <div key={index} className="mx-15 h-38 min-w-37.5">
              <img
                src={src}
                alt={`carousel item ${index}`}
                className="h-full"
              />
            </div>
          ))}
        </div>
      </div>

      <button className="hover:cursor-pointer" onClick={() => togglePlay()}>
        {isPlaying ? <CirclePause size={24} /> : <CirclePlay size={24} />}
      </button>
    </div>
  );
};

export default HeroCarousel;
