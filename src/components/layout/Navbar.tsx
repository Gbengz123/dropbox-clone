import { useRef, useState } from 'react';
import dropbox from '../../assets/dropbox.svg';
import { ChevronDown, Globe } from 'lucide-react';
import Button from '../Button';
import Dropownpanel from '../Dropownpanel';

// Track button position for alignment
export interface ButtonRect {
  left: number;
  width: number;
}

const NAV_LINKS = ['Products', 'Solutions', 'Enterprise', 'Pricing'] as const;
const DROPDOWN_KEYS = ['Products', 'Solutions', 'Get app'] as const;

const navBtnClass =
  'text-standard-text hover:text-attention-text flex cursor-pointer items-center gap-1 px-3 py-2 text-[0.9rem] shrink-0 h-full ';

function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [anchorRect, setAnchorRect] = useState<ButtonRect | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const isDropdown = (
    label: string,
  ): label is (typeof DROPDOWN_KEYS)[number] => {
    return (DROPDOWN_KEYS as readonly string[]).includes(label);
  };

  const toggle = (label: string) =>
    setOpenMenu((prev) => (prev === label ? null : label));

  // Helper to capture button position relative to the nav
  const handleEnter = (
    label: string,
    e: React.MouseEvent<HTMLButtonElement | HTMLDivElement>,
  ) => {
    if (!isDropdown(label)) return;
    clearTimeout(timeoutRef.current!);
    const btnRect = e.currentTarget.getBoundingClientRect();
    const navRect = navRef.current?.getBoundingClientRect();
    setAnchorRect({
      left: btnRect.left - (navRect?.left ?? 0),
      width: btnRect.width,
    });
    setOpenMenu(label);
  };

  const handleLeave = () => {
    // Delay closing to allow moving cursor to dropdown
    timeoutRef.current = setTimeout(() => setOpenMenu(null), 120);
  };

  return (
    <div className="relative h-full">
      <nav
        ref={navRef}
        className="bg-standard-bg text-standard-text sticky top-0 z-60 flex h-18 min-w-screen items-center justify-between px-7 shadow"
      >
        {/* Left */}
        <div className="flex h-full items-center gap-0.5">
          <a
            href="#"
            className="mr-6 flex items-center gap-2.5 no-underline hover:cursor-pointer"
          >
            <span className="bg-accent inline-block shrink-0 px-1.5 py-2">
              <img src={dropbox} alt="" className="h-auto w-auto" />
            </span>
            <span className="text-[1.5rem] font-bold tracking-tight">
              Dropbox
            </span>
          </a>

          {/* Nav links */}
          {NAV_LINKS.map((label) => {
            const hasDropdown = isDropdown(label);
            const isOpen = openMenu === label;
            return (
              <div key={label} className="relative h-full">
                <button
                  onClick={() => hasDropdown && toggle(label)}
                  className={navBtnClass + 'font-semibold'}
                  onMouseOver={(e) => handleEnter(label, e)}
                  onMouseLeave={() => handleLeave()}
                >
                  {label}
                  {hasDropdown && (
                    <span
                      className={`inline-flex transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : 'rotate-0'
                      }`}
                    >
                      <ChevronDown width={14} height={14} />
                    </span>
                  )}
                </button>
              </div>
            );
          })}
        </div>

        {/* Right */}
        <div className="flex h-full items-center gap-0.5">
          <button className="mr-5 hover:cursor-pointer">
            <Globe width={17} height={17} />
          </button>
          <button className={navBtnClass}>Contact sales</button>
          <div className="relative h-full">
            <button
              onClick={() => toggle('Get app')}
              className={navBtnClass}
              onMouseEnter={(e) => handleEnter('Get app', e)}
              onMouseLeave={() => handleLeave()}
            >
              Get app
              <span
                className={`inline-flex transition-transform duration-200 ${
                  openMenu === 'Get app' ? 'rotate-180' : 'rotate-0'
                }`}
              >
                <ChevronDown width={14} height={14} />
              </span>
            </button>
          </div>

          <button className={navBtnClass}>Sign up</button>

          <button className={navBtnClass}>Log in</button>

          <Button className={'ml-1'}>Get started</Button>
        </div>
      </nav>

      {openMenu && isDropdown(openMenu) && (
        <Dropownpanel
          label={openMenu}
          timeoutRef={timeoutRef}
          isOpen={true}
          anchorRect={anchorRect}
          setOpenMenu={setOpenMenu}
        />
      )}
    </div>
  );
}

export default Navbar;
