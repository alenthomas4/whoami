interface JobCardProps {
  company: string;
  logo: string;
  title: string;
  location: string;
  dateRange: string;
  duration: string;
  type: string;
  tags: string[];
  description: string[];
}

const JobCard = ({
  company,
  logo,
  title,
  location,
  dateRange,
  duration,
  type,
  tags,
  description,
}: JobCardProps) => {
  const isImageLogo = logo.includes('/') || logo.includes('.');

  return (
    <div className="mb-8 last:mb-0">
      <div className="flex items-start gap-4">
        {/* Logo */}
        <div className="w-14 h-14 rounded-xl bg-gray-800 flex items-center justify-center flex-shrink-0 overflow-hidden relative z-10">
          {isImageLogo ? (
            <img src={logo} alt={company} className="w-full h-full object-contain p-1 bg-white" />
          ) : (
            <span className="text-white font-bold text-lg">{logo}</span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1">
          <div className="flex items-baseline justify-between mb-1">
            <h3 className="text-lg font-semibold text-gray-900">{company}</h3>
            <span className="text-sm text-gray-500">
              {dateRange} <span className="text-gray-400">({duration})</span>
            </span>
          </div>

          <p className="text-sm font-medium text-gray-700 mb-3">
            {title} <span className="font-normal text-gray-600">{type} - {location}</span>
          </p>

          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-3">
            {tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 text-xs font-medium text-gray-700 bg-white border border-gray-300 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Description */}
          <ul className="space-y-1 text-sm text-gray-600">
            {description.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default JobCard;
