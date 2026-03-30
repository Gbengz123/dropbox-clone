import Button from '../Button';
import { ArrowRight } from 'lucide-react';
import Search from '../../assets/Search.svg';
import Tiles from '../../assets/Tiles.svg';
import Share from '../../assets/Share.svg';
import customerFashion from '../../assets/customer-fashion.webp';
import mclarenPhoto from '../../assets/mclaren-photo.webp';
import sharePhoto from '../../assets/share-photo.webp';
import FeaturesDisplay from '../FeaturesDisplay';

type CTA = {
  label: string;
  variant?: 'secondary';
};

type BadgeContent = {
  label: string;
  src: string;
  icon?: React.FC<React.SVGProps<SVGSVGElement>>;
};

type SectionProps = {
  badge: BadgeContent | string;
  title: string;
  description: string;
  ctas: CTA[];
};

function Section({ badge, title, description, ctas }: SectionProps) {
  return (
    <section className="flex flex-col items-center px-5 py-20 text-center">
      {typeof badge === 'string' ? (
        <img src={badge} alt={``} />
      ) : (
        <div className="bg-faint-bg text-faint-text mb-4 flex justify-center gap-0.5 rounded-full py-1 pr-4.25 pl-3">
          <img src={badge.src} alt={`${badge.label} image`} />
          <span>{badge.label}</span>
        </div>
      )}

      <h2 className="text-3xl font-semibold tracking-tight">{title}</h2>

      <p className="text-faint-text mt-4 max-w-2xl">{description}</p>

      <div className="mt-8 flex gap-4">
        {ctas.map((cta, i) =>
          cta.variant ? (
            <Button
              key={i}
              variant={cta.variant}
              className="group rounded-2xl border-2 px-6 py-3.5"
            >
              {cta.label}
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </Button>
          ) : (
            <a
              key={i}
              href=""
              className="group flex items-center gap-1 p-4 font-semibold underline underline-offset-3"
            >
              {cta.label}
              <ArrowRight
                className="transition-transform duration-300 group-hover:translate-x-1"
                size={18}
              />
            </a>
          ),
        )}
      </div>
    </section>
  );
}

function FeaturesSection() {
  return (
    <>
      <Section
        badge={{
          label: 'Find',
          src: Search,
        }}
        title="Find it fast, every time"
        description="Get to the right file, fact or message when you need it, so you spend less time searching and more time working."
        ctas={[{ label: 'Try Dropbox free', variant: 'secondary' }]}
      />
      <FeaturesDisplay
        left="image"
        imgSrc={customerFashion}
        videoSrc={'/dropbox-home-find.webm'}
      />
      <Section
        badge={{
          label: 'Organise',
          src: Tiles,
        }}
        title="Everything in order, everyone aligned"
        description="Keep every version current and easy to manage. With synced team folders and previews for 175+ file types, your content stays organised and accessible."
        ctas={[
          { label: 'Learn more', variant: 'secondary' },
          { label: 'Try Dropbox free' },
        ]}
      />
      <FeaturesDisplay
        left="video"
        imgSrc={mclarenPhoto}
        videoSrc="/dropbox-home-organize.webm"
      />
      <Section
        badge={{
          label: 'Share',
          src: Share,
        }}
        title="Send it safely, share it fast"
        description="Share work instantly and securely with real-time syncing and large file transfers, so teams stay connected and collaboration stays seamless."
        ctas={[
          { label: 'Learn more', variant: 'secondary' },
          { label: 'Try Dropbox free' },
        ]}
      />
      <FeaturesDisplay
        left="image"
        imgSrc={sharePhoto}
        videoSrc="/dropbox-home-share.webm"
      />
      <div className="pb-[100vw]"></div>
    </>
  );
}

export default FeaturesSection;
