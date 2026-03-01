interface ProjectCardProps {
  title: string;
  description: string;
  icon: string;
  stars?: number;
  links: {
    learnMore?: string;
    useProject?: string;
    github?: string;
  };
  article?: string;
  featured?: boolean;
}

const ProjectCard = ({
  title,
  description,
  icon,
  stars,
  links,
  article,
  featured,
}: ProjectCardProps) => {
  return (
    <div className="relative bg-white/100 rounded-3xl p-16 text-gray-900 overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:scale-105 cursor-pointer">
      {/* Stars Badge */}
      {stars && (
        <div className="absolute top-6 right-6">
          <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-md text-sm">
            stars <span className="ml-1 text-gray-900 font-semibold">{stars}</span>
          </span>
        </div>
      )}

      <div className="flex items-start gap-12">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48">
            <img src={icon} alt={title} className="w-full h-full object-contain" />
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-4">
          <h3 className="text-5xl font-bold mb-4">{title}</h3>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed">{description}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-6 mb-6">
            {links.learnMore && (
              <a
                href={links.learnMore}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>→</span>
                <span className="text-lg">Learn more</span>
              </a>
            )}
            {links.useProject && (
              <a
                href={links.useProject}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>↗</span>
                <span className="text-lg">Use {title}</span>
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>⚙</span>
                <span className="text-lg">GitHub</span>
              </a>
            )}
          </div>

          {/* Article Link */}
          {article && (
            <a
              href={article}
              className="flex items-center gap-2 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <span>📄</span>
              <span>Read the feedback on this project!</span>
            </a>
          )}
        </div>
      </div>

      {/* Featured Badge */}
      {featured && (
        <div className="absolute bottom-6 right-6">
          <span className="text-gray-400 text-sm font-bold tracking-wider">
            FEATURED PROJECT
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
