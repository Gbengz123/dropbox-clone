interface ProductItem {
  title: string;
  desc: string;
  icon: string;
}

const items: ProductItem[] = [
  {
    title: 'Dropbox',
    desc: 'Store, share and access files across devices',
    icon: '/icons/dropbox.svg',
  },
  {
    title: 'Dash',
    desc: 'Find, organise and protect company content',
    icon: '/icons/dash.svg',
  },
  {
    title: 'Replay',
    desc: 'Review and approve videos faster',
    icon: '/icons/replay.svg',
  },
  {
    title: 'DocSend',
    desc: 'Send documents securely and track activity',
    icon: '/icons/docsend.svg',
  },
  {
    title: 'Sign',
    desc: 'Request and add signatures to documents',
    icon: '/icons/sign.svg',
  },
  {
    title: 'Early access',
    desc: 'Preview new product experiences',
    icon: '/icons/arrow.svg',
  },
  {
    title: 'Reclaim.ai',
    desc: 'Schedule habits, tasks and meetings with AI',
    icon: '/icons/reclaim.svg',
  },
];

export default function ProductsMenu() {
  return (
    <div className="grid grid-cols-1 gap-2 md:grid-cols-2 xl:grid-cols-[repeat(2,280px)]">
      {items.map((item, index) => (
        <div
          key={index}
          className="group xl:hover:bg-faint-bg flex cursor-pointer items-start gap-3 rounded-xl p-4 hover:bg-stone-200"
        >
          {/* Icon */}
          <div className="bg-standard-bg flex h-10 w-10 items-center justify-center rounded-lg">
            <img src={item.icon} alt="" className="h-5 w-5" />
          </div>

          {/* Text */}
          <div>
            <h4 className="text-standard-text group-hover:text-attention-text text-lg font-medium transition">
              {item.title}
            </h4>
            <p className="text-faint-text text-sm">{item.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
