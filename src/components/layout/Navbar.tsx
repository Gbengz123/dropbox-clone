import { useRef, useState } from 'react';
import dropbox from '../../assets/dropbox.svg';
import { ChevronDown, Globe, Menu, X } from 'lucide-react';
import Button from '../Button';
import Dropownpanel from '../Dropownpanel';
import { productItems, SubMenu } from './MobileNav';

// Track button position for alignment
export interface ButtonRect {
  left: number;
  width: number;
}

const LEFT_NAV_LINKS = [
  'Products',
  'Solutions',
  'Enterprise',
  'Pricing',
] as const;
const RIGHT_NAV_LINKS = ['Contact sales', 'Get app'] as const;
const DROPDOWN_KEYS = ['Products', 'Solutions', 'Get app'] as const;
type ActiveKey = (typeof DROPDOWN_KEYS)[number];

const isDropdown = (label: string): label is (typeof DROPDOWN_KEYS)[number] => {
  return (DROPDOWN_KEYS as readonly string[]).includes(label);
};

function MobileMenu() {
  const [active, setActive] = useState<ActiveKey | null>(null);
  const ALL_KEYS = [...LEFT_NAV_LINKS, ...RIGHT_NAV_LINKS] as const;

  const toggle = (key: ActiveKey | null) =>
    setActive((prev) => (prev === key ? null : key));

  return (
    <div
      className={`fixed inset-0 top-10.25 z-50 bg-white md:top-18 xl:hidden`}
    >
      <nav className="flex h-full flex-col overflow-y-auto pt-2">
        {ALL_KEYS.map((label) => {
          const hasDropdown = isDropdown(label);
          return (
            <div key={label}>
              <button
                onClick={() => hasDropdown && toggle(label)}
                className={`flex w-full items-center gap-1 px-10 py-4 hover:cursor-pointer hover:text-[#0061FF] ${active === label ? 'text-[#0061FF]' : 'text-gray-900'}`}
              >
                <span
                  className={`text-[1.05rem] font-semibold transition-colors duration-200`}
                >
                  {label}
                </span>
                {hasDropdown && (
                  <span className={`transition-colors duration-200`}>
                    <ChevronDown
                      width={14}
                      height={14}
                      className={`transition-transform duration-300 ${active === label ? 'rotate-180' : 'rotate-0'}`}
                    />
                  </span>
                )}
              </button>
              <SubMenu items={productItems} open={active === label} />
            </div>
          );
        })}

        <div className="flex flex-1 flex-col justify-end px-10 pb-7 md:hidden">
          <Button className="p-3 font-normal">Get Started</Button>
        </div>
      </nav>
    </div>
  );
}

function Navbar() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const navRef = useRef<HTMLElement>(null);
  const [anchorRect, setAnchorRect] = useState<ButtonRect | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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

  const navBtnClass =
    'hover:text-attention-text flex hover:cursor-pointer items-center gap-1 px-3 py-2 text-[0.9rem] shrink-0 h-full ';

  return (
    <div className="relative h-full">
      <nav
        ref={navRef}
        className="bg-standard-bg text-standard-text sticky top-0 z-60 flex min-w-screen items-center justify-between shadow md:h-18 md:px-7"
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
            <span className="xs:block hidden text-[1.5rem] font-bold tracking-tight">
              Dropbox
            </span>
          </a>

          {/* Nav links */}
          {LEFT_NAV_LINKS.map((label) => {
            const hasDropdown = isDropdown(label);
            const isOpen = openMenu === label;
            return (
              <div key={label} className="relative hidden h-full xl:block">
                <button
                  onClick={() => hasDropdown && toggle(label)}
                  className={
                    navBtnClass +
                    `font-semibold ${isOpen ? 'text-attention-text' : 'text-standard-text'}`
                  }
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
          <button className="xs:block mr-5 hidden hover:cursor-pointer">
            <Globe width={17} height={17} />
          </button>

          {RIGHT_NAV_LINKS.map((label) => {
            const hasDropdown = isDropdown(label);
            const isOpen = openMenu === label;
            return (
              <div key={label} className="relative hidden h-full xl:block">
                <button
                  onClick={() => hasDropdown && toggle(label)}
                  className={
                    navBtnClass +
                    `${isOpen ? 'text-attention-text' : 'text-standard-text'}`
                  }
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

          <button className={navBtnClass}>Sign up</button>

          <button className={navBtnClass}>Log in</button>

          <Button className={'mx-1 hidden md:block'}>Get started</Button>

          <button
            onClick={() => {
              setMobileMenuOpen((v) => !v);
            }}
            className="block px-3 text-gray-700 hover:cursor-pointer xl:hidden"
            aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileMenuOpen ? (
              <X width={24} height={24} />
            ) : (
              <Menu width={24} height={24} />
            )}
          </button>
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

      {mobileMenuOpen && <MobileMenu />}
    </div>
  );
}

export default Navbar;
