import { motion, type Variants } from 'motion/react';
interface ProductItem {
  title: string;
  desc: string;
  icon: string;
}

interface ProductsMenuProps {
  containerVariant: Variants;
  itemVariant: Variants;
}

const items: ProductItem[] = [
  {
    title: 'Dropbox',
    desc: 'Store, share and access files across devices',
    icon: 'Dropbox-logo-nav.svg',
  },
  {
    title: 'Dash',
    desc: 'Find, organise and protect company content',
    icon: 'dash-logo-nav.svg',
  },
  {
    title: 'Replay',
    desc: 'Review and approve videos faster',
    icon: 'replay-logo-nav.svg',
  },
  {
    title: 'DocSend',
    desc: 'Send documents securely and track activity',
    icon: 'DocSend-logo-nav.svg',
  },
  {
    title: 'Sign',
    desc: 'Request and add signatures to documents',
    icon: 'dropbox-sign-logo.svg',
  },
  {
    title: 'Early access',
    desc: 'Preview new product experiences',
    icon: 'arrow_right.svg',
  },
  {
    title: 'Reclaim.ai',
    desc: 'Schedule habits, tasks and meetings with AI',
    icon: 'reclaim-logo-nav.svg',
  },
];

export default function ProductsMenu({
  containerVariant,
  itemVariant,
}: ProductsMenuProps) {
  return (
    <motion.div
      className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-[repeat(2,280px)]"
      variants={containerVariant}
      initial="closed"
      animate="open"
    >
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="group xl:hover:bg-faint-bg flex cursor-pointer items-start gap-3 rounded-xl p-4 hover:bg-stone-200"
          variants={itemVariant}
          layout
        >
          {/* Icon */}
          <div className="flex h-10 w-10 items-center justify-center rounded-lg">
            <img src={item.icon} alt="" className="h-[32px] w-[32px]" />
          </div>

          {/* Text */}
          <div>
            <h4 className="text-standard-text group-hover:text-attention-text text-lg font-medium transition">
              {item.title}
            </h4>
            <p className="text-faint-text text-sm">{item.desc}</p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
