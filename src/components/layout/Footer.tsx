const footerData = [
  {
    title: 'Dropbox',
    links: [
      'Desktop app',
      'Mobile app',
      'Integrations',
      'Features',
      'Solutions',
      'Security',
      'Early access',
      'Templates',
      'Free tools',
    ],
  },
  {
    title: 'Products',
    links: [
      'Plus',
      'Professional',
      'Business',
      'Enterprise',
      'Dash',
      'DocSend',
      'Dropbox Sign',
      'Reclaim.ai',
      'Plans',
      'Product updates',
    ],
  },
  {
    title: 'Features',
    links: [
      'Send large files',
      'Send long videos',
      'Cloud photo storage',
      'Secure file transfer',
      'Cloud backup',
      'Edit PDFs',
      'Electronic signatures',
      'Convert to PDF',
    ],
  },
  {
    title: 'Support',
    links: [
      'Help centre',
      'Contact us',
      'Privacy & terms',
      'Cookie policy',
      'Cookies & CCPA preferences',
      'AI principles',
      'Sitemap',
      'Learning resources',
    ],
  },
  {
    title: 'Resources',
    links: [
      'Blog',
      'Events',
      'Customer stories',
      'Resources library',
      'Developers',
      'Community forums',
      'Referrals',
      'Reseller partners',
      'Integration partners',
      'Find a partner',
    ],
  },
  {
    title: 'Company',
    links: [
      'About us',
      'Modern Slavery Statement',
      'Jobs',
      'Investor relations',
      'Corporate responsibility',
    ],
  },
];

function Footer() {
  return (
    <footer className="text-inverse-standard-text bg-black">
      <div className="mx-auto max-w-[1344px] px-6 py-16">
        <div className="grid grid-cols-2 gap-10 md:grid-cols-3 xl:grid-cols-6">
          {footerData.map((section) => (
            <div key={section.title} className="flex flex-col gap-3">
              <h4 className="text-xl font-semibold">{section.title}</h4>

              <ul className="space-y-2 text-sm font-light">
                {section.links.map((link) => (
                  <li
                    key={link}
                    className="cursor-pointer transition hover:underline"
                  >
                    {link}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* BOTTOM ROW */}
        <div className="mt-12 flex flex-col gap-6 pt-6">
          {/* SOCIALS */}
          <div className="text-inverse-faint-text flex w-[140px] items-center gap-4 border-b border-white/30 pb-9">
            <span className="cursor-pointer hover:text-white">X</span>
            <span className="cursor-pointer hover:text-white">F</span>
            <span className="cursor-pointer hover:text-white">YT</span>
          </div>

          <div className="text-inverse-faint-text text-sm">
            dropbox clone made by Gbengz123 | &copy; {new Date().getFullYear()}{' '}
            Dropbox, Inc.
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
