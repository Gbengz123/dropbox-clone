import type { ButtonRect } from './layout/Navbar';
import ProductsMenu from './ProductsMenu';
import SolutionsMenu from './SolutionsMenu';
import GetAppMenu from './GetAppMenu';
import { motion } from 'motion/react';
import { containerVariant, itemVariant } from '../utils/dropMenuAnimations';
interface DropdownPanelProps {
  label: string;
  timeoutRef: React.RefObject<ReturnType<typeof setTimeout> | null>;
  isOpen: boolean;
  anchorRect: ButtonRect | null;
  setOpenMenu: (label: string | null) => void;
}

function Dropdownpanel({
  label,
  timeoutRef,
  isOpen,
  anchorRect,
  setOpenMenu,
}: DropdownPanelProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-18 z-40 bg-black/20 backdrop-blur-[2px] ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'} `}
      />

      {/* Full-width panel */}
      <motion.div
        className={`absolute right-0 left-0 z-50 w-screen overflow-hidden border-t border-gray-200 bg-white shadow-lg ${isOpen ? 'pointer-events-auto' : 'pointer-events-none'}`}
        style={{ top: 'calc(100% - 1px)' }}
        initial={{ height: 0, opacity: 0.5 }}
        animate={{ height: 'auto', opacity: 1 }}
        transition={{ duration: 0.2, ease: 'easeOut' }}
        layout
      >
        {/* Inner content — offset to align under the anchor button */}
        <div className="px-2" style={{ paddingLeft: anchorRect?.left ?? 0 }}>
          <div
            className="py-3"
            onMouseEnter={(e) => {
              e.stopPropagation();
              clearTimeout(timeoutRef.current!);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setOpenMenu(null);
            }}
          >
            {label === 'Products' && (
              <ProductsMenu
                containerVariant={containerVariant}
                itemVariant={itemVariant}
              />
            )}
            {label === 'Solutions' && (
              <SolutionsMenu
                containerVariant={containerVariant}
                itemVariant={itemVariant}
              />
            )}
            {label === 'Get app' && (
              <GetAppMenu
                containerVariant={containerVariant}
                itemVariant={itemVariant}
              />
            )}
          </div>
        </div>
      </motion.div>
    </>
  );
}

export default Dropdownpanel;
