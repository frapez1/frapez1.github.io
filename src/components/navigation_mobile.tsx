import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { getNavItems } from './navigation';

interface MobileNavProps {
  scrollToContact: () => void;
}

const MobileNav: React.FC<MobileNavProps> = ({ scrollToContact }) => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navItems = getNavItems(scrollToContact);

  const isActive = (path: string) => location.pathname === path;

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

      {/* Mobile Menu Overlay */}
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
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const active = isActive(item.path);
                  
                  if (item.type === 'button') {
                    return (
                      <button 
                        key={item.path}
                        onClick={() => {
                          item.action?.();
                          closeMenu();
                        }}
                        className="flex items-center space-x-4 text-lg text-white hover:text-blue-400 transition-colors justify-end ml-auto"
                      >
                        <span>{item.label}</span>
                        <Icon size={20} />
                      </button>
                    );
                  }

                  return (
                    <Link 
                      key={item.path}
                      to={item.path} 
                      onClick={closeMenu}
                      className={`flex items-center space-x-4 text-lg transition-colors justify-end ${
                        active 
                          ? 'text-blue-400 font-semibold' 
                          : 'text-white hover:text-blue-400'
                      }`}
                    >
                      <span>{item.label}</span>
                      <Icon size={20} />
                    </Link>
                  );
                })}
              </div>
            </nav>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav;