interface SocialIconsProps {
  email?: string;
  linkedInUrl?: string;
  facebookUrl?: string;
}

const SocialIcons = ({ 
  email = 'admin@firstfridayclubreading.com',
  linkedInUrl = 'https://linkedin.com',
  facebookUrl = 'https://facebook.com'
}: SocialIconsProps) => {
  return (
    <div className="flex justify-center gap-6">
      <a 
        href={linkedInUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="LinkedIn"
      >
        <span className="text-white font-bold text-lg">in</span>
      </a>
      <a 
        href={facebookUrl} 
        target="_blank" 
        rel="noopener noreferrer"
        className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
        aria-label="Facebook"
      >
        <span className="text-white font-bold text-lg">f</span>
      </a>
      <a 
        href={`mailto:${email}`}
        className="w-12 h-12 bg-black rounded-full flex items-center justify-center hover:bg-gray-800 transition-colors"
        aria-label="Email"
      >
        <span className="text-white text-xl">✉</span>
      </a>
    </div>
  );
};

export default SocialIcons;
