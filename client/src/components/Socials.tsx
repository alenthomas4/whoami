interface SocialLinkProps {
  name: string;
  url: string;
}

const SocialLink = ({ name, url }: SocialLinkProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center justify-between p-6 bg-gray-200 rounded-2xl hover:bg-gray-300 transition-all duration-200"
    >
      <div className="flex items-center">
        <span className="text-xl font-medium text-gray-900">{name}</span>
      </div>
      <span className="text-blue-600 font-medium">Visit →</span>
    </a>
  );
};

const Socials = () => {
  return (
    <section id="socials" className="min-h-screen flex items-center justify-center p-8">
      <div className="max-w-4xl w-full bg-white rounded-3xl p-12 shadow-xl">
        <div className="mb-8">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Socials</h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-4">
            Feel free to check out what I'm up to on social media! I post about my projects,
            share interesting articles, and connect with fellow tech enthusiasts.
          </p>
          <p className="text-gray-700 text-lg leading-relaxed">
            For professional inquiries, <span className="font-semibold">LinkedIn messages and email</span> work best.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <SocialLink
            name="GitHub"
            url="https://github.com/yourusername"
          />
          <SocialLink
            name="LinkedIn"
            url="https://linkedin.com/in/yourusername"
          />
        </div>

        <a
          href="mailto:your.email@example.com"
          className="inline-block bg-red-600 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-red-700 transition-colors duration-200"
        >
          Email →
        </a>
      </div>
    </section>
  );
};

export default Socials;