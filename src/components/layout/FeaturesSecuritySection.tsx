import { Section } from './FeaturesSection';
import padLock from '../../assets/Padlock.svg';
import securityLeft1 from '../../assets/security-left-1.webp';
import securityLeft2 from '../../assets/security-left-2.webp';
import securityLeft3 from '../../assets/security-left-3.webp';
import productSecurity from '../../assets/product-security.webp';
import securityThumb from '../../assets/SecurityThumb.webp';
import brianThumb from '../../assets/BrianThumb.webp';
import justinThumb from '../../assets/JustinThumb.webp';
import play from '../../assets/Play.svg';
import {
  motion,
  useScroll,
  useTransform,
  type Transition,
  type Variants,
} from 'motion/react';
import { useRef } from 'react';
import { useMediaQuery } from 'react-responsive';

interface Testimonial {
  label: string;
  quote: string;
  description: string;
  imgSrc: string;
}

const testimonials: Testimonial[] = [
  {
    label: 'Testimonial',
    quote: 'The security of knowing our information is safe.',
    description:
      'Customer Bryan Chandler reveals how his team uses Dropbox to organise and share files securely.',
    imgSrc: brianThumb,
  },
  {
    label: 'Testimonial',
    quote: 'Seriously impressive security features',
    description:
      'Tech influencer Justin Tse discusses why he trusts Dropbox to keep his content safe',
    imgSrc: justinThumb,
  },
  {
    label: 'Webinar',
    quote: 'How do you enhance security and keep productivity reasonable?',
    description:
      "Your company's sharing content with collaborators all over the world. Are you in control?",
    imgSrc: securityThumb,
  },
];

const imageContainerVariant: Variants = {
  outOfview: {},
  inView: {},
};

const inViewImageTransition: Transition = {
  duration: 0.7,
  ease: 'easeOut',
  delay: 0.1,
};

const securityLeft2Variant: Variants = {
  outOfView: { scale: 0.2, x: 60, y: 60 },
  inView: { scale: 1, x: 0, y: 0, transition: inViewImageTransition },
};

const securityLeft1Variant: Variants = {
  outOfView: { opacity: 0, scale: 0 },
  inView: { opacity: 1, scale: 1, transition: inViewImageTransition },
};

const securityLeft3Variant: Variants = {
  outOfView: { scale: 0.2 },
  inView: { scale: 1, transition: inViewImageTransition },
};

const productSecurityVariant: Variants = {
  outOfView: { y: 300 },
  inView: { y: -50, transition: inViewImageTransition },
};

const testimonialContainerVariant: Variants = {
  outOfView: {},
  inView: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const testimonialVariant: Variants = {
  outOfView: { opacity: 0, scale: 0.8, filter: 'blur(10px)' },
  inView: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.7,
      ease: 'easeOut',
    },
  },
};

function FeaturesSecuritySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const imageContainerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: containerProgress } = useScroll({
    target: sectionRef,
    offset: ['start end', 'start start'],
  });

  const isMobile = useMediaQuery({ maxWidth: 1024 });

  const scaleX = useTransform(containerProgress, [0, 0.8], [0.8, 1]);
  const scaleY = useTransform(containerProgress, [0, 0.8], [0.93, 1]);

  const { scrollYProgress: imageProgress } = useScroll({
    target: imageContainerRef,
    offset: ['start end', 'end start'],
  });

  const rightY = useTransform(imageProgress, [0, 1], ['150px', '-200px']);
  const leftY = useTransform(imageProgress, [0, 1], ['0px', '-100px']);

  return (
    <section ref={sectionRef} className="relative mb-10 lg:mx-5 xl:mx-9">
      {/* Background layer (scaled) */}
      <motion.div
        className="absolute inset-0 z-0 lg:rounded-2xl"
        style={{
          scaleX: isMobile ? 1 : scaleX,
          scaleY: isMobile ? 1 : scaleY,
          transformOrigin: 'center',
          background:
            'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 70%), radial-gradient(circle at bottom, rgba(0,0,0,0.6), transparent 50%), linear-gradient(to bottom, #1a1f2b, #050505)',
        }}
      />
      <div className="relative z-10">
        <Section
          className="pt-20"
          badge={padLock}
          title="Security never comes second"
          description="From industry-leading encryption and tamper-proof documents to version history and recovery, Dropbox keeps your intellectual property safe and never sells your data."
          ctas={[
            { label: 'Try Dropbox free', variant: 'security' },
            { label: 'Learn more' },
          ]}
          animate={false}
          textColor="text-inverse-standard-text"
          faintTextColor="text-inverse-faint-text"
        />
        <div className="py-10 md:py-20">
          <motion.div
            ref={imageContainerRef}
            className="flex h-fit w-full items-end justify-center lg:justify-center lg:pl-[240px]"
            variants={imageContainerVariant}
            initial="outOfView"
            whileInView="inView"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div
              className="relative hidden h-fit w-fit shrink-0 flex-col lg:flex"
              style={{ y: leftY }}
            >
              <motion.img
                src={securityLeft2}
                alt=""
                width={162}
                height={167}
                className="absolute -top-31 left-4 z-5"
                variants={securityLeft2Variant}
              />
              <motion.img
                src={securityLeft1}
                alt=""
                width={206}
                height={261}
                className="origin-top-right"
                variants={securityLeft1Variant}
              />
            </motion.div>
            <motion.div
              className="relative z-10 hidden h-[473.4px] w-[374px] shrink-0 grow-0 lg:block lg:-translate-x-15"
              style={{ y: leftY }}
            >
              <motion.img
                src={securityLeft3}
                alt=""
                className="absolute bottom-3 h-full w-full origin-left"
                variants={securityLeft3Variant}
              />
            </motion.div>
            <motion.div
              className="z-20 grow-0 px-8 md:h-[480px] md:w-[595px] md:shrink-0 md:px-0 lg:-translate-x-[240px]"
              style={{ y: isMobile ? 0 : rightY }}
            >
              <motion.img
                src={productSecurity}
                alt=""
                className="h-full w-full"
                variants={productSecurityVariant}
              />
            </motion.div>
          </motion.div>
        </div>
        <motion.div
          className="mx-auto flex gap-5 overflow-scroll px-20 pt-10 pb-30"
          variants={testimonialContainerVariant}
          initial="outOfView"
          whileInView="inView"
          viewport={{ once: true, margin: '-100px' }}
        >
          {testimonials.map((testimonial, i) => (
            <motion.div
              key={i}
              className="text-inverse-standard-text flex h-[615px] w-[300px] shrink-0 flex-col items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1c1f26] to-[#111318] shadow-2xl hover:cursor-pointer md:h-auto md:w-[720px] md:flex-row md:items-stretch"
              variants={testimonialVariant}
            >
              <div className="relative h-[280px] w-[280px] shrink-0 p-2">
                <img
                  src={testimonial.imgSrc}
                  alt="testimonial"
                  className="h-full w-full rounded-lg object-cover"
                />
                <div className="absolute bottom-5 left-5 flex h-9.5 w-9.5 items-center justify-center">
                  <img src={play} alt="" className="h-full w-full" />
                </div>
              </div>
              <div className="flex grow flex-col justify-center px-8 pb-9 md:py-4 md:pr-10">
                <div className="flex flex-col gap-3">
                  <span className="pb-1.5 text-sm font-semibold text-pink-500">
                    {testimonial.label}
                  </span>
                  <h3 className="text-xl leading-snug font-semibold">
                    &quot;{testimonial.quote}&quot;
                  </h3>
                  <p className="text-inverse-faint-text">
                    {testimonial.description}
                  </p>
                </div>
                <button className="border-inverse-standard-text mt-auto w-fit border-b text-sm font-medium hover:opacity-80">
                  Watch testimonial
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default FeaturesSecuritySection;
