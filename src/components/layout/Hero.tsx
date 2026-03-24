import Button from '../Button';
import { ArrowRight } from 'lucide-react';
import heroImage from '../../assets/hero-image.webp';
import HeroCarousel from '../heroCarousel';

function Hero() {
  return (
    <section className="bg-faint-bg text-standard-text w-full">
      <div className="flex w-full flex-col items-start justify-center lg:flex-row lg:items-center">
        <div className="w-fit min-w-full flex-1 p-6 lg:max-w-150 lg:min-w-125 lg:p-12">
          <h1 className="text-4xl leading-tight font-bold tracking-tight md:text-5xl">
            Get to work, with a lot less work
          </h1>
          <p className="text-faint-text mt-6 text-lg">
            Dropbox delivers tools that help you collaborate with ease, move
            work forward faster and keep it all safe.
          </p>
          <div className="mt-8">
            <Button className="group flex items-center gap-3 px-6 py-3">
              <span>Try Dropbox free</span>
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Button>
          </div>
        </div>
        <div className="flex max-h-183.75 min-w-full flex-1 items-center rounded-xl lg:max-w-207.5 lg:min-w-125">
          <img src={heroImage} alt="hero image" className="h-full w-full" />
        </div>
      </div>
      <div className="flex w-full flex-col items-center gap-8 pt-8 pb-18">
        <h3 className="text-center text-2xl font-semibold">
          Join the over 700 million registered users who trust Dropbox
        </h3>
        <HeroCarousel />
      </div>
    </section>
  );
}

export default Hero;
