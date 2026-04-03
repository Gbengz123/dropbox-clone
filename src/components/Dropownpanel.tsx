import type { ButtonRect } from './layout/Navbar';
import ProductsMenu from './ProductsMenu';
import SolutionsMenu from './SolutionsMenu';
import GetAppMenu from './GetAppMenu';
interface DropdownPanelProps {
  label: string;
  timeoutRef: React.RefObject<NodeJS.Timeout | null>;
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
        className={`fixed inset-0 top-18 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-200 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} `}
      />

      {/* Full-width panel */}
      <div
        className={`absolute right-0 left-0 z-50 w-screen border-t border-gray-200 bg-white shadow-lg transition-all duration-500 ease-out ${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-8 opacity-0'} `}
        style={{ top: 'calc(100% - 1px)' }}
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
            {label === 'Products' && <ProductsMenu />}
            {label === 'Solutions' && <SolutionsMenu />}
            {label === 'Get app' && <GetAppMenu />}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdownpanel;
