import { ArrowRight } from 'lucide-react';
import Construction from '../../assets/construction.webp';
import Media from '../../assets/Media.webp';
import Tech from '../../assets/Tech.webp';
import professionalServices from '../../assets/ProfessionalServices.webp';
import Manufacturing from '../../assets/Manufacturing.webp';
import Education from '../../assets/Education.webp';
import { motion, type Variants } from 'motion/react';

type Industry = {
  title: string;
  description: string;
  image: string;
};

const industries: Industry[] = [
  {
    title: 'Construction',
    description:
      'With Dropbox for teams, you can store, access, preview, edit and transfer CAD, BIM, PDF and visual content files from anywhere.',
    image: Construction,
  },
  {
    title: 'Media',
    description:
      'Create a flexible media workspace that connects your teams, content and tools together.',
    image: Media,
  },
  {
    title: 'Technology',
    description:
      'From product ideation to development, streamline technology workflows so you can focus on turning great ideas into products people love.',
    image: Tech,
  },
  {
    title: 'Professional services',
    description:
      'Make clients happier with easy collaboration, boosted productivity and one organised place to get things done.',
    image: professionalServices,
  },
  {
    title: 'Manufacturing',
    description:
      'Design and engineering teams collaborate easily, managing complex reviews and sharing large files seamlessly.',
    image: Manufacturing,
  },
  {
    title: 'Education',
    description:
      'Power student learning, faculty research and staff operations on Dropbox Education’s secure cloud collaboration platform.',
    image: Education,
  },
];

const containerVariant: Variants = {
  outOfView: {},
  inView: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariant: Variants = {
  outOfView: { opacity: 0, scale: 0.9, filter: 'blur(10px)' },
  inView: {
    opacity: 1,
    scale: 1,
    filter: 'blur(0px)',
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
};

function IndustriesSection() {
  return (
    <section className="py-10">
      {/* Container */}
      <div className="mx-auto max-w-[1344px] px-10">
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Dropbox empowers across industries
        </h2>

        {/* Grid */}
        <motion.div
          className="grid auto-rows-fr grid-cols-1 gap-4 lg:grid-cols-2"
          variants={containerVariant}
          initial="outOfView"
          whileInView="inView"
          viewport={{ once: true, amount: 0.25 }}
        >
          {industries.map((item, i) => (
            <motion.div
              key={i}
              className="bg-faint-bg group grid grid-cols-1 overflow-hidden rounded-2xl hover:cursor-pointer md:grid-cols-[190px_1fr]"
              variants={itemVariant}
            >
              {/* LEFT: Background image */}
              <div
                className="hidden h-full w-full bg-cover bg-center md:block"
                style={{ backgroundImage: `url(${item.image})` }}
              />

              {/* RIGHT: Content */}
              <div className="flex flex-col justify-between p-6">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold">{item.title}</h3>
                  <p className="text-faint-text">{item.description}</p>
                </div>

                <button className="mt-4 flex w-fit gap-1 text-sm font-medium">
                  <span className="border-standard-text border-b">
                    Learn more
                  </span>
                  <ArrowRight
                    className="transition-transform duration-300 group-hover:translate-x-1"
                    size={18}
                  />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export default IndustriesSection;
