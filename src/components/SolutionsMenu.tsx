import { motion } from 'motion/react';
import type { Variants } from 'framer-motion';

interface MenuItems {
  title: string;
  items: string[];
}

interface SolutionsMenuProps {
  containerVariant: Variants;
  itemVariant: Variants;
}

const menu: MenuItems[] = [
  {
    title: 'Teams',
    items: ['Sales', 'Marketing', 'HR', 'IT', 'Creatives'],
  },
  {
    title: 'Use cases',
    items: [
      'Cloud storage',
      'Send large files',
      'Video review',
      'Signing documents',
      'Sharing files',
    ],
  },
  {
    title: 'Industries',
    items: [
      'Construction',
      'Technology',
      'Manufacturing',
      'Media',
      'Professional services',
      'Education',
    ],
  },
];

export default function SolutionsMenu({
  containerVariant,
  itemVariant,
}: SolutionsMenuProps) {
  return (
    <div className="grid grid-cols-1 gap-3 gap-y-7 md:grid-cols-2 xl:grid-cols-[repeat(3,250px)] xl:gap-y-0">
      {menu.map((section, i) => (
        <motion.div
          key={i}
          className="flex flex-col"
          layout
          variants={containerVariant}
          initial="closed"
          animate="open"
        >
          {/* Title */}
          <motion.h4
            className="text-faint-text mb-4 px-5 text-sm font-medium"
            variants={itemVariant}
          >
            {section.title}
          </motion.h4>

          {/* Items */}
          <ul className="flex flex-col gap-1">
            {section.items.map((item, index) => (
              <motion.li
                key={index}
                className="text-standard-text xl:hover:bg-faint-bg text-md cursor-pointer rounded-lg px-5 py-2 hover:bg-stone-200"
                variants={itemVariant}
              >
                {item}
              </motion.li>
            ))}
          </ul>
        </motion.div>
      ))}
    </div>
  );
}
