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
    <div className="relative max-w-[1200px] mx-auto bg-white rounded-2xl sm:rounded-3xl p-5 sm:p-6 lg:p-8 xl:p-10 text-gray-900 overflow-hidden shadow-xl transition-transform duration-300 ease-in-out hover:scale-[1.01] cursor-pointer">
      {/* Stars Badge */}
      {stars && (
        <div className="absolute top-4 right-4 sm:top-6 sm:right-6">
          <span className="bg-gray-100 text-gray-700 px-2 sm:px-3 py-1 rounded-md text-xs sm:text-sm">
            stars <span className="ml-1 text-gray-900 font-semibold">{stars}</span>
          </span>
        </div>
      )}

      <div className="flex flex-col md:flex-row items-start gap-5 sm:gap-6 lg:gap-8">
        {/* Icon */}
        <div className="flex-shrink-0">
          <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 xl:w-40 xl:h-40 rounded-2xl bg-gray-50 overflow-hidden flex items-center justify-center">
            {icon ? (
              <img src={icon} alt={title} className="w-full h-full object-contain p-2" />
            ) : (
              <div className="w-full h-full bg-purple-600 flex items-center justify-center">
                <span className="text-white font-bold text-xl sm:text-2xl xl:text-3xl tracking-wide">OMG</span>
              </div>
            )}
          </div>
        </div>

        {/* Content */}
        <div className="flex-1 pt-0 md:pt-1 lg:pt-2">
          <h3 className="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold mb-3 sm:mb-4">{title}</h3>
          <p className="text-gray-600 text-sm sm:text-base mb-5 sm:mb-6 leading-relaxed">{description}</p>

          {/* Links */}
          <div className="flex flex-wrap gap-4 sm:gap-6 mb-5 sm:mb-6">
            {links.learnMore && (
              <a
                href={links.learnMore}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>→</span>
                <span className="text-base sm:text-lg">Learn more</span>
              </a>
            )}
            {links.useProject && (
              <a
                href={links.useProject}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <span>↗</span>
                <span className="text-base sm:text-lg">Use {title}</span>
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                className="flex items-center gap-2 text-gray-900 hover:text-gray-600 transition-colors"
              >
                <img src="/git.png" alt="GitHub" className="w-5 h-5 object-contain" />
                <span className="text-base sm:text-lg">GitHub</span>
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
        <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6">
          <span className="text-gray-400 text-xs sm:text-sm font-bold tracking-wider">
            FEATURED PROJECT
          </span>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
