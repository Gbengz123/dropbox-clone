import distraction from '../../assets/Asset-Distraction.webp';
import McLaren from '../../assets/Asset-McLaren.webp';
import sharing from '../../assets/Asset-Sharing.webp';

type Article = {
  label: string;
  title: string;
  description: string;
  image: string;
};

const articles: Article[] = [
  {
    label: 'Article',
    title:
      'Study: Here’s how many hours we lose to distraction—and how to get our focus back',
    description:
      'For our study, Economist Impact included knowledge workers globally and found that, no matter where people work, there’s a significant cost to lost focus around the world.',
    image: distraction,
  },
  {
    label: 'Article',
    title:
      'Dropbox teams up with McLaren Racing as an Official Technology Partner of McLaren Formula 1 Team',
    description:
      'Dropbox brings simplified sharing, collaboration and organisation to the McLaren Formula 1 Team.',
    image: McLaren,
  },
  {
    label: 'Article',
    title: 'The best way to share photos with family and friends',
    description:
      'Don’t lose precious photos. Save them and share them with loved ones—for free. Here’s an easy-to-follow guide to sharing and storing photos with Dropbox.',
    image: sharing,
  },
];

function ResourcesSection() {
  return (
    <section className="bg-faint-bg text-standard-text py-10">
      {/* Container */}
      <div className="mx-auto max-w-[1344px] p-10">
        {/* Heading */}
        <h2 className="mb-12 text-center text-3xl font-semibold">
          Discover, learn, thrive with Dropbox
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-[repeat(auto-fit,minmax(315px,1fr))]">
          {articles.map((article, i) => (
            <div
              key={i}
              className="bg-standard-bg flex flex-col overflow-hidden rounded-2xl hover:cursor-pointer"
            >
              {/* Image (background) */}
              <div
                className="h-[220px] w-full bg-cover bg-center"
                style={{ backgroundImage: `url(${article.image})` }}
              />

              {/* Content */}
              <div className="flex grow flex-col gap-3 p-5">
                <div className="flex flex-col gap-3">
                  <span className="text-faint-text text-sm">
                    {article.label}
                  </span>
                  <h3 className="text-lg leading-snug font-semibold">
                    {article.title}
                  </h3>
                  <p className="text-faint-text pt-2">{article.description}</p>
                </div>

                <button className="border-standard-text mt-auto w-fit border-b text-sm font-medium">
                  Read article
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer link */}
        <div className="mt-10 text-center">
          <button className="text-sm font-medium text-blue-600 hover:cursor-pointer hover:underline">
            View more resources
          </button>
        </div>
      </div>
    </section>
  );
}

export default ResourcesSection;
