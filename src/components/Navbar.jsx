import { useState } from 'react';
import { Link } from 'react-scroll';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-lg z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo/Name */}
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
              Moeen Ali
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-center space-x-8">
              <Link
                to="HeroPage"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-300 relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="about-page"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-300 relative group"
              >
                About
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="Skill-page"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-300 relative group"
              >
                Skills
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="Projects"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-300 relative group"
              >
                Projects
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="text-gray-600 hover:text-pink-500 cursor-pointer transition-colors duration-300 relative group"
              >
                Contact
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-500 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-pink-500 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {!isOpen ? (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              ) : (
                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          <Link
              to="HeroPage"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 cursor-pointer transition-all duration-300 rounded-md relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-pink-50 transition-all duration-300 group-hover:w-full rounded-md -z-0"></span>
            </Link>
            <Link
              to="about-page"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 cursor-pointer transition-all duration-300 rounded-md relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">About</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-pink-50 transition-all duration-300 group-hover:w-full rounded-md -z-0"></span>
            </Link>
            
            <Link
              to="Skill-page"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 cursor-pointer transition-all duration-300 rounded-md relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Skills</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-pink-50 transition-all duration-300 group-hover:w-full rounded-md -z-0"></span>
            </Link>
            <Link
              to="Projects"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 cursor-pointer transition-all duration-300 rounded-md relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Projects</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-pink-50 transition-all duration-300 group-hover:w-full rounded-md -z-0"></span>
            </Link>
          
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="block px-3 py-2 text-gray-600 hover:text-pink-500 hover:bg-pink-50 cursor-pointer transition-all duration-300 rounded-md relative group"
              onClick={() => setIsOpen(false)}
            >
              <span className="relative z-10">Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-full bg-pink-50 transition-all duration-300 group-hover:w-full rounded-md -z-0"></span>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
