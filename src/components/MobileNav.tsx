
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Home, BookOpen, Heart, FileText, Mail } from 'lucide-react';

interface MobileNavProps {
  scrollToContact: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Menu Button */}
      <button
        onClick={toggleMenu}
        className="p-2 text-white hover:text-blue-400 transition-colors"
        aria-label="Toggle menu"
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

      {/* Mobile Menu Overlay - positioned on the right */}
      {isOpen && (
        <div className="fixed inset-0 z-50 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
          <div className="flex flex-col h-full">
            {/* Header */}
            <div className="flex justify-between items-center p-4 px-6 border-b border-slate-700">
              <Link to="/" onClick={closeMenu} className="flex items-center space-x-3">
                <img 
                  src="/logo_FP.webp" 
                  alt="FP Logo" 
                  className="w-8 h-8"
                />
                <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  Francesco Pezone, PhD
                </span>
              </Link>
              <button
                onClick={closeMenu}
                className="p-2 text-white hover:text-blue-400 transition-colors"
              >
                <X size={24} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 px-6 py-8 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900">
            <div className="space-y-6 text-right">
                <Link 
                to="/" 
                onClick={closeMenu}
                className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end"
                >
                <span>Home</span>
                <Home size={20} />
                </Link>
                <Link 
                to="/portfolio" 
                onClick={closeMenu}
                className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end"
                >
                <span>Portfolio</span>
                <BookOpen size={20} />
                </Link>
                <Link 
                to="/passions" 
                onClick={closeMenu}
                className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end"
                >
                <span>Passions</span>
                <Heart size={20} />
                </Link>
                <button 
                onClick={() => {
                    scrollToContact();
                    closeMenu();
                }}
                className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end ml-auto"
                >
                <span>Contact</span>
                <Mail size={20} />
                </button>
                <Link 
                to="/cv" 
                onClick={closeMenu}
                className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end"
                >
                <span>CV</span>
                <FileText size={20} />
                </Link>
            </div>
            </nav>

          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;