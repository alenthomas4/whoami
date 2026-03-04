interface ContactLinkProps {
  icon: string;
  platform: string;
  description: string;
  url: string;
}

const ContactLink = ({ icon, platform, description, url }: ContactLinkProps) => {
  const isImageIcon = icon.includes('/') || icon.includes('.');
  
  return (
    <a 
      href={url} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-start gap-4 p-6 bg-white/0 backdrop-blur-sm rounded-2xl hover:bg-white/20 transition-all duration-300 group"
    >
      {/* Icon */}
      <div className="w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 overflow-hidden">
        {isImageIcon ? (
          <img src={icon} alt={platform} className="w-full h-full object-contain" />
        ) : (
          <span className="text-3xl">{icon}</span>
        )}
      </div>

      {/* Text Content */}
      <div className="flex-1">
        <h3 className="text-xl font-semibold text-white mb-1 group-hover:underline">
          {platform}
        </h3>
        <p className="text-white/80 text-sm">
          {description}
        </p>
      </div>
    </a>
  );
};

const Contacts = () => {
  return (
    <div className="w-full max-w-[1400px] mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-white mb-4">Get in Touch</h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
      </div>
    </div>
  );
};

export default Contacts;
