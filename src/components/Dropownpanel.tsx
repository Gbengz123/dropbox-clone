import type { ButtonRect } from './layout/Navbar';

interface MenuItem {
  label: string;
  desc: string;
}

interface MenuData {
  [key: string]: MenuItem[];
}

const menuData: MenuData = {
  Products: [
    { label: 'Dropbox Plus', desc: 'More space for personal use' },
    { label: 'Dropbox Business', desc: 'For teams and companies' },
    { label: 'Dropbox Sign', desc: 'eSignatures made easy' },
    { label: 'Dropbox Paper', desc: 'Collaborative workspace' },
    { label: 'Dropbox Dash', desc: 'AI-powered search' },
  ],
  Solutions: [
    { label: 'Remote work', desc: 'Work from anywhere' },
    { label: 'Cloud storage', desc: 'Secure file storage' },
    { label: 'Document management', desc: 'Organize your files' },
    { label: 'Video collaboration', desc: 'Review and approve' },
    { label: 'Workflow automation', desc: 'Automate repetitive tasks' },
  ],
  'Get app': [
    { label: 'Desktop app', desc: 'macOS & Windows' },
    { label: 'Mobile app', desc: 'iOS & Android' },
    { label: 'Browser extension', desc: 'Chrome, Firefox & Edge' },
  ],
};

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
  console.log(menuData[label]);
  return (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 top-18 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity duration-200 ${isOpen ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'} `}
      />

      {/* Full-width panel */}
      <div
        className={`absolute right-0 left-0 z-50 w-screen bg-white shadow-lg transition-all duration-500 ease-out ${isOpen ? 'pointer-events-auto translate-y-0 opacity-100' : 'pointer-events-none -translate-y-8 opacity-0'} `}
        style={{ top: 'calc(100% - 1px)' }}
      >
        {/* Inner content — offset to align under the anchor button */}
        <div className="px-2" style={{ paddingLeft: anchorRect?.left ?? 0 }}>
          <div
            className="flex w-56 flex-col py-4"
            onMouseEnter={(e) => {
              e.stopPropagation();
              clearTimeout(timeoutRef.current!);
            }}
            onMouseLeave={(e) => {
              e.stopPropagation();
              setOpenMenu(null);
            }}
          >
            {menuData[label].map((item) => (
              <div
                key={item.label}
                className="cursor-pointer rounded-lg px-3.5 py-2.5 transition-colors duration-100 hover:bg-gray-50"
              >
                <p className="text-sm font-semibold text-gray-900">
                  {item.label}
                </p>
                <p className="mt-0.5 text-xs text-gray-500">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Dropdownpanel;
