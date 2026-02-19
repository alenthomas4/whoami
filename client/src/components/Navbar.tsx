import { useState } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');

  const navLinks = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'resume', label: 'Resume', href: '#resume' },
    { id: 'faq', label: 'FAQ', href: '#faq' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-4xl px-6 pt-8">
        <div className="bg-white rounded-full shadow-lg px-8 py-4">
          <ul className="flex justify-center items-center gap-8">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={link.href}
                  onClick={() => setActiveLink(link.id)}
                  className={`
                    text-base font-medium transition-all duration-300
                    hover:text-blue-600 hover:scale-110
                    ${
                      activeLink === link.id
                        ? 'text-blue-600 font-bold'
                        : 'text-gray-700'
                    }
                  `}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
