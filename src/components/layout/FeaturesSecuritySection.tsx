import { Section } from './FeaturesSection';
import padLock from '../../assets/Padlock.svg';
import securityLeft1 from '../../assets/security-left-1.webp';
import securityLeft2 from '../../assets/security-left-2.webp';
import securityLeft3 from '../../assets/security-left-3.webp';
import productSecurity from '../../assets/product-security.webp';
import securityThumb from '../../assets/securityThumb.webp';
import brianThumb from '../../assets/BrianThumb.webp';
import justinThumb from '../../assets/JustinThumb.webp';
import play from '../../assets/Play.svg';

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

function FeaturesSecuritySection() {
  return (
    <section
      className="mb-10 md:rounded-2xl lg:mx-5 xl:mx-9"
      style={{
        background:
          'radial-gradient(circle at top, rgba(255,255,255,0.08), transparent 70%), radial-gradient(circle at bottom, rgba(0,0,0,0.6), transparent 50%), linear-gradient(to bottom, #1a1f2b, #050505)',
      }}
    >
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

      <div className="flex justify-center overflow-hidden py-10 md:py-20">
        <div className="flex h-fit w-fit items-end lg:mx-[calc((100%-995px)/2)] lg:pl-8">
          <div className="relative flex hidden h-fit w-fit shrink-0 flex-col lg:block">
            <img
              src={securityLeft2}
              alt=""
              width={162}
              height={167}
              className="absolute -top-31 left-4"
            />
            <img src={securityLeft1} alt="" width={206} height={261} />
          </div>
          <div className="relative z-10 hidden h-[473.4px] w-[374px] shrink-0 grow-0 lg:block">
            <img
              src={securityLeft3}
              alt=""
              className="absolute bottom-3 -left-15 h-full w-full"
            />
          </div>
          <div className="relative z-20 grow-0 px-8 md:h-[480px] md:w-[595px] md:shrink-0 md:px-0">
            <img
              src={productSecurity}
              alt=""
              className="-left-60 h-full w-full lg:absolute"
            />
          </div>
        </div>
      </div>

      <div className="mx-auto flex gap-5 overflow-scroll px-20 py-30">
        {testimonials.map((testimonial, i) => (
          <div
            key={i}
            className="text-inverse-standard-text flex h-[615px] w-[300px] shrink-0 flex-col items-center gap-8 overflow-hidden rounded-2xl bg-gradient-to-br from-[#1c1f26] to-[#111318] shadow-2xl hover:cursor-pointer md:h-auto md:w-[720px] md:flex-row md:items-stretch"
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
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturesSecuritySection;
