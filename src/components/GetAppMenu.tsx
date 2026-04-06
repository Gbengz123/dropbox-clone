import type { Variants } from 'motion';
import { motion } from 'motion/react';
interface GetAppMenuProps {
  containerVariant: Variants;
  itemVariant: Variants;
}

export default function GetAppMenu({
  containerVariant,
  itemVariant,
}: GetAppMenuProps) {
  const items: string[] = ['Desktop app', 'Mobile app'];
  return (
    <motion.ul
      className="grid grid-cols-1 xl:grid-cols-[250px]"
      variants={containerVariant}
      initial="closed"
      animate="open"
      layout
    >
      {items.map((item, i) => (
        <motion.li
          key={i}
          className="text-standard-text xl:hover:bg-faint-bg text-md cursor-pointer rounded-lg px-5 py-2 hover:bg-stone-200"
          variants={itemVariant}
        >
          {item}
        </motion.li>
      ))}
    </motion.ul>
  );
}
