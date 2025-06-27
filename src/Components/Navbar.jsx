import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 80) {
        setShowNavbar(false); // scrolling down
      } else {
        setShowNavbar(true); // scrolling up
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 bg-[#0a0d23] bg-opacity-95 backdrop-blur-md shadow-md border-b border-[#1a1443] transition-transform duration-300 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="flex items-center justify-between py-5 px-6 max-w-screen-xl mx-auto">
        {/* Brand Name */}
        <div className="flex flex-shrink-0 items-center">
          <a href="/" className="text-[#16f2b3] text-3xl font-bold">
            Santiago Ornelas
          </a>
        </div>

        {/* Nav Links */}
        <ul className="mt-4 flex h-screen max-h-0 w-full flex-col items-start text-sm opacity-0 md:mt-0 md:h-auto md:max-h-screen md:w-auto md:flex-row md:space-x-1 md:border-0 md:opacity-100">
          {[
            { id: 'about', label: 'ABOUT' },
            { id: 'experience', label: 'EXPERIENCE' },
            { id: 'skills', label: 'SKILLS' },
            { id: 'education', label: 'EDUCATION' },
            { id: 'projects', label: 'PROJECTS' },
            { id: 'behind-the-resume', label: 'BEHIND THE RESUME' }
          ].map((item) => (
            <li key={item.id}>
              <a className="block px-4 py-2 no-underline outline-none hover:no-underline" href={`#${item.id}`}>
                <div className="text-sm text-white transition-colors duration-300 hover:text-pink-600">{item.label}</div>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
