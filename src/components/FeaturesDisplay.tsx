import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

type FeaturesDisplayProps = {
  left: 'video' | 'image';
  imgSrc?: string;
  videoSrc?: string;
};

gsap.registerPlugin(useGSAP, ScrollTrigger);

function FeaturesDisplay({ left, imgSrc, videoSrc }: FeaturesDisplayProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const container = containerRef.current;
      const video = videoRef.current;
      const image = imageRef.current;
      const videoWrapper = container?.querySelector('.video-wrapper');

      if (!container || !video || !image || !videoWrapper) return;
      const containerHeight = container.offsetHeight;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'center-=100px bottom',
          end: 'bottom top',
          scrub: true,
          invalidateOnRefresh: true, // recalc on resize

          onEnter: () => {
            video.currentTime = 0;
            video.play();
          },

          onEnterBack: () => {
            video.currentTime = 0;
            video.play();
          },

          onLeave: () => {
            video.pause();
          },

          onLeaveBack: () => {
            video.pause();
          },
        },
      });

      // video moves faster
      tl.fromTo(
        videoWrapper,
        {
          y: containerHeight / 2 + 60, //The 600px is height of container
        },
        {
          y: -(containerHeight + 350), // moves out of view of the container
          ease: 'none',
        },
        0,
      );

      // image moves slower
      tl.fromTo(
        image,
        {
          y: containerHeight / 2 - 100, //The 600px is height of container
        },
        {
          y: -containerHeight + 20, // moves out of view of the container
          ease: 'none',
        },
        0,
      );
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <>
      <section className="flex justify-center">
        <div className="flex h-150 w-full max-w-360 justify-center">
          <div ref={containerRef} className="flex h-full w-[90%] xl:w-[70%]">
            {left === 'video' ? (
              <>
                <div className="video-wrapper z-10">
                  <video
                    ref={videoRef}
                    className="shrink-0 object-cover"
                    src={videoSrc}
                    loop
                    playsInline
                    muted
                  ></video>
                </div>

                <div
                  ref={imageRef}
                  className="hidden h-[500px] w-[500px] shrink-0 lg:block"
                  style={{
                    marginLeft: 'calc(100% - 1211px)',
                  }}
                >
                  <img src={imgSrc} alt="" />
                </div>
              </>
            ) : (
              <>
                <div
                  ref={imageRef}
                  className="hidden h-[500px] w-[500px] shrink-0 lg:block"
                  style={{
                    marginRight: 'calc(100% - 1211px)',
                  }}
                >
                  <img src={imgSrc} alt="" />
                </div>

                <div className="video-wrapper">
                  <video
                    ref={videoRef}
                    className="z-10 shrink-0"
                    src={videoSrc}
                    loop
                    playsInline
                    muted
                  ></video>
                </div>
              </>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

export default FeaturesDisplay;
