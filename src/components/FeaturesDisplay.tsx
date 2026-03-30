import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useRef } from 'react';

type FeaturesDisplayProps = {
  left: 'video' | 'image';
  imgSrc?: string;
  videoSrc?: string;
};

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

      const mm = gsap.matchMedia();

      mm.add('(min-width: 1024px)', () => {
        //DESKTOP ONLY

        const containerHeight = container.offsetHeight;

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: 'center-=100px bottom',
            end: 'bottom top',
            scrub: true,
            invalidateOnRefresh: true,

            onEnter: () => {
              video.currentTime = 0;
              video.play();
            },

            onEnterBack: () => {
              video.currentTime = 0;
              video.play();
            },

            onLeave: () => video.pause(),
            onLeaveBack: () => video.pause(),
          },
        });

        tl.fromTo(
          videoWrapper,
          { y: containerHeight / 2 + 60 },
          { y: -(containerHeight + 400), ease: 'none' },
          0,
        );

        tl.fromTo(
          image,
          { y: containerHeight / 2 - 100 },
          { y: -containerHeight + 180, ease: 'none' },
          0,
        );
      });

      mm.add('(max-width: 1023px)', () => {
        // MOBILE: NO ANIMATION, JUST PLAY/PAUSE BASED ON SCROLL
        const trigger = ScrollTrigger.create({
          trigger: video,
          start: 'top 80%', // when video is near viewport
          end: 'bottom 20%',

          onEnter: () => {
            video.currentTime = 0;
            video.play();
          },

          onEnterBack: () => {
            video.currentTime = 0;
            video.play();
          },

          onLeave: () => video.pause(),
          onLeaveBack: () => video.pause(),
        });

        return () => trigger.kill();
      });

      return () => mm.revert(); // cleanup to remove ScrollTriggers and timelines when the component unmounts or screen resizes
    },
    { scope: containerRef, dependencies: [] },
  );

  return (
    <>
      <section className="flex justify-center">
        <div className="flex h-fit w-full max-w-360 justify-center lg:h-150">
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
                  className="hidden h-125 w-125 shrink-0 lg:flex"
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
                  className="hidden h-125 w-125 shrink-0 lg:flex"
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
